define(["dojo/_base/declare", 
		"dojo/_base/lang", 
		"dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
		"dojo/has", 
		"app/gxe/types/mpa/base/MpaDescriptor", 
		"esri/dijit/metadata/form/Element", 
		"esri/dijit/metadata/form/InputTextArea", 
		"esri/dijit/metadata/form/Tabs", 
		"esri/dijit/metadata/form/iso/GcoElement", 
		"esri/dijit/metadata/types/iso/gmd/identification/DataRepresentation", 
		"app/gxe/types/mpa/gmd/identification/ResourceExtent", 
		"esri/dijit/metadata/types/iso/gmd/identification/ResourceLanguage", 
		"esri/dijit/metadata/types/iso/gmd/identification/ResourceClassification",
		"app/gxe/types/mpa/gmd/identification/ResourceDataTheme", 
		"dojo/text!./templates/DataResourceTab.html"],
function (e, t, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, a, Descriptor, i, n, r, s, c, d, m, f, d, template) {
	
    var oThisClass = e([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});