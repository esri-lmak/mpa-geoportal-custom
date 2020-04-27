define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/_base/array",
        "dojo/aspect",
        "dojo/dom-construct",
        "dojo/topic",
        "app/context/app-topics",
        "app/common/Templated",
        "dojo/text!./templates/SignUp.html",
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
        title: i18n.content.signUp.caption,
        okLabel: i18n.content.signUp.button,
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
      document.getElementById("firstNameError").innerHTML = "";
      document.getElementById("lastNameError").innerHTML = "";
      document.getElementById("usernameError").innerHTML = "";
      document.getElementById("emailAddressError").innerHTML = "";
      document.getElementById("organisationError").innerHTML = "";

      var firstName = $(this.firstNameInput).val();
      var lastName = $(this.lastNameInput).val();
      var username = $(this.usernameInput).val();
      var emailAddress = $(this.emailAddressInput).val();
      var organisation = $(this.organisationSelect).val();

      var validation = 0;
      if (firstName.length == 0) {
        validation++;
        document.getElementById("firstNameError").innerHTML = "First Name is mandatory.";
      }

      if (lastName.length == 0) {
        validation++;
        document.getElementById("lastNameError").innerHTML = "Last Name is mandatory.";
      }

      if (username.length == 0) {
        validation++;
        document.getElementById("usernameError").innerHTML = "Username is mandatory.";
      } else {
        var client = new AppClient();
        client.getUserByUsername(username).then(function (response) {
          if (response.features.length > 0) {
            var existingUsername = response.features[0].attributes.username;
            if (existingUsername.length > 0) {
              validation++;
              document.getElementById("usernameError").innerHTML = "Username is exists.";
            }
          }
        }).otherwise(function (err) {
          console.error("Unable to retrieve user.");
          console.error(err);
        });
      }

      if (emailAddress.length == 0) {
        validation++;
        document.getElementById("emailAddressError").innerHTML = "Email Address is mandatory.";
      } else {
        var exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (exp.test(emailAddress) == false) {
          validation++;
          document.getElementById("emailAddressError").innerHTML = "Email Address is invalid.";
        }
      }

      if (organisation.length == 0) {
        validation++;
        document.getElementById("organisationError").innerHTML = "Organisation is mandatory.";
      }
      
      if (validation == 0) {
        dialog.okCancelBar.showWorking(i18n.general.submitting, true);
        var client = new AppClient();
        // TO DO Remove when method is completed
        setTimeout(function() {
          dialog.hide();
        }, 1500);
        client.submitSignUp(firstName, lastName, username, emailAddress, organisation).then(function(response) {
          if (response) {
            // wait for real-time update
            setTimeout(function() {
              topic.publish(appTopics.SignUpSubmitted, {response: response});
              dialog.hide();
            }, 1500);

            // Audit Trail
            /*
            var _userName = AppContext.appUser.getUsername();
            client.createAuditTrail(i18n.auditTrailType.uploadMetadata, "", "", "", _userName);
            */
          } else {
            self._working = false;
            dialog.okCancelBar.enableOk();
            dialog.okCancelBar.showWorking(i18n.general.error, false);
          }
        }).otherwise(function(error) {
          console.warn("SignUp.error", error);
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

    _validateEmail: function (emailAddress) {
      var exp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return exp.test(email);
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