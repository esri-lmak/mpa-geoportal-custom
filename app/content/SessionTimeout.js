define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/aspect",
        "dojo/dom-construct",
        "dojo/topic",
        "app/context/app-topics",
        "app/common/Templated",
        "dojo/text!./templates/SessionTimeout.html",
        "dojo/i18n!app/nls/resources",
        "app/common/ModalDialog",
        "app/context/AppClient"],
function (declare, lang, array, aspect, domConstruct, topic, appTopics, Templated,
  template, i18n, ModalDialog, AppClient) {

  var oThisClass = declare([Templated], {

    i18n: i18n,
    templateString: template,

    // Specific to MPA - Session Timeout due to Inactivity
    warningAfter: 180000,
    signOutAfter: 300000,
    // 1 minutes = 60000, 3 minutes = 180000, 5 minutes = 300000, 7 minutes = 420000, 10 minutes = 600000
    // 15 minutes = 900000, 20 minutes = 1200000, 25 minutes = 1500000, 30 minutes = 1800000

    postCreate: function () {
      this.inherited(arguments);
    },

    show: function () {
      var self = this,
        dialog = null;

      dialog = new ModalDialog({
        content: this.domNode,
        title: i18n.content.sessionTimeout.caption,
        okLabel: i18n.content.sessionTimeout.button1,
        cancelLabel: i18n.content.sessionTimeout.button2,
        onHide: function () {
          self.destroyRecursive(false);
        },
        onOkClicked: function () {
          self._executeKeepAlive(dialog);
        },
        onCancelClicked: function () {
          self._executeSignOut(dialog);
        }
      });
      dialog.okCancelBar.enableOk();
      dialog.show();
    },

    _executeKeepAlive: function (dialog) {
      dialog.hide();

      var self = this;
      window.onload = self.resetTimer(dialog);
      window.onmousemove = self.resetTimer(dialog);
      window.onmousedown = self.resetTimer(dialog);  // catches touchscreen presses as well      
      window.ontouchstart = self.resetTimer(dialog); // catches touchscreen swipes as well 
      window.onclick = self.resetTimer(dialog);      // catches touchpad clicks as well
      window.onkeypress = self.resetTimer(dialog);   
      window.addEventListener('scroll', self.resetTimer(dialog), true);
    },

    _executeSignOut: function (dialog) {
      AppContext.appUser.signOut();
      dialog.hide();
    },

    resetTimer: function(dialog) {
      clearTimeout(this.warningAfter);
      clearTimeout(this.signOutAfter);

      setTimeout(function() {
        // Display session warning timeout dialog
        dialog.show();
      }, this.warningAfter);  

      setTimeout(function() {
        // Logout
        AppContext.appUser.signOut();
      }, this.signOutAfter);
    }

  });

  return oThisClass;
});