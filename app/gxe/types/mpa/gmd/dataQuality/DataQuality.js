define(["dojo/_base/declare", 
        "dojo/_base/lang", 
        "dijit/_TemplatedMixin",
        "dojo/has", 
        "app/gxe/types/mpa/base/MpaDescriptor", 
        "esri/dijit/metadata/form/Tabs", 
        "esri/dijit/metadata/form/iso/AbstractObject", 
        "esri/dijit/metadata/form/iso/ObjectReference", 
        "esri/dijit/metadata/types/iso/gmd/dataQuality/ConformanceReport",
        "esri/dijit/metadata/types/iso/gmd/dataQuality/Lineage",
        "dojo/text!./templates/DataQuality.html"],
function (declare, lang, _TemplatedMixin, has, Descriptor, g, h, k, l, m, template) {

    var oThisClass = declare([Descriptor, _TemplatedMixin], {
        templateString: template
    });
    return oThisClass
});