define(["dojo/_base/declare", 
        "dojo/_base/lang", 
        "dijit/_TemplatedMixin",
        "dojo/has", 
        "app/gxe/types/mpa/base/MpaDescriptor", 
        "esri/dijit/metadata/form/Element",
        "esri/dijit/metadata/form/iso/AbstractObject",
        "esri/dijit/metadata/form/iso/CodeListReference",
        "esri/dijit/metadata/form/iso/GcoElement",
        "dojo/text!./templates/MD_LegalConstraints.html"],
function (declare, lang, _TemplatedMixin, has, Descriptor, g, h, k, l, template) {
    
    var oThisClass = declare([Descriptor, _TemplatedMixin], {
        templateString: template
    });
    return oThisClass
});