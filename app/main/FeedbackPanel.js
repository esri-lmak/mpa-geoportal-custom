define(["dojo/_base/declare",
        "dojo/_base/lang",
        "app/common/Templated",
        "dojo/text!./templates/FeedbackPanel.html",
        "dojo/i18n!../nls/resources"], 
function(declare, lang, Templated, template, i18n) {

  var oThisClass = declare([Templated], {
    i18n: i18n,
    templateString: template,

    submitFeedback: function() {
      var self = this;
      document.getElementById("commentsError").innerHTML = "";
      document.getElementById("nameError").innerHTML = "";
      document.getElementById("emailError").innerHTML = "";

      var comments = $(this.commentsInput).val();
      var name = $(this.nameInput).val();
      var email = $(this.emailInput).val();
      var experience = $('input[name="experience"]:checked').val();

      var validation = 0;
      if (comments.length == 0) {
        validation++;
        document.getElementById("commentsError").innerHTML = "Additional Comments is mandatory.";
      }

      if (name.length == 0) {
        validation++;
        document.getElementById("nameError").innerHTML = "Name is mandatory.";
      }

      if (email.length == 0) {
        validation++;
        document.getElementById("emailError").innerHTML = "Email Address is mandatory.";
      } else {
        var exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (exp.test(email) == false) {
          validation++;
          document.getElementById("emailError").innerHTML = "Email Address is invalid.";
        }
      }

      if (validation == 0) {
        var client = new AppClient();
        client.submitFeedback(name, email, experience, comments, "create").then(function(response) {
          if (response) {
            // wait for real-time update
            setTimeout(function() {
              topic.publish(appTopics.SignUpSubmitted, {response: response});
            }, 1500);

            // Audit Trail
            /*
            var _userName = AppContext.appUser.getUsername();
            client.createAuditTrail(i18n.auditTrailType.signUp, "", "", "", _userName);
            */
          } else {
            // TO DO 
          }
        }).otherwise(function(error) {
          console.warn("Feedback.error", error);
          var msg = i18n.general.error;
          var err = client.checkError(error);
          if (err && err.message) {
            msg = self.checkForErrorTranslation(err.message);
          }
          if (err && err.validationErrors) {
            self._loadValidationErrors(err.validationErrors);
          }
        });
      }
     
    }

  });

  return oThisClass;
});