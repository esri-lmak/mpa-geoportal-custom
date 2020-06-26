define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has",
        "app/gxe/types/geospatial-sg/base/GeoSgDescriptor",
        "dojo/text!./templates/EntityAndAttribute.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, template) {

    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});