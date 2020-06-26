define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has",
        "app/gxe/types/geospatial-sg/base/GeoSgDescriptor",
        "app/gxe/types/geospatial-sg/gmd/generalInformation/MetadataFileIdentifier",
        "app/gxe/types/geospatial-sg/gmd/generalInformation/MetadataLanguage",
        "dojo/text!./templates/MetadataIdentifier.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, MetadataFileIdentifier,
    MetadataLanguage, template) {

    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});