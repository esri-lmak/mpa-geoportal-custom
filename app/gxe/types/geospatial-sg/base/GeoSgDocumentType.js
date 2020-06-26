define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/dom-construct",
        "esri/dijit/metadata/types/iso/base/IsoDocumentType",
        "./PortalItemTransformer",
        "dojo/i18n!../nls/i18nGeoSg",
        "esri/dijit/metadata/form/InputSelectOne"],
function(declare, lang, domConstruct, DocumentType, PortalItemTransformer, i18nGeoSg,
  InputSelectOne) {

  var oThisClass = declare(DocumentType, {

    caption: null,
    key: null,
    isService: false,
    metadataStandardName: null,
    metadataStandardVersion: null,

    initializeNamespaces: function() {        
      this.addNamespace("rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
      this.addNamespace("dc", "http://purl.org/dc/elements/1.1/");
      this.addNamespace("dct", "http://purl.org/dc/terms/");
      this.addNamespace("ows", "http://www.opengis.net/ows");
      this.addNamespace("gco", "http://www.isotc211.org/2005/gco");
      this.addNamespace("gmd", "http://www.isotc211.org/2005/gmd");
      this.addNamespace("geoSG", "http://www.geoportal.com");
    },
    
    afterInitializeElement: function(gxeDocument, element) {
      var p = element.gxePath;
      
      if (p === "/geoSG:MD_Metadata/geoSG:language/gco:CharacterString") {
        // switch from an input textbox to a dropdown list
        this.switchToLanguageList(gxeDocument,element);
      } else {
        this.inherited(arguments);
      }
    },

    beforeInitializeAttribute: function(gxeDocument, attribute) {
      var p = attribute.gxePath;

      if (!this.isService && (p === "/geoSG:MD_Metadata/geoSG:hierarchyLevel/geoSG:MD_ScopeCode/@codeListValue")) {
        // show only a subset of options
        attribute.optionsFilter = "dataset,series";
      } else if(!this.isService && (p === "/geoSG:MD_Metadata/geoSG:dataQualityInfo/geoSG:DQ_DataQuality/geoSG:DQ_Scope/geoSG:DQ_ScopeQuality/@codeListValue")) {
       // show only a subset of options
        attribute.optionsFilter = "dataset,series";
      } else {
        this.inherited(arguments);
      }
    },

    beforeInitializeElement: function(gxeDocument, element) {
      var p = element.gxePath;

      if (p === "/geoSG:MD_Metadata/geoSG:contact/geoSG:CI_ResponsibleParty/geoSG:contactInfo/geoSG:CI_Contact/geoSG:address/geoSG:CI_Address/geoSG:electronicMailAddress") {
        // change multiplicity
        element.minOccurs = 1;
      } else if (!this.isService && (p === "/geoSG:MD_Metadata/geoSG:generalInformation/geoSG:identifier")) {
        // change multiplicity
        element.minOccurs = 1;
      } else if (p === "/geoSG:MD_Metadata/geoSG:dataQualityInfo") {
        // change multiplicity
        element.minOccurs = 1;
      } else if (p === "/geoSG:MD_Metadata/geoSG:dataQualityInfo/geoSG:DQ_DataQuality/geoSG:DQ_Scope/geoSG:DQ_ScopeQuality") {
        // change multiplicity
        element.minOccurs = 1;
      } else if (this.isService && (p === "/geoSG:MD_Metadata/geoSG:metadataIdentification/geoSG:lineage/geoSG:LI_Lineage/geoSG:statement")) {
        // change multiplicity
        element.minOccurs = 0;
      } else {
        this.inherited(arguments);
      }
    },
    
    newPortalItemTransformer: function(gxeDocument) {
      return new PortalItemTransformer();
    },
    
    switchToLanguageList: function(gxeDocument,element) {
      // switch from an input textbox to a dropdown list
      if (element.inputWidget) element.inputWidget.destroyRecursive(false);
      var iw = new InputSelectOne({},element.containerNode);
      iw.focusNode.add(new Option(i18nGeoSg.language.en,"en"));
      iw.focusNode.add(new Option(i18nGeoSg.language.fi,"fi"));
      iw.focusNode.add(new Option(i18nGeoSg.language.fr,"fr"));
      element.inputWidget = iw;
      iw.parentXNode = element;
      iw.connectXNode(element,false);
    }

  });

  return oThisClass;
});