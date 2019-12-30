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
      working: "...",
    },
    
    nav: {
      brand: "Geoportal",
      home: "Home",
      search: "Search",
      map: "Map",
      map3d: "Map3D",
      about: "About",
      content: "Content",
      welcomePattern: "{name}",
      signIn: "Sign In",
      signOut: "Sign Out",
      options: {
        createAccount: "Create Account",
        createMetadata: "Create Metadata",
        myProfile: "My Profile",
        uploadMetadata: "Upload Metadata"
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
        owner: "Owner",
        topicCategory: "Topic Category",
        metadataType: "Metadata Type",
        organizations: "Organizations",
        keywords: "Keywords",
        origin: "Source of Origin",
        approvalStatus: "Approval Status",
        access: "Access",
        accessGroups: "Access Groups",
        missingSource: "Editor/Upload"
      },
      componentSettings: {
        componentLabel: "Label",
        componentLabelPlaceholder: "",
        reset: "Reset"
      },
      searchBox: {
        search: "Search"
      },
      spatialFilter: {
        label: "Map",
        any: "Any",
        intersects: "Intersects",
        within: "Within",
        countPattern: "{count} centered here",
        settings: {
          caption: "Spatial Filter",
          aggregations: "Aggregations"
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
        interval: "Interval",
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
      },
      paging: {
        first: "<<",
        firstTip: "First",
        previous: "<",
        previousTip: "Previous",
        next: ">",
        nextTip: "Next",
        last: ">>",
        lastTip: "Last",
        lastTipDisabled: "Result exceeds limit of ${searchLimit} records.",
        pagePattern: "Page {page}",
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
        atom: "ATOM result",
        rss:  "RSS result",
        json: "JSON result",
        csv:  "CSV result",
        csw:  "CSW result",
        kml:  "KML result"
      }
    },
    
    item: {
      actions: {
        html: "HTML",
        xml: "XML",
        json: "JSON",
        links: "Links",
        addToMap: "Add to Map",
        preview: "Preview",
        titleFormat: "${action} - ${title}",
        options: {
          caption: "Options",
          editMetadata: "Edit Metadata",
          uploadMetadata: "Upload Metadata"
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
    }

  }
});
