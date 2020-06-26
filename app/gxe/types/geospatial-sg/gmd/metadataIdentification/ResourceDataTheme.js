define(["dojo/_base/declare",
		"dojo/_base/lang",
		"dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
		"dojo/has",
		"app/gxe/types/geospatial-sg/base/GeoSgDescriptor",
		"app/gxe/types/mpa/nls/i18nMpa",
		"esri/dijit/metadata/form/Element",
		"esri/dijit/metadata/form/InputSelectOne",
		"esri/dijit/metadata/form/iso/CodeListReference",
		"esri/dijit/metadata/form/iso/CodeListElement",
		"esri/dijit/metadata/form/iso/CodeSpaceAttribute",
		"esri/dijit/metadata/form/iso/CodeListValueAttribute",
		"esri/dijit/metadata/form/Options",
		"esri/dijit/metadata/form/Option",
		"dojo/text!./templates/ResourceDataTheme.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, i18nMpa, 
	Element, InputSelectOne, CodeListReference, CodeListElement, CodeSpaceAttribute, CodeListValueAttribute, Options, Option, template) {
		
    var oThisClass = declare([ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template,

    });

    return oThisClass
});
