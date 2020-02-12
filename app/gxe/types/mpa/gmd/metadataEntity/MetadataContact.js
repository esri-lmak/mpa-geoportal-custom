define(["dojo/_base/declare", 
        "dojo/_base/lang",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has", 
        "app/gxe/types/mpa/base/MpaDescriptor",
        "esri/dijit/metadata/form/Element", 
        "esri/dijit/metadata/form/iso/AbstractObject", 
        "esri/dijit/metadata/form/iso/CodeListReference", 
        "esri/dijit/metadata/form/iso/GcoElement", 
        "esri/dijit/metadata/form/iso/ObjectReference", 
        "esri/dijit/metadata/types/iso/gmd/citation/CI_RoleCode", 
        "dojo/text!./templates/MetadataContact.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, Element, 
    AbstractObject, CodeListReference, GcoElement, ObjectReference, CI_RoleCode, template) {

    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});