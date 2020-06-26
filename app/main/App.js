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
        "dojo/topic",
        "app/context/app-topics",
        "app/common/Templated",
        "dojo/text!./templates/App.html",
        "dojo/i18n!../nls/resources",
        "app/etc/util",
        "app/main/SearchPanel",
        "app/main/MapPanel",
        "app/main/Map3DPanel",
        "app/main/FeedbackPanel",
        "app/main/HelpPanel",
        "app/main/AboutPanel",
        "app/content/MetadataEditor",
        "app/content/UploadMetadata",
        "app/content/UploadDataMetadata",
        "app/content/SignUp",
        "app/content/SessionTimeout",
        "app/content/DownloadRequests",
        "app/content/ConfidentialRequests",
        "app/content/UploadRequests",
        "app/content/SignUpRequests",
        "app/content/ManageAnnouncements",
        "app/content/ManageFaqs",
        "app/content/AuditTrail",
        "app/content/Feedback"],
function(declare, lang, topic, appTopics, Templated, template, i18n, util, SearchPanel, MapPanel, Map3DPanel, FeedbackPanel, 
    HelpPanel, AboutPanel, MetadataEditor, UploadMetadata, UploadDataMetadata, SignUp, SessionTimeout,
    DownloadRequests, ConfidentialRequests, UploadRequests, SignUpRequests, ManageAnnouncements, ManageFaqs, AuditTrail, Feedback) {
      
    /* 
    var warningAfter = 180000;
    var signOutAfter = 300000;
    
    window.onload = function(e) { 
      idleLogout();
    };

    function idleLogout() {
      var self = this;
      window.onload = resetTimer();
      window.onmousemove = resetTimer();
      window.onmousedown = resetTimer();  // catches touchscreen presses as well      
      window.ontouchstart = resetTimer(); // catches touchscreen swipes as well 
      window.onclick = resetTimer();      // catches touchpad clicks as well
      window.onkeypress = resetTimer();   
      window.addEventListener('scroll', resetTimer(), true);
    };

    function resetTimer() {
      clearTimeout(warningAfter);
      clearTimeout();

      setTimeout(function() {
        // Display session warning timeout dialog
        (new SessionTimeout()).show();
      }, warningAfter);  

      setTimeout(function() {
        // Logout
        AppContext.appUser.signOut();
      }, signOutAfter);
    }
    */

  var oThisClass = declare([Templated], {

    i18n: i18n,
    templateString: template,

    // Specific to MPA - Session Timeout due to Inactivity
    warningAfter: 180000,
    signOutAfter: 300000,
    // 1 minutes = 60000, 3 minutes = 180000, 5 minutes = 300000, 7 minutes = 420000, 10 minutes = 600000
    // 15 minutes = 900000, 20 minutes = 1200000, 25 minutes = 1500000, 30 minutes = 1800000

    postCreate: function() {
      this.inherited(arguments);
      var self = this;
      this.updateUI();

      var ignoreMapPanelActivated = false;
      var ignoreMap3DPanelActivated = false; 

      $("a[href='#searchPanel']").on("shown.bs.tab", lang.hitch(this, function(e) {
        this.setHash('searchPanel')
      }));

      $("a[href='#mapPanel']").on("shown.bs.tab", lang.hitch(this, function(e) {
        this.setHash('mapPanel')
        if (!ignoreMapPanelActivated && !self.mapPanel.mapWasInitialized) {
          self.mapPanel.ensureMap();
        }
      }));

      $("a[href='#map3DPanel']").on("shown.bs.tab", lang.hitch(this, function(e) {
        this.setHash('map3DPanel')
        if (!ignoreMap3DPanelActivated && !self.map3DPanel.mapWasInitialized) {
          self.map3DPanel.ensureMap();
        }
      }));

      $("a[href='#aboutPanel']").on("shown.bs.tab",lang.hitch(this, function(e) {
        this.setHash('aboutPanel')
      }));

      $("a[href='#feedbackPanel']").on("shown.bs.tab",lang.hitch(this, function(e) {
        this.setHash('feedbackPanel')
      }));

      $("a[href='#helpPanel']").on("shown.bs.tab",lang.hitch(this, function(e) {
        this.setHash('helpPanel')
      }));

      topic.subscribe(appTopics.AddToMapClicked, lang.hitch(this, function(params) {
        if (self.mapPanel.mapWasInitialized) {
          $("a[href='#mapPanel']").tab("show");
          self.mapPanel.addToMap(params);
        } else {
          var urlParams = {resource: params.type + ":" + params.url};
          // TO DO Updated UI version not working below
          // var urlParams = {resource: params.type + ":" + this.normalizeUrl(params.url)};
          ignoreMapPanelActivated = true;
          $("a[href='#mapPanel']").tab("show");
          self.mapPanel.ensureMap(urlParams);
          ignoreMapPanelActivated = false;
        }
      }));

      topic.subscribe(appTopics.SignedIn, function(params) {
        self.updateUI();
      });

      $("#idAppDropdown").on("show.bs.dropdown",function() {
        self.updateUI();
      });

      if (location.hash==null || location.hash.length == 0) {
        this.setHash('searchPanel')
      } else if ( $("a[href='"+location.hash+"']").length > 0) {
        $("a[href='"+location.hash+"']").tab("show");
      }
    },

    /* =================================================================================== */
    
    setHash: function(hash) {
      var el = document.getElementById(hash);
      var id = el.id;
      el.removeAttribute('id');
      location.hash = hash;
      el.setAttribute('id',id);
   },
 
    createMetadataClicked: function() {
      var editor = new MetadataEditor();
      editor.show();
    },

    signInClicked: function() {
      window.sessionStorage.setItem("geoportalSignout", "False");
      AppContext.appUser.showSignIn();
    },

    signOutClicked: function() {
      AppContext.appUser.signOut();
    },

    signUpClicked: function() {
      (new SignUp()).show();
    },

    uploadClicked: function() {
      if (AppContext.appUser.isPublisher()) (new UploadMetadata()).show();
    },
    
    uploadDataMetadataClicked: function() {
      if (AppContext.appUser.isPublisher()) (new UploadDataMetadata()).show();
    },

    downloadRequestsClicked: function() {
      (new DownloadRequests()).show();
    },

    pendingConfidentialRequestsClicked: function() {
      (new ConfidentialRequests()).show();
    },

    pendingUploadRequestsClicked: function() {
      (new UploadRequests()).show();
    },

    pendingSignUpRequestsClicked: function() {
      (new SignUpRequests()).show();
    },

    manageAnnouncementsClicked: function() {
      (new ManageAnnouncements()).show();
    },

    manageFaqsClicked: function() {
      (new ManageFaqs()).show();
    },

    auditTrailClicked: function() {
      (new AuditTrail()).show();
    },

    feedbackClicked: function() {
      (new Feedback()).show();
    },

    editFacetClicked: function() {
      console.warn("TODO provide edit facet functionality in App.js")
    },

    /* =================================================================================== */

    getCreateAccountUrl: function() {
      if (AppContext.geoportal && AppContext.geoportal.createAccountUrl) {
        return util.checkMixedContent(AppContext.geoportal.createAccountUrl);
      }
      return null;
    },

    updateUI: function() {
      var updateHref = function(node,link,href) {
        if (typeof href === "string" && href.length > 0) {
          link.href = href;
          node.style.display = "";
        } else {
          link.href = "#";
          node.style.display = "none";
        }
      };
      var v;
      if (AppContext.appUser.isSignedIn()) {
        v = i18n.nav.welcomePattern.replace("{name}", AppContext.appUser.getUsername());
        util.setNodeText(this.usernameNode, v);
        this.userOptionsNode.style.display = "";
        this.signInNode.style.display = "none";
        this.signOutNode.style.display = "";
        this.signUpNode.style.display = "none";
        // this.adminOptionsBtnNode.style.display = "";
        updateHref(this.createAccountNode, this.createAccountLink, null);
        updateHref(this.myProfileNode, this.myProfileLink, AppContext.appUser.getMyProfileUrl());

        // this.idleLogout();
      } else {
        this.usernameNode.innerHTML = "";
        this.userOptionsNode.style.display = "none";
        this.createAccountNode.style.display = "none";
        this.signInNode.style.display = "";
        this.signOutNode.style.display = "none";
        this.signUpNode.style.display = "";
        // this.adminOptionsBtnNode.style.display = "none";
        updateHref(this.createAccountNode, this.createAccountLink, this.getCreateAccountUrl());
        updateHref(this.myProfileNode, this.myProfileLink, null);
      }

      var isAdmin = AppContext.appUser.isAdmin();
      var isPublisher = AppContext.appUser.isPublisher();
      $("li[data-role='admin']").each(function(i, nd) {
        if (isAdmin) nd.style.display = "";
        else nd.style.display = "none";
      });
      $("li[data-role='publisher']").each(function(i, nd) {
        if (isPublisher) nd.style.display = "";
        else nd.style.display = "none";
      });

      if (!FileReader) {
        this.uploadNode.style.display = "none";
        this.uploadDataMetadataNode.style.display = "none";
      }
    },

    normalizeUrl: function(url) {
      var services = ["mapserver", "imageserver", "featureserver", "streamserver", "vectortileserver"];
      var selSrv = array.filter(services, function(srv) { return url.toLowerCase().indexOf(srv) >= 0; });
      if (selSrv && selSrv.length > 0) {
        var srv = selSrv[0];
        url = url.substr(0, url.toLowerCase().indexOf(srv) + srv.length);
      }
      return url;
    },
    
    _onHome: function() {
      /*
      this.searchPanelLink.click()
      location.hash = "searchPanel"
      */
      window.location = "https://mpa.esrisg.dev/portal/apps/sites/#/landingpage";
    },

    idleLogout: function() {
      var self = this;
      window.onload = self.resetTimer();
      window.onmousemove = self.resetTimer();
      window.onmousedown = self.resetTimer();  // catches touchscreen presses as well      
      window.ontouchstart = self.resetTimer(); // catches touchscreen swipes as well 
      window.onclick = self.resetTimer();      // catches touchpad clicks as well
      window.onkeypress = self.resetTimer();   
      window.addEventListener('scroll', self.resetTimer(), true);
    },

    resetTimer: function() {
      clearTimeout(this.warningAfter);
      clearTimeout(this.signOutAfter);

      setTimeout(function() {
        // Display session warning timeout dialog
        (new SessionTimeout()).show();
      }, this.warningAfter);  

      setTimeout(function() {
        // Logout
        AppContext.appUser.signOut();
      }, this.signOutAfter);
    }

  });

  return oThisClass;
}); 