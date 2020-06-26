define(["dojo/_base/declare",
        "dojo/_base/lang",
        "./GeoSgDocumentType",
        "./DataRoot",
        "dojo/i18n!../nls/i18nGeoSg"],
function(declare, lang, DocumentType, RootDescriptor, i18nGeoSg) {

  var oThisClass = declare(DocumentType, {

    caption: i18nGeoSg.documentTypes.data.caption,
    description: i18nGeoSg.documentTypes.data.description,
    key: "geospatial-sg",
    isService: false,
    metadataStandardName: "Geospatial-SG",
    metadataStandardVersion: "1.2",

    newRootDescriptor: function() {
      return new RootDescriptor();
    }

  });

  return oThisClass;
});