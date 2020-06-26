define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/aspect",
        "dojo/dom-construct",
        "dojo/topic",
        "app/context/app-topics",
        "app/common/Templated",
        "dojo/text!./templates/AddFaq.html",
        "dojo/i18n!app/nls/resources",
        "app/common/ModalDialog",
        "app/context/AppClient"],
function (declare, lang, array, aspect, domConstruct, topic, appTopics, Templated,
  template, i18n, ModalDialog, AppClient) {

  var oThisClass = declare([Templated], {

    i18n: i18n,
    templateString: template,

    postCreate: function () {
      this.inherited(arguments);
    },

    show: function () {
      var self = this,
        dialog = null;

      var showErr = function (msg, error) {
        dialog.okCancelBar.enableOk();
        dialog.okCancelBar.showWorking(msg, false);
        if (error) console.warn(error);
      };

      dialog = new ModalDialog({
        content: this.domNode,
        title: i18n.content.faqs.caption,
        okLabel: i18n.content.faqs.button,
        onHide: function () {
          self.destroyRecursive(false);
        },
        onOkClicked: function () {
          self._executeSignUp(dialog);
        }
      });
      dialog.okCancelBar.enableOk();
      dialog.show();
    },

    _executeSignUp: function(dialog) {
      var self = this;
      document.getElementById("questionError").innerHTML = "";
      document.getElementById("answerError").innerHTML = "";

      var question = $(this.questionInput).val();
      var answer = $(this.answerInput).val();

      var validation = 0;
      if (question.length == 0) {
        validation++;
        document.getElementById("questionError").innerHTML = "Question is mandatory.";
      }

      if (answer.length == 0) {
        validation++;
        document.getElementById("answerError").innerHTML = "Answer is mandatory.";
      }

      if (validation == 0) {
        dialog.okCancelBar.showWorking(i18n.general.submitting, true);
        var client = new AppClient();
        client.submitFaq(question, answer, "create").then(function(response) {
          if (response) {
            // wait for real-time update
            setTimeout(function() {
              topic.publish(appTopics.SignUpSubmitted, {response: response});
              dialog.hide();
            }, 1500);

            // Audit Trail
            /*
            var _userName = AppContext.appUser.getUsername();
            client.createAuditTrail(i18n.auditTrailType.signUp, "", "", "", _userName);
            */
          } else {
            self._working = false;
            dialog.okCancelBar.enableOk();
            dialog.okCancelBar.showWorking(i18n.general.error, false);
          }
        }).otherwise(function(error) {
          console.warn("Faq.error", error);
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