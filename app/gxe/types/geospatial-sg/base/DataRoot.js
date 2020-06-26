define(["dojo/_base/declare", 
        "dojo/_base/lang",
        "./GeoSgDescriptor",
        "esri/dijit/metadata/form/Element",
        "esri/dijit/metadata/form/Tabs",
        "app/gxe/types/geospatial-sg/gmd/generalInformation/GeneralInformation",
        "app/gxe/types/geospatial-sg/gmd/metadataIdentification/MetadataIdentification",
        "app/gxe/types/geospatial-sg/gmd/distributionInformation/Distribution",
        "app/gxe/types/geospatial-sg/gmd/entityAndAttribute/EntityAndAttribute",
        "app/gxe/types/geospatial-sg/gmd/dataQuality/DataQuality",
        "app/gxe/types/geospatial-sg/gmd/others/Others",
        "dojo/text!./templates/DataRoot.html"],
function(declare, lang, Descriptor, Element, Tabs, GeneralInformation, DataIdentification, 
  DistributionInformation, EntityAndAttribute, DataQuality, Others, template) {

  var oThisClass = declare(Descriptor, { 
    templateString: template
  });

  return oThisClass;
});