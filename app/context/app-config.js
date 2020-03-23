define([],function(){var obj={
// .......................................................................................
  
  system: {
    searchLimit: 10000
  },
  
  edit: {
    setField: {
      allow: false,
      adminOnly: true
    }
  },
  
  bulkEdit: {
    allowByOwner: true,
    allowBySourceUri: true,
    allowByTaskRef: true,
    allowByQuery: true
  },
  
  search: {
    allowSettings: true,
    useSimpleQueryString: false
  },
  
  searchMap: {
    basemap: "https://mpa.esrisg.dev/arcgis/rest/services/Hosted/World_Imagery/MapServer",
    autoResize: true, 
    wrapAround180: true,
    center: [103.81, 1.3], 
    zoom: 10
  },
  
  searchResults: {
    numPerPage: 10,
    showDate: true,
    showOwner: true,
    showThumbnails: true,
    showAccess: true,
    showApprovalStatus: true,
    defaultSort: "title.sort:asc",
    showLinks: true,
    showCustomLinks: false,
    showOpenSearchLinks: false
  },
  
  statusChecker: {
    apiUrl: "http://registry.fgdc.gov/statuschecker/api/v2/results?",
    infoUrl: "http://registry.fgdc.gov/statuschecker/ServiceDetail.php?",
    authKey: null
  }
  
// .......................................................................................
};return obj;});