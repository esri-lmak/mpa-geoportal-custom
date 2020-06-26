define(["dojo/_base/declare", 
        "dojo/_base/lang", 
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has", 
        "app/gxe/types/geospatial-sg/base/GeoSgDescriptor", 
        "esri/dijit/metadata/form/Tabs", 
        "esri/dijit/metadata/form/iso/AbstractObject", 
        "esri/dijit/metadata/form/iso/ObjectReference", 
        "esri/dijit/metadata/form/Element",
        "esri/dijit/metadata/form/InputSelectOne",
        "esri/dijit/metadata/form/Options",
        "esri/dijit/metadata/form/Option",
        "esri/dijit/metadata/form/iso/GcoElement",
        "dojo/text!./templates/DataQualityScope.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, Tabs, AbstractObject, ObjectReference, 
    Element, InputSelectOne, Options, Option, GcoElement, template) {

    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});