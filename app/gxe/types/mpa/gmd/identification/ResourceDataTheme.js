// COPYRIGHT � 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare", 
		"dojo/_base/lang", 
		"dijit/_TemplatedMixin",
		"dijit/registry",
		"dojo/has",
		"app/gxe/types/mpa/base/MpaDescriptor",
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
function (declare, lang, _TemplatedMixin, registry, has, Descriptor, i18nMpa, a, s, m, n, p, q, r, t, template) {
	
    var oThisClass = declare([Descriptor, _TemplatedMixin], {
        templateString: template,
		
		populate: function() {
			var level2List = document.getElementById("level2List");
			var level3List = document.getElementById("level3List");
			var optionValue = level2List.options[level2List.selectedIndex].value;
			var newOptions = [];
			
			if (optionValue == "boundaries") {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Boundaries;
			} else if (optionValue == "hydrographyOceanography") {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Hydrography;
			} else if (optionValue == "coastalGeography") {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Coastal;
			} else if (optionValue == "atmosphere") {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Atmosphere;
			} else if (optionValue == "speciesDistributionHabitats") {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Species;
			} else if (optionValue == "ecosystemServicesFunction") {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Ecosystems;
			} else if (optionValue == "anthropogenic") {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Anthropogenic;
			} else if (optionValue == "infrastructure") {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Infrastructure;
			} else if (optionValue == "economy") {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Economy;
			} else if (optionValue == "management") {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Management;
			} else if (optionValue == "societal") {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Societal;
			} else {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3None;
			}
			
			var marineDataThemeLevel2 = this.marineDataThemeLevel2;
			if (marineDataThemeLevel2 != null || marineDataThemeLevel2 != undefined) {
				marineDataThemeLevel2.set("gmd:marineDataThemeLevel2", optionValue);
			}

			level3List.options.length = 0;
			for (index in newOptions) {
				var newOption = document.createElement("option");
				newOption.text = newOptions[index].label;
				newOption.value = newOptions[index].value;
				level3List.options.add(newOption, index);
			}
		},
		
		setValue: function() {
			var level3List = document.getElementById("level3List");
			var optionValue = level3List.options[level3List.selectedIndex].value;
			
			var marineDataThemeLevel3 = this.marineDataThemeLevel3;
			if (marineDataThemeLevel3 != null || marineDataThemeLevel3 != undefined) {
				marineDataThemeLevel3.set("gmd:marineDataThemeLevel3", optionValue);
			}
		}
    });

    return oThisClass
});
