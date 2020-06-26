
define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/aspect",
        "dojo/dom-construct",
        "dojo/topic",
        "app/common/Templated",
        "dojo/text!./templates/ManageFaqs.html",
        "dojo/i18n!app/nls/resources",
        "app/common/ModalDialogLarge",
        "app/context/AppClient",
        "app/content/AddFaq"],
function (declare, lang, array, aspect, domConstruct, topic, Templated, template, i18n, ModalDialog, AppClient, AddFaq) {

  var oThisClass = declare([Templated], {

    i18n: i18n,
    templateString: template,

    postCreate: function () {
      this.inherited(arguments);
    },

    show: function () {
      var self = this,
        dialog = null;

      dialog = new ModalDialog({
        content: this.domNode,
        title: i18n.content.manageAnnouncements.caption,
        showOk: false,
        onHide: function () {
          self.destroyRecursive(false);
        },
      });
      dialog.show();
    },

    addFaq: function() {
      (new AddFaq()).show();
    }

  });

  return oThisClass;
});