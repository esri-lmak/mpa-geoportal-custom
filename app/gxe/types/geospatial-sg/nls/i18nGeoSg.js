define({
    root: ({

        documentTypes: {
            data: {
                caption: "Geospatial-SG",
                description: ""
            },
            service: {
                caption: "Geospatial-SG",
                description: ""
            }
        },
        sections: {
            generalInformation: "General Information",
            metadataIdentification: "Metadata Identification",
            distribution: "Distribution Information",
            entityAndAttribute: "Entity and Attribute",
            dataQuality: "Data Quality",
            others: "Others"
        },
        generalInformation: {
            identifier: "Identifier",
            identifierTab : {
                fileIdentifier: "File Identifier",
				specialIdentifier: "Special Identifier",
                language: "Metadata Language"
            },
            date: "Date",
            dateTab: {
                metadataDateStamp: "Metadata Date Stamp",
                metadataCreatedDate: "Metadata Created Date",
                metadataLastUpdatedDate: "Metadata Last Updated Date",
                dataLastUpdatedDate: "Data Last Updated Date"
            }, 
            standard: "Standard",
            reference: "Reference"
        },
        metadataIdentification: {
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
                featureCount: "Feature Count",
                scale: "Scale"
            },
            keywords: "Keywords",
            constraints: "Constraints",
            constraintsTab: {
                useConstraints: "Use Constraints",
                otherConstraints: "Other Constraints",
                classification: "Classification",
                securityClassification: "Security Classification",
                informationMarker: "Information Marker"
            },
            dataTheme: "Data Theme",
            lineage: "Lineage",
            contact: "Contact",
            contactTab: {
                contactPerson: "Contact Person",
                organisationName: "Organisation Name",
                role: "Role",
                telephone: "Telephone",
                email: "Email"
            }
        },
        distribution: {
            contact: "Contact",
            distributionContact: {
                distributionName: "Name",
                distributionOrganisation: "Organisation",
                distributionEmail: "Email",
                distributionPhone: "Phone"
            }
        },
        entityAndAttribute: {
            entity: "Entity",
            attributeName: "Name",
            attributeAlias: "Alias",
            attributeDefinition: "Definition",
            attributeDataType: "Data Type",
            attributeNullability: "Nullability",
            attributeDomainValue: "Domain Value"
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
                example: "Example",
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
                valueUnit: "Value Unit",
                value: "Value"
            }
        },
        others: {
            extent: "Extent",
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
            }
        },

        yesNoCode: {
            yes: "Yes",
            no: "No"
        },
        dataThemeCode: {
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
        marineDataThemeLevel1: {
            caption: "Marine Data Theme Level 1",
            baseMaps: "Base Maps",
            administrative: "Administrative",
            physical: "Physical",
            ecological: "Ecological",
            human: "Human"
        },
        marineDataThemeLevel2: {
            caption: "Marine Data Theme Level 2",
            encChart: "ENC Chart",
            satelliteImagery: "Satellite Imagery",
            boundaries: "Boundaries",
            hydrographyAndOceanography: "Hydrography and Oceanography",
            coastalGeography: "Coastal Geography",
            atmosphere: "Atmosphere",
            speciesDistributionAndHabitats: "Species Distribution and Habitats",
            ecosystemServicesAndFunctions: "Ecosystem Services and Functions",
            anthropogenic: "Antropogenic",
            infrastructure: "Infrastructure",
            economy: "Economy",
            management: "Management",
            societal: "Societal"
        },
        marineDataThemeLevel3: {
            caption: "Marine Data Theme Level 3",
            none: "-",
            administrativeCoastline: "Administrative Coastline",
            naturalAndManmadeCoastline: "Natural and Manmade Coastline",
            marineSpatialPlanning: "Marine Spatial Planning",
            hydrodynamics: "Hydrodynamics",
            waterQuality: "Water Quality",
            bathymetry: "Bathymetry",
            marineSubstates: "Marine Substates",
            geomorphicLandformAndProcesses: "Geomorphic Landform and Processes",
            elevation: "Elevation",
            wind: "Wind",
            coastalAndMarineHabitat: "Coastal and Marine Habitat",
            corals: "Corals",
            birds: "Birds",
            invertebrates: "Invertebrates",
            marinePlantsAndAlgae: "Marine Plants and Algae",
            marineAnimals: "Marine Animals",
            marineProtectedAreas: "Marine Protected Areas",
            environmentalImpact: "Environmental Impact Assessment, Environmental Impact Study, Environmental Monitoring and Management Programme",
            climateChange: "Climate Change",
            transportAndCommunication: "Transport and Communication",
            utilities: "Utilites",
            aquaculture: "Aquaculture",
            energy: "Energy",
            portFacilitesMaritimeIndustry: "Port Facilities/Maritime Industry",
            naturalFacilities: "Natural Facilities",
            foreshoreAndWaterfrontDevelopment: "Foreshore and Waterfront Development",
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
        attributeDataType: {
            characterString: "Character String",
            integer: "Integer",
            real: "Real",
            boolean: "Boolean",
            date: "Date",
            dateTime: "DateTime",
            binary: "Binary"
        },
        nullability: {
            nullable: "Nullable",
            nonNullable: "Non-nullable"
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
        valueStructure: {
            bag: "Bag",
            set: "Set",
            sequence: "Sequence",
            table: "Table",
            matrix: "Matrix",
            coverage: "Coverage"
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
        role: {
            dataSteward: "Data Steward",
            dataCustodian: "Data Custodian",
            dataProvider: "Data Provider",
            dataCollector: "Data Collector",
            owner: "Owner",
            pointOfContact: "Point of Contact"
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