// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define({general:{cancel:"Mégse",close:"Bezárás",none:"Nincs",ok:"OK",other:"Egyéb",stamp:"Bélyegző",now:"Most",choose:"Válasszon egyet:"},editor:{noMetadata:"Nincsenek metaadatok ehhez az elemhez.",xmlViewOnly:"Az elemhez kapcsolódó metaadatok típusát a szerkesztő nem támogatja. A metaadatoknak ArcGIS formátumban kell lenniük.",editorDialog:{caption:"Metaadatok",captionPattern:"{title} metaadatai"},primaryToolbar:{view:"Megtekintés",viewXml:"XML megtekintése",edit:"Szerkesztés",initializing:"Betöltés...",startingEditor:"Szerkesztő indítása...",loadingDocument:"Dokumentum betöltése...",updatingDocument:"Dokumentum frissítése...",generatingView:"Nézet létrehozása...",errors:{errorGeneratingView:"Hiba történt a nézet létrehozásakor.",errorLoadingDocument:"Hiba történt a dokumentum betöltésekor."}},changesNotSaved:{prompt:"A dokumentumban nem mentett változtatások vannak.",dialogTitle:"Metaadat-szerkesztő bezárása",closeButton:"Bezárás"},download:{caption:"Letöltés",dialogTitle:"Letöltés",prompt:"Kattintson ide a fájl letöltéséhez."},load:{caption:"Megnyitás",dialogTitle:"Megnyitás",typeTab:"Új dokumentum",fileTab:"Fájl megnyitása",templateTab:"Egy sablon",itemTab:"Saját elem",filePrompt:"Válasszon egy helyi ArcGIS-metaadatokat tartalmazó XML fájlt. A metaadatoknak ArcGIS formátumban kell lenniük.",templatePrompt:"Metaadatok létrehozása",pullItem:"Metaadatok feltöltése az elemadatokkal.",importWarning:"A kiválasztott fájl nem ArcGIS formátumú. A feltöltött metaadatoknak ArcGIS formátumban kell lenniük.",loading:"Betöltés...",noMetadata:"Ehhez az elemhez metaadatokat lehet létrehozni az alábbi lehetőségek egyikével.",unrecognizedMetadata:"Az elemhez kapcsolódó metaadatok típusát a szerkesztő nem támogatja. Támogatott metaadatokat az alábbi lehetőségek egyikével lehet létrehozni.",errorLoading:"Hiba történt a betöltés közben.",warnings:{badFile:"A kiválasztott fájlt nem sikerült betölteni.",notAnXml:"A kiválasztott fájl nem XML fájl.",notSupported:"Ez a fájltípus nem támogatott."},portalCaption:"Felülírás"},save:{caption:"Mentés",dialogTitle:"Metaadatok mentése",working:"Metaadatok mentése...",errorSaving:"Hiba történt, a metaadatok mentése nem sikerült.",saveDialog:{pushCaption:"Módosítások alkalmazása az elemre"}},saveAndClose:{caption:"Mentés és bezárás"},saveDraft:{caption:"Letöltés",dialogTitle:"Letöltés"},validate:{caption:"Érvényesít",dialogTitle:"Érvényesítés",docIsValid:"A dokumentum érvényes."},viewHtml:{caption:"Megtekintés",dialogTitle:"Metaadatok megtekintése",savePrompt:"A dokumentum nem mentett módosításokat tartalmaz. Mentenie kell a változtatásokat ahhoz, hogy azok megjelenjenek a metaadatok megtekintésekor.",saveButton:"Mentés és megtekintés",portalNone:"A szabványokon alapuló metaadatokhoz nem rendelt hozzá szerzőt a rendszer. A metaadatok megtekintése előtt mentenie kell a változtatásokat."},del:{caption:"Törlés",dialogTitle:"Metaadatok törlése",prompt:"Biztosan törölni szeretné ezeket a metaadatokat?",working:"Metaadatok törlése...",errorDeleting:"Hiba történt, a metaadatok törlése nem sikerült.",portalNone:"Nincs törölhető metaadat-dokumentum. A szabványokon alapuló metaadatokhoz nem rendelt hozzá szerzőt a rendszer.",portalPrompt:"Ez törölni fogja a metaadat-dokumentumot, és visszaállítja az adott elem metaadatait eleminformációkká (pl. Cím, Leírás).",portalPrompt2:"Ezzel törölni fogja a szabványokon alapuló metaadatokat. Biztosan törölni szeretné ezeket a metaadatokat?",portalButton:"Törlés és bezárás"},transform:{caption:"Átalakítás",dialogTitle:"Átalakítás erre:",prompt:"",working:"Átalakítás...",errorTransforming:"Hiba történt a dokumentum átalakításakor."},errorDialog:{dialogTitle:"Hiba történt"}},arcgis:{portal:{metadataButton:{caption:"Metaadatok"}}},calendar:{button:"Naptár...",title:"Naptár"},geoExtent:{button:"Földrajzi kiterjedés beállítása...",title:"Földrajzi kiterjedés",navigate:"Navigálás",draw:"Rajzoljon egy téglalapot",drawHint:"Tartsa lenyomva a gombot a kezdéshez és engedje el a befejezéshez."},hints:{date:"(éééé vagy éééé-hh vagy éééé-hh-nn)",dateTime:"(éééé-hh-nnTóó:pp:mp.emp[+-]óó:pp)",dateOrDateTime:"(éééé vagy éééé-hh vagy éééé-hh-nn vagy éééé-hh-nnTóó:pp:mp.emp[+-]óó:pp)",delimitedTextArea:"(az elválasztáshoz használjon vesszőt vagy új sort)",fgdcDate:"(éééé vagy éééé-hh vagy éééé-hh-nn)",fgdcTime:"(óó:pp:mp.emp[+-]óó:pp)",integer:"(integert adjon meg)",latitude:"(tizedes fok)",longitude:"(tizedes fok)",number:"(számot adjon meg)",numberGreaterThanZero:"(0-nál nagyobb számot adjon meg)"},isoTopicCategoryCode:{caption:"Témakör-kategória",boundaries:"Közigazgatás és politikai határok",farming:"Mezőgazdaság és gazdálkodás",climatologyMeteorologyAtmosphere:"Légkör és éghajlat",biota:"Biológia és ökológia",economy:"Üzlet és gazdaság",planningCadastre:"Ingatlan-nyilvántartás",society:"Kultúra, társadalom és demográfia",elevation:"Magasság és származtatott termékek",environment:"Környezet és természetvédelem",structure:"Létesítmények és szerkezetek",geoscientificInformation:"Földtan és geofizika",health:"Emberi egészség és betegség",imageryBaseMapsEarthCover:"Távérzékelt felvételek és alaptérképek",inlandWaters:"Belvízkészletek",location:"Helyszínek és geodéziai hálózatok",intelligenceMilitary:"Katonaság",oceans:"Óceánok és torkolatok",transportation:"Közlekedési hálózatok",utilitiesCommunication:"Közművek és telekommunikáció"},multiplicity:{moveElementDown:"Szekció mozgatása lefelé",moveElementUp:"Szekció mozgatása felfelé",removeElement:"Szekció eltávolítása",repeatElement:"Szekció ismétlése"},optionalNode:{switchTip:"Szekció befoglalása vagy kizárása."},serviceTypes:{featureService:"Vektoros szolgáltatás",mapService:"Térképi szolgáltatás",imageService:"Raszteres szolgáltatás",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"OK",empty:"Meg kell adni egy értéket.",date:"Az értéknek dátumnak kell lennie.",integer:"Az értéknek integernek kell lennie.",number:"Az értéknek számnak kell lennie.",other:"Érvénytelen érték."},validationPane:{clearMessages:"Üzenetek törlése",prompt:"(kattintson az alábbi üzenetekre, és írja be a szükséges információkat a megadott mezőben)"}});