define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/dom-construct",
        "esri/dijit/metadata/types/iso/base/IsoDocumentType",
        "./PortalItemTransformer",
        "dojo/i18n!../nls/i18nMpa",
        "esri/dijit/metadata/form/InputSelectOne"],
function(declare, lang, domConstruct, DocumentType, PortalItemTransformer, i18nMpa,
  InputSelectOne) {

  var oThisClass = declare(DocumentType, {

    caption: null,
    key: null,
    isService: false,
    metadataStandardName: null,
    metadataStandardVersion: null,
    
    afterInitializeElement: function(gxeDocument, element) {
      var p = element.gxePath;
      
      if (p === "/gmd:MD_Metadata/gmd:language/gco:CharacterString") {
        // switch from an input textbox to a dropdown list
        this.switchToLanguageList(gxeDocument,element);
      } else {
        this.inherited(arguments);
      }
    },

    beforeInitializeAttribute: function(gxeDocument, attribute) {
      var p = attribute.gxePath;

      if (!this.isService && (p === "/gmd:MD_Metadata/gmd:hierarchyLevel/gmd:MD_ScopeCode/@codeListValue")) {
        // show only a subset of options
        attribute.optionsFilter = "dataset,series";
      } else if(!this.isService && (p === "/gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:DQ_Scope/gmd:DQ_ScopeQuality/@codeListValue")) {
       // show only a subset of options
        attribute.optionsFilter = "dataset,series";
      } else {
        this.inherited(arguments);
      }
    },

    beforeInitializeElement: function(gxeDocument, element) {
      var p = element.gxePath;

      if (p === "/gmd:MD_Metadata/gmd:contact/gmd:CI_ResponsibleParty/gmd:contactInfo/gmd:CI_Contact/gmd:address/gmd:CI_Address/gmd:electronicMailAddress") {
        // change multiplicity
        element.minOccurs = 1;
      } else if (!this.isService && (p === "/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification/gmd:identifier")) {
        // change multiplicity
        element.minOccurs = 1;
      } else if (p === "/gmd:MD_Metadata/gmd:dataQualityInfo") {
        // change multiplicity
        element.minOccurs = 1;
      } else if (p === "/gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:DQ_Scope/gmd:DQ_ScopeQuality") {
        // change multiplicity
        element.minOccurs = 1;
      } else if (this.isService && (p === "/gmd:MD_Metadata/gmd:dataQualityInfo/gmd:DQ_DataQuality/gmd:lineage/gmd:LI_Lineage/gmd:statement")) {
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
      iw.focusNode.add(new Option(i18nMpa.language.en,"en"));
      iw.focusNode.add(new Option(i18nMpa.language.fi,"fi"));
      iw.focusNode.add(new Option(i18nMpa.language.fr,"fr"));
      element.inputWidget = iw;
      iw.parentXNode = element;
      iw.connectXNode(element,false);
    }

  });

  return oThisClass;
});