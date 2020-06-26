define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has",
        "app/gxe/types/geospatial-sg/base/GeoSgDescriptor",
        "esri/dijit/metadata/form/Tabs",
        "app/gxe/types/geospatial-sg/gmd/metadataIdentification/ResourceCitation",
        "app/gxe/types/geospatial-sg/gmd/metadataIdentification/ResourceDescription",
        "esri/dijit/metadata/types/iso/gmd/identification/ResourceKeywords",
        "app/gxe/types/geospatial-sg/gmd/constraints/ResourceConstraints",
        "app/gxe/types/geospatial-sg/gmd/metadataIdentification/ResourceDataTheme",
        "app/gxe/types/geospatial-sg/gmd/metadataIdentification/ResourceLineage",
        "app/gxe/types/geospatial-sg/gmd/metadataIdentification/MetadataContact",
        "dojo/text!./templates/MetadataIdentification.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, Tabs, 
    ResourceCitation, ResourceDescription, ResourceKeywords, ResourceConstraints, 
    ResourceDataTheme, ResourceLineage, MetadataContact, template) {

    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});