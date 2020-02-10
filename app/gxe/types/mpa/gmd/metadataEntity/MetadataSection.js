define(["dojo/_base/declare", 
        "dojo/_base/lang", 
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has", 
        "app/gxe/types/mpa/base/MpaDescriptor",  
        "esri/dijit/metadata/form/Tabs",
        "esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataIdentifier",
        "app/gxe/types/mpa/gmd/metadataEntity/MetadataContact",
        "app/gxe/types/mpa/gmd/metadataEntity/MetadataDate",
        "esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataStandard",
        "app/gxe/types/mpa/gmd/metadataEntity/MetadataReference", 
        "dojo/text!./templates/MetadataSection.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, Tabs, g, h, k, l, m, template) {

    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});