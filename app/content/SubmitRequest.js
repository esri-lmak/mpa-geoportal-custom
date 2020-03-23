define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/aspect",
        "dojo/dom-construct",
        "dojo/topic",
        "app/context/app-topics",
        "app/common/Templated",
        "dojo/text!./templates/SubmitRequest.html",
        "dojo/i18n!app/nls/resources",
        "app/common/ModalDialog",
        "app/context/AppClient"],
function (declare, lang, array, aspect, domConstruct, topic, appTopics, Templated,
  template, i18n, ModalDialog, AppClient) {

  var oThisClass = declare([Templated], {

    i18n: i18n,
    templateString: template,

    item: null,
    itemId: null,

    // Custom fields
    _userName: null,

    postCreate: function () {
      this.inherited(arguments);
    },

    show: function () {
      this.setNodeText(this.itemTitleNode, this.item.title);
      var self = this,
        dialog = null;

      dialog = new ModalDialog({
        content: this.domNode,
        title: i18n.content.submitRequest.caption,
        okLabel: i18n.content.submitRequest.button,
        onHide: function () {
          self.destroyRecursive(false);
        },
        onOkClicked: function () {
          self._executeRequest(dialog);
        }
      });
      dialog.show();
    },

    _executeRequest: function (dialog) {
      var self = this;
      dialog.okCancelBar.showWorking(i18n.general.submittingRequest, true);
  
      this._userName = AppContext.appUser.getUsername();
      var client = new AppClient();
      client.createRequest(this._userName, this.item.fileid, "pending").then(function(response) {
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
    },

  });

  return oThisClass;
});