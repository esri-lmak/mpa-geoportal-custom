define(["dojo/_base/declare", 
        "dojo/_base/lang",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has", 
        "app/gxe/types/geospatial-sg/base/GeoSgDescriptor",
		"esri/dijit/metadata/form/Element", 
        "esri/dijit/metadata/form/InputTextArea", 
        "esri/dijit/metadata/form/iso/GcoElement", 
        "dojo/text!./templates/ResourceDescription.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, Element, 
    InputTextArea, GcoElement, template) {
    
    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});