define(["dojo/_base/declare", 
        "dojo/_base/lang", 
        "dijit/_TemplatedMixin",
        "dojo/has", 
        "app/gxe/types/mpa/base/MpaDescriptor",  
        "esri/dijit/metadata/form/Tabs",
        "esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataIdentifier",
        "app/gxe/types/mpa/gmd/metadataEntity/MetadataContact",
        "app/gxe/types/mpa/gmd/metadataEntity/MetadataDate",
        "esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataStandard",
        "esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataReference", 
        "dojo/text!./templates/MetadataSection.html"],
function (declare, lang, _TemplatedMixin, has, Descriptor, Tabs, g, h, k, l, m, template) {

    var oThisClass = declare([Descriptor, _TemplatedMixin], {
        templateString: template
    });
    return oThisClass
});