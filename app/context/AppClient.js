define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/Deferred",
        "dojo/request",
        "dojo/request/xhr",
        "dojo/dom-construct",
        "esri/tasks/Geoprocessor",
        "esri/request",
        "esri/tasks/query", 
        "esri/tasks/QueryTask"],
function(declare, lang, Deferred, dojoRequest, xhr, domConstruct, Geoprocessor, esriRequest, Query, QueryTask) {

  var oThisClass = declare(null, {

    constructor: function(args) {
      lang.mixin(this, args);
    },
    
    appendAccessToken: function(url) {
      var accessToken = this.getAccessToken();
      if (accessToken) {
        if (typeof url === "string") {
          if (url.indexOf("?") === -1) url += "?";
          else url += "&";
          url += "access_token=" + encodeURIComponent(accessToken);
        } else {
          url.access_token = accessToken;
        }
      }
      return url;
    },
    
    checkError: function(error) {
      if (error && error.response && error.response.data && error.response.data.error) {
        return error.response.data.error;
      }
    },
    
    getAccessToken: function() {
      var tkn = AppContext.appUser.appToken;
      if (tkn && tkn.access_token) return tkn.access_token;
      return null;
    },
    
    getBaseUri: function() {
      return ".";
    },
    
    getRestUri: function() {
      return "./rest";
    },
    
    /* ===================================================================== */
    
    bulkChangeOwner: function(owner, newOwner) {
      var url = this.getRestUri() + "/metadata/bulk/changeOwner";
      url += "?owner=" + encodeURIComponent(owner);
      url += "&newOwner=" + encodeURIComponent(newOwner);
      url = this.appendAccessToken(url);
      var info = {handleAs: "json"};
      return dojoRequest.put(url, info);
    },
    
    bulkEdit: function(action, urlParams, postData, dataContentType) {
      var url = this.getRestUri() + "/metadata/" + action;
      this.appendAccessToken(urlParams);
      var options = {
        handleAs: "json",
        query: urlParams
      };
      if (postData) {
        options.data = postData;
        if (dataContentType) {
          options.headers = {"Content-Type": dataContentType};
        }
      }
      return dojoRequest.put(url, options);
    },
    
    changeOwner: function(id, newOwner) {
      var url = this.getRestUri() + "/metadata/item/";
      url += encodeURIComponent(id) + "/owner/" + encodeURIComponent(newOwner);
      url = this.appendAccessToken(url);
      var info = {handleAs: "json"};
      return dojoRequest.put(url, info);
    },

    deleteItem: function(id) {
      var url = this.getRestUri() + "/metadata/item/";
      url += encodeURIComponent(id);
      url = this.appendAccessToken(url);
      var info = {handleAs: "json"};
      return dojoRequest.del(url, info);
    },
    
    generateToken: function(username, password) {
      // TODO needs to be https
      var url = this.getBaseUri() + "/oauth/token";
      var content = {
        grant_type: "password",
        client_id: "geoportal-client",
        username: username,
        password: password
      };
      var info = {handleAs: "json", data: content, headers: {Accept: "application/json"}};
      return dojoRequest.post(url, info);
    },

    pingGeoportal: function(accessToken) {
      var url = this.getRestUri() + "/geoportal";
      var info = {handleAs: "json"};
      if (!accessToken) accessToken = this.getAccessToken();
      if (accessToken) info.query = {access_token: encodeURIComponent(accessToken)};
      return dojoRequest.get(url, info);
    },
    
    readMetadata: function(itemId) {
      var url = this.getRestUri() + "/metadata/item";
      url += "/" + encodeURIComponent(itemId) + "/xml";
      url = this.appendAccessToken(url);
      var info = {handleAs: "text"};
      return dojoRequest.get(url, info);
    },

    readMetadataXML: function(itemId) {
      var url = this.getRestUri() + "/metadata/item";
      url += "/" + encodeURIComponent(itemId) + "/xml";
      url = this.appendAccessToken(url);
      var info = {handleAs: "xml"};
      return dojoRequest.get(url, info);
    },

    readMetadataJson: function(itemId) {
      var url = this.getRestUri()+ "/metadata/item";
      url += "/" + encodeURIComponent(itemId);
      url = this.appendAccessToken(url);
      var info = {handleAs: "json"};
      return dojoRequest.get(url, info);
    },
    
    uploadMetadata: function(xml, itemId, filename) {
      var url = this.getRestUri() + "/metadata/item";
      if (typeof itemId === "string" && itemId.length > 0) {
        url += "/" + encodeURIComponent(itemId);
      }
      url = this.appendAccessToken(url);
      if (typeof filename === "string" && filename.length > 0) {
        if (url.indexOf("?") === -1) url += "?";
        else url += "&";
        url += "filename=" + encodeURIComponent(filename);
      }
      var headers = {"Content-Type": "application/xml"};
      var info = {handleAs: "json", headers: headers, data: xml};
      return dojoRequest.put(url, info);
    },

    // Specific to MPA
    uploadData: function (userName, itemIdData, itemIdMetadata) {
      var baseRestURL = "https://mpa.esrisg.dev/arcgis/rest/services/Geoportal";
      var APIPath = "/UploadScript/GPServer/UploadScript/submitJob";
      var url = baseRestURL + APIPath;

      var postData = new FormData();
      postData.append("f", "pjson");
      postData.append("uploaded_by", userName);
      postData.append("data_file", "{\"itemID\": \"" + itemIdData + "\"}");
      postData.append("metadata_file", "{\"itemID\": \"" + itemIdMetadata + "\"}");
      
      return esriRequest({url: url, method: "post", handleAs: "json", form: postData});
    },

    uploadNewCardData: function (userName, itemIdData, itemIdMetadata) {
      var baseRestURL = "https://mpa.esrisg.dev/arcgis/rest/services/Gptools";
      var APIPath = "/NewCardScript/GPServer/NewItemScript/submitJob";
      var url = baseRestURL + APIPath;

      var postData = new FormData();
      postData.append("f", "pjson");
      postData.append("uploaded_by", userName);
      postData.append("data_file", "{\"itemID\": \"" + itemIdData + "\"}");
      postData.append("metadata_file", "{\"itemID\": \"" + itemIdMetadata + "\"}");
      
      return esriRequest({url: url, method: "post", handleAs: "json", form: postData});
    },

    uploadDataGP: function(userName, itemIdData, itemIdMetadata) {
      var baseRestURL = "https://mpa.esrisg.dev/arcgis/rest/services/Geoportal";
      var APIPath = "/UploadScript/GPServer/UploadScript/submitJob";
      var url = baseRestURL + APIPath;
      var gp = new Geoprocessor(url);

      var postData = new FormData();
      postData.append("f", "json");
      postData.append("uploaded_by", userName);
      postData.append("data_file", "{\"itemID\": \"" + itemIdData + "\"}");
      postData.append("metadata_file", "{\"itemID\": \"" + itemIdMetadata + "\"}");
      
      var headers = {
        "Content-Type": "multi-part/form-data"
      };
      var info = {
        handleAs: "json",
        headers: headers,
        data: JSON.stringify(postData)
      };

      return gp.submitJob(info);
    },

    uploadFile: function (file, fileName) {
      var baseRestURL = "https://mpa.esrisg.dev/arcgis/rest/services/Geoportal";
      var APIPath = "/UploadScript/GPServer/uploads/upload";
      var url = baseRestURL + APIPath;
      
      var postData = new FormData();
      console.log(file);
      postData.append("file", file, fileName);
      postData.append("f", "json");

      return esriRequest({url: url, method: "post", handleAs: "json", form: postData});
    },

    uploadNewCardFile: function (file, fileName) {
      var baseRestURL = "https://mpa.esrisg.dev/arcgis/rest/services/Gptools";
      var APIPath = "/NewCardScript/GPServer/uploads/upload";
      var url = baseRestURL + APIPath;
      
      var postData = new FormData();
      console.log(file);
      postData.append("file", file, fileName);
      postData.append("f", "json");

      return esriRequest({url: url, method: "post", handleAs: "json", form: postData});
    },

    uploadMetadataFile: function (xmlData, title) {
      var baseRestURL = "https://mpa.esrisg.dev/arcgis/rest/services/Geoportal";
      var APIPath = "/UploadScript/GPServer/uploads/upload";
      var url = baseRestURL + APIPath;

      var formNode = domConstruct.create("form", {"method": "post", "enctype": "multipart/form-data"});
      var formData = new FormData(formNode);
      var blob = new Blob([xmlData], {type: "application/xml"});
      var file = new File([blob], title, {type: "application/xml", name: title, lastModifiedDate: Date.now()});
      console.log(file);
      formData.append("file", file, title);
      formData.append("f", "json");

      return esriRequest({url: url, method: "post", handleAs: "json", form: formData});
    },

    uploadNewCardMetadataFile: function (file, fileName) {
      var baseRestURL = "https://mpa.esrisg.dev/arcgis/rest/services/Gptools";
      var APIPath = "/NewCardScript/GPServer/uploads/upload";
      var url = baseRestURL + APIPath;

      var postData = new FormData();
      postData.append("file", file, fileName);
      postData.append("f", "json");

      return esriRequest({url: url, method: "post", handleAs: "json", form: postData});
    },

    completeCallback: function(jobInfo) {
      var status = jobInfo.jobStatus;
      if (status == "esriJobSuceeded") {
        console.log("success, jobId:" + jobInfo.jobId);  
        var results = gp.getResultData(jobInfo.jobId, "out_feature_class", onTaskResultComplete);  
        console.log("past getResultsData");  
        console.log(results);  
      }
    },

    statusCallback: function(jobInfo) {
      console.log(jobInfo.jobStatus);
    },

    errorCallback: function(error) {
      console.error("Error: " + error);
    },

    createRequest: function (requestor, itemId, status) {
      var baseRestURL = "https://mpa.esrisg.dev/arcgis/rest/services/Geoportal";
      var APIPath = "/ConfidentialScript/GPServer/ConfidentialScript/submitJob";
      var url = baseRestURL + APIPath;
      
      var postData = new FormData();
      postData.append("requestor", requestor);
      postData.append("identifier", itemId);
      postData.append("status", status);
      postData.append("f", "json");

      return esriRequest({url: url, method: "post", handleAs: "json", form: postData});
    },

    getRequestByFileId: function (fileId) {
      var queryTask = new QueryTask("https://mpa.esrisg.dev/arcgis/rest/services/Hosted/ConfidentialTable/FeatureServer/0");
      var query = new Query();
      query.returnGeometry = false;
      query.outFields = ["*"];
      query.where = "file_id = '" + fileId + "'";

      return queryTask.execute(query);
    },

    getRequestByFileIdAndRequestor: function (fileId, requestor) {
      var queryTask = new QueryTask("https://mpa.esrisg.dev/arcgis/rest/services/Hosted/ConfidentialTable/FeatureServer/0");
      var query = new Query();
      query.returnGeometry = false;
      query.outFields = ["*"];
      query.where = "file_id = '" + fileId + "' AND requestor = '" + requestor + "'";

      return queryTask.execute(query);
    },
	
	  createAuditTrail: function (auditTrailTypeId, actionToId, remark, notes, createdBy) {
      var baseRestURL = "https://mpa.esrisg.dev/arcgis/rest/services/Geoportal";
      var APIPath = "/AuditTrailScript/GPServer/AuditTrailScript/create";
      var url = baseRestURL + APIPath;
      // url = this.appendAccessToken(url);

      var postData = new FormData();
      postData.append("auditTrailTypeId", auditTrailTypeId);
      postData.append("actionToId", actionToId);
      postData.append("remark", remark);
      postData.append("notes", notes);
      postData.append("createdBy", createdBy)

      var headers = {
        "Content-Type": "application/json"
      };
      var info = {
        handleAs: "html",
        headers: headers,
        data: JSON.stringify(postData)
      };

      return xhr.post(url, info);
    }
 
  });

  return oThisClass;
});
