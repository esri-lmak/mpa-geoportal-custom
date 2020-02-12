define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dijit/_WidgetBase",
        "dijit/_TemplatedMixin",
        "dijit/_WidgetsInTemplateMixin",
        "dojo/has",
        "app/gxe/types/mpa/base/MpaDescriptor",
        "esri/dijit/metadata/form/Element",
        "esri/dijit/metadata/form/InputText",
        "esri/dijit/metadata/form/iso/GcoElement",
        "dojo/text!./templates/MetadataFileIdentifier.html"],
function (declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, has, Descriptor, Element,
    InputText, GcoElement, template) {

    var oThisClass = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, Descriptor], {
        templateString: template
    });
    return oThisClass
});