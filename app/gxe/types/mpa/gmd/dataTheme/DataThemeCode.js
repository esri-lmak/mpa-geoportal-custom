define(["dojo/_base/declare", 
		"dijit/_WidgetBase",
		"dijit/_TemplatedMixin",
		"dijit/_WidgetsInTemplateMixin",
		"dojo/_base/lang", 
		"dojo/has", 
		"app/gxe/types/mpa/base/MpaDescriptor", 
		"esri/dijit/metadata/form/InputSelectOne", 
		"esri/dijit/metadata/form/Options", 
		"esri/dijit/metadata/form/Option", 
		"esri/dijit/metadata/form/iso/CodeListAttribute", 
		"esri/dijit/metadata/form/iso/CodeListValueAttribute", 
		"esri/dijit/metadata/form/iso/CodeListElement", 
		"esri/dijit/metadata/form/iso/CodeSpaceAttribute", 
		"dojo/text!./templates/DataThemeCode.html"], 
function (declare, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, lang, has, Descriptor, InputSelectOne, 
	Options, Option, CodeListAttribute, CodeListValueAttribute, CodeListElement, CodeSpaceAttribute, template) {
	
    var oThisClass = declare([Descriptor, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template
    });
    return oThisClass
});