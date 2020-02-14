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
        sections: {
            metadata: "Metadata",
            identification: "Identification",
            distribution: "Distribution",
            quality: "Quality"
        },
        metadataSection: {
            identifier: "Identifier",
            identifierTab : {
                fileIdentifier: "File Identifier",
                language: "Metadata Language",
                hierachyLevel: "Hierachy Level",
                hierechyLevelName: "Hierachy Level Name"
            },
            contact: "Contact",
            contactTab: {
                contactPerson: "Contact Person",
                organisationName: "Organisation Name",
                role: "Role",
                telephone: "Telephone",
                email: "Email"
            },
            date: "Date",
            dateTab: {
                date: "Date",
                metadataLastUpdatedDate: "Metadata Last Updated Date",
                dataLastUpdatedDate: "Data Last Updated Date"
            },
            standard: "Standard",
            reference: "Reference"
        },
        identificationSection: {
            citation: "Citation",
            citationTab : {
                title: "Resource Title",
                date : "Date",
                dateType: "Date Type",
                publisher: "Publisher",
                language: "Language"
            },
            description: "Description",
            descriptionTab: {
                abstract: "Abstract",
                mainUpdateFreq: "Maintenance and Update Frequency",
                geometricObjectType: "Geometric Object Type",
                purpose: "Purpose",
                status: "Status",
                credits: "Credits"
            },
            contact: "Contact",
            thumbnail: "Thumbnail",
            keywords: "Keywords",
            constraints: "Constraints",
            constraintsTab: {
                useConstraints: "Use Constraints",
                otherConstraints: "Other Constraints",
                classification: "Classification",
                securityClassification: "Security Classification",
                informationMarker: "Information Marker"
            },   
            resource: "Resource",
            resourceTab: {
                representation: "Representation",
                language: "Language",
                dataTheme: "Data Theme",
                extent: "Extent"
            }
        },
        extentTab: {
            horizontalCoordinateSystem: "Horizontal Coordinate System",
            verticalCoordinateSystem: "Vertical Coordinate System",
            datum: "Datum",
            spheroid: "Spheroid",
            majorAxis: "Major Axis",
            minorAxis: "Minor Axis",
            primeMeridian: "Prime Meridian",
            angularUnit: "Angular Unit",
            projection: "Projection",
            falseEasting: "False Easting",
            falseNorthing: "False Northing",
            centralMeridian: "Central Meridian",
            scaleFactor: "Scale Factor",
            latitudeOfOrigin: "Latitude of Origin",
            linearUnit: "Linear Unit",
            featureCount: "Feature Count",
            scale: "Scale"
        },
        qualitySection: {
            scope: "Scope",
            scopeTab: {
                scopeQuality: "Scope Quality",
                nameType: "Name Type",
                name: "Name",
                alias: "Alias",
                elementName: "Element Name",
                baseMeasure: "Base Measure"
            },
            value: "Value",
            valueTab: {
                parameter: "Parameter",
                valueType: "Value Type",
                valueStructure: "Value Structure",
                definition: "Definition",
                description: "Description",
                sourceReference: "Source Reference",
                identifier: "Identifier"
            },
            quality: "Quality",
            qualityTab: {
                acceptanceQualityLimit: "Acceptance Quality Limit (AQL)",
                featureType: "Feature Type",
                errorCount: "Error Count",
                errorRate: "Error Rate",
                pass: "Pass"
            },
            evaluationMethod: "Evaluation Method",
            evaluationMethodTab: {
                type: "Evaluation Method Type",
                description: "Evaluation Method Description",
                procedure: "Evaluation Method Procedure",
                date: "Date",
                dateUnit: "Date Unit",
                value: "Value"
            },
            lineage: "Lineage"
        },
        yesNoCode: {
            yes: "Yes",
            no: "No"
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
            none: "-",
            encChart: "ENC Chart",
            satelliteImagery: "Satellite Imagery",
            boundaries: "Boundaries",
            hydrographyOceanography: "Hydrography and Oceanography",
            coastalGeography: "Coastal Geography",
            atmosphere: "Atmosphere",
            speciesDistributionHabitats: "Species Distribution and Habitats",
            ecosystemServicesFunction: "Ecosystem Services and Functions",
            anthropogenic: "Anthropogenic",
            infrastructure: "Infrastructure",
            economy: "Economy",
            management: "Management",
            societal: "Societal"
        },
        mpaMarineDataThemeLevel2Value: {
            none: "none",
            encChart: "encChart",
            satelliteImagery: "satelliteImagery",
            boundaries: "boundaries",
            hydrographyOceanography: "hydrographyOceanography",
            coastalGeography: "coastalGeography",
            atmosphere: "atmosphere",
            speciesDistributionHabitats: "speciesDistributionHabitats",
            ecosystemServicesFunction: "ecosystemServicesFunction",
            anthropogenic: "anthropogenic",
            infrastructure: "infrastructure",
            economy: "economy",
            management: "management",
            societal: "societal"
        },
        mpaMarineDataThemeLevel2: [
            { label: "-", value: "none" },
            { label: "ENC Chart", value: "encChart" },
            { label: "Satellite Imagery", value: "satelliteImagery" },
            { label: "Boundaries", value: "boundaries" },
            { label: "Hydrography and Oceanography", value: "hydrographyOceanography" },
            { label: "Coastal Geography", value: "coastalGeography" },
            { label: "Atmosphere", value: "atmosphere" },
            { label: "Species Distribution and Habitats", value: "speciesDistributionHabitats" },
            { label: "Ecosystem Services and Functions", value: "ecosystemServicesFunction" },
            { label: "Anthropogenic", value: "anthropogenic" },
            { label: "Infrastructure", value: "infrastructure" },
            { label: "Economy", value: "economy" },
            { label: "Management", value: "management" },
            { label: "Societal", value: "societal" }
        ],
        mpaMarineDataThemeLevel3Boundaries: [
            { label: "Administrative Coastline", value: "administrativeCoastline" },
            { label: "Natural Manmade Coastline", value: "naturalManmadeCoastline" },
            { label: "Marine Spatial Planning", value: "marineSpatialPlanning" }
        ],
        mpaMarineDataThemeLevel3Hydrography: [
            { label: "Hydrodynamics", value: "hydrodynamics" },
            { label: "Water Quality", value: "waterQuality" },
            { label: "Bathymetry", value: "bathymetry" },
            { label: "Marine Substrates", value: "marineSubstrates" }
        ],
        mpaMarineDataThemeLevel3Coastal: [
            { label: "Geomorphic Landform and Processes", value: "geomorphicLandformProcesses" },
            { label: "Elevation", value: "elevation" }
        ],
        mpaMarineDataThemeLevel3Atmosphere: [
            { label: "Wind", value: "wind" }
        ],
        mpaMarineDataThemeLevel3Species: [
            { label: "Coastal and Marine Habitat", value: "coastalMarineHabitat" },
            { label: "Corals", value: "corals" },
            { label: "Birds", value: "birds" },
            { label: "Invertebrates", value: "invertebrates" },
            { label: "Marine Plants and Algae", value: "marinePlantsAlgae" },
            { label: "Marine Animals", value: "marineAnimals" }
        ],
        mpaMarineDataThemeLevel3Ecosystems: [
            { label: "Marine Protected Areas", value: "marineProtectedAreas" }
        ],
        mpaMarineDataThemeLevel3Anthropogenic: [
            { label: "Environmental Impact Assessmemt, Environmental Impact Study, Environmental Monitoring and Management Programme", value: "environmentalImpactAssessment" },
            { label: "Climate Change", value: "climateChange" }
        ],
        mpaMarineDataThemeLevel3Infrastructure: [
            { label: "Transport and Communication", value: "transportCommunication" },
            { label: "Utilities", value: "utilities" }
        ],
        mpaMarineDataThemeLevel3Economy: [
            { label: "Aquaculture", value: "aquaculture" },
            { label: "Energy", value: "energy" },
            { label: "Port Facilities/Maritime Industry", value: "portFacilities" },
            { label: "Natural Resources", value: "naturalResources" },
            { label: "Foreshore and Waterfront Development", value: "foreshoreWaterfrontDevelopment" }
        ],
        mpaMarineDataThemeLevel3Management: [
            { label: "Hazards (Manmade and Natural)", value: "hazards" },
            { label: "Sedimentation", value: "sedimentation" },
            { label: "Oil Spill Contingency, Search and Rescue", value: "oilSpillContingency" },
            { label: "Microbiological Contamination", value: "microbiologicalContamination" },
            { label: "Eutrophication", value: "eutrophication" },
            { label: "Noise", value: "noise" },
            { label: "Hazardous Substances", value: "hazardousSubstances" }
        ],
        mpaMarineDataThemeLevel3Societal: [
            { label: "Recreation", value: "recreation" }
        ],
        mpaMarineDataThemeLevel3None: [
            { label: "-", value: "none" }
        ],
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
            hazards: "Hazards (Manmade and Natural)",
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
        dataQualityScope: {
            attribute: "Attribute",
            attributeType: "Attribute Type",
            collectionHardware: "Collection Hardware",
            collectionSession: "Collection Session",
            dataset: "Dataset",
            series: "Series",
            nonGeographicDataset: "Non-Geographic Dataset",
            dimensionGroup: "Dimension Group",
            feature: "Feature",
            featureType: "Feature Type",
            propertyType: "Property Type",
            fieldSession: "Field Session",
            software: "Software",
            service: "Service",
            model: "Model",
            tile: "Tile",
            metadata: "Metadata",
            initiative: "Initiative",
            sample: "Sample",
            document: "Document",
            repository: "Repository",
            aggregate: "Aggregate",
            product: "Product",
            collection: "Collection",
            coverage: "Coverage",
            application: "Application"
        },
        valueType: {
            boolean: "Boolean",
            integer: "Integer",
            real: "Real"
        },
        evaluationMethodType: {
            directInternal: "Direct Internal",
            directExternal: "Direct External",
            indirect: "Indirect"
        },
        horizontalCoordinateSystem: {
            svy21: "SYV21",
            wgs84: "WGS84"
        },

        validation: {
            pattern: "{label} - {message}",
            patternWithHint: "{label} - {message} {hint}",
            ok: "OK",
            empty: "A value is required.",
            date: "The value must be a date.",
            integer: "The value must be an integer.",
            number: "The value must be an number.",
            other: "Invalid value.",
            url: "Invalid URL"
        },

        language: {
            en: "English",
            fi: "Finnish",
            fr: "French"
        }

    })

});