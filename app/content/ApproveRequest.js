define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/aspect",
        "dojo/dom-construct",
        "dojo/topic",
        "app/context/app-topics",
        "app/common/Templated",
        "dojo/text!./templates/ApproveRequest.html",
        "dojo/i18n!app/nls/resources",
        "app/common/ModalDialog",
        "app/context/AppClient"],
function (declare, lang, array, aspect, domConstruct, topic, appTopics, Templated,
  template, i18n, ModalDialog, AppClient) {

  var oThisClass = declare([Templated], {

    i18n: i18n,
    templateString: template,

    requestor: null,
    fileId: null,

    postCreate: function () {
      this.inherited(arguments);
    },

    show: function () {
      // TO DO Convert Item ID and get Title
      this.setNodeText(this.itemTitleNode, this.itemId);
      var self = this,
        dialog = null;

      dialog = new ModalDialog({
        content: this.domNode,
        title: i18n.content.approveRequest.caption,
        okLabel: i18n.content.approveRequest.button,
        onHide: function () {
          self.destroyRecursive(false);
        },
        onOkClicked: function () {
          self._executeRequest(dialog, this.itemId);
        }
      });
      dialog.show();
    },

    _executeRequest: function (dialog) {
      var self = this;
      dialog.okCancelBar.showWorking(i18n.general.submittingRequest, true);

      var client = new AppClient();
      client.createRequest(this.requestor, this.fileId, "approved").then(function(response) {
        if (response) {
          // wait for real-time update
          setTimeout(function() {
            topic.publish(appTopics.RequestSubmitted, {response: response});
            dialog.hide();
          }, 1500);
        } else {
          self._working = false;
          dialog.okCancelBar.enableOk();
          dialog.okCancelBar.showWorking(i18n.general.error, false);
        }
      }).otherwise(function(error) {
        console.warn("SubmitRequest.error", error);
        var msg = i18n.general.error;
        var err = client.checkError(error);
        if (err && err.message) {
          msg = self.checkForErrorTranslation(err.message);
        }
        self._working = false;
        dialog.okCancelBar.enableOk();
        dialog.okCancelBar.showError(msg, false);
      });
    }

  });

  return oThisClass;
});