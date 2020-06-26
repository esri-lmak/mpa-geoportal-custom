define(["dojo/_base/declare", 
        "dojo/_base/lang", 
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has", 
        "app/gxe/types/geospatial-sg/base/GeoSgDescriptor",  
        "esri/dijit/metadata/form/iso/AbstractObject",
        "esri/dijit/metadata/form/iso/ObjectReference",
        "app/gxe/types/geospatial-sg/gmd/distributionInformation/DistributionFormat",
        "app/gxe/types/geospatial-sg/gmd/distributionInformation/DistributionContact",
        "app/gxe/types/geospatial-sg/gmd/distributionInformation/TransferOptions",
        "dojo/text!./templates/Distribution.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, AbstractObject, 
    ObjectReference, DistributionFormat, DistributionContact, TransferOptions, template) {

    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});