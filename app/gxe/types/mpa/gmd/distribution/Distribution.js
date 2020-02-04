define(["dojo/_base/declare", 
        "dojo/_base/lang", 
        "dijit/_TemplatedMixin",
        "dojo/has", 
        "app/gxe/types/mpa/base/MpaDescriptor",  
        "esri/dijit/metadata/form/iso/AbstractObject",
        "esri/dijit/metadata/form/iso/ObjectReference",
        "esri/dijit/metadata/types/gmd/distribution/DistributionFormat",
        "app/gxe/types/mpa/iso/gmd/distribution/TransferOptions",
        "dojo/text!./templates/Distribution.html"],
function (declare, lang, _TemplatedMixin, has, Descriptor, g, h, k, l, template) {

    var oThisClass = declare([Descriptor, _TemplatedMixin], {
        templateString: template
    });
    return oThisClass
});