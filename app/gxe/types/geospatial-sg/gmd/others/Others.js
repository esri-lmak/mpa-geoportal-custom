define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has",
        "app/gxe/types/geospatial-sg/base/GeoSgDescriptor",
        "esri/dijit/metadata/form/Tabs",
        "app/gxe/types/geospatial-sg/gmd/others/ResourceExtent",
        "esri/dijit/metadata/types/iso/gmd/identification/ResourceThumbnail",
        "dojo/text!./templates/Others.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, Tabs, 
    ResourceExtent, ResourceThumbnail, template) {

    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});