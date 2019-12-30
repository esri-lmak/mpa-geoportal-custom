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

define({general:{cancel:"Hủy",close:"Đóng",none:"Không có",ok:"OK",other:"Khác",stamp:"Tem",now:"Bây giờ",choose:"Chọn Một:"},editor:{noMetadata:"Không có mô tả dữ liệu cho mục này.",xmlViewOnly:"Loại thông tin mô tả dữ liệu được liên kết với mục này không được trình biên tập hỗ trợ. Thông tin mô tả dữ liệu phải có định dạng ArcGIS.",editorDialog:{caption:"Siêu dữ liệu",captionPattern:"Mô tả dữ liệu cho {title}"},primaryToolbar:{view:"Xem",viewXml:"Xem XML",edit:"Chỉnh sửa",initializing:"Đang tải...",startingEditor:"Đang bắt đầu trình biên tập...",loadingDocument:"Đang tải tài liệu...",updatingDocument:"Đang cập nhật tài liệu...",generatingView:"Đang tạo chế độ xem...",errors:{errorGeneratingView:"Đã xảy ra lỗi khi tạo chế độ xem.",errorLoadingDocument:"Đã xảy ra lỗi khi tải tài liệu."}},changesNotSaved:{prompt:"Tài liệu của bạn có các thay đổi chưa được lưu.",dialogTitle:"Đóng Trình biên tập Mô tả dữ liệu",closeButton:"Đóng"},download:{caption:"Tải xuống",dialogTitle:"Tải xuống",prompt:"Nhấp vào đây để tải tệp xuống."},load:{caption:"Mở",dialogTitle:"Mở",typeTab:"Tài liệu Mới",fileTab:"Mở Tệp",templateTab:"Mẫu",itemTab:"Mục của Bạn",filePrompt:"Chọn tệp XML Mô tả dữ liệu ArcGIS cục bộ. Mô tả dữ liệu phải có định dạng ArcGIS.",templatePrompt:"Tạo Mô tả dữ liệu",pullItem:"Tự động điền thông tin cho mô tả dữ liệu với các chi tiết của Mục.",importWarning:"Tệp được chọn dường như không phải định dạng ArcGIS. Mô tả dữ liệu được tải lên phải có định dạng ArcGIS.",loading:"Đang tải...",noMetadata:"Có thể tạo mô tả dữ liệu cho mục này bằng cách chọn một trong các tùy chọn sau.",unrecognizedMetadata:"Loại Mô tả dữ liệu được liên kết với mục này không được trình biên tập hỗ trợ. Có thể tạo Mô tả dữ liệu được hỗ trợ bằng cách chọn một trong các tùy chọn sau.",errorLoading:"Đã xảy ra lỗi khi tải.",warnings:{badFile:"Không thể tải tệp đã chọn.",notAnXml:"Tệp đã chọn không phải là tệp XML.",notSupported:"Loại tệp này không được hỗ trợ."},portalCaption:"Ghi đè"},save:{caption:"Lưu",dialogTitle:"Lưu Mô tả dữ liệu",working:"Đang lưu mô tả dữ liệu...",errorSaving:"Đã xảy ra lỗi, mô tả dữ liệu của bạn chưa được lưu.",saveDialog:{pushCaption:"Áp dụng các thay đổi cho mục của bạn"}},saveAndClose:{caption:"Lưu và Đóng"},saveDraft:{caption:"Tải xuống",dialogTitle:"Tải xuống"},validate:{caption:"Xác minh",dialogTitle:"Xác minh",docIsValid:"Tài liệu của bạn hợp lệ."},viewHtml:{caption:"Xem",dialogTitle:"Xem Mô tả dữ liệu",savePrompt:"Tài liệu của bạn có những thay đổi chưa được lưu. Bạn phải lưu mọi thay đổi để xem chúng khi xem mô tả dữ liệu.",saveButton:"Lưu và Xem",portalNone:"Mô tả dữ liệu căn cứ theo tiêu chuẩn vẫn chưa được tạo. Bạn phải lưu trước để có thể xem mô tả dữ liệu."},del:{caption:"Xóa",dialogTitle:"Xóa Mô tả dữ liệu",prompt:"Bạn có chắc chắn muốn xóa mô tả dữ liệu này không?",working:"Đang xóa mô tả dữ liệu...",errorDeleting:"Đã xảy ra lỗi, mô tả dữ liệu của bạn chưa được xóa.",portalNone:"Không có tài liệu mô tả dữ liệu nào để xóa. Mô tả dữ liệu căn cứ theo tiêu chuẩn vẫn chưa được tạo.",portalPrompt:"Thao tác này sẽ xóa tài liệu mô tả dữ liệu và thiết lập lại mô tả dữ liệu của mục này thành Tiêu đề, Mô tả thông tin, v.v.",portalPrompt2:"Thao tác này sẽ xóa mô tả dữ liệu dạng tiêu chuẩn. Bạn có chắc chắn muốn xóa mô tả dữ liệu này không?",portalButton:"Xóa và Đóng"},transform:{caption:"Chuyển đổi",dialogTitle:"Chuyển đổi Sang",prompt:"",working:"Đang chuyển đổi...",errorTransforming:"Đã xảy ra lỗi khi chuyển đổi tài liệu của bạn."},errorDialog:{dialogTitle:"Đã có lỗi"}},arcgis:{portal:{metadataButton:{caption:"Siêu dữ liệu"}}},calendar:{button:"Sắp lịch...",title:"Lịch"},geoExtent:{button:"Thiết lập Phạm vi Địa lý...",title:"Phạm vi Địa lý",navigate:"Điều hướng",draw:"Vẽ Hình chữ nhật",drawHint:"Nhấn xuống để bắt đầu và thả ra để kết thúc."},hints:{date:"(yyyy hoặc mm-yyyy hoặc dd-mm-yyyy)",dateTime:"(dd-mm-yyyyThh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(yyyy hoặc mm-yyyy hoặc dd-mm-yyyy hoặc dd-mm-yyyyThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(sử dụng dấu phẩy hoặc dòng mới để phân cách)",fgdcDate:"(yyyy hoặc mm-yyyy hoặc dd-mm-yyyy)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(nhập số nguyên)",latitude:"(độ thập phân)",longitude:"(độ thập phân)",number:"(nhập một số)",numberGreaterThanZero:"(nhập một số > 0)"},isoTopicCategoryCode:{caption:"Danh mục Chủ đề",boundaries:"Các Địa giới Hành chính và Chính trị",farming:"Nông nghiệp và Chăn nuôi",climatologyMeteorologyAtmosphere:"Khí quyển và Khí hậu",biota:"Sinh học và Sinh thái",economy:"Kinh Tế và Thương mại",planningCadastre:"Địa chính",society:"Văn hóa, Xã hội và Nhân khẩu học",elevation:"Độ cao và các Sản phẩm Phái sinh",environment:"Môi trường và Bảo tồn",structure:"Các Tiện nghi và Công trình kiến trúc",geoscientificInformation:"Địa chất và Địa vật lý",health:"Sức khỏe Con người và Bệnh tật",imageryBaseMapsEarthCover:"Hình ảnh và các Bản đồ Nền",inlandWaters:"Tài nguyên Nước Nội địa",location:"Các Địa điểm và Mạng lưới Trắc địa",intelligenceMilitary:"Quân sự",oceans:"Các Biển và Cửa sông",transportation:"Các Mạng lưới Vận tải",utilitiesCommunication:"Các Tiện ích và Truyền thông"},multiplicity:{moveElementDown:"Di chuyển Mục Xuống dưới",moveElementUp:"Di chuyển Mục Lên trên",removeElement:"Xóa Mục",repeatElement:"Lặp lại Mục"},optionalNode:{switchTip:"Thêm hoặc bớt mục này."},serviceTypes:{featureService:"Dịch vụ Đối tượng",mapService:"Dịch vụ Bản đồ",imageService:"Dịch vụ Hình ảnh",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"OK",empty:"Yêu cầu nhập giá trị.",date:"Giá trị phải là một ngày.",integer:"Giá trị phải là một số nguyên.",number:"Giá trị phải là một số.",other:"Giá trị không hợp lệ."},validationPane:{clearMessages:"Xóa Các thông báo",prompt:"(bấm vào từng tin nhắn bên dưới và cung cấp thông tin được yêu cầu trong trường chỉ định)"}});