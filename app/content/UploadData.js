/* See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * Esri Inc. licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
    "app/context/AppClient"
  ],
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

      postCreate: function () {
        this.inherited(arguments);
      },

      _executeUpload: function (dialog, text, filename) {
        if (this._working) return;
        this._working = true;
        this._userName = AppContext.appUser.getUsername();
        console.log(this._userName);
        var self = this;
        dialog.okCancelBar.showWorking(i18n.general.uploading, true);
        domConstruct.empty(this.validationErrorsNode);

        var client = new AppClient();
        client.readMetadataXML(this.itemId).then(function (response) {
          this._xmlData = response;
          console.log(this._xmlData);
        }).otherwise(function (err) {
          showErr(err);
          console.error("Unable to retrieve metadata.");
          console.error(err);
        });

        self._uploadData().then(function (response) {
          if (response && response.status) {
            // wait for real-time update
            setTimeout(function () {
              topic.publish(appTopics.ItemUploaded, {
                response: response
              });
              dialog.hide();
            }, 1500);
          } else {
            self._working = false;
            dialog.okCancelBar.enableOk();
            dialog.okCancelBar.showWorking(i18n.general.error, false);
          }
        }).otherwise(function (error) {
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
      },

      _uploadData: function () {
        var baseRestURL = "https://mpa.esrisg.dev/argis/rest/services/Geoportal";
        var username = "siteadmin";
        var password = "zaq123..";

        var APIPath = "/ToTmp/GPServer/ToTmp/submitJob";
        var completeRestURL = baseRestURL + APIPath;
        console.log("REST API URL: " + completeRestURL);

        var method = "POST";
        var postData = "{\"uploaded_by\": \"" + this._userName +
          "\",\"data_file \": \"" + this._file +
          "\",\"metadata_file\": \"" + this._xmlData +
          "}";
        var url = completeRestURL;
        var async = true;
        var request = new XMLHttpRequest();
        request.onload = function () {
          console.log("ONLOAD");
          var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
          console.log(status);
          var token = request.getResponseHeader("x-mstr-authtoken");
        }

        request.open(method, url, async);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Accept", "application/json");
		    request.setRequestHeader("Authorisation", "Basic " + btoa(username + ":" + password));
        request.send(postData);

        return request;
      }
      
    });

    return oThisClass;
  });