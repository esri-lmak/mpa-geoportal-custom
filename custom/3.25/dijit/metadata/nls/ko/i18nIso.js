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

define({documentTypes:{data:{caption:"ISO 19115(데이터)",description:""},service:{caption:"ISO 19119(서비스)",description:""},gmi:{caption:"ISO 19115-2(이미지 및 그리드 데이터)",description:""}},general:{reference:"참조"},sections:{metadata:"메타데이터",identification:"ID",distribution:"분포",quality:"품질",acquisition:"취득"},metadataSection:{identifier:"식별자",contact:"연락처",date:"날짜",standard:"표준",reference:"참조"},identificationSection:{citation:"인용",description:"설명",contact:"연락처",thumbnail:"썸네일",keywords:"키워드",constraints:"제약",resource:"리소스",resourceTab:{representation:"표시",language:"언어",classification:"분류",extent:"범위"},serviceResourceTab:{serviceType:"서비스 유형",extent:"범위",couplingType:"결합 유형",operation:"작업",operatesOn:"작동 기준"}},distributionSection:{},qualitySection:{scope:"범위",conformance:"적합성",lineage:"계보"},acquisitionSection:{requirement:"요구 사항",objective:"목표",instrument:"기기",plan:"계획",operation:"작업",platform:"플랫폼",environment:"환경"},AbstractMD_Identification:{sAbstract:"요약",purpose:"목적",credit:"크레딧",pointOfContact:"연락 담당자",resourceMaintenance:"유지관리",graphicOverview:"그래픽 오버뷰",descriptiveKeywords:"키워드 수집",resourceConstraints:"제약"},CI_Address:{deliveryPoint:"배달 지점",city:"시",administrativeArea:"관리 영역",postalCode:"우편 번호",country:"국가",electronicMailAddress:"이메일 주소"},CI_Citation:{title:"제목",alternateTitle:"대체 제목",identifier:"고유 리소스 식별자",resource:{title:"리소스 제목",date:"리소스 날짜"},specification:{title:"사양 제목",date:"사양 날짜"}},CI_Contact:{phone:"전화",address:"주소",onlineResource:"온라인 리소스",hoursOfService:"서비스 시간",contactInstructions:"연락 지침"},CI_Date:{date:"날짜",dateType:"데이터 유형"},CI_DateTypeCode:{caption:"데이터 유형",creation:"만든 날짜",publication:"발행일",revision:"개정일"},CI_OnLineFunctionCode:{caption:"함수",download:"다운로드",information:"정보",offlineAccess:"오프라인 접근",order:"순서",search:"검색"},CI_OnlineResource:{caption:"온라인 리소스",linkage:"URL",protocol:"프로토콜",applicationProfile:"응용프로그램 프로필",name:"이름",description:"설명",sFunction:"함수"},CI_ResponsibleParty:{caption:"연락 담당자",individualName:"개인 이름",organisationName:"기관 이름",positionName:"위치 이름",contactInfo:"연락처 정보",role:"역할"},CI_RoleCode:{caption:"역할",resourceProvider:"리소스 공급자",custodian:"관리인",owner:"소유자",user:"사용자",distributor:"디스트리뷰터",originator:"출처",pointOfContact:"연락 담당자",principalInvestigator:"연구 책임자",processor:"처리자",publisher:"발행자",author:"작성자"},CI_Telephone:{voice:"음성",facsimile:"팩스"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"웹서비스"},DQ_ConformanceResult:{caption:"적합성 결과",explanation:"설명",degree:{caption:"도",validationPerformed:"유효성 검사 수행됨",conformant:"적합",nonConformant:"부적합"}},DQ_DataQuality:{report:"보고서"},DQ_Scope:{level:"범위(품질 정보 적용)",levelDescription:"수준 설명"},EX_Extent:{caption:"범위",description:"설명",geographicElement:"공간 범위",temporalElement:"시간 범위",verticalElement:"수직 범위"},EX_GeographicBoundingBox:{westBoundLongitude:"서쪽 경계 경도",eastBoundLongitude:"동쪽 경계 경도",southBoundLatitude:"남쪽 경계 경도",northBoundLatitude:"북쪽 경계 경도"},EX_GeographicDescription:{caption:"지리적 설명"},EX_TemporalExtent:{TimePeriod:{beginPosition:"시작일",endPosition:"종료일"}},EX_VerticalExtent:{minimumValue:"최소값",maximumValue:"최대값",verticalCRS:"수직 CRS"},Length:{caption:"길이",uom:"측정 단위",km:"킬로미터",m:"미터",mi:"마일",ft:"피트"},LI_Lineage:{statement:"계보 설명"},MD_BrowseGraphic:{fileName:"그래픽 URL 찾아보기",fileDescription:"그래픽 캡션 찾아보기",fileType:"그래픽 유형 찾아보기"},MD_ClassificationCode:{unclassified:"분류되지 않음",restricted:"제한됨",confidential:"기밀",secret:"비공개",topSecret:"일급 기밀"},MD_Constraints:{caption:"사용 제약",useLimitation:"사용 제한"},MD_DataIdentification:{spatialRepresentationType:"공간 표시 유형",spatialResolution:"공간 해상도",language:"리소스 언어",supplementalInformation:"추가"},MD_DigitalTransferOptions:{onLine:"온라인"},MD_Distribution:{distributionFormat:"배포 형식",transferOptions:"전송 옵션"},MD_Format:{name:"형식 이름",version:"형식 버전"},MD_Identifier:{caption:"URI",identifierCaption:"식별자",code:"코드"},MD_Keywords:{delimitedCaption:"키워드",thesaurusName:"관련 동의어 사전"},MD_KeywordTypeCode:{caption:"키워드 유형",discipline:"분야",place:"장소",stratum:"계층",temporal:"시간",theme:"테마"},MD_LegalConstraints:{caption:"법적 제약",accessConstraints:"접근 제약",useConstraints:"사용 제약 조건",otherConstraints:"다른 제약"},MD_MaintenanceFrequencyCode:{caption:"빈도",continual:"지속적으로",daily:"매일",weekly:"매주",fortnightly:"2주에 한 번",monthly:"매월",quarterly:"분기별",biannually:"연 2회",annually:"매년",asNeeded:"필요할 때",irregular:"규칙적이지 않음",notPlanned:"계획되지 않음",unknown:"알 수 없음"},MD_Metadata:{caption:"메타데이터",fileIdentifier:"파일 식별자",language:"메타데이터 언어",hierarchyLevel:"계층 수준",hierarchyLevelName:"계층 수준 이름",contact:"메타데이터 연락처",dateStamp:"메타데이터 날짜",metadataStandardName:"메타데이터 표준 이름",metadataStandardVersion:"메타데이터 표준 버전",referenceSystemInfo:"기준 체계",identificationInfo:"ID",distributionInfo:"분포",dataQualityInfo:"품질"},MD_ProgressCode:{caption:"진행률 코드",completed:"완료됨",historicalArchive:"이력 관리",obsolete:"사용되지 않음",onGoing:"계속 진행 중",planned:"계획됨",required:"필요한 정보",underDevelopment:"개발 중"},MD_RepresentativeFraction:{denominator:"분모"},MD_Resolution:{equivalentScale:"동등 축척",distance:"거리"},MD_RestrictionCode:{copyright:"저작권",patent:"특허권",patentPending:"특허 출원 중",trademark:"상표",license:"라이선스",intellectualPropertyRights:"지적 재산권",restricted:"제한됨",otherRestrictions:"기타 제한 사항"},MD_ScopeCode:{attribute:"속성",attributeType:"속성 유형",collectionHardware:"컬렉션 하드웨어",collectionSession:"컬렉션 세션",dataset:"데이터셋",series:"계열",nonGeographicDataset:"비공간 데이터셋",dimensionGroup:"디멘전 그룹",feature:"피처",featureType:"피처 유형",propertyType:"속성 유형",fieldSession:"필드 세션",software:"소프트웨어",service:"서비스",model:"모델",tile:"타일"},MD_ScopeDescription:{attributes:"속성",features:"특징",featureInstances:"피처 인스턴스",attributeInstances:"속성 인스턴스",dataset:"데이터셋",other:"기타"},MD_SecurityConstraints:{caption:"보안 제약",classification:"분류",userNote:"사용자 노트",classificationSystem:"분류 시스템",handlingDescription:"처리 설명"},MD_SpatialRepresentationTypeCode:{caption:"공간 표시 유형",vector:"벡터",grid:"그리드",textTable:"텍스트 테이블",tin:"TIN",stereoModel:"스테레오 모델",video:"비디오"},MD_TopicCategoryCode:{caption:"주제 범주",boundaries:"행정과 정치 경계",farming:"농업",climatologyMeteorologyAtmosphere:"대기 및 기후",biota:"생물학 및 생태학",economy:"비즈니스 및 경제",planningCadastre:"지적",society:"문화, 사회, 인구",elevation:"고도 및 파생 산출물",environment:"환경 및 보존",structure:"시설 및 구조",geoscientificInformation:"지질학 및 지구 물리학",health:"인류 건강 및 질병",imageryBaseMapsEarthCover:"이미지 및 베이스맵",inlandWaters:"내륙 수자원",location:"위치 및 측지 네트워크",intelligenceMilitary:"군대",oceans:"해양 및 하구",transportation:"교통 네트워크",utilitiesCommunication:"공공 설비 및 통신"},MI_ContextCode:{caption:"컨텍스트",acquisition:"취득",pass:"통과",wayPoint:"경로점"},MI_EnvironmentalRecord:{caption:"환경 조건",averageAirTemperature:"평균 기온",maxRelativeHumidity:"최대 상대 습도",maxAltitude:"최대 고도",meterologicalConditions:"기상 조건"},MI_Event:{identifier:"이벤트 식별자",time:"시간",expectedObjectiveReference:"예상 목표(목표 식별자)",relatedSensorReference:"관련 센서(기기 식별자)",relatedPassReference:"관련 통과(플랫폼 통과 식별자)"},MI_GeometryTypeCode:{point:"포인트",linear:"선형",areal:"면적",strip:"스트립"},MI_Instrument:{citation:"기기 인용",identifier:"기기 식별자",sType:"기기 유형",description:"기기 설명",mountedOn:"탑재",mountedOnPlatformReference:"탑재(플랫폼 식별자)"},MI_Metadata:{acquisitionInformation:"취득"},MI_Objective:{caption:"목표",identifier:"목표 식별자",priority:"대상 우선순위",sFunction:"목표 기능",extent:"범위",pass:"플랫폼 통과",sensingInstrumentReference:"탐지 기기(기기 식별자)",objectiveOccurrence:"이벤트",sections:{identification:"ID",extent:"범위",pass:"통과",sensingInstrument:"탐지 기기",objectiveOccurrence:"이벤트"}},MI_ObjectiveTypeCode:{caption:"유형(목표 수집 기술)",instantaneousCollection:"즉시 수집",persistentView:"영구적으로 보기",survey:"측량"},MI_Operation:{caption:"작업",description:"작업 설명",citation:"작업 인용",identifier:"작업 식별자",status:"작업 상태",objectiveReference:"관련 목표(목표 식별자)",planReference:"관련 계획(계획 식별자)",significantEventReference:"관련 이벤트(이벤트 식별자)",platformReference:"관련 플랫폼(플랫폼 식별자)",sections:{identification:"ID",related:"관련"}},MI_OperationTypeCode:{caption:"작업 유형",real:"실제",simulated:"시뮬레이션",synthesized:"합성"},MI_Plan:{sType:"데이터 수집을 위한 샘플링 지오메트리",status:"계획 상태",citation:"수집을 요청하는 기관 인용",satisfiedRequirementReference:"충족된 요구 사항(요구 사항 식별자)",operationReference:"관련 작업(작업 식별자)"},MI_Platform:{citation:"플랫폼 인용",identifier:"플랫폼 식별자",description:"기기를 지원하는 플랫폼에 대한 설명",sponsor:"플랫폼 후원 기관",instrument:"플랫폼에 탑재된 기기",instrumentReference:"기기 식별자",sections:{identification:"ID",sponsor:"후원",instruments:"기기"}},MI_PlatformPass:{identifier:"플랫폼 통과 식별자",extent:"플랫폼 통과 범위",relatedEventReference:"관련 이벤트(이벤트 식별자)"},MI_PriorityCode:{critical:"매우 중요",highImportance:"중요도 높음",mediumImportance:"중요도 보통",lowImportance:"중요도 낮음"},MI_RequestedDate:{requestedDateOfCollection:"수집 요청일",latestAcceptableDate:"허용되는 마지막 날짜"},MI_Requirement:{caption:"요구 사항",citation:"요구 사항 지침 자료 인용",identifier:"요구 사항 식별자",requestor:"요구 사항 요청자",recipient:"요구 사항 결과 수신자",priority:"요구 사항 우선순위",requestedDate:"요청일",expiryDate:"만료일",satisifiedPlanReference:"충족된 계획(계획 식별자)",sections:{identification:"ID",requestor:"요청자",recipient:"수신자",priorityAndDates:"우선순위 및 날짜",satisifiedPlan:"충족된 계획"}},MI_SequenceCode:{caption:"순서",start:"시작",end:"끝",instantaneous:"즉시"},MI_TriggerCode:{caption:"트리거",automatic:"자동",manual:"수동",preProgrammed:"사전 프로그램"},ObjectReference:{uuidref:"UUID 참조",xlinkref:"URL 참조"},RS_Identifier:{caption:"ID 및 코드 공간",code:"코드",codeSpace:"코드 공간"},SV_CouplingType:{loose:"느슨함",mixed:"혼합",tight:"조밀함"},SV_OperationMetadata:{operationName:"작업 이름",DCP:"DCP",connectPoint:"연결 포인트"},SV_ServiceIdentification:{serviceType:"서비스 유형",couplingType:"결합 유형",containsOperations:"작업 메타데이터",operatesOn:"작동 기준"},TM_Primitive:{indeterminatePosition:"위치 미정",indeterminates:{before:"이전",after:"이후",now:"지금",unknown:"알 수 없음"}},gemet:{concept:{gemetConceptKeyword:"GEMET 개념 키워드",tool:"조회...",dialogTitle:"GEMET - 개념 키워드",searchLabel:"검색:",searchTip:"GEMET 검색"},theme:{tool:"조회...",dialogTitle:"GEMET - Inspire 데이터 테마"},ioerror:"GEMET 서비스와 통신하는 중 오류가 발생했습니다. {url}",searching:"GEMET 검색 중...",noMatch:"일치하는 결과가 없습니다.",languages:{bg:"불가리아어",cs:"체코어",da:"덴마크어",nl:"네덜란드어",en:"영어",et:"에스토니아어",fi:"핀란드어",fr:"프랑스어",de:"독일어",el:"그리스어",hu:"헝가리어",ga:"게일어(아일랜드)",it:"이탈리아어",lv:"라트비아어",lt:"리투아니아어",mt:"몰타어",pl:"폴란드어",pt:"포르투갈어",ro:"루마니아어",sk:"슬로바키아어",sl:"슬로베니아어",es:"스페인어",sv:"스웨덴어"}}});