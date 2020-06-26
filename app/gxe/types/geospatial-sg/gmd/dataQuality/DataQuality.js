define(["dojo/_base/declare", 
        "dojo/_base/lang", 
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has", 
        "app/gxe/types/geospatial-sg/base/GeoSgDescriptor", 
        "esri/dijit/metadata/form/Tabs", 
        "app/gxe/types/geospatial-sg/gmd/dataQuality/DataQualityScope",
        "app/gxe/types/geospatial-sg/gmd/dataQuality/DataQualityValue",
        "app/gxe/types/geospatial-sg/gmd/dataQuality/DataQualityQuality",
        "app/gxe/types/geospatial-sg/gmd/dataQuality/DataQualityEvaluation",
        "dojo/text!./templates/DataQuality.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, Tabs, DataQualityScope, DataQualityValue, 
    DataQualityQuality, DataQualityEvaluation, template) {

    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});