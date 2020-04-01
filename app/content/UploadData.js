define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/aspect",
        "dojo/dom-construct",
        "dojo/topic",
        "app/context/app-topics",
        "app/common/Templated",
        "dojo/text!./templates/UploadData.html",
        "dojo/i18n!app/nls/resources",
        "app/common/ModalDialog",
        "app/context/AppClient"],
function (declare, lang, array, aspect, domConstruct, topic, appTopics, Templated,
  template, i18n, ModalDialog, AppClient) {

  var oThisClass = declare([Templated], {

    i18n: i18n,
    templateString: template,

    itemId: null,

    _inputFileNode: null,
    _fileName: null,
    _text: null,
    _working: false,

    // Custom fields
    _userName: null,
    _fileId: null,
    _file: null,
    _xmlData: null,
    _title: null,
    _itemIdData: null,
    _itemIdMetadata: null,

    postCreate: function () {
      this.inherited(arguments);
    },

    _executeUpload: function (dialog, text, filename) {
      if (this._working) return;
      this._working = true;
      this._userName = AppContext.appUser.getUsername();
      var self = this;
      dialog.okCancelBar.showWorking(i18n.general.uploading, true);
      domConstruct.empty(this.validationErrorsNode);
    
      var client = new AppClient();
      client.readMetadataXML(this.itemId).then(function (response) {
        this._xmlData = response;
      }).otherwise(function (err) {
        console.error("Unable to retrieve metadata.");
        console.error(err);
      });

      client.readMetadata(this.itemId).then(function (response) {
        if (response.includes("<gmd:title>")) {
			    title = response.split('<gmd:title>')[1]
			      .split('</gmd:title>')[0]
			      .trim()
			      .split('<gco:CharacterString>')[1]
            .split('</gco:CharacterString>')[0];
        }
      }).otherwise(function (err) {
        console.error("Unable to retrieve metadata.");
        console.error(err);
      });

		  client.uploadFile(this._file, this._fileName).then(function(response) {
		    this._itemIdData = response.item.itemID;
		  }).otherwise(function(error) {
		    console.warn("UploadFile.error", error);
      });

      setTimeout(function() {
        client.uploadMetadataFile(this._xmlData, this._title).then(function(response) {
          this._itemIdMetadata = response.item.itemID;
		    }).otherwise(function(error) {
          console.warn("UploadMetadataFile.error", error);
        });
      }, 50);  
    
      setTimeout(function() {
        client.uploadData(this._userName, this._itemIdData, this._itemIdMetadata).then(function(response) {
          if (response) {
            // wait for real-time update
            setTimeout(function() {
              topic.publish(appTopics.ItemUploaded,{response: response});
              dialog.hide();
            }, 1500);

            // Audit Trail
            /*
            client.createAuditTrail(i18n.auditTrailType.uploadData, "", "", "", this._userName);
            */
          } else {
            self._working = false;
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
          self._working = false;
          dialog.okCancelBar.enableOk();
          dialog.okCancelBar.showError(msg, false);
        });
      }, 200);
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

    _loadXmlFile: function (evt, dialog) {
      this._text = null;
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
        return;
      }

      var reader = new FileReader();
      this.own(aspect.after(reader, "onload", lang.hitch(this, function (e) {
        if (e && e.target && e.target.result) {
          var text = e.target.result;
          this._fileName = file.name;
          this._file = file;
          this._text = text;
          if (!this._working) {
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
        var nd = domConstruct.create("div", {}, this.fileContainerNode);
        this._inputFileNode = domConstruct.create("input", {
          "type": "file",
          onchange: function (evt) {
            self._loadXmlFile(evt, dialog);
          }
        }, nd);
      }

      dialog = new ModalDialog({
        content: this.domNode,
        title: i18n.content.uploadData.caption,
        okLabel: i18n.content.uploadData.button,
        onHide: function () {
          self.destroyRecursive(false);
        },
        onOkClicked: function () {
          self._executeUpload(dialog, self._text, self._fileName);
        }
      });
      dialog.okCancelBar.disableOk();
      dialog.show();
    }

  });

  return oThisClass;
});