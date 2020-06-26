define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has",
        "app/gxe/types/geospatial-sg/base/GeoSgDescriptor",
        "esri/dijit/metadata/form/Tabs",
        "app/gxe/types/geospatial-sg/gmd/generalInformation/MetadataIdentifier",
        "app/gxe/types/geospatial-sg/gmd/generalInformation/MetadataDate",
        "app/gxe/types/geospatial-sg/gmd/generalInformation/MetadataStandard",
        "app/gxe/types/geospatial-sg/gmd/generalInformation/MetadataReference",
        "dojo/text!./templates/GeneralInformation.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, Tabs, 
    MetadataIdentifier, MetadataDate, MetadataStandard, MetadataReference, template) {

    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});