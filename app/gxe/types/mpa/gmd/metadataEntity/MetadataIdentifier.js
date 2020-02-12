define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has",
        "app/gxe/types/mpa/base/MpaDescriptor",
        "app/gxe/types/mpa/gmd/metadataEntity/MetadataFileIdentifier",
        "esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataLanguage",
        "esri/dijit/metadata/types/iso/gmd/metadataEntity/MetadataHierarchy",
        "dojo/text!./templates/MetadataIdentifier.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, MetadataFileIdentifier,
    MetadataLanguage, MetadataHierarchy, template) {

    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});