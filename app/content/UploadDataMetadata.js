
define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/aspect",
        "dojo/dom-construct",
        "dojo/topic",
        "app/context/app-topics",
        "app/common/Templated",
        "dojo/text!./templates/UploadDataMetadata.html",
        "dojo/i18n!app/nls/resources",
        "app/common/ModalDialog",
        "app/context/AppClient",
        "app/gxe/types/mpa/nls/MetadataFormat"],
function (declare, lang, array, aspect, domConstruct, topic, appTopics, Templated,
  template, i18n, ModalDialog, AppClient, MetadataFormat) {

  var oThisClass = declare([Templated], {

    i18n: i18n,
    templateString: template,

    itemId: null,

    _workingMetadata: false,
    _workingData: false,

    // Custom fields
    _inputMetadataFileNode: null,
    _metadataFile: null,
    _metadataFileName: null,
    _metadataText: null,

    _inputDataFileNode: null,
    _dataFile: null,
    _dataFileName: null,
    _dataText: null,
   
    _itemIdData: null,
    _itemIdMetadata: null,

    postCreate: function () {
      this.inherited(arguments);
    },

    _executeMetadataUpload: function (dialog, text, filename) {
      // if (this._workingMetadata) return;
      // this._workingMetadata = true;
      var self = this;
      dialog.okCancelBar.showWorking(i18n.general.uploading, true);
      domConstruct.empty(this.validationErrorsNode);
    
      var client = new AppClient();
      client.uploadNewCardMetadataFile(this._dataFile, this._dataFileName).then(function(response) {
        console.log(response);
		    this._itemIdMetadata = response.item.itemID;
		  }).otherwise(function(error) {
		    console.warn("UploadFile.error", error);
      });
    },

    _executeDataUpload: function (dialog, text, filename) {
      // if (this._workingData) return;
      // this._workingData = true;
      this._userName = AppContext.appUser.getUsername();
      var self = this;
      dialog.okCancelBar.showWorking(i18n.general.uploading, true);
      domConstruct.empty(this.validationErrorsNode);
    
      var client = new AppClient();
      client.uploadFile(this._dataFile, this._dataFileName).then(function(response) {
        console.log(response);
		    this._itemIdData = response.item.itemID;
		  }).otherwise(function(error) {
		    console.warn("UploadFile.error", error);
      });

      setTimeout(function() {
        console.log(this._itemIdData);
        console.log(this._itemIdMetadata);
        client.uploadNewCardData(this._userName, this._itemIdData, this._itemIdMetadata).then(function(response) {
          if (response) {
            console.log(response);
            // wait for real-time update
            setTimeout(function() {
              topic.publish(appTopics.ItemUploaded, {response: response});
              dialog.hide();
            }, 1500);

            // Audit Trail
            /*
            client.createAuditTrail(i18n.auditTrailType.uploadData, "", "", "", this._userName);
            */
          } else {
            self._workingData = false;
            dialog.okCancelBar.enableOk();
            dialog.okCancelBar.showWorking(i18n.general.error, false);
          }
        }).otherwise(function(error) {
          console.warn("UploadData.error", error);
          var msg = i18n.general.error;
          var err = client.checkError(error);
          if (err && err.message) {
            msg = self.checkForErrorTranslation(err.message);
          }
          if (err && err.validationErrors) {
            self._loadValidationErrors(err.validationErrors);
          }
          self._workingData = false;
          dialog.okCancelBar.enableOk();
          dialog.okCancelBar.showError(msg, false);
        });
      }, 800);
    },

    _loadValidationErrors: function (validationErrors) {
      var self = this,
      parentNode = this.validationErrorsNode;
      domConstruct.empty(this.validationErrorsNode);
      array.forEach(validationErrors, function (err) {
        var details = "";
        if (err.details) details = lang.trim(err.details);
        if (typeof details === "string" && details.length > 0) {
          details = self.checkForErrorTranslation(details);
          var nd = domConstruct.create("div", {}, parentNode);
          self.setNodeText(nd, details);
        }
      });
    },

    _loadMetadataFile: function (evt, dialog) {
      this._metadataText = null;
      dialog.okCancelBar.disableOk();
      dialog.okCancelBar.showWorking("");
      domConstruct.empty(this.validationErrorsNode);
      if (!evt || !evt.target || !evt.target.files) return;
      var file = null,
        files = evt.target.files;
      if (files && (files.length === 1)) file = files[0];
      if (!file) return;

      var validFileTypes = new Array(".xlsx", ".xls");
      var fileType = file.name;
      fileType = fileType.substring(fileType.lastIndexOf('.'));
      if (validFileTypes.indexOf(fileType) < 0) {
        alert("Invalid file type selected.");
        this._workingMetadata = false;
        dialog.okCancelBar.disableOk();
        return;
      }

      var sheet1, sheet3, sheet4 = null;
      var validation = [];
      var reader = new FileReader();
      this.own(aspect.after(reader, "onload", lang.hitch(this, function (e) {
        if (e && e.target && e.target.result) {
          var text = e.target.result;
          readXlsxFile(file, { sheet: 1 }).then(function(data) {
            sheet1 = data;
          }, function (error) {
            console.error(error)
            alert("Error while parsing Excel file.")
          })

          readXlsxFile(file, { sheet: 3 }).then(function(data) {
            sheet3 = data;
          }, function (error) {
            console.error(error)
            alert("Error while parsing Excel file.")
          })

          readXlsxFile(file, { sheet: 4 }).then(function(data) {
            sheet4 = data;
          }, function (error) {
            console.error(error)
            alert("Error while parsing Excel file.")
          })

          var self = this;
          var parentNode = this.validationMetadataErrorsNode;
          domConstruct.empty(this.validationMetadataErrorsNode);

          setTimeout(function() {
            for (var i = 0; i < sheet1.length; i++) {
              if (MetadataFormat.sheet1[i] != undefined && MetadataFormat.sheet1[i].length == 3) {
                // Not title
                if (MetadataFormat.sheet1[i][0] == 'M' && sheet1[i][2] == null) {
                  // Mandatory 
                  validation.push("Sheet 1 - Row " + (i + 1) + " " + MetadataFormat.sheet1[i][1] + " must be mandatory.");
                }

                if (MetadataFormat.sheet1[i][1] != sheet1[i][1]) {
                  // Wrong format
                  validation.push("Sheet 1 - Row " + (i + 1) + " must be " + MetadataFormat.sheet1[i][1] + ".");
                }
              }  
            }

            for (var i = 0; i < sheet3.length; i++) {
              if (MetadataFormat.sheet3[i] != undefined && MetadataFormat.sheet3[i].length == 3) {
                if (MetadataFormat.sheet3[i][0] == 'M' && sheet3[i][2] == null) {
                  // Mandatory 
                  validation.push("Sheet 3 - Row " + (i + 1) + " " + MetadataFormat.sheet3[i][1] + " should be mandatory.");
                }

                if (MetadataFormat.sheet3[i][1] != sheet3[i][1]) {
                  // Wrong format
                  validation.push("Sheet 3 - Row " + (i + 1) + " must be " + MetadataFormat.sheet3[i][1] + ".");
                }
              }         
            }

            for (var i = 0; i < sheet4.length; i++) {
              if (MetadataFormat.sheet4[i] != undefined && MetadataFormat.sheet4[i].length == 3) {
                if (MetadataFormat.sheet4[i][0] == 'M' && sheet4[i][2] == null) {
                  // Mandatory 
                  validation.push("Sheet 4 - Row " + (i + 1) + " " + MetadataFormat.sheet4[i][1] + " should be mandatory.");
                }

                if (MetadataFormat.sheet4[i][1] != sheet4[i][1]) {
                  // Wrong format
                  validation.push("Sheet 4 - Row " + (i + 1) + " must be " + MetadataFormat.sheet4[i][1] + ".");
                }
              }
            }

            array.forEach(validation, function (error) {
              var nd = domConstruct.create("div", {}, parentNode);
              self.setNodeText(nd, error);
            });

            if (validation.length > 0) {
              this._workingMetadata = false;
              dialog.okCancelBar.disableOk();
              return;
            } else {
              this._workingMetadata = true;
            }

            if (this._workingMetadata == true || this._workingData == true) {
              dialog.okCancelBar.enableOk();
              dialog.okCancelBar.hideWorking(true);
            }
          }, 500);

          this._metadataFileName = file.name;
          this._metadataFile = file;
          this._metadataText = text;
        } else {
          // TODO message here?
        }
      }), true));
      reader.readAsText(file);
    },

    _loadDataFile: function (evt, dialog) {
      this._dataText = null;
      dialog.okCancelBar.disableOk();
      dialog.okCancelBar.showWorking("");
      domConstruct.empty(this.validationErrorsNode);
      if (!evt || !evt.target || !evt.target.files) return;
      var file = null,
        files = evt.target.files;
      if (files && (files.length === 1)) file = files[0];
      if (!file) return;

      var validFileTypes = ".zip";
      var fileType = file.name;
      fileType = fileType.substring(fileType.lastIndexOf('.'));
      if (validFileTypes.indexOf(fileType) < 0) {
        alert("Invalid file type selected.");
        this._workingData = false;
        dialog.okCancelBar.disableOk();
        return;
      }

      var reader = new FileReader();
      this.own(aspect.after(reader, "onload", lang.hitch(this, function (e) {
        if (e && e.target && e.target.result) {
          var text = e.target.result;
          this._dataFileName = file.name;
          this._dataFile = file;
          this._dataText = text;
          this._workingData = true;

          if (this._workingMetadata == true || this._workingData == true) {
            dialog.okCancelBar.enableOk();
            dialog.okCancelBar.hideWorking(true);
          }
        } else {
          // TODO message here?
        }
      }), true));
      reader.readAsText(file);
    },

    show: function () {
      var self = this,
        dialog = null;

      var showErr = function (msg, error) {
        dialog.okCancelBar.enableOk();
        dialog.okCancelBar.showWorking(msg, false);
        if (error) console.warn(error);
      };

      if (FileReader) {
        var metadataFileNode = domConstruct.create("div", {}, this.metadataFileContainerNode);
        this._inputMetadataFileNode = domConstruct.create("input", {
          "type": "file",
          onchange: function (evt) {
            self._loadMetadataFile(evt, dialog);
          }
        }, metadataFileNode);

        var dataFileNode = domConstruct.create("div", {}, this.dataFileContainerNode);
        this._inputDataFileNode = domConstruct.create("input", {
          "type": "file",
          onchange: function (evt) {
            self._loadDataFile(evt, dialog);
          }
        }, dataFileNode);
      }

      dialog = new ModalDialog({
        content: this.domNode,
        title: i18n.content.uploadDataMetadata.caption,
        okLabel: i18n.content.uploadDataMetadata.button,
        onHide: function () {
          self.destroyRecursive(false);
        },
        onOkClicked: function () {
          self._executeMetadataUpload(dialog, self._metadataText, self._metadataFileName);
          self._executeDataUpload(dialog, self._dataText, self._dataFileName);
        }
      });
      dialog.okCancelBar.disableOk();
      dialog.show();
    }

  });

  return oThisClass;
});