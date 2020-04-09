/* See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * Esri Inc. licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define({
  root: {

    general: {
      cancel: "Cancel",
      clear: "Clear",
      close: "Close",
      del: "Delete",
      error: "Error",
      ok: "OK",
      open: "Open",
      settings: "Settings",
      deleting: "Deleting...",
      updating: "Updating...",
      uploading: "Uploading...",
      submitting: "Submission in Progress...",
      submittingRequest: "Submitting Request...",
      working: "...",
    },

    nav: {
      brand: "Geoportal",
      home: "Home",
      search: "Search",
      catalog: "Catalog",
      map: "Map",
      map3d: "Map3D",
      about: "About",
      admin: "Admin",
      content: "Content",
      welcomePattern: "{name}",
      signIn: "Sign In",
      signOut: "Sign Out",
      signUp: "Sign Up",
      options: {
        createAccount: "Create Account",
        createMetadata: "Create Metadata",
        myProfile: "My Profile",
        uploadMetadata: "Upload Metadata",
        uploadDataMetadata: "Upload New",
        pendingRequests: "Pending Requests",
        pendingUploadRequests: "Pending Upload Requests",
        editFacet: "Edit Facet"
      }
    },

    login: {
      caption: "Sign In",
      label: "Sign In",
      username: "Username",
      password: "Password",
      incomplete: "A Username and Password are required.",
      invalidCredentials: "Invalid credentials."
    },

    search: {
      criteria: {
        map: "Map",
        timePeriod: "Time Period",
        date: "Date",
        paleoDate: "Date (Paleo)",
        owner: "Owner",
        topicCategory: "Topic Category",
        metadataType: "Metadata Type",
        organizations: "Organizations",
        keywords: "Keywords",
        originType: "Origin Type",
        origin: "Source of Origin",
        approvalStatus: "Approval Status",
        access: "Access",
        accessGroups: "Access Groups",
        missingSource: "Editor/Upload",
        createFilter: "Create Filter"
      },
      componentSettings: {
        componentLabel: "Label",
        componentLabelPlaceholder: "",
        reset: "Reset"
      },
      searchBox: {
        search: "Search",
        searchCatalog: "Search the Catalog"
      },
      spatialFilter: {
        label: "Map",
        any: "Any",
        intersects: "Intersects",
        within: "Within",
        countPattern: "{count} centered here",
        settings: {
          caption: "Spatial Filter",
          aggregations: "Aggregations",
          field: "Shape Field",
          fieldPlaceholder: "",
          fieldNote: "(for search, e.g. envelope_geo, shape_geo, envelope_cen_pt)",
          pointField: "Point Field",
          pointFieldPlaceholder: "",
          pointFieldNote: "(for aggregation, e.g. envelope_cen_pt)"
        }
      },
      temporalFilter: {
        label: "Temporal",
        rangePattern: "{from}..{to}",
        countPattern: "{count} aggregated here",
        searchTip: "Search",
        searchLabel: "Search query:",
        fromLabel: "From:",
        toLabel: "To",
        calendarLabel: "Specify date range:",
        calendarTitle: "Enter Time Interval",
        interval: {
          year: "Year",
          quarter: "Quarter",
          month: "Month",
          week: "Week",
          day: "Day",
          hour: "Hour",
          minute: "Minute",
          second: "Second"
        },
        settings: {
          caption: "Temporal Filter",
          field: "Date Field",
          fieldPlaceholder: "",
          toField: "End Date Field",
          toFieldPlaceholder: "",
          mustOperator: "Within",
          nestedPath: "Nested Path",
          nestedPathPlaceholder: "",
          interval: "Interval",
          intervalPlaceholder: "",
          useUTC: "GMT"
        }
      },
      dateFilter: {
        label: "Date",
        labelTimePeriod: "Time Period",
        fromDate: "From:",
        toDate: "To:",
        formatHint: "(yyyy-mm-dd)",
        plotTip: "Plot",
        plot: {
          beginning: "Beginning Dates",
          ending: "Ending Dates",
          counts: "Item Count",
          noData: "No Data",
          rangePattern: "{from} .. {to}"
        }
      },
      numericFilter: {
        label: "Numeric",
        rangePattern: "{from}..{to}",
        countPattern: "{count} aggregated here",
        searchTip: "Search",
        searchLabel: "Search query:",
        interval: "Interval",
        rangeTip: "Specify desired numerical range",
        rangeLabel: "Specify range:",
        fromLabel: "From:",
        toLabel: "To:",
        applyLabel: "Apply",
        settings: {
          caption: "Numeric Filter",
          field: "Numeric Field",
          fieldPlaceholder: "",
          interval: "Interval",
          intervalPlaceholder: "number > 0",
          ticks: "Ticks",
          ticksPlaceholder: "integer > 0",
          places: "Decimal Places",
          placesPlaceholder: "integer > 0"
        }
      },
      appliedFilters: {
        label: "Filters",
        myContent: "My Content",
        clearFilter: "Clear",
        clearAll: "Clear All",
        tipPattern: "{type}: {value}"
      },
      results: {
        label: "Results",
        noMatch: "No results were found.",
        error: "An error occurred."
      },
      resultCount: {
        countPattern: "{count} {type}",
        itemSingular: "item",
        itemPlural: "items",
        userSingular: "user",
        userPlural: "users"
      },
      sort: {
        byRelevance: "By Relevance",
        byTitle: "By Title",
        byDate: "By Date",
        asc: "ASC",
        desc: "DESC",
      },
      paging: {
        first: "First",
        firstTip: "First",
        previous: "Previous",
        previousTip: "Previous",
        next: "Next",
        nextTip: "Next",
        last: "Last",
        lastTip: "Last",
        lastTipDisabled: "Result exceeds limit of ${searchLimit} records.",
        pagePattern: "{page}",
        countPattern: "{count} items"
      },
      termsAggregation: {
        settings: {
          caption: "Terms Aggregation",
          field: "Field",
          fieldPlaceholder: "",
          size: "Size",
          sizePlaceholder: "number > 0",
          minDocCount: "Minimum Count",
          minDocCountPlaceholder: "number > 0",
          include: "Include",
          includePlaceholder: "filter",
          exclude: "Exclude",
          excludePlaceholder: "filter",
          missing: "Missing",
          missingPlaceholder: "label",
          order: {
            label: "Order",
            placeholder: "",
            countAsc: "Count - ascending",
            countDesc: "Count - descending",
            termAsc: "Term - ascending",
            termDesc: "Term - descending",
          }
        }
      },
      preview: {
        error: "Error loading preview"
      },
      links: {
        web: "Web result",
        atom: "ATOM result",
        rss:  "RSS result",
        json: "JSON result",
        csv:  "CSV result",
        csw:  "CSW result",
        kml:  "KML result",
        dcat: "DCAT result"
      }
    },

    item: {
      notAvailable: "N/A",
      actions: {
        html: "HTML",
        xml: "XML",
        json: "JSON",
        // Specific to MPA 
        // Change Links to WFS
        // links: "Links",
        links: "WFS",
        submitRequest: "Request",
        addToMap: "Add to Map",
        preview: "Preview",
        titleFormat: "${action} - ${title}",
        options: {
          caption: "Options",
          editMetadata: "Edit Metadata",
          viewMetadata: "View Metadata",
          uploadMetadata: "Upload Metadata",
          uploadData: "Upload Data",
          uploadDataMetadata: "Upload Data & Metadata"
        },
        urlLinks: {
          thumbnail: "Thumbnail",
          website: "Website",
          projectMetadata: "Project metadata",
          granule: "Granule",
          downloadHTTP: "Download (HTTP)",
          downloadFTP: "Download (FTP)"
        }
      },
      statusChecker: {
        unknown: "Unknown",
        status: "Service availability = ${score}%"
      }
    },

    content: {
      updateButton: "Update",
      applyTo: {
        itemLabel: "Apply change to this item only",
        ownerPattern: "Apply change to all items owned by: {name}",
        sourceUriPattern: "Apply change to all items harvested from: {name}",
        taskRefPattern: "Apply change to all items associated with harvesting task: {name}",
        queryPattern: "Apply change to all selected items: {count}",
        itemLabelDelete: "Delete this item only",
        ownerPatternDelete: "Delete all items owned by: {name}",
        sourceUriPatternDelete: "Delete all items harvested from: {name}",
        taskRefPatternDelete: "Delete all items associated with harvesting task: {name}",
        queryPatternDelete: "Delete all selected items: {count}"
      },
      changeOwner: {
        caption: "Change Owner",
        currentOwner: "Current Owner:",
        newOwner: "New Owner:"
      },
      deleteItems: {
        caption: "Delete",
      },
      setAccess: {
        caption: "Set Access",
        access: "Access",
        _public: "Public",
        _private: "Private",
        groups: "Share with Groups",
        countPattern: "{count} selected"
      },
      setApprovalStatus: {
        caption: "Set Approval Status",
        status: "Status",
        none: "None",
        approved: "Approved",
        reviewed: "Reviewed",
        disapproved: "Disapproved",
        incomplete: "Incomplete",
        archived: "Archived",
        posted: "Posted",
        draft: "Draft"
      },
      setField: {
        caption: "Set Field",
        tags: {
          caption: "Tags",
          value: "User Tags (comma delimited)",
        },
        advanced: {
          caption: "Advanced",
          prompt: "",
          field: "Field Name",
          value: "Value",
        }
      },
      uploadMetadata: {
        caption: "Upload Metadata",
        button: "Upload"
      },
      uploadData: {
        caption: "Upload Data",
        instructions: "An email will be sent to you on the outcome of your upload request.",
        button: "Upload"
      },
      uploadDataMetadata: {
        caption: "Upload New",
        instructions: "An email will be sent to you on the outcome of your upload request.",
        button: "Upload"
      },
      submitRequest: {
        caption: "Submit Request",
        instructions: "The request will be submitted for approval.",
        button: "Submit"
      },
      approveRequest: {
        caption: "Approve Request",
        instructions: "The request will be approved.",
        button: "Approve"
      },
      signUp: {
        caption: "Sign Up",
        instructions: "Please enter all the mandatory fields to sign up an account.",
        firstName: "First Name",
        lastName: "Last Name",
        username: "Username",
        emailAddress: "Email Address",
        organisation: "Organisation",
        button: "Submit"
      }
    },

    metadataEditor: {
      caption: "Metadata",
      loading: "Starting editor...",
      filePrompt: "Select an XML file.",
      asTemplatePrompt: "Reset identifiers",
      xmlViewOnly: "The type of metadata associated with this item is not supported by the editor."
    },

    errorTranslations: {
      "Unrecognized metadata type.": null,
      "Access denied - not owner.": null,
      "Schematron violation.": null,
      "Id not found.": null,
      "org.xml.sax.SAXParseException; lineNumber: 1; columnNumber: 1; Content is not allowed in prolog.": "Not an XML file.",
      "javax.json.stream.JsonParsingException: Invalid JSON": "Invalid JSON"
    },

    footer: {
      "copyright": "© Geoportal",
      "quickLink1": "Quick Link 1",
      "quickLink2": "Quick Link 2"
    },
    
    approvalStatus: {
      none: "none",
      approved: "approved",
      reviewed: "reviewed",
      disapproved: "disapproved",
      incomplete: "incomplete",
      posted: "posted",
      draft: "draft",
      archived: "archived"
    },
	
	  metadataArchived : "_Archived_",
    archivedSource: "SINK:Geoportal/metadata/archive/",
  
    auditTrailType: {
      createMetadata: 1,
      updateMetadate: 2,
      uploadMetadata: 3,
      uploadData: 4,
      changeOwner: 5,
      setApprovalStatus: 6,
      deleteMetadata: 7,
      signIn: 8,
      signOut: 9
    },

    organisation: {
      ava: "AVA",
      bca: "BCA",
      jtc: "JTC",
      mpa: "MPA",
      nea: "NEA",
      nparks: "NParks",
      pub: "PUB",
      ura: "URA"
    }
  }
});