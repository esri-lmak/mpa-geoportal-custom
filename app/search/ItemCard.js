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
		    "dojo/string",
		    "dojo/topic",
		    "dojo/request",
		    "dojo/request/xhr",
		    "dojo/on",
        "app/context/app-topics",
        "dojo/dom-style",
		    "dojo/dom-class",
		    "dojo/dom-construct",
		    "dijit/_WidgetBase",
		    "dijit/_TemplatedMixin",
		    "dijit/_WidgetsInTemplateMixin",
		    "dijit/Tooltip",
		    "dijit/TooltipDialog",
		    "dijit/popup",
		    "dojo/text!./templates/ItemCard.html",
		    "dojo/i18n!app/nls/resources",
		    "app/context/AppClient",
		    "app/etc/ServiceType",
		    "app/etc/util",
		    "app/common/ConfirmationDialog",
		    "app/content/ChangeOwner",
		    "app/content/DeleteItems",
		    "app/content/MetadataEditor",
		    "app/context/metadata-editor",
		    "app/content/SetAccess",
		    "app/content/SetApprovalStatus",
		    "app/content/SetField",
		    "app/content/UploadMetadata",
        "app/content/UploadData",
        "app/content/UploadDataMetadata",
        "app/content/SubmitRequest",
		    "app/preview/PreviewUtil",
		    "app/preview/PreviewPane",
		    "app/content/ApplyTo"], 
