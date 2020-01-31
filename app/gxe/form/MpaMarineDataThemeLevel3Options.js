define(["dojo/_base/declare", 
		"dojo/_base/lang", 
		"dojo/has", 
		"esri/dijit/metadata/form/Options", 
		"dojo/text!app/gxe/form/templates/MpaMarineDataThemeLevel3Options.html", 
		"dojo/i18n!app/gxe/types/mpa/nls/i18nMpa"], 
function (e, t, o, i, template, s) {
	
    var oThisClass = e([i], {
        i18nMpa: s,
        templateString: template,
        _escapeSingleQuotes: !0,
        postCreate: function () {
            this.inherited(arguments)
        }
    });
    return oThisClass
});