define({
    root: ({
      
      documentTypes: {
          data: {
              caption: "MPA 19115 (Data)",
              description: ""
          },
          service: {
              caption: "MPA 19119 (Service)",
              description: ""
          }
      },
      identificationSection: {
          resourceTab: {
              representation: "Representation",
              language: "Language",
              classification: "Classification",
              dataTheme: "Data Theme",
              extent: "Extent"
          }
      },
      mpaDataThemeCode: {
          caption: "Data Theme",
          farming: "Farming",
          biota: "Biota",
          boundaries: "Boundaries",
          climatologyMeteorologyAtmospheric: "Climatology Meteorology Atmospheric",
          economy: "Economy",
          elevation: "Elevation",
          environment: "Environment",
          geoscientificInformation: "Geoscientic Information",
          health: "Health",
          imageryBaseMapsEarthCover: "Imagery Base Maps Earth Cover",
          intelligenceMilitary: "Intelligence Military",
          inlandWaters: "Inland Waters",
          location: "Location",
          oceans: "Oceans",
          planningCadastre: "Planning Cadastre",
          society: "Society",
          structure: "Structure",
          transportation: "Transportation",
          utilitiesCommunication: "Utilities Communication",
          extraterrestrial: "Extraterrestrial",
          disaster: "Disaster"
      },
      mpaMarineDataThemeCode: {
          caption: "Marine Data Theme"
      },
      mpaMarineDataThemeLevel2Code: {
          caption: "Marine Data Theme (Level II)",
          encChart: "ENC Chart",
          satelliteImagery: "Satellite Imagery",
          boundaries: "Boundaries",
          hydrographyOceanography: "Hydrography and Oceanography",
          costalGeography: "Costal Geography",
          atmosphere: "Atmosphere",
          speciesDistributionHabitats: "Species Distribution and Habitats",
          ecosystemServicesFunction: "Ecosystem Services and Functions",
          anthropogenic: "Anthropogenic",
          infrastructure: "Infrastructure",
          economy: "Economy",
          management: "Management",
          societal: "Societal"
      },
      mpaMarineDataThemeLevel3Code: {
          caption: "Marine Data Theme (Level III)",
          none: "-",
          administrativeCoastline: "Administrative Coastline",
          naturalManmadeCoastline: "Natural Manmade Coastline",
          marineSpatialPlanning: "Marine Spatial Planning",
          hydrodynamics: "Hydrodynamics",
          waterQuality: "Water Quality",
          bathymetry: "Bathymetry",
          marineSubstrates: "Marine Substrates",
          geomorphicLandformProcesses: "Geomorphic Landform and Processes",
          elevation: "Elevation",
          wind: "Wind",
          coastalMarineHabitat: "Coastal and Marine Habitat",
          corals: "Corals",
          birds: "Birds",
          invertebrates: "Invertebrates",
          marinePlantsAlgae: "Marine Plants and Algae",
          marineAnimals: "Marine Animals",
          marineProtectedAreas: "Marine Protected Areas",
          environmentalImpactAssessment: "Environmental Impact Assessmemt, Environmental Impact Study, Environmental Monitoring and Management Programme",
          climateChange: "Climate Change",
          transportCommunication: "Transport and Communication",
          utilities: "Utilities",
          aquaculture: "Aquaculture",
          energy: "Energy",
          portFacilities: "Port Facilities/Maritime Industry",
          naturalResources: "Natural Resources",
          foreshoreWaterfrontDevelopment: "Foreshore and Waterfront Development",
          hazards: "Hazards (Manmade and Natural",
          sedimentation: "Sedimentation",
          oilSpillContingency: "Oil Spill Contingency, Search and Rescue",
          microbiologicalContamination: "Microbiological Contamination",
          eutrophication: "Eutrophication",
          noise: "Noise",
          hazardousSubstances: "Hazardous Substances",
          recreation: "Recreation"
      },
      citationLanguage: {
          english: "English",
          chinese: "Chinese",
          malay: "Malay",
          tamil: "Tamil"
      },
      dateType: {
          creation: "Creation",
          publication: "Publication",
          revision: "Revision",
          expiry: "Expiry",
          lastRevision: "Last Revision",
          nextUpdate: "Next Update",
          unavailable: "Unavailable",
          inForce: "In Force",
          adopted: "Adopted",
          deprecated: "Deprecated",
          superseded: "Superseded",
          validityBegins: "Validity Begins",
          validityExpires: "Validity Expires",
          released: "Released",
          distribution: "Distribution",
          extraction: "Extraction"
      },
      statusCode: {
          completed: "(1) Completed",
          historicalArchive: "(2) Historical Archive",
          obsolete: "(3) Obsolete",
          ongoing: "(4) Ongoing",
          planned: "(5) Planned",
          required: "(6) Required",
          underDevelopment: "(7) Under Development",
          final: "(8) Final",
          pending: "(9) Pending",
          retired: "(10) Retired",
          superseded: "(11) Superseded",
          tentative: "(12) Tentative",
          valid: "(13) Valid",
          accepted: "(14) Accepted",
          notAccepted: "(15) Not Accepted",
          withdrawn: "(16) Withdrawn",
          purposed: "(17) Purposed",
          deprecated: "(18) Deprecated"
      },
      frequency: {
          continual: "Continual",
          daily: "Daily",
          weekly: "Weekly",
          fortnightly: "Fortnightly",
          monthly: "Monthly",
          quarterly: "Quarterly",
          biannually: "Biannually",
          annually: "Annually",
          asNeeded: "As Needed",
          irregular: "Irregular",
          notPlanned: "Not Planned",
          unknown: "Unknown",
          periodic: "Perdiodic",
          semiMonthly: "Semi-monthly",
          biennially: "Biennially"
      },
      geometricObjectType: {
          annotation: "Annotation",
          complex: "Complex",
          composite: "Composite",
          curve: "Curve",
          point: "Point",
          solid: "Solid",
          surface: "Surface",
          raster: "N/A - Raster",
          textual: "N/A - Textual",
          model: "N/A - 3D Model"
      },
      useContraints: {
          copyright: "Copyright",
          patent: "Patent",
          patentPending: "Patent Pending",
          trademark: "Trademark",
          license: "License",
          intPropertyRights: "Intellectual Property Rights",
          otherRestrictions: "Other Restrictions",
          licenseRestricted: "License Restricted",
          licenseEndUser: "License End User",
          licenseDistributor: "License Distributor",
          private: "Private",
          statutory: "Statutory",
          inConfidence: "In-confidence"
      },
      securityClassification: {
          confidential: "Confidential",
          restricted: "Restricted",
          officialOpen: "Official (Open)",
          officialClosed: "Official (Closed)"
      },
      sensitivityClassification: {
          sensitiveHigh: "Sensitive High",
          sensitiveNormal: "Sensitive Normal",
          nonSensitive: "Non-Sensitive"
      },
      informationMarker: {
          officialClosed: "Official (Closed)",
          officialOpen: "Official (Open)"
      },
  
      language: {
        en: "English",
        fi: "Finnish",
        fr: "French"
      }
      
    })
    
  });
  