function(declare, lang, array, string, topic, dojoRequest, xhr, on, appTopics, domStyle, domClass, domConstruct,
  _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Tooltip, TooltipDialog, popup, 
  template, i18n, AppClient, ServiceType, util, ConfirmationDialog, ChangeOwner, DeleteItems,
  MetadataEditor, gxeConfig, SetAccess, SetApprovalStatus, SetField, UploadMetadata,
  UploadData, UploadDataMetadata, SubmitRequest, PreviewUtil, PreviewPane, ApplyTo) {
  
  var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {

    i18n: i18n,
    templateString: template,

    isItemCard: true,
    item: null,
    itemsNode: null,
    searchPane: null,

    // Specific for MPA
    metadataSource: null,
    metadataApprovalStatus: null,
	  metadataXmlString: null,
    metadataDataClassification: null,
    userName: null,
    requestStatus: null,

    allowedServices: {
      "featureserver":"agsfeatureserver",
      "imageserver":"agsimageserver",
      "mapserver":"agsmapserver",
      "csw": "csw",
      "ims": "image",
      "sos": "sos",
      "wcs": "wcs",
      "wfs": "wfs",
      "wms": "wms"
    },

    postCreate: function() {
      this.inherited(arguments);
      var self = this;
      this.own(topic.subscribe(appTopics.ItemOwnerChanged,function(params) {
        if (self.item && self.item === params.item) {
          self._renderOwnerAndDate(self.item);
		      // self._renderDataClassification(self.item);
        }
      }));
	  
      this.own(topic.subscribe(appTopics.ItemApprovalStatusChanged,function(params) {
        if (self.item && self.item === params.item) {
          self._renderOwnerAndDate(self.item);
		      // self._renderDataClassification(self.item);
        }
      }));
	  
      this.own(topic.subscribe(appTopics.ItemAccessChanged,function(params) {
        if (self.item && self.item === params.item) {
          self._renderOwnerAndDate(self.item);
		      // self._renderDataClassification(self.item);
        }
      }));
    },

    render: function(hit) {
      var item = this.item = hit._source;
      item._id = hit._id;
      item.title = item.title? item.title: "???";

      this.userName = AppContext.appUser.getUsername();
      var client = new AppClient();
	    var dataClassificationNode = this.dataClassificationNode;
      client.readMetadataXML(item._id).then(function (response) {
        this.metadataXmlString = response;
        this.metadataDataClassification = this.metadataXmlString.getElementsByTagName("gmd:MD_ClassificationCode")[0].textContent.trim();
        this.metadataDataClassification = this.metadataDataClassification.charAt(0).toUpperCase() + this.metadataDataClassification.substring(1);
        util.setNodeText(dataClassificationNode, this.metadataDataClassification);
      }).otherwise(function (err) {
        console.error("Unable to retrieve metadata.");
        console.error(err);
      });

      if (item.fileid != "-") {
        client.getRequestByFileIdAndRequestor(item.fileid, this.userName).then(function (response) {
          if (response.features.length > 0) {
            this.requestStatus = response.features[0].attributes.status;
          } else {
            this.requestStatus = null;
          }
        }).otherwise(function (err) {
          console.error("Unable to retrieve request.");
          console.error(err);
        });
      } else {
        this.requestStatus = null;
      }

      var links = this._uniqueLinks(item);
      this._renderTitleLink(item._id, item);
      this._renderOwnerAndDate(item);
      util.setNodeText(this.descriptionNode, item.description);
       // this._renderDataClassification(this.metadataDataClassification);
      this._renderThumbnail(item);
      // Specific to MPA - Request or Add To Map
      // If not admin not required to request
      // If confidential requires request to be able to add to map
      // If restricted no request required and able to add to map
      if (!AppContext.appUser.isAdmin() && AppContext.appUser.isSignedIn()) {
        this._renderRequest(item, links);
      }
      this._renderItemLinks(hit._id, item);
      this._renderLinksDropdown(item, links);
      this._renderOptionsDropdown(hit._id, item);
      this._renderAddToMap(item, links);
      this._renderServiceStatus(item);
      this._renderUrlLinks(item);
      this._renderId(item);
      this._renderUpdatedStatus(item);
    },

    _canEditMetadata: function(item, isOwner, isAdmin, isPublisher) {
      var v;
      if ((isOwner && isPublisher) || isAdmin) {
        v = item.sys_metadatatype_s;
        if (typeof v === "string") {
          if (gxeConfig.editable.geoportalTypes.indexOf(v) !== -1) {
            if (gxeConfig.editable.allowNonGxeDocs) {
              return true;
            }
            v = item.app_editor_s;
            if (typeof v === "string" && v === "gxe") {
              return true;
            }
          }
        }
      }
      return false;
    },

    _isOwner: function(item) {
      var username = AppContext.appUser.getUsername();
      if (typeof username === "string" && username.length > 0) {
        return (username === item.sys_owner_s);
      }
      return false;
    },

    _mitigateDropdownClip: function(dd, ddul) {
      // Bootstrap dropdown menus clipped by scrollable container
      var self = this;
      var reposition = function() {
        //console.warn($(dd).offset());
        var t = $(dd).offset().top + 15 - $(window).scrollTop();
        var l = $(dd).offset().left;
        $(ddul).css('top', t);
        $(ddul).css('left', l);

        var position = dd.getBoundingClientRect().top;
        var buttonHeight = dd.getBoundingClientRect().height;
        var menuHeight = $(ddul).outerHeight();
        var winHeight = $(window).height();
        if (position > menuHeight && winHeight - position < buttonHeight + menuHeight) {
          //console.warn("dropup","position:",position,"t",t,"buttonHeight",buttonHeight,"menuHeight",menuHeight);
          t = t - menuHeight - buttonHeight - 4;
          $(ddul).css('top', t);
        }
      };
      $(ddul).css("position", "fixed");
      $(dd).on('click', function() {reposition();});
      //$(window).scroll(function() {reposition();});
      //$(this.itemsNode).scroll(function() {reposition();});
      //$(window).resize(function() {reposition();});
    },

    _mouseenter: function(e) {
      topic.publish(appTopics.OnMouseEnterResultItem, {item: this.item});
    },

    _mouseleave: function(e) {
      topic.publish(appTopics.OnMouseLeaveResultItem, {item: this.item});
    },

    _renderPreview: function(item, actionsNode, serviceType) {
      // declare preview pane
      var previewPane;

      // create preview area
      var previewArea = domConstruct.create("div");
      var tooltipDialog = new TooltipDialog({
          style: "width: 470px; height: 320px;",
          content: previewArea,

          onBlur: function() {
            // cause to hide dialog whenever user clicks outside the map
            popup.close(tooltipDialog);
          },

          onKeyPress: function(event) {
            // cause to hide dialog whenever ESC key is being pressed
            if (event.keyCode === 27) {
              popup.close(tooltipDialog);
            }
          },

          onShow: function() {
            // focus automatically
            tooltipDialog.focus();

            // create new preview pane
            previewPane = new PreviewPane({serviceType: serviceType}, previewArea);
            previewPane.startup();
          },

          onHide: function() {
            // destroy preview pane
            previewPane.destroy();
            previewPane = null;
          }
      });
      this.own(tooltipDialog);

      // create clickable link to launch preview dialog
      var previewNode = domConstruct.create("a", {
        href: "javascript:void(0)",
        title: string.substitute(i18n.item.actions.titleFormat, {action: i18n.item.actions.preview, title: item.title}),
        "aria-label": string.substitute(i18n.item.actions.titleFormat, {action: i18n.item.actions.preview, title: item.title}),
        innerHTML: i18n.item.actions.preview
      },actionsNode);

      // install 'onclick' event handler to show tooltip dialog
      this.own(on(previewNode, "click", function() {
        popup.open({
          popup: tooltipDialog,
          around: previewNode
        });
      }));
    },

    _renderRequest: function(item, links) {
      if (links.length === 0) return;
      var endsWith = function(v, sfx) {return (v.indexOf(sfx, (v.length - sfx.length)) !== -1);};
      var actionsNode = this.actionsNode;
      array.some(links, lang.hitch(this, function(u) {
        var serviceType = new ServiceType();
        serviceType.checkUrl(u);
        // console.warn("serviceType", serviceType.isSet(), serviceType);

        // If URL present, File ID present and Confidential classification
        setTimeout(function() {
          console.log(this.requestStatus);
          if (serviceType.isSet() && item.fileid != "-" && this.metadataDataClassification == "Confidential") {
            if (this.requestStatus == "pending") {
              // Remove Add to Map and Preview 
              actionsNode.removeChild(actionsNode.lastChild);
              actionsNode.removeChild(actionsNode.lastChild);
            } else if (this.requestStatus == "approved") {
              // Do nothing
            } else {
              // Null no record
              // Remove Add to Map and Preview 
              actionsNode.removeChild(actionsNode.lastChild);
              actionsNode.removeChild(actionsNode.lastChild);

              // Add Request button
              domConstruct.create("a", {
                href: "javascript:void(0)",
                innerHTML: i18n.item.actions.submitRequest,
                title: string.substitute(i18n.item.actions.titleFormat, {action: i18n.item.actions.submitRequest, title: item.title}),
                "aria-label": string.substitute(i18n.item.actions.titleFormat, {action: i18n.item.actions.submitRequest, title: item.title}),
                onclick: function() {
                  (new SubmitRequest({item: item, itemId: item._id})).show();
                }
              }, actionsNode);
            }

            return true;
          }
        }, 100);
      }));
    },
    
    _renderAddToMap: function(item, links) {
      if (links.length === 0) return;
      var endsWith = function(v, sfx) {return (v.indexOf(sfx, (v.length - sfx.length)) !== -1);};
      var actionsNode = this.actionsNode;
      array.some(links, lang.hitch(this, function(u) {
        var serviceType = new ServiceType();
        serviceType.checkUrl(u);
        // console.warn("serviceType", serviceType.isSet(), serviceType);

        if (serviceType.isSet()) {
          domConstruct.create("a", {
            href: "javascript:void(0)",
            innerHTML: i18n.item.actions.addToMap,
            title: string.substitute(i18n.item.actions.titleFormat, {action: i18n.item.actions.addToMap, title: item.title}),
            "aria-label": string.substitute(i18n.item.actions.titleFormat, {action: i18n.item.actions.addToMap, title: item.title}),
            onclick: function() {
              topic.publish(appTopics.AddToMapClicked, serviceType);
            }
          }, actionsNode);
          
          // create clickable 'Preview' link if allowes
          if (PreviewUtil.canPreview(serviceType)) {
            this._renderPreview(item, actionsNode, serviceType);
          }
          
          return true;
        }
      }));
    },

    _renderItemLinks: function(itemId, item) {
      if (AppContext.appConfig.searchResults.showLinks) {
        var actionsNode = this.actionsNode;
        var uri = "./rest/metadata/item/" + encodeURIComponent(itemId);
        var htmlNode = domConstruct.create("a", {
          href: uri + "/html",
          target: "_blank",
          title: string.substitute(i18n.item.actions.titleFormat, {action: i18n.item.actions.html, title: item.title}),
          "aria-label": string.substitute(i18n.item.actions.titleFormat, {action: i18n.item.actions.html, title: item.title}),
          innerHTML: i18n.item.actions.html
        } ,actionsNode);

        var xmlNode = domConstruct.create("a", {
          href: uri + "/xml",
          target: "_blank",
          title: string.substitute(i18n.item.actions.titleFormat, {action: i18n.item.actions.xml, title: item.title}),
          "aria-label": string.substitute(i18n.item.actions.titleFormat, {action: i18n.item.actions.xml, title: item.title}),
          innerHTML: i18n.item.actions.xml
        }, actionsNode);

        var jsonNode = domConstruct.create("a", {
          href: uri + "?pretty=true",
          target: "_blank",
          title: string.substitute(i18n.item.actions.titleFormat, {action: i18n.item.actions.json, title: item.title}),
          "aria-label": string.substitute(i18n.item.actions.titleFormat, {action: i18n.item.actions.json, title: item.title}),
          innerHTML: i18n.item.actions.json
        }, actionsNode);

        if (AppContext.geoportal.supportsApprovalStatus ||
            AppContext.geoportal.supportsGroupBasedAccess) {
          var client = new AppClient();
          htmlNode.href = client.appendAccessToken(htmlNode.href);
          xmlNode.href = client.appendAccessToken(xmlNode.href);
          jsonNode.href = client.appendAccessToken(jsonNode.href);
        }
        var v = item.sys_metadatatype_s;
        if (typeof v === "string" && v === "json") {
          htmlNode.style.visibility = "hidden";
          htmlNode.style.display = "none";
          xmlNode.style.visibility = "hidden";
          xmlNode.style.display = "none";
        }
      }
    },

    _renderLinksDropdown: function(item, links) {
      if (links.length === 0) return;
      var dd = domConstruct.create("div",{
        "class": "dropdown",
        "style": "display:inline-block;"
      },this.actionsNode);

      var ddbtn = domConstruct.create("a", {
        "class": "dropdown-toggle",
        "href": "#",
        "data-toggle": "dropdown",
        "aria-haspopup": true,
        "aria-expanded": true,
        title: string.substitute(i18n.item.actions.titleFormat, {action: i18n.item.actions.links, title: item.title}),
        "aria-label": string.substitute(i18n.item.actions.titleFormat, {action: i18n.item.actions.links, title: item.title}),
        innerHTML: i18n.item.actions.links
      },dd);
      domConstruct.create("span", {
        "class": "caret"
      }, ddbtn);

      var ddul = domConstruct.create("ul", {
        "class": "dropdown-menu",
      }, dd);

      array.forEach(links, function(u) {
        var ddli = domConstruct.create("li", {}, ddul);
        domConstruct.create("a",{
          "class": "small",
          href: u,
          target: "_blank",
          title: string.substitute(i18n.item.actions.titleFormat, {action: u, title: item.title}),
          "aria-label": string.substitute(i18n.item.actions.titleFormat, {action: u, title: item.title}),
          innerHTML: u
        },ddli);
      });
      this._mitigateDropdownClip(dd, ddul);
    },

    _renderOptionsDropdown: function(itemId,item) {
      var self = this;
      var isOwner = this._isOwner(item);
      var isAdmin = AppContext.appUser.isAdmin();
      var isPublisher = AppContext.appUser.isPublisher();
      var supportsApprovalStatus = AppContext.geoportal.supportsApprovalStatus;
      var supportsGroupBasedAccess = AppContext.geoportal.supportsGroupBasedAccess;
      var links = [];

      if (this._canEditMetadata(item, isOwner, isAdmin, isPublisher)) {
        /*  
        var text = null;

        if (item.sys_approval_status_s != i18n.approvalStatus.approved) {
          text = i18n.item.actions.options.editMetadata;
        } else {
          text = i18n.item.actions.options.viewMetadata;
        }
        */

        links.push(domConstruct.create("a", {
          "class": "small",
          href: "javascript:void(0)",
          innerHTML: i18n.item.actions.options.editMetadata,
          onclick: function() {
            var editor = new MetadataEditor({itemId: itemId, approvalStatus: item.sys_approval_status_s});
            editor.show();
          }
        }));
      }

      var canManage = ((isOwner && isPublisher) || isAdmin);

      if (canManage) {
        links.push(domConstruct.create("a", {
          "class": "small",
          href: "javascript:void(0)",
          innerHTML: i18n.item.actions.options.uploadMetadata,
          onclick: function() {
            (new UploadMetadata({itemId: itemId})).show();
          }
        }));

        links.push(domConstruct.create("a", {
          "class": "small",
          href: "javascript:void(0)",
          innerHTML: i18n.item.actions.options.uploadData,
          onclick: function() {
            (new UploadData({itemId: itemId})).show();
          }
        }));

        /* 
        links.push(domConstruct.create("a", {
          "class": "small",
          href: "javascript:void(0)",
          innerHTML: i18n.item.actions.options.uploadDataMetadata,
          onclick: function() {
            (new UploadDataMetadata({itemId: itemId})).show();
          }
        }));
        */
      }

      if (isAdmin) {
        links.push(domConstruct.create("a", {
          "class": "small",
          href: "javascript:void(0)",
          innerHTML: i18n.content.changeOwner.caption,
          onclick: function() {
            var dialog = new ChangeOwner({item: item, itemCard: self});
            dialog.show();
          }
        }));
      }

      if (supportsApprovalStatus && canManage) {
        links.push(domConstruct.create("a", {
          "class": "small",
          href: "javascript:void(0)",
          innerHTML: i18n.content.setApprovalStatus.caption,
          onclick: function() {
            var dialog = new SetApprovalStatus({item: item, itemCard: self});
            dialog.show();
          }
        }));
      }

      if (supportsGroupBasedAccess && canManage) {
        links.push(domConstruct.create("a", {
          "class": "small",
          href: "javascript:void(0)",
          innerHTML: i18n.content.setAccess.caption,
          onclick: function() {
            var dialog = new SetAccess({item: item, itemCard: self});
            dialog.show();
          }
        }));
      }

      if (canManage && AppContext.appConfig.edit && AppContext.appConfig.edit.setField &&
          AppContext.appConfig.edit.setField.allow &&
          (isAdmin || !AppContext.appConfig.edit.setField.adminOnly)) {
        links.push(domConstruct.create("a", {
          "class": "small",
          href: "javascript:void(0)",
          innerHTML: i18n.content.setField.caption,
          onclick: function() {
            var dialog = new SetField({item: item, itemCard: self});
            dialog.show();
          }
        }));
      }

      if (canManage) {
        links.push(domConstruct.create("a",{
          "class": "small",
          href: "javascript:void(0)",
          innerHTML: i18n.content.deleteItems.caption,
          onclick: function() {
            var dialog = new DeleteItems({item: item, itemCard: self});
            dialog.show();
          }
        }));
      }

//      if (canManage) {
//        links.push(domConstruct.create("a",{
//          "class": "small",
//          href: "javascript:void(0)",
//          innerHTML: i18n.item.actions.options.deleteItem,
//          onclick: function() {
//            var dialog = new ConfirmationDialog({
//              title: i18n.item.actions.options.deleteItem,
//              content: item.title,
//              okLabel: i18n.general.del,
//              status: "danger"
//            });
//            dialog.show().then(function(ok){
//              if (ok) {
//                dialog.okCancelBar.showWorking(i18n.general.deleting,false);
//                var client = new AppClient();
//                client.deleteItem(itemId).then(function(response){
//                  topic.publish(appTopics.ItemDeleted,{
//                    itemId: itemId,
//                    searchPane: self.searchPane
//                  });
//                  self.domNode.style.display = "none";
//                  dialog.hide();
//                }).otherwise(function(error){
//                  var msg = i18n.general.error;
//                  console.warn("deleteItem.error",error);
//                  dialog.okCancelBar.showError(msg,false);
//                });
//              }
//            });
//          }
//        }));
//      }

      if (links.length === 0) return;

      var dd = domConstruct.create("div", {
        "class": "dropdown",
        "style": "display:inline-block;"
      }, this.actionsNode);

      var ddbtn = domConstruct.create("a", {
        "class": "dropdown-toggle",
        "href": "#",
        "data-toggle": "dropdown",
        "aria-haspopup": true,
        "aria-expanded": true,
        innerHTML: i18n.item.actions.options.caption
      }, dd);

      domConstruct.create("span", {
        "class": "caret"
      }, ddbtn);

      var ddul = domConstruct.create("ul",{
        "class": "dropdown-menu",
      }, dd);

      array.forEach(links,function(link) {
        var ddli = domConstruct.create("li", {}, ddul);
        ddli.appendChild(link);
      });

      this._mitigateDropdownClip(dd, ddul);
    },

    _renderOwnerAndDate: function(item) {
      // Specific to MPA
      // Display organisation instead of owner
      // var owner = item.sys_owner_s;
      var organisation = item.apiso_OrganizationName_txt;
      var date = item.sys_modified_dt;
      var title = item.title;
      var approvalStatus = "";
      var permissions = "";
     
      if (typeof date === "string" && date.length > 0) {
        var idx = date.indexOf("T");
        if (idx > 0) date = date.substring(0,idx);
        text = date;
      }

      if (AppContext.appUser.isAdmin() || this._isOwner(item)) {
        if (AppContext.geoportal.supportsGroupBasedAccess) {
          v = item.sys_access_s;
          if (text.length > 0) text += " - ";
          if (v === "private") {
            permissions = i18n.content.setAccess._private;
          } else {
            permissions = i18n.content.setAccess._public;
          }
        }

        if (AppContext.appConfig.searchResults.showApprovalStatus &&
          AppContext.geoportal.supportsApprovalStatus) {
          v = item.sys_approval_status_s;
          if (typeof v === "string" && v.length > 0) {
            v = i18n.content.setApprovalStatus[v];
          }
          if (typeof v === "string" && v.length > 0) {
            if (text.length > 0) text += " - ";
            approvalStatus = v;

            if (title.includes("Archived")) {
              approvalStatus = "Deprecated";
            }
          }
        }
      }

      /* 
      if (text.length > 0) {
        util.setNodeText(this.ownerAndDateNode, text);
      }
      */

      // set individual fields
      /* 
      if (AppContext.appConfig.searchResults.showOwner) {
        if (owner.length > 0) {
          util.setNodeText(this.ownerNode, owner);
        } else {
          util.setNodeText(this.ownerNode, i18n.item.notAvailable);
        }
      } else {
        domStyle.set(this.ownerSection, "display", "none")
      }
      */

      // Specific to MPA
      // Display Organisation instead of Owner
      if (AppContext.appConfig.searchResults.showOrganisation) {
        if (organisation.length > 0) {
          util.setNodeText(this.ownerNode, organisation);
        } else {
          util.setNodeText(this.ownerNode, i18n.item.notAvailable);
        }
      } else {
        domStyle.set(this.ownerSection, "display", "none")
      }

      if (AppContext.appConfig.searchResults.showDate) {
        if (date.length > 0) {
          util.setNodeText(this.dateNode, date);
        } else {
          util.setNodeText(this.dateNode, i18n.item.notAvailable);
        }
      } else {
        domStyle.set(this.dateSection, "display", "none")
      }

      if (AppContext.appConfig.searchResults.showAccess) {
        if (permissions.length > 0) {
          util.setNodeText(this.permissionsNode, permissions);
        } else {
          util.setNodeText(this.permissionsNode, i18n.item.notAvailable);
        }
      } else {
        domStyle.set(this.permissionSection, "display", "none")
      }

      if (AppContext.appConfig.searchResults.showApprovalStatus) {
        if (approvalStatus.length > 0) {
          util.setNodeText(this.approvalStatusNode, approvalStatus);
        } else {
          util.setNodeText(this.approvalStatusNode, i18n.item.notAvailable);
        }
      } else {
        domStyle.set(this.approvalStatusSection, "display", "none")
      }
    },

    /* 	  
    _renderDataClassification: function(classification) {
      console.log(classification);
      var dataClassificationNode = this.dataClassificationNode;
      util.setNodeText(dataClassificationNode, classification);
    },
    */

    _renderThumbnail: function(item) {
      var show = AppContext.appConfig.searchResults.showThumbnails;
      var thumbnailNode = this.thumbnailNode;
      if (show && typeof item.thumbnail_s === "string" && item.thumbnail_s.indexOf("http") === 0) {
        setTimeout(function() {
          thumbnailNode.src = util.checkMixedContent(item.thumbnail_s);
        }, 1);
      } else {
        thumbnailNode.style.display = "none";
      }
      // thumbnailNode.src = "http://placehold.it/80x60";
    },

    _uniqueLinks: function(item) {
      var links = [];
      if (typeof item.links_s === "string") {
        links = [item.links_s];
      } else if (lang.isArray(item.links_s)) {
        array.forEach(item.links_s, function(u) {
          if (links.indexOf(u) === -1) links.push(u);
        });
      }
      return links;
    },

    _renderServiceStatus: function(item) {
      var type;
      var authKey = AppContext.appConfig.statusChecker.authKey;
      if (authKey && string.trim(authKey).length > 0) {
        if (item && item.resources_nst) {
          if (item.resources_nst.length) {
            for (var i = 0; i < item.resources_nst.length; i++) {
              type = this._translateService(item.resources_nst[i].url_type_s);
              if (type) {
                this._checkService(item._id, type);
                break;
              }
            }
          } else {
            type = this._translateService(item.resources_nst.url_type_s);
            if (type) {
              this._checkService(item._id, type);
            }
          }
        }
      }
    },

    _checkService: function(id, type) {
      console.log("Service check for: ", id, type);
      xhr.get("viewer/proxy.jsp?" + AppContext.appConfig.statusChecker.apiUrl, {
        query: {
          auth: AppContext.appConfig.statusChecker.authKey,
          type: type,
          id: id
        },
        handleAs: "json"
      }).then(lang.hitch({self: this, id: id, type: type}, this._drawStatusIcon));
    },

    _drawStatusIcon: function(response) {
      if (response.error) {
        console.error(response.error);
      } else if (response.data != null && response.data.constructor == Array && response.data.length > 0) {
        var score = response.data[0].summary.scoredTest.currentScore;
        this.self._setServiceCheckerIcon(score, this.id, this.type);
      }
    },

    _setServiceCheckerIcon: function(score, id, type) {
      console.log("SCORE", score);
      var imgSrc;
      var info;
      if(!score || score < 0) {
        imgSrc = "Unknown16.png";
        info = i18n.item.statusChecker.unknown;
      } else if(score <= 25) {
        imgSrc = "VeryBad16.png";
      } else if(score <= 50 ) {
        imgSrc = "Bad16.png";
      } else if(score <= 75 ) {
        imgSrc = "Good16.png";
      } else if(score > 75 && score <= 100) {
        imgSrc = "Excellent16.png";
      } else {
        imgSrc = "Unknown16.png";
        info = i18n.item.statusChecker.unknown;
      }
      if (!info) {
        info = string.substitute(i18n.item.statusChecker.status, {score: score});
      }

      var link = domConstruct.create("a",{
        href: AppContext.appConfig.statusChecker.infoUrl + "?auth=" + AppContext.appConfig.statusChecker.authKey + "&uId=" + id + "&serviceType=" + type,
        target: "_blank",
        alt: info,
        "class": "g-item-status"
      });
      domConstruct.place(link, this.titleNode, "first");

      var iconPlace = domConstruct.create("img", {
        src: "images/serviceChecker" + imgSrc,
        alt: info,
        height: 16,
        width: 16
      });
      domConstruct.place(iconPlace, link);

      var tooltip = new Tooltip({
        connectId: link,
        label: info,
        position: ['below']
      });
      tooltip.startup();
    },

    _translateService: function(service) {
      if (service) {
        service = service.toLowerCase();
        if (this.allowedServices[service]) {
          return this.allowedServices[service];
        }
      }
      return null;
    },

    _renderUrlLinks: function(item) {
      if (AppContext.appConfig.searchResults.showCustomLinks) {
        this._renderUrlLink(item.url_thumbnail_s, i18n.item.actions.urlLinks.thumbnail);
        this._renderUrlLink(item.url_website_s, i18n.item.actions.urlLinks.website);
        this._renderUrlLink(item.url_project_metadata_s, i18n.item.actions.urlLinks.projectMetadata);
        this._renderUrlLink(item.url_granule_s, i18n.item.actions.urlLinks.granule);
        this._renderUrlLink(item.url_http_download_s, i18n.item.actions.urlLinks.downloadHTTP);
        this._renderUrlLink(item.url_ftp_download_s, i18n.item.actions.urlLinks.downloadFTP);
      }
    },

    _renderUrlLink: function(href, caption) {
      var actionsNode = this.actionsNode;

      if (href && href.length > 0) {
        var link = domConstruct.create("a", {
          href: href,
          target: "_blank",
          "class": "g-item-status",
          innerHTML: caption
        }, actionsNode);
      }
    },

    _renderId: function (item) {
      /* This node will allow jquery to
      grab identifiers, without having to resort to parsing URLS
      */
      var idNode = this.idNode;
      var esId = item._id;
      var fid = item.fileid;

      dojo.attr(idNode, { 'esId': esId } );

      if (fid) {
        dojo.attr(idNode, { 'fileid': fid } );
      }
    },

    // Specific for MPA
    // Update approval status to 'archived' when src_source_uri_s
    // like SINK:Geoportal/metadata/archive/* 
    // where * === organisation
    _renderUpdatedStatus: function (item) {
      this.metadataSource = item.src_source_uri_s;
      this.metadataApprovalStatus = item.sys_approval_status_s;

      if (this.metadataSource != undefined && this.metadataApprovalStatus != undefined) {
        if (this.metadataSource.includes(i18n.archivedSource) 
          && this.metadataApprovalStatus != i18n.approvalStatus.archived) {
          // this.makeRequestParams();
		      // this.applyLocally(item);
          this._save(this.metadataXmlString, item._id);
        }
      }
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
        sys_approval_status_s: "archived",
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

    _renderTitleLink: function(itemId, item) {
      var v = item.sys_metadatatype_s;
      if (typeof v === "string" && v === "json") {
        util.setNodeText(this.titleNode, item.title);
      } else {
        var titleNode = this.titleNode;
        var uri = "./rest/metadata/item/" + encodeURIComponent(itemId);
        var htmlNode = domConstruct.create("a", {
          href: uri + "/html",
          target: "_blank",
          title: item.title,
          "aria-label": item.title,
          innerHTML: item.title
        }, titleNode);
      }
    }
  });

  return oThisClass;
});