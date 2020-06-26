define(["dojo/_base/declare", 
        "dojo/_base/lang", 
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has", 
        "app/gxe/types/geospatial-sg/base/GeoSgDescriptor", 
        "esri/dijit/metadata/form/iso/AbstractObject", 
        "esri/dijit/metadata/form/iso/ObjectReference", 
        "esri/dijit/metadata/types/geospatial-sg/gmd/others/GeographicElement", 
        "esri/dijit/metadata/types/iso/gmd/extent/TemporalElement", 
        "dojo/text!./templates/ResourceExtent.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, AbstractObject, 
    ObjectReference, GeographicElement, TemporalElement, template) {

     var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});