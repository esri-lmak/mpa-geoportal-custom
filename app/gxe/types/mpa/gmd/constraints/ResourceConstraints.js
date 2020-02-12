define(["dojo/_base/declare", 
        "dojo/_base/lang", 
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has", 
        "app/gxe/types/mpa/base/MpaDescriptor", 
        "esri/dijit/metadata/form/ElementChoice",
        "esri/dijit/metadata/form/Section", 
        "esri/dijit/metadata/form/iso/ObjectReference",
        "app/gxe/types/mpa/gmd/constraints/MD_LegalConstraints", 
        "app/gxe/types/mpa/gmd/constraints/MD_SecurityConstraints",
        "dojo/text!./templates/ResourceConstraints.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, ElementChoice, 
    Section, ObjectReference, MD_LegalConstraints, MD_SecurityConstraints, template) {

    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});