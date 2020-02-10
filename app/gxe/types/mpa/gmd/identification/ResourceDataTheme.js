define(["dojo/_base/declare", 
		"dojo/_base/lang", 
		"dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
		"dijit/registry",
		"dojo/domReady",
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
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, registry, domReady, has, Descriptor, i18nMpa, a, s, m, n, p, q, r, t, template) {
		
	require(["dojo/domReady"], function(domReady) {
		domReady(function () {
			var level2List = document.getElementById("level2List");
			var level3List = document.getElementById("level3List");
			var marineDataThemeLevel2 = this.marineDataThemeLevel2;
			var marineDataThemeLevel3 = this.marineDataThemeLevel3;

			if (level2List != null || level2List != undefined) {
				level2List.options[0].label = marineDataThemeLevel2 != null || marineDataThemeLevel2 != undefined === marineDataThemeLevel2.label;
				level2List.options[0].value = marineDataThemeLevel2 != null || marineDataThemeLevel2 != undefined === marineDataThemeLevel2.value;

				var optionLabel = level2List.options[level2List.selectedIndex].label;
				var newOptions = [];
			
				if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.boundaries) {
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Boundaries;
				} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.hydrographyOceanography) {
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Hydrography;
				} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.coastalGeography) {
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Coastal;
				} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.atmosphere) {
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Atmosphere;
				} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.speciesDistributionHabitats) {
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Species;
				} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.ecosystemServicesFunction) {
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Ecosystems;
				} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.anthropogenic) {
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Anthropogenic;
				} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.infrastructure) {
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Infrastructure;
				} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.economy) {
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Economy;
				} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.management) {
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Management;
				} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.societal) {
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Societal;
				} else {
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3None;
				}
				
				if (level3List != null || level3List != undefined) {
					level3List.options[0].label = marineDataThemeLevel3 != null || marineDataThemeLevel3 != undefined === marineDataThemeLevel3.label;
					level3List.options[0].value = marineDataThemeLevel3 != null || marineDataThemeLevel3 != undefined === marineDataThemeLevel3.value;
				
					level3List.options.length = 0;
					for (index in newOptions) {
						var newOption = document.createElement("option");
						newOption.text = newOptions[index].label;
						newOption.value = newOptions[index].value;
						level3List.options.add(newOption, index);
					}
				}
			}
		});
	});
	
    var oThisClass = declare([ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template,
		
		populate: function() {
			var level2List = document.getElementById("level2List");
			var level3List = document.getElementById("level3List");
			var optionLabel = level2List.options[level2List.selectedIndex].label;
			var optionValue = level2List.options[level2List.selectedIndex].value;
			var newOptions = [];
			
			if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.boundaries) {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Boundaries;
			} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.hydrographyOceanography) {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Hydrography;
			} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.coastalGeography) {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Coastal;
			} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.atmosphere) {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Atmosphere;
			} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.speciesDistributionHabitats) {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Species;
			} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.ecosystemServicesFunction) {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Ecosystems;
			} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.anthropogenic) {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Anthropogenic;
			} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.infrastructure) {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Infrastructure;
			} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.economy) {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Economy;
			} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.management) {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Management;
			} else if (optionLabel == i18nMpa.root.mpaMarineDataThemeLevel2Code.societal) {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Societal;
			} else {
				newOptions = i18nMpa.root.mpaMarineDataThemeLevel3None;
			}
			
			var marineDataThemeLevel2 = this.marineDataThemeLevel2;
			if (marineDataThemeLevel2 != null || marineDataThemeLevel2 != undefined) {
				marineDataThemeLevel2.set("value", optionValue);
			}
			
			level3List.options.length = 0;
			for (index in newOptions) {
				var newOption = document.createElement("option");
				newOption.text = newOptions[index].label;
				newOption.value = newOptions[index].value;
				level3List.options.add(newOption, index);
				
				if (index == 0) {
					var marineDataThemeLevel3 = this.marineDataThemeLevel3;
					if (marineDataThemeLevel3 != null || marineDataThemeLevel3 != undefined) {
						marineDataThemeLevel3.set("value", newOptions[index].value);
					}
				}
			}
		},
		
		setValue: function() {
			var level3List = document.getElementById("level3List");
			var optionValue = level3List.options[level3List.selectedIndex].value;
			
			var marineDataThemeLevel3 = this.marineDataThemeLevel3;
			if (marineDataThemeLevel3 != null || marineDataThemeLevel3 != undefined) {
				marineDataThemeLevel3.set("value", optionValue);
			}
		}
		
    });

    return oThisClass
});
