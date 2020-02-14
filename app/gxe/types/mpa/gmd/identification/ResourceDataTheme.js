define(["dojo/_base/declare", 
		"dojo/_base/lang", 
		"dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
		"dijit/registry",
		"dojo/dom",
		"dojo/has",
		"dojox/storage",
		"app/context/AppClient",
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
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, registry, dom, has, storage, AppClient, Descriptor, i18nMpa, 
	Element, InputSelectOne, CodeListReference, CodeListElement, CodeSpaceAttribute, CodeListValueAttribute, Options, Option, template) {
		
	var storageProvider = null;
	var marineDataThemeLevel2 = null;
	var marineDataThemeLevel3 = null;
	
	dojo.addOnLoad(function() {
		dojox.storage.manager.initialize();
		storageProvider = dojox.storage.manager.getProvider();
		storageProvider.initialize();
		
		var getObject = storageProvider.get("itemId");
		var client = new AppClient();
		client.readMetadataXML(getObject.itemId).then(function(response) {
			marineDataThemeLevel2 = response.getElementsByTagName("gmd:marineDataThemeLevel2")[0].innerHTML;
			marineDataThemeLevel3 = response.getElementsByTagName("gmd:marineDataThemeLevel3")[0].innerHTML;
		}).otherwise(function(error){
			showErr(error);
			console.error("Unable to retrieve metadata.");
			console.error(error);
		});
	
		setTimeout(function() {
			var level2List = document.getElementById("level2List");
			var level3List = document.getElementById("level3List");
	
			if ((level2List != null || level2List != undefined) &&
				(marineDataThemeLevel2 != null || marineDataThemeLevel2 != undefined)) {
				var level2Options = i18nMpa.root.mpaMarineDataThemeLevel2;
				level2List.options.length = 0;

				for (index in level2Options) {
					if (index == 0) {
						var firstOption = document.createElement("option");
						firstOption.value = marineDataThemeLevel2;
						for (indexLabel in level2Options) {
							if (level2Options[indexLabel].value == marineDataThemeLevel2) {
								firstOption.text = level2Options[indexLabel].label;
							}
						}
						level2List.options.add(firstOption, index);
					}
						
					if (level2Options[index].value != marineDataThemeLevel2) {
						var newOption = document.createElement("option");
						newOption.text = level2Options[index].label;
						newOption.value = level2Options[index].value;
						level2List.options.add(newOption, index + 1);
					}	
				}
				
				var newOptions = [];
			
				if (marineDataThemeLevel2 == i18nMpa.root.mpaMarineDataThemeLevel2Value.boundaries) {
					level2List.options[0].label = i18nMpa.root.mpaMarineDataThemeLevel2Code.boundaries;
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Boundaries;
				} else if (marineDataThemeLevel2 == i18nMpa.root.mpaMarineDataThemeLevel2Value.hydrographyOceanography) {
					level2List.options[0].label = i18nMpa.root.mpaMarineDataThemeLevel2Code.hydrographyOceanography;
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Hydrography;
				} else if (marineDataThemeLevel2 == i18nMpa.root.mpaMarineDataThemeLevel2Value.coastalGeography) {
					level2List.options[0].label = i18nMpa.root.mpaMarineDataThemeLevel2Code.coastalGeography;
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Coastal;
				} else if (marineDataThemeLevel2 == i18nMpa.root.mpaMarineDataThemeLevel2Value.atmosphere) {
					level2List.options[0].label = i18nMpa.root.mpaMarineDataThemeLevel2Code.atmosphere;
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Atmosphere;
				} else if (marineDataThemeLevel2 == i18nMpa.root.mpaMarineDataThemeLevel2Value.speciesDistributionHabitats) {
					level2List.options[0].label = i18nMpa.root.mpaMarineDataThemeLevel2Code.speciesDistributionHabitats;
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Species;
				} else if (marineDataThemeLevel2 == i18nMpa.root.mpaMarineDataThemeLevel2Value.ecosystemServicesFunction) {
					level2List.options[0].label = i18nMpa.root.mpaMarineDataThemeLevel2Code.ecosystemServicesFunction;
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Ecosystems;
				} else if (marineDataThemeLevel2 == i18nMpa.root.mpaMarineDataThemeLevel2Value.anthropogenic) {
					level2List.options[0].label = i18nMpa.root.mpaMarineDataThemeLevel2Code.anthropogenic;
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Anthropogenic;
				} else if (marineDataThemeLevel2 == i18nMpa.root.mpaMarineDataThemeLevel2Value.infrastructure) {
					level2List.options[0].label = i18nMpa.root.mpaMarineDataThemeLevel2Code.infrastructure;
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Infrastructure;
				} else if (marineDataThemeLevel2 == i18nMpa.root.mpaMarineDataThemeLevel2Value.economy) {
					level2List.options[0].label = i18nMpa.root.mpaMarineDataThemeLevel2Code.economy;
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Economy;
				} else if (marineDataThemeLevel2 == i18nMpa.root.mpaMarineDataThemeLevel2Value.management) {
					level2List.options[0].label = i18nMpa.root.mpaMarineDataThemeLevel2Code.management;
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Management;
				} else if (marineDataThemeLevel2 == i18nMpa.root.mpaMarineDataThemeLevel2Value.societal) {
					level2List.options[0].label = i18nMpa.root.mpaMarineDataThemeLevel2Code.societal;
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3Societal;
				} else {
					level2List.options[0].label = i18nMpa.root.mpaMarineDataThemeLevel2Code.none;
					newOptions = i18nMpa.root.mpaMarineDataThemeLevel3None;
				}		
				
				if ((level3List != null || level3List != undefined) &&
					(marineDataThemeLevel3 != null || marineDataThemeLevel3 != undefined)) {			
					level3List.options.length = 0;

					for (index in newOptions) {
						if (index == 0) {
							var firstOption = document.createElement("option");
							firstOption.value = marineDataThemeLevel3;
							for (indexLabel in newOptions) {
								if (newOptions[indexLabel].value == marineDataThemeLevel3) {
									firstOption.text = newOptions[indexLabel].label;
								}
							}
							level3List.options.add(firstOption, index);
						}
						
						if (newOptions[index].value != marineDataThemeLevel3) {
							var newOption = document.createElement("option");
							newOption.text = newOptions[index].label;
							newOption.value = newOptions[index].value;
							level3List.options.add(newOption, index + 1);
						}	
					}
				}
			}
		}, 2000);
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
