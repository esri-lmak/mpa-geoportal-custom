
define(["dojo/_base/declare", 
        "dojo/_base/lang",
        "dijit/_TemplatedMixin",
        "dojo/has", 
        "app/gxe/types/mpa/base/MpaDescriptor",
        "esri/dijit/metadata/form/Element", 
        "esri/dijit/metadata/form/iso/AbstractObject", 
        "esri/dijit/metadata/form/iso/CodeListReference", 
        "esri/dijit/metadata/form/iso/GcoElement", 
        "esri/dijit/metadata/form/iso/ObjectReference", 
        "esri/dijit/metadata/types/iso/gmd/citation/CI_RoleCode", 
        "dojo/text!./templates/MetadataContact.html"],
function (declare, lang, _TemplatedMixin, has, Descriptor, g, h, k, l, m, n, template) {

    var oThisClass = declare([Descriptor, _TemplatedMixin], {
        templateString: template
    });
    return oThisClass
});