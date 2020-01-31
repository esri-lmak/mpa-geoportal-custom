define(["dojo/_base/declare", 
		"dijit/_TemplatedMixin", 
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
		"dojo/text!./templates/MarineDataThemeLevel3Code.html"],
function (e, _TemplatedMixin, t, o, Descriptor, r, s, a, d, n, m, p, template) {
	
    var oThisClass = e([Descriptor, _TemplatedMixin], {
        templateString: template
    });
    return oThisClass
});