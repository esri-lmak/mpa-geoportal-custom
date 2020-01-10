define(["dojo/_base/declare",
        "dojo/_base/lang",
        "./MpaDocumentType",
        "./DataRoot",
        "dojo/i18n!../nls/i18nMpa"],
function(declare, lang, DocumentType, RootDescriptor, i18nMpa) {

  var oThisClass = declare(DocumentType, {

    caption: i18nMpa.documentTypes.data.caption,
    description: i18nMpa.documentTypes.data.description,
    key: "mpa-iso-19115",
    isService: false,
    metadataStandardName: "MPA",
    metadataStandardVersion: "1.0",

    newRootDescriptor: function() {
      return new RootDescriptor();
    }

  });

  return oThisClass;
});