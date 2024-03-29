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
        "dojo/topic",
        "dojo/Deferred",
        "dojo/request",
        "app/context/app-topics",
        "app/context/AppClient",
        "app/content/BulkEdit",
        "dojo/text!./templates/SetApprovalStatus.html",
        "dojo/i18n!app/nls/resources",
        "app/content/ApplyTo"],
function(declare, topic, Deferred, dojoRequest, appTopics, AppClient, BulkEdit, template, i18n, ApplyTo) {

  var oThisClass = declare([BulkEdit], {
    
    i18n: i18n,
    templateString: template,
    
    title: i18n.content.setApprovalStatus.caption,
    okLabel: i18n.content.updateButton,
    
    _localValue: null,

    // Specific for MPA
	  itemId: null,
	  xmlString: null,
	  metadataTitle: null,
	  lastModified: null,
	  amendedTitle: null,
  	amendedXmlString: null,

    postCreate: function() {
      this.inherited(arguments);
    },
    
    applyLocally: function(item) {
      // item["sys_approval_status_s"] = this._localValue;
      // topic.publish(appTopics.ItemApprovalStatusChanged, {item: item});
      topic.publish(appTopics.RefreshSearchResultPage, {
        searchPane: this.itemCard.searchPane
      });
    },
    
    init: function() {
      this.setNodeText(this.itemTitleNode, this.item.title);
      if (!AppContext.appUser.isAdmin()) {
        $(this.statusSelect).find("option[value='approved']").remove();
        $(this.statusSelect).find("option[value='reviewed']").remove();
        $(this.statusSelect).find("option[value='disapproved']").remove();
      }
      var v = this.item["sys_approval_status_s"];
      if (typeof v === "string" && v.length > 0) {
        $(this.statusSelect).val(v);
      }
      this.applyTo = new ApplyTo({
        item: this.item,
        itemCard: this.itemCard,
      },this.applyToNode);

      itemId = this.item._id;

      var client = new AppClient();
	    client.readMetadata(itemId).then(function(response) {
        xmlString = response;
	    }).otherwise(function(error) {
	      console.error("Unable to retrieve metadata.");
	      console.error(error);
      });
    },
    
    makeRequestParams: function() {
      var params = {
        action: "setApprovalStatus",
        urlParams: {}
      };
      var status = $(this.statusSelect).val();
      if (typeof status !== "string" || status === "" || status === "none") {
        this.statusSelect.focus();
        return null;
      }
      
      // Specific for MPA
      if (status == i18n.approvalStatus.approved && !this.item.title.toLowerCase().includes("archived")) {
        this.duplicateRecord();
      }

      // Audit Trail
      var _userName = AppContext.appUser.getUsername();
      var client = new AppClient();
      client.createAuditTrail(i18n.auditTrailType.setApprovalStatus, "", "", "", _userName);
	  
      this._localValue = params.urlParams.approvalStatus = status;
      this.applyTo.appendUrlParams(params);
      return params;
    },

    // Specific for MPA
    // Duplicate temp record when set to approve
    duplicateRecord: function() {
      var dfd = new Deferred();

      if (xmlString.includes("<gmd:title>")) {
	      metadataTitle = xmlString.split('<gmd:title>')[1]
			    .split('</gmd:title>')[0]
			    .trim()
			    .split('<gco:CharacterString>')[1]
          .split('</gco:CharacterString>')[0];
      }
				
      if (xmlString.includes("<gmd:metadataLastUpdatedDate>")) {
        lastModified = xmlString.split('<gmd:metadataLastUpdatedDate>')[1]
          .split('</gmd:metadataLastUpdatedDate>')[0]
          .trim()
          .split('<gco:Date>')[1]
          .split('</gco:Date>')[0];
      } else {
        lastModified = xmlString.split('<gmd:dateStamp>')[1]
          .split('</gmd:dateStamp>')[0]
          .trim()
          .split('<gco:Date>')[1]
          .split('</gco:Date>')[0];
      }

		  amendedTitle = metadataTitle + i18n.metadataArchived + lastModified;
		  amendedXmlString = xmlString.replace(metadataTitle, amendedTitle);

	    this._save(xmlString, this._returnHash());
      this._save(amendedXmlString, itemId).then(function (response) {
        if (response && response.status) {
          self.itemId = response.id;
          // wait for real-time update
          setTimeout(function () {
            topic.publish(appTopics.ItemUploaded, {
              response: response
            });
          }, 1500);
        } else {
          // TODO is this an error?
        }
        dfd.resolve();
      }).otherwise(function (error) {
        // TODO Are there errors to show?
        console.warn("SaveMetadata.error", error);
        dfd.reject(error);
      });
	  
    },

    _save: function (xmlString, itemId) {
      var client = new AppClient();
      var url = client.getRestUri() + "/metadata/item";
      if (typeof itemId === "string" && itemId.length > 0) {
        url += "/" + encodeURIComponent(itemId);
      }
      url = client.appendAccessToken(url);
      var data = {
        app_editor_s: "gxe",
        xml: xmlString
      };
      var headers = {
        "Content-Type": "application/json"
      };
      var info = {
        handleAs: "json",
        headers: headers,
        data: JSON.stringify(data)
      };
      return dojoRequest.put(url, info);
    },
	
	  _returnHash: function (){
	    abc = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
      var token = ""; 
      for(i = 0; i < 32; i++) {
        token += abc[Math.floor(Math.random() * abc.length)];
      }
      return token; // Will return a 32 bit "hash"
    }

  });

  return oThisClass;
});