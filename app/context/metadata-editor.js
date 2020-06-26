define([],function(){var obj={
  // .......................................................................................
    
    editable: {
      // Warning: The editor will be lossy if allowNonGxeDocs is enabled.
	    // Specific for MPA - to display harvested metadata
      allowNonGxeDocs: true, 
      // geoportalTypes: ["arcgis", "fgdc", "iso19115", "iso19115-2"]
      geoportalTypes: ["iso19115", "mpa-iso-19115", "geospatial-sg"]
    },
    
    gxeContext: {
      /* 
      allowedTypeKeys: [
        "arcgis", "fgdc", 
        "iso-19115", "iso-19119", "iso-19115-2",
        "inspire-iso-19115", "inspire-iso-19119", 
        "gemini-iso-19115", "gemini-iso-19119",
        "mpa-iso-19115"
      ], 
      */
      allowedTypeKeys: [
        "mpa-iso-19115", "geospatial-sg"
      ],
      basemap: "hybrid",
      allowViewXml: true,
      showValidateButton: false,
      validateOnSave: true,
      startupTypeKey: null
    },
  
    typeDefinitions: [
      /* 
      {
        key: "arcgis",
        requiredPath: "esri/dijit/metadata/types/arcgis/base/DocumentType",
        interrogationRules: [{
           path: "/metadata/Esri/ArcGISFormat",
           must: true
        }]
      },
      {
        key: "fgdc",
        requiredPath: "esri/dijit/metadata/types/fgdc/base/DocumentType",
        interrogationRules: [{
           path: "/metadata/idinfo/citation",
           must: true
        }]
      },
      {
        key: "iso-19115",
        requiredPath: "esri/dijit/metadata/types/iso/base/DataDocumentType",
        interrogationRules: [{
           path: "/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification",
           must: true
        }]
      },
      {
        key: "iso-19119",
        requiredPath: "esri/dijit/metadata/types/iso/base/ServiceDocumentType",
        interrogationRules: [{
           path: "/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification",
           must: true
        }]
      },
      {
        key: "iso-19115-2",
        requiredPath: "esri/dijit/metadata/types/iso/base/GmiDocumentType",
        interrogationRules: [{
           path: "/gmi:MI_Metadata",
           must: true
        }]
      },
      {
        key: "inspire-iso-19115",
        requiredPath: "esri/dijit/metadata/types/inspire/base/DataDocumentType",
        interrogationRules: [
          {
            path: "/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification",
            must: true
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardName/gco:CharacterString",
            value: "INSPIRE Metadata Implementing Rules"
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardVersion/gco:CharacterString",
            value: "Technical Guidelines based on EN ISO 19115 and EN ISO 19119 (Version 1.2)"
          }
        ]
      },
      {
        key: "inspire-iso-19119",
        requiredPath: "esri/dijit/metadata/types/inspire/base/ServiceDocumentType",
        interrogationRules: [
          {
            path: "/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification",
            must: true
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardName/gco:CharacterString",
            value: "INSPIRE Metadata Implementing Rules"
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardVersion/gco:CharacterString",
            value: "Technical Guidelines based on EN ISO 19115 and EN ISO 19119 (Version 1.2)"
          }
        ]
      },
      {
        key: "gemini-iso-19115",
        requiredPath: "esri/dijit/metadata/types/gemini/base/DataDocumentType",
        interrogationRules: [
          {
            path: "/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification",
            must: true
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardName/gco:CharacterString",
            value: "UK GEMINI"
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardVersion/gco:CharacterString",
            value: "2.2"
          }
        ]
      },
      {
        key: "gemini-iso-19119",
        requiredPath: "esri/dijit/metadata/types/gemini/base/ServiceDocumentType",
        interrogationRules: [
          {
            path: "/gmd:MD_Metadata/gmd:identificationInfo/srv:SV_ServiceIdentification",
            must: true
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardName/gco:CharacterString",
            value: "UK GEMINI"
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardVersion/gco:CharacterString",
            value: "2.2"
          }
        ]
      }, 
      */
      {
        key: "mpa-iso-19115",
        requiredPath: "app/gxe/types/mpa/base/DataDocumentType",
        interrogationRules: [
          {
            path: "/gmd:MD_Metadata/gmd:identificationInfo/gmd:MD_DataIdentification",
            must: true
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardName/gco:CharacterString",
            value: "MPA"
          },
          {
            path: "/gmd:MD_Metadata/gmd:metadataStandardVersion/gco:CharacterString",
            value: "1.0"
          }
        ]
      },
      {
        key: "geospatial-sg",
        requiredPath: "app/gxe/types/geospatial-sg/base/DataDocumentType",
        interrogationRules: [
          {
            path: "/geoSG:MD_Metadata/geoSG:metadataIdentification/geoSG:MD_DataIdentification",
            must: true
          },
          {
            path: "/geoSG:MD_Metadata/geoSG:metadataStandardName/gco:CharacterString",
            value: "Geospatial-SG"
          },
          {
            path: "/geoSG:MD_Metadata/geoSG:metadataStandardVersion/gco:CharacterString",
            value: "1.0"
          }
        ]
      }
    ]
    
  // .......................................................................................
  };return obj;});