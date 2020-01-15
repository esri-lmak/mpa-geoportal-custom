define(["dojo/_base/declare", 
        "dojo/_base/lang",
        "./MpaDescriptor",
        "esri/dijit/metadata/form/Element",
        "esri/dijit/metadata/form/Tabs",
        "esri/dijit/metadata/types/iso/gmd/dataQuality/Quality",
        "esri/dijit/metadata/types/iso/gmd/distribution/Distribution",
        "esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataSection",
        "esri/dijit/metadata/types/iso/srv/ServiceIdentification",
        "dojo/text!./templates/ServiceRoot.html"],
function(declare, lang, Descriptor, Element, Quality, Distribution, 
  MetadataSection, ServiceIdentification, template) {

  var oThisClass = declare(Descriptor, {
    
    templateString: template
    
  });
  
  return oThisClass;
});