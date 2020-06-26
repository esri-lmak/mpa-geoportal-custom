
define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has",
        "esri/dijit/metadata/types/geospatial-sg/base/GeoSgDescriptor", 
        "esri/dijit/metadata/form/Element",
        "esri/dijit/metadata/form/InputNumber",
        "esri/dijit/metadata/form/iso/AbstractObject",
        "esri/dijit/metadata/form/iso/GcoElement",
        "esri/dijit/metadata/form/iso/GeoExtentTool",
        "esri/dijit/metadata/form/iso/ObjectReference",
        "dojo/text!./templates/GeographicElement.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, Element, 
    InputNumber, AbstractObject, GcoElement, GeoExtentTool, ObjectReference, template) {

    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});