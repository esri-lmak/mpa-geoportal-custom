define(["dojo/_base/declare", 
        "dojo/_base/lang", 
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has", 
        "app/gxe/types/mpa/base/MpaDescriptor",  
        "esri/dijit/metadata/form/iso/AbstractObject",
        "esri/dijit/metadata/form/iso/ObjectReference",
        "esri/dijit/metadata/types/iso/gmd/distribution/DistributionFormat",
        "app/gxe/types/mpa/gmd/distribution/TransferOptions",
        "dojo/text!./templates/Distribution.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, AbstractObject, 
    ObjectReference, DistributionFormat, TransferOptions, template) {

    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});