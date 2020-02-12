define(["dojo/_base/declare", 
        "dojo/_base/lang",
        "./MpaDescriptor",
        "esri/dijit/metadata/form/Element",
        "esri/dijit/metadata/form/Tabs",
        "app/gxe/types/mpa/gmd/dataQuality/DataQuality",
        "app/gxe/types/mpa/gmd/distribution/Distribution",
        "app/gxe/types/mpa/gmd/identification/DataIdentification",
        "app/gxe/types/mpa/gmd/metadataEntity/MetadataSection",
        "dojo/text!./templates/DataRoot.html"],
function(declare, lang, Descriptor, Element, Tabs, Quality, Distribution, 
  DataIdentification, MetadataSection, template) {

  var oThisClass = declare(Descriptor, { 
    templateString: template
  });

  return oThisClass;
});