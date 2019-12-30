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

define({documentTypes:{fgdc:{caption:"FGDC",description:""}},alternates:{none:"Geen",notComplete:"Niet voltooid",other:"Anders",present:"Aanwezig",unknown:"Onbekend",unpublishedMaterial:"Ongepubliceerd materiaal"},hints:{integerGreaterThanOne:"(een integer invoeren > 1)",integer0To100:"(een integer invoeren 0..100)"},citeinfo:{caption:"Citaatinformatie",origin:"Opdrachtgever",pubdate:"Publicatiedatum",pubtime:"Publicatietijd",title:"Titel",edition:"Editie",geoform:{caption:"Geospatiale gegevens presentatievorm",atlas:"Atlas",audio:"Audio",diagram:"Elektrisch schema",sDocument:"Document",globe:"Globe",map:"Kaart",model:"Model",multiMediaPresentation:"Multimediapresentatie",profile:"Profiel",rasterDigitalData:"Raster digitale gegevens",remoteSensingImage:"Remote-sensing afbeelding",section:"Sectie",spreadsheet:"Spreadsheet",tabularDigitalData:"Tabelvormige digitale gegevens",vectorDigitalData:"Vector digitale gegevens",video:"Video",view:"Weergeven"},serinfo:{caption:"Reeksinformatie",sername:"Naam serie",issue:"Probleemidentificatie"},pubinfo:{caption:"Publicatie-Informatie",pubplace:"Publicatieplaats",publish:"Publisher"},othercit:"Overige citaatdetails",onlink:"Onlineverbinding (URL)"},cntinfo:{caption:"Contactgegevens",section:{primary:"Primair",phoneAndEmail:"Telefoon en e-mail",hoursAndInstructions:"Uren en Instructies"},cntorgp:{caption:"Per organisatie",cntorg:"Organisatie",cntper:"Persoon"},cntperp:{caption:"Per persoon",cntper:"Persoon",cntorg:"Organisatie"},cntpos:"Positie",cntaddr:{caption:"Adres",addrtype:{caption:"Addrestype",mailing:"Mailing",physical:"Fysiek",mailingAndPhysical:"Mailing en fysiek"},address:"Adres",city:"Stad",state:"Staat",postal:"Postcode",country:"Land"},cntvoice:"Spraak",cnttdd:"TDD/TTY-Telefoon (slechthorenden)",cntfax:"Fax",cntemail:"E-mailadres",hours:"Uren",cntinst:"Instructies"},dataqual:{caption:"Datakwaliteitinformatie",section:{attributeAccuracy:"Attribuutnauwkeurigheid",logicalConsistency:"Logische samenhang",completeness:"Volledigheid",positionalAccuracy:"Positionele nauwkeurigheid",lineage:"Lineage",cloudCover:"Cloud Cover"},attracc:{caption:"Attribuutnauwkeurigheid",attraccr:"Rapport attribuutnauwkeurigheid",qattracc:{caption:"Kwantitatieve beoordeling attribuutnauwkeurigheid",attraccv:"Waarde attribuutnauwkeurigheid",attracce:"Uitleg attribuutnauwkeurigheid"}},logic:"Rapport logische samenhang",complete:"Rapport volledigheid",posacc:"Positionele nauwkeurigheid",horizpa:{caption:"Horizontale positionele nauwkeurigheid",horizpar:"Rapport horizontale positionele nauwkeurigheid",qhorizpa:{caption:"Kwantitatieve horizontale positionele nauwkeurigheid beoordeling",horizpav:"Waarde horizontale positionele nauwkeurigheid",horizpae:"Uitleg horizontale positionele nauwkeurigheid"}},vertacc:{caption:"Verticale positionele nauwkeurigheid",vertaccr:"Rapport verticale positionele nauwkeurigheid",qvertpa:{caption:"Kwantitatieve verticale positionele nauwkeurigheid beoordeling",vertaccv:"Waarde verticale positionele nauwkeurigheid",vertacce:"Uitleg verticale positionele nauwkeurigheid"}},lineage:{caption:"Lineage"},srcinfo:{caption:"Broninformatie",srccite:"Bronaanhaling",srcscale:"Bron schaalnoemer",typesrc:{caption:"Soort bronmedia",paper:"Papier",stableBaseMaterial:"Materiaal stabiele basis",microfiche:"Microfiche",microfilm:"Microfilm",audiocassette:"Audiocassette",chart:"Diagram",filmstrip:"Filmstrip",transparency:"Transparant",videocassette:"Videocassette",videodisc:"Videodisc",videotape:"Videoband",physicalModel:"Fysisch model",computerProgram:"Computerprogramma",disc:"Disc",cartridgeTape:"Cartridge tape",magneticTape:"Magneetband",online:"Online",cdrom:"CD-ROM",electronicBulletinBoard:"Elektronisch bulletin board",electronicMailSystem:"Elektronisch mailsysteem"},srctime:"Bron periode van content",srccurr:"Bron actualiteitreferentie",srccitea:"Afkorting bronaanhaling",srccontr:"Bronbijdrage"},procstep:{caption:"Processtap",procdesc:"Procesbeschrijving",srcused:"Afkorting bron gebruikt citaat",procdate:"Procesdatum",proctime:"Procestijd",srcprod:"Afkorting bron geproduceerd citaat",proccont:"Procescontact"},cloud:"Cloud Cover"},distinfo:{caption:"Distributie-informatie",section:{distributor:"Distributeur",description:"Beschrijving",orderProcess:"Bestelproces",prerequisites:"Voorwaarden",availability:"Beschikbaarheid"},distrib:"Distributeur",resdesc:{caption:"Bronbeschrijving",liveData:"Live data en kaarten",downloadableData:"Downloadbare data",offlineData:"Offline data",staticMapImages:"Statische kaartafbeeldingen",sDocument:"Overige documenten",application:"Applicaties",geographicService:"Geografische services",clearingHouse:"Clearingkantoren",mapFiles:"Kaartbestanden",geographicActivies:"Geografische activiteiten"},distliab:"Verdeling Aansprakelijkheidsverklaring",custom:"Aangepast bestelproces",techpreq:"Technische vereisten",availabl:"Beschikbaarheid"},eainfo:{caption:"Entiteit- en attribuutinformatie",overview:"Overzichtbeschrijving",eaover:"Entiteit- en attribuutoverzicht",eadetcit:"Entiteit- en attribuutdetailcitaat"},idinfo:{caption:"Identificatie-informatie",section:{timeAndStatus:"Tijd en status",constraints:"Beperkingen",contact:"Contactpersoon",additional:"Extra"},citeinfo:"Citaat",descript:{caption:"Beschrijving",sAbstract:"Abstract",purpose:"Doel",supplinf:"Aanvullende informatie"},timeperd:{caption:"Periode van content",current:{caption:"Actualiteitreferentie",groundCondition:"Basisvoorwaarde",publicationDate:"Publicatiedatum"}},status:{caption:"Status",progress:{caption:"Voortgang",complete:"Voltooid",inWork:"In behandeling",planned:"Gepland"},update:{caption:"Onderhoud en updatefrequentie",continual:"Continu",daily:"Dagelijks",weekly:"Wekelijks",monthly:"Maandelijks",annually:"Jaarlijks",unknown:"Onbekend",asNeeded:"Indien nodig",irregular:"Onregelmatig",nonePlanned:"Niet gepland"}},spdom:{caption:"Extent",bounding:{caption:"Omgrenzende coördinaten",westbc:"Westelijke omgrenzende lengtegraad",eastbc:"Oostelijke omgrenzende lengtegraad",northbc:"Noordelijke omgrenzende breedtegraad",southbc:"Zuidelijke omgrenzende breedtegraad"}},keywords:{caption:"Trefwoorden",theme:"Thema",place:"Plaats",stratum:"Stratum",temporal:"Tijdelijk",thesaursus:"Bijbehorende thesaurus",delimited:"Trefwoorden",themektIsoTopicCategory:"ISO onderwerp ...",themektIsoTopicDialog:"ISO onderwerp",placektGnis:"Geografische namen Informatiesysteem"},accconst:"Toegangsbeperkingen",useconst:"Gebruiksbeperkingen",ptcontac:"Aanspreekpunt voor de resource",browse:{caption:"Bekijk afbeelding",browsen:"Bekijk afbeelding URL",browsed:"Bladeren beschrijving grafisch bestand",browset:"Bladeren type grafisch bestand"},datacred:"Krediet dataset",secinfo:{caption:"Beveiligingsinformatie",secsys:"Veiligheidsclassificatiesysteem",secclass:{caption:"Veiligheidsclassificatie",topSecret:"Topgeheim",secret:"Geheim",confidential:"Vertrouwelijk",restricted:"Beperkt",unclassified:"Ongeclassificeerd",sensitive:"Gevoelig"},sechandl:"Veiligheidsbeschrijving"},sNative:"Native Data Set omgeving",crossref:"Kruisverwijzing"},metadata:{idinfo:"Identificatie",dataqual:"Kwaliteit",spdoinfo:"Ruimtelijke gegevens organisatie",spref:"Ruimtelijke referentie",eainfo:"Entiteit en attribuut",distinfo:"Distributie",metainfo:"Metadata"},metainfo:{caption:"Metadata-informatie",section:{dates:"Metadata-datums",contact:"Metadata-contact",standard:"Metadata-standaard",additional:"Extra"},metd:"Metadata-datum",metrd:"Metadata review datum",metfrd:"Metadata toekomstige reviewdatum",metstdn:"Metadata-standaardnaam",metstdv:"Metadata-standaardversie",metac:"Metadata-toegangsbeperkingen",metuc:"Metadata-gebruiksbeperkingen",metsi:{caption:"Metadata-veiligheidsinformatie",metscs:"Metadata-veiligheidsclassificatiesysteem",metsc:"Metadata-veiligheidsclassificatie",metshd:"Metadata-veiligheidsbeschrijving"}},spref:{caption:"Ruimtelijke referentie-informatie",horizsys:{caption:"Horizontaal coördinaatsysteem",geograph:{caption:"Geografisch",latres:"Breedtegraadresolutie",longres:"Lengtegraadresolutie",geogunit:{caption:"Geografische coördinaateenheden",decimalDegrees:"Decimale graden",decimalMinutes:"Decimale minuten",decimalSeconds:"Decimale seconden",degreesAndDecimalMinutes:"Graden en decimale minuten",degreesMinutesAndDecimalSeconds:"Graden, minuten en decimale seconden",radians:"Radialen",grads:"Graden"}},planar:{caption:"Planair"},local:{caption:"Lokaal",localdes:"Lokale beschrijving",localgeo:"Lokale georeferentie-informatie"},geodetic:{caption:"Geodetisch model",horizdn:{caption:"Horizontale datum naam",nad83:"Noord-Amerikaanse datum uit 1983",nad27:"Noord-Amerikaanse datum uit 1927"},ellips:{caption:"Ellipsoïde naam",grs80:"Geodetisch referentiesysteem 80",clarke1866:"Clarke 1866"},semiaxis:"Semi-grote-as",denflat:"Gemene deler van afvlakverhouding"}},vertdef:{caption:"Verticaal coördinaatsysteem",altsys:{caption:"Hoogtesysteem",altdatum:{caption:"Hoogte datum naam",navd88:"Noord-Amerikaanse verticale datum uit 1988",ngvd29:"Nationale geodetische datum uit 1929"},altres:"Hoogteresolutie",altunits:{caption:"Hoogte afstandseenheden",meters:"Meter",feet:"Voet"},altenc:{caption:"Hoogte coderingsmethode",explicit:"Expliciete hoogtecoördinaat opgenomen met horizontale coördinaten",implicit:"Impliciete coördinaat",attribute:"Attribuutwaarden"}},depthsys:{caption:"Dieptesysteem",depthdn:{caption:"Diepte datum naam",option1:"Lokaal oppervlak",option2:"Grafiekdatum; datum voor klinkende korting",option3:"Laagste astronomische getij",option4:"Hoogste astronomische getij",option5:"Gemiddelde laagwater",option6:"Gemiddelde hoogwater",option7:"Gemiddeld zeeniveau",option8:"Landonderzoek datum",option9:"Gemiddelde laagwater bronnen",option10:"Gemiddelde hoogwater bronnen",option11:"Gemiddelde laagwater doodtij",option12:"Gemiddelde hoogwater doodtij",option13:"Gemiddelde lager laagwater",option14:"Gemiddelde lager laagwater bronnen",option15:"Gemiddelde hoger hoogwater",option16:"Gemiddelde hoger laagwater",option17:"Gemiddelde hoger hoogwater",option18:"Springvloed",option19:"Tropisch lager laagwater",option20:"Doodtij",option21:"Hoogwater",option22:"Hoger hoogwater",option23:"Laagwater",option24:"Laagwaterdatum",option25:"Laagste laagwater",option26:"Lager laagwater",option27:"Laagste normaal laagwater",option28:"Gemiddeld tijniveau",option29:"Indisch spring-laagwater",option30:"High-water full and change",option31:"Low-water full and change",option32:"Columbia rivier datum",option33:"Golfkust laagwaterdatum",option34:"Equatoriale bronnen laagwater",option35:"Gemiddelde laagste astronomische getij",option36:"Geen correctie"},depthres:"Diepteresolutie",depthdu:{caption:"Diepte afstandseenheden",meters:"Meter",feet:"Voet"},depthem:{caption:"Diepte coderingsmethode",explicit:"Expliciete dieptecoördinaat inclusief horizontale coördinaten",implicit:"Impliciete coördinaat",attribute:"Attribuutwaarden"}}}},timeinfo:{caption:"Informatie tijdsperiode",sngdate:"Enkele datum",mdattim:"Meerdere datums",rngdates:"Datumbereik",caldate:"Datum",time:"Tijd",begdate:"Begindatum",begtime:"Begintijd",enddate:"Einddatum",endtime:"Eindtijd"}});