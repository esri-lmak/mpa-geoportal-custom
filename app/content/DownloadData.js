
define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/aspect",
        "dojo/dom-construct",
        "dojo/topic",
        "app/context/app-topics",
        "app/common/Templated",
        "dojo/text!./templates/DownloadData.html",
        "dojo/i18n!app/nls/resources",
        "app/common/ModalDialog",
        "app/context/AppClient",],
function (declare, lang, array, aspect, domConstruct, topic, appTopics, Templated,
  template, i18n, ModalDialog, AppClient) {

  var oThisClass = declare([Templated], {

    i18n: i18n,
    templateString: template,

    itemId: null,
    _userName: null,

    postCreate: function () {
      this.inherited(arguments);
    },

    _executeDownloadData: function (dialog, itemId) {
      var self = this;
      document.getElementById("validationPurposeSelect").innerHTML = "";
      document.getElementById("validationDetails").innerHTML = "";
      document.getElementById("validationDataType").innerHTML = "";

      var purposeSelectInput = $(this.purposeSelectInput).val();
      var detailsInput = $(this.detailsInput).val();
      var dataTypeInput = $(this.dataTypeInput).val();

      var validation = 0;
      if (purposeSelectInput.length == 0) {
        validation++;
        document.getElementById("validationPurposeSelect").innerHTML = "Purpose for Data Usage is mandatory.";
      }

      if (detailsInput.length == 0) {
        validation++;
        document.getElementById("validationDetails").innerHTML = "Details is mandatory.";
      }

      if (dataTypeInput.length == 0) {
        validation++;
        document.getElementById("validationDataType").innerHTML = "Data Type is mandatory.";
      }

      self._userName = AppContext.appUser.getUsername();

      if (validation == 0) {
        dialog.okCancelBar.showWorking(i18n.general.submitting, true);
        var client = new AppClient();

        console.log(self._userName);
        console.log(self.itemId);
        client.downloadData(self._userName, self.itemId, dataTypeInput, purposeSelectInput, detailsInput).then(function(response) {
          if (response) {
            setTimeout(function() {
              topic.publish(appTopics.SignUpSubmitted, {response: response});
              dialog.hide();
            }, 1500);
          }
		    }).otherwise(function(error) {
          console.warn("DownloadData.error", error);
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
      }
    },

    show: function () {
      var self = this,
        dialog = null;

      dialog = new ModalDialog({
        content: this.domNode,
        title: i18n.content.downloadData.caption,
        okLabel: i18n.content.downloadData.button,
        onHide: function () {
          self.destroyRecursive(false);
        },
        onOkClicked: function () {
          self._executeDownloadData(dialog, self.itemId);
        }
      });
      dialog.okCancelBar.enableOk();
      dialog.show();
    },

    _loadValidationErrors: function (validationErrors) {
      var self = this,
      parentNode = this.validationErrorsNode;
      domConstruct.empty(this.validationErrorsNode);
      array.forEach(validationErrors, function (error) {
        var nd = domConstruct.create("div", {}, parentNode);
        self.setNodeText(nd, error);
      });
    }

  });

  return oThisClass;
});