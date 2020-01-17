define(["dojo/_base/declare", 
        "dojo/_base/lang", 
        "dijit/_TemplatedMixin",
        "dojo/has", 
        "app/gxe/types/mpa/base/MpaDescriptor", 
        "esri/dijit/metadata/form/ElementChoice",
        "esri/dijit/metadata/form/Section", 
        "esri/dijit/metadata/form/iso/ObjectReference",
        "./MD_LegalConstraints", 
        "./MD_SecurityConstraints",
        "dojo/text!./templates/ResourceConstraints.html"],
function (declare, lang, _TemplatedMixin, has, Descriptor, g, h, k, l, m, template) {

    var oThisClass = declare([Descriptor, _TemplatedMixin], {
        templateString: template
    });
    return oThisClass
});