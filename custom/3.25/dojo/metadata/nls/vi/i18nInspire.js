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

define({documentTypes:{data:{caption:"INSPIRE (Dữ liệu)",description:""},service:{caption:"INSPIRE (Dịch vụ)",description:""}},dataThemeKeywords:{caption:"Chủ đề Dữ liệu Inspire"},inspireServiceType:{discovery:"Dịch vụ Tìm kiếm Tài nguyên",view:"Dịch vụ Xem",download:"Dịch vụ Tải xuống",transformation:"Dịch vụ Chuyển đổi",invoke:"Dịch vụ Lấy dữ liệu",other:"Dịch vụ Khác"},keywordSections:{dataTheme:"Chủ đề Dữ liệu Inspire",serviceCategory:"Danh mục Dịch vụ ISO 19119",gemetConcept:"Khái niệm GEMET",otherKeywords:"Từ khóa Khác"},LanguageCode:{bul:"Tiếng Bulgari",cze:"Tiếng Séc",dan:"Tiếng Đan Mạch",dut:"Tiếng Hà Lan",eng:"Tiếng Anh",est:"Tiếng Estonia",fin:"Tiếng Phần Lan",fre:"Tiếng Pháp",ger:"Tiếng Đức",gre:"Tiếng Hy Lạp",hun:"Tiếng Hungari",gle:"Tiếng Gaelic (của Ireland)",ita:"Tiếng Ý",lav:"Tiếng Latvia",lit:"Tiếng Lithuania",mlt:"Tiếng Malta",pol:"Tiếng Ba Lan",por:"Tiếng Bồ Đào Nha",rum:"Tiếng Rumani",slo:"Tiếng Slovak",slv:"Tiếng Slovene",spa:"Tiếng Tây Ban Nha",swe:"Tiếng Thụy Điển",chi:"Tiếng Trung",kor:"Tiếng Hàn",nor:"Tiếng Na Uy",rus:"Tiếng Nga",tur:"Tiếng Thổ Nhĩ Kỳ"},otherConstraints:{noLimitations:"Không giới hạn",confidentialityOfProceedings:"Tính bí mật về hoạt động của các cơ quan công quyền...",internationalRelations:"Quan hệ quốc tế, công an hoặc quốc phòng",courseOfJustice:"Các khóa học về pháp luật, khả năng một cá nhân bất kỳ để nhận được sự xét xử công bằng...",confidentialityOfCommercial:"Tính bí mật của thông tin thương mại hoặc công nghiệp...",intellectualProperty:"Quyền Sở hữu Trí tuệ",confidentialityOfPersonalData:"Tính bí mật của dữ liệu và/hoặc tệp tin cá nhân...",interestsOrProtection:"Quyền lợi hoặc đảm bảo cho bất kỳ ai cung cấp thông tin...",protectionOfEnvironment:"Bảo vệ môi trường mà thông tin đó có liên quan...",freeText:"Văn bản tự do"},serviceType:{humanInteractionService:"100 Dịch vụ tương tác người - địa lý",humanCatalogueViewer:"101 Người xem danh mục",humanGeographicViewer:"102 Người xem địa lý",humanGeographicSpreadsheetViewer:"103 Người xem trang tính địa lý",humanServiceEditor:"104 tính dụng dịch vụ*",humanChainDefinitionEditor:"105 Người biên tập định nghĩa chuỗi",humanWorkflowEnactmentManager:"106 Người quản lý ban hành quy trình",humanGeographicFeatureEditor:"107 Người biên tập đối tượng địa lý",humanGeographicSymbolEditor:"108 Người biên tập biểu tượng địa lý ",humanFeatureGeneralizationEditor:"109 Người biên tập tổng quát hóa đối tượng",humanGeographicDataStructureViewer:"110 Người xem cấu trúc dữ liệu địa lý",infoManagementService:"200 Dịch vụ quản lý thông tin/mô hình địa lý",infoFeatureAccessService:"201 Dịch vụ truy cập đối tượng",infoMapAccessService:"202 Dịch vụ truy cập bản đồ",infoCoverageAccessService:"203 Dịch vụ truy cập phạm vi địa lý",infoSensorDescriptionService:"204 Dịch vụ mô tả cảm biến",infoProductAccessService:"205 Dịch vụ truy cập sản phẩm",infoFeatureTypeService:"206 Dịch vụ loại đối tượng",infoCatalogueService:"207 Dịch vụ danh mục",infoRegistryService:"208 Dịch vụ đăng ký",infoGazetteerService:"209 Dịch vụ Gazetteer",infoOrderHandlingService:"210 Dịch vụ xử lý yêu cầu",infoStandingOrderService:"211 Dịch vụ lệnh thanh toán định kỳ",taskManagementService:"300 Dịch vụ quản lý quy trình/công việc địa lý",chainDefinitionService:"301 Dịch vụ định nghĩa chuỗi",workflowEnactmentService:"302 Dịch vụ ban hành quy trình",subscriptionService:"303 Dịch vụ đăng ký",spatialProcessingService:"400 Dịch vụ xử lý địa lý - không gian",spatialCoordinateConversionService:"401 Dịch vụ chuyển đổi tọa độ",spatialCoordinateTransformationService:"402 Dịch vụ biến đổi tọa độ",spatialCoverageVectorConversionService:"403 Dịch vụ chuyển đổi phạm vi địa lý/véc tơ",spatialImageCoordinateConversionService:"404 Dịch vụ chuyển đổi tọa độ hình ảnh",spatialRectificationService:"405 Dịch vụ hiệu chỉnh",spatialOrthorectificationService:"406 Dịch vụ nắn trực giao",spatialSensorGeometryModelAdjustmentService:"407 Dịch vụ chỉnh mô hình hình học cảm biến",spatialImageGeometryModelConversionService:"408 Dịch vụ chuyển đổi mô hình hình học hình ảnh",spatialSubsettingService:"409 Dịch vụ trích xuất dữ liệu",spatialSamplingService:"410 Dịch vụ lấy mẫu",spatialTilingChangeService:"411 Dịch vụ thay đổi Tile",spatialDimensionMeasurementService:"412 Dịch vụ đo kích thước",spatialFeatureManipulationService:"413 Dịch vụ xử lý thủ công đối tượng",spatialFeatureMatchingService:"414 Dịch vụ so sánh đối tượng",spatialFeatureGeneralizationService:"415 Dịch vụ tổng quát hóa đối tượng",spatialRouteDeterminationService:"416 Dịch vụ định tuyến",spatialPositioningService:"417 Dịch vụ định vị",spatialProximityAnalysisService:"418 Dịch vụ phân tích khoảng gần",thematicProcessingService:"500 Dịch vụ xử lý địa lý - theo chủ đề",thematicGoparameterCalculationService:"501 Dịch vụ tính toán tham số địa lý",thematicClassificationService:"502 Dịch vụ phân loại theo chủ đề",thematicFeatureGeneralizationService:"503 Dịch vụ tổng quát hóa đối tượng",thematicSubsettingService:"504 Dịch vụ trích xuất dữ liệu",thematicSpatialCountingService:"505 Dịch vụ đếm không gian",thematicChangeDetectionService:"506 Dịch vụ phát hiện thay đổi",thematicGeographicInformationExtractionService:"507 Dịch vụ trích xuất thông tin địa lý",thematicImageProcessingService:"508 Dịch vụ xử lý ảnh",thematicReducedResolutionGenerationService:"509 Dịch vụ tạo độ phân giải giảm",thematicImageManipulationService:"510 Dịch vụ Xử lý thủ công Ảnh",thematicImageUnderstandingService:"511 Dịch vụ nắm bắt ảnh",thematicImageSynthesisService:"512 Dịch vụ tổng hợp ảnh",thematicMultibandImageManipulationService:"513 Xử lý thủ công ảnh đa băng tần",thematicObjectDetectionService:"514 Dịch vụ phát hiện đối tượng",thematicGeoparsingService:"515 Dịch vụ gắn thông tin địa lý",thematicGeocodingService:"516 Dịch vụ mã hóa địa lý",temporalProcessingService:"600 Dịch vụ xử lý địa lý - thời gian",temporalReferenceSystemTransformationService:"601 Dịch vụ biến đổi hệ thống tham chiếu thời gian",temporalSubsettingService:"602 Dịch vụ trích xuất dữ liệu",temporalSamplingService:"603 Dịch vụ lấy mẫu",temporalProximityAnalysisService:"604 Dịch vụ phân tích khoảng gần thời gian",metadataProcessingService:"700 Dịch vụ xử lý địa lý - siêu dữ liệu",metadataStatisticalCalculationService:"701 Dịch vụ tính toán thống kê",metadataGeographicAnnotationService:"702 Dịch vụ chú giải địa lý",comService:"800 Dịch vụ trao đổi thông tin địa lý",comEncodingService:"801 Dịch vụ mã hóa",comTransferService:"802 Dịch vụ truyền dữ liệu",comGeographicCompressionService:"803 Dịch vụ nén dữ liệu địa lý",comGeographicFormatConversionService:"804 Dịch vụ chuyển đổi định dạng địa lý",comMessagingService:"805 Dịch vụ nhắn tin",comRemoteFileAndExecutableManagement:"806 Quản lý tập tin từ xa và tập tin thực thi"},useLimitation:{noCondition:"Không áp dụng điều kiện",unknownCondition:"Điều kiện không xác định",freeText:"Văn bản tự do"}});