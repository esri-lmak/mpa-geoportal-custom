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

        language: {
            en: "English",
            fi: "Finnish",
            fr: "French"
        }

    })

});