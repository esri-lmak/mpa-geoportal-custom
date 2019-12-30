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

define({documentTypes:{arcgis:{caption:"ArcGIS メタデータ",editorCaption:"メタデータ",description:""}},emptyOption:"空",conditionals:{ISO19139A1_ROW4:"メタデータ階層レベルがデータセットの場合、境界四角形または地理説明が必須です。",ISO19139A1_ROW6:"データセット識別子またはデータセット名が必要です。",ISO19139A1_ROW7:"[その他の制限] が選択されている場合、[その他の制限] が必須です。",ISO19139A1_ROW9:"適用範囲がデータセットとシリーズのどちらでもない場合、レベルの説明が必須です。",ISO19139A1_ROW10_11_12:"適用範囲がデータセットまたはシリーズである場合、説明、処理手順、またはデータ ソースのうちの 1 つが必須です。",ISO19139A1_ROW15:"チェック ポイントの取得可能性が選択されている場合、チェック ポイントの説明が必須です。",ISO19139A1_ROW18:"配布が文書化されている場合、形式または形式/配布者が必須です。",INSPIRE_AccessLimitation:" 少なくとも 1 つの法的アクセス制限コードまたは機密情報分類コードが必要です。(INSPIRE)",INSPIRE_UseLimitation:" 少なくとも 1 つの使用制限が必要です。(INSPIRE)",INSPIRE_ConformanceResult:"ドメイン一貫性報告には適合性結果が必要です。(INSPIRE)",INSPIRE_DomainConsistency:"ドメイン一貫性報告が必要です。(INSPIRE)",INSPIRE_LineageStatement:"適用範囲がデータセットまたはシリーズである場合、系譜の説明が必須です。",FGDC_DescIfTemporal:"時間範囲には説明が必要です。(FGDC)",FGDC_Keywords:"トピック、タグ、または主題キーワードが必要です。(FGDC)",FGDC_Reports:"完全性 (漏れ) および概念一貫性報告が必要です。(FGDC)",FGDC_Temporal:"少なくとも 1 つの時間範囲が必要です。(FGDC)",NAP_Contact:"住所/番地、電話番号/音声通話番号、またはオンライン情報資源/URL が必要です。(NAP)",GEN_BoundingBox:"1 つ以上の境界四角形が必要です。",GEN_ReportResult:"適合性の結果またはまたは定量的結果のいずれかが必要です。",minLessThanMax:"最小値は最大値より小さい値である必要があります。"},hints:{integerGreaterThanZero:"(0 より大きい整数を入力)",integerGreaterThanOne:"(1 より大きい整数を入力)",integer0To100:"(0 ～ 100 の整数を入力)",maxScale:"(0 より大きい整数を入力、例: 50000)",minScale:"(0 より大きい整数を入力、例: 150000000)",number0To100:"(0 ～ 100 の数値を入力)",number0To360:"(0 ～ 360 の数値を入力)",number90To90:"(-90 ～ 90 の数値を入力)",listOfDoubles:"(スペースで区切って、数値のリストを入力)"},htmlEditor:{button:"編集..."},sections:{overview:"概要",esri:"Esri",resource:"リソース",reference:"参照",content:"コンテンツ",distribution:"配布",quality:"品質",eainfo:"フィールド",representation:"リプレゼンテーション",metadata:"メタデータ"},metadataStyle:{caption:"ArcGIS メタデータ スタイル",changeButton:"変更...",dialogTitle:"メタデータ スタイルの選択",updating:"ドキュメントを更新しています...","Item Description":"アイテム説明","FGDC CSDGM Metadata":"FGDC CSDGM メタデータ","ISO 19139 Metadata Implementation Specification":"ISO 19139 Metadata Implementation Specification","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 Metadata Implementation Specification GML3.2","INSPIRE Metadata Directive":"INSPIRE Metadata Directive","North American Profile of ISO19115 2003":"North American Profile of ISO19115 2003"},aggrInfo:{caption:"集約情報",datasetHint:"データセット識別子またはデータセット名が必要です。",aggrDSIdent:"データセット識別子",aggrDSName:"データセット名"},appSchInfo:{caption:"アプリケーション スキーマ",asName:"スキーマ名",asSchLang:"スキーマ言語",asCstLang:"制約言語",asAscii:"ASCII",asGraFile:"グラフィックス ファイル",asGraFile_src:"グラフィックス ファイル ソース",asSwDevFile:"ソフトウェア開発ファイル",asSwDevFile_src:"ソフトウェア開発ファイル ソース",asSwDevFiFt:"ソフトウェア開発ファイル形式"},citation:{caption:"引用",section:{titlesAndDates:"タイトルと日付",links:"URL",identifiers:"識別子",presentation:"形式",other:"その他",edition:"版",series:"系列"},conditionalDate:{caption:"引用日",msg:"作成日、公開日、または改訂日のうちの 1 つが必要です。",msg_nap:"作成日が必要です。"},resTitle:"タイトル",resAltTitle:"代替典拠",collTitle:"総典拠",date:{createDate:"Creation Date",pubDate:"公開日",reviseDate:"改訂日",notavailDate:"使用不可日",inforceDate:"適用日",adoptDate:"採用日",deprecDate:"廃止日",supersDate:"廃止日"},isbn:"ISBN",issn:"ISSN",citId:{caption:"識別子",identCode:"コード",identAuth:"権限の引用"},resEd:"版",resEdDate:"版の日付",datasetSeries:{seriesName:"名前",issId:"巻/号",artPage:"ページ"},otherCitDet:"その他の詳細",contactCaption:"引用の問い合わせ先"},cntAddress:{caption:"住所",delPoint:"番地",city:"市区町村（City）",adminArea:"都道府県名",postCode:"郵便番号",country:"国",eMailAdd:"電子メール",addressType:{caption:"アドレス タイプ",postal:"郵便番号",physical:"物理",both:"両方"}},cntOnlineRes:{caption:"オンライン リソース",linkage:"URL",protocol:"プロトコル",appProfile:"アプリケーション プロファイル",orName:"名前",orDesc:"説明"},cntPhone:{caption:"電話（Phone）",voiceNum:"電話番号",faxNum:"ファクシミリ番号",tddtty:"TDD/TTY ですか？"},codeRef:{caption:"識別子",identCode:"コード",idCodeSpace:"コード空間",idVersion:"バージョン",identAuth:"権限の引用"},constraints:{caption:"制限範囲",useLimit:"使用制限",general:{caption:"一般"},legal:{caption:"リーガル",accessConsts:"アクセス制限",useConsts:"利用制限",othConsts:"その他の制限"},security:{caption:"セキュリティ",classSys:"分類システム",userNote:"ユーザーの注意事項",handDesc:"取り扱い説明"}},contInfo:{caption:"コンテンツ情報",section:{CovDesc:"カバレッジの説明",ImgDesc:"画像の説明",FetCatDesc:"地物カタログ"},attDesc:"属性の説明",covDim:{caption:"範囲またはバンド",seqID:"順序識別子",seqIDType:"順序識別子タイプ",dimDescrp:"記述子"},RangeDim:{caption:"範囲次元"},Band:{caption:"バンド",minVal:"最小値",maxVal:"最大値",valUnit:"値の単位",pkResp:"ピーク応答",bitsPerVal:"値ごとのビット数",toneGrad:"色調グラデーション",sclFac:"縮尺係数",offset:"オフセット"},CovDesc:{caption:"カバレッジの説明",section:{description:"説明",rangesAndBands:"範囲およびバンド"}},ImgDesc:{caption:"画像の説明",section:{description:"説明",rangesAndBands:"範囲およびバンド"},illElevAng:"発光体高度角",illAziAng:"発光体方位角",cloudCovPer:"雲量のパーセント",cmpGenQuan:"圧縮品質",trianInd:"空中三角測量指標ですか？",radCalDatAv:"放射量キャリブレーション データの取得は可能ですか？",camCalInAv:"カメラ キャリブレーション情報の取得は可能ですか？",filmDistInAv:"フィルム歪曲情報の取得は可能ですか？",lensDistInAv:"レンズ歪曲収差情報の取得は可能ですか？",imagQuCode:"品質コード",prcTypCde:"処理レベル コード"},FetCatDesc:{caption:"地物カタログ",section:{description:"説明",featureTypes:"フィーチャ タイプ",citation:"引用"},compCode:"ISO 19110 に準拠していますか？",incWithDS:"Included With Dataset?",catCitation:"地物カタログ引用",catFetTyps:{caption:"フィーチャ タイプ",genericName:"名前",codeSpace:"コード空間"}}},contact:{caption:"問い合わせ先",section:{name:"連絡先の名前",info:"連絡先情報:",hoursAndInstructions:"時間と指示"},conditionalName:{caption:"連絡先の名前",msg:"個人名、組織名、または役職名のいずれかが必要です。",msg_fgdc:"個人名または組織職名のいずれかが必要です。"},rpIndName:"個人名",rpOrgName:"組織サイト名",rpPosName:"役職名",rpCntInfo:"連絡先情報:",cntHours:"案内時間",cntInstr:"問い合わせのための手引き"},distInfo:{caption:"配布情報",section:{format:"形式",distributor:"配布者",transfer:"交換任意選択"},distFormat:{caption:"配布書式",formatName:"形式名称",formatVer:"書式バージョン",formatAmdNum:"改訂番号",formatSpec:"仕様",fileDecmTech:"復元技術",formatInfo:"情報コンテンツ"},distributor:{caption:"配布者"},distTranOps:{caption:"デジタル交換任意選択",section:{unitsAndSize:"単位"},unitsODist:"配布の単位",transSize:"交換サイズ",offLineMed:{caption:"オフライン媒体",medDensity:"密度",medDenUnits:"密度単位",medVol:"ボリューム",medNote:"媒体の注意事項"}},distorOrdPrc:{caption:"発注手順",resFees:"料金（Fees）",planAvDtTm:"入手可能日付",planAvTmPd:{caption:"利用可能な期間",tmBegin:"開始日時",tmEnd:"終了日時"},ordInstr:"発注の手引き",ordTurn:"納期"}},dqInfo:{caption:"データ品質",section:{scope:"スコープ",report:"レポート",lineage:"系統"},dqScope:{section:{level:"レベル",extent:"範囲"},scpLvl:"適用範囲レベル",scpLvlDesc:"レベルの説明",scpExt:"適用範囲の範囲情報"},report:{section:{measure:"測定",evaluation:"評価",result:"結果",conformance:"適合性"},measDesc:"計測の説明",measName:"計測名",measDateTm:"計測日付",measId:"計測識別子",evalMethDesc:"評価方法",evalProc:"手順の引用",ConResult:{caption:"適合性の結果",conExpl:"説明",conSpec:"仕様",conPass:{caption:"度",_1:"適合",_0:"非適合"}},QuanResult:{caption:"定量的結果",quanVal:"値",quanValType:"値のタイプ",quanValUnit:"値の単位",errStat:"誤差統計"}},dataLineage:{section:{statement:"説明",dataSource:"データ ソース",prcStep:"処理手順"},statement:"系譜の説明",dataSource:{caption:"データ ソース",section:{description:"説明",srcRefSys:"参照系",srcExt:"範囲",srcCitatn:"引用"},srcDesc:"ソースの説明",srcScale:{rfDenom:"縮尺分母"},srcRefSys:"ソース参照系",srcExt:"ソース範囲",srcCitatn:"ソース引用"},prcStep:{caption:"処理手順",section:{description:"説明",stepProc:"プロセッサ",stepSrc:"データ ソース"},stepDesc:"プロセスの説明",stepRat:"論理的根拠",stepDateTm:"処理手順日付",stepProc:"プロセッサ",stepSrc:"データ ソース"}}},eainfo:{caption:"エンティティおよび属性情報",section:{detailed:"詳細",overview:"概要"},detailed:{caption:"エンティティと属性の詳細",section:{enttyp:"Entity",attr:"属性"},enttyp:{caption:"エンティティ タイプ",enttypl:"ラベル",enttypt:"オブジェクト",enttypc:"データの個数",enttypd:"定義",enttypds:"定義ソース"},attr:{caption:"属性",section:{description:"説明",value:"値",domain:"取り得る値"},attrlabl:"ラベル",attalias:"エイリアス",attrdef:"定義",attrdefs:"定義ソース",attrtype:"種類",attwidth:"幅",atprecis:"精度",attscale:"縮尺",atindex:"インデックス構築完了",attrvai:{attrva:"値の説明",attrvae:"値の精度"},attrmfrq:"値の計測頻度",begdatea:"値の開始日付",enddatea:"値の終了日付",attrdomv:{caption:"取り得る値",edom:{caption:"列挙型",edomv:"値",edomvd:"定義",edomvds:"定義ソース"},rdom:{caption:"Range",rdommin:"最小値",rdommax:"最大値",rdommean:"平均",rdomstdv:"標準偏差",attrunit:"単位",attrmres:"計測解像度"},codesetd:{caption:"コードセット",codesetn:"名前",codesets:"ソース"},udom:{caption:"非表示"}}}},overview:{caption:"概要",eaover:"サマリー",eadetcit:"引用"}},extent:{caption:"範囲",section:{description:"説明",geographic:"地理学",temporal:"テンポラル",vertical:"垂直方向"},exDesc:"範囲の説明",geoEle:{caption:"地理範囲",GeoBndBox:{caption:"境界四角形",esriExtentType:"検索用の範囲ですか？",exTypeCode:"範囲にリソースが含まれていますか？",westBL:"西境界 (経度)",eastBL:"東境界 (経度)",southBL:"南境界 (緯度)",northBL:"北境界 (緯度)"},GeoDesc:{caption:"地理説明",exTypeCode:"説明にリソースが含まれていますか？",identCode:"コード"}},tempEle:{caption:"時間範囲",TM_Period:"期間",TM_Instant:"タイム インスタント",tmPosition:"日付",tmBegin:"開始日",tmEnd:"終了日"},vertEle:{caption:"垂直範囲",vertMinVal:"最小値",vertMaxVal:"最大値"}},graphOver:{caption:"閲覧図",bgFileName:"閲覧図の URL",bgFileDesc:"閲覧図の説明",bgFileType:"参照図ファイルのタイプ"},keywords:{caption:"キーワード（Keywords）",section:{topicCategory:"トピック",searchKeys:"タグ",themeKeys:"テーマ",placeKeys:"場所",tempKeys:"テンポラル",discKeys:"学問分野",stratKeys:"層",productKeys:"製品",subTopicCatKeys:"サブトピック",otherKeys:"その他"},delimited:"キーワード（Keywords）",searchKeys:"タグ",themeKeys:"主題キーワード",placeKeys:"場所キーワード",tempKeys:"時間キーワード",discKeys:"学問分野キーワード",stratKeys:"層キーワード",productKeys:"製品キーワード",subTopicCatKeys:"サブトピック キーワード",otherKeys:"その他のキーワード",thesaName:"シソーラス引用",thesaLang:"シソーラス言語"},locales:{caption:"ロケール",locale:"ロケール",resTitle:"タイトル",idAbs:"サマリー"},maintenance:{caption:"管理",section:{frequency:"頻度",scope:"スコープ",note:"備考"},usrDefFreq:"カスタム頻度",dateNext:"次の更新",maintScp:"更新適用範囲",upScpDesc:{caption:"適用範囲の説明",attribSet:"属性",attribIntSet:"属性インスタンス",featSet:"フィーチャ",featIntSet:"フィーチャ インスタンス",datasetSet:"データセット",other:"その他のインスタンス"},maintNote:"保守の注意事項",maintCont:"保守の問い合わせ先"},metadata:{section:{profile:"断面",details:"スコープ"},mdFileID:"ファイル識別子",mdParentID:"親識別子",datasetURI:"データ集合 URI",dataSetFn:"データセット関数",mdDateSt:"メタデータの更新日",mdLang:"メタデータ言語",mdChar:"文字集合",mdHrLv:"階層レベル",mdHrLvName:"階層レベル名",mdContact:"メタデータの問い合わせ先",mdMaint:"メタデータの保守",mdConst:"メタデータの制約"},porCatInfo:{caption:"描画引用"},refSysInfo:{caption:"空間参照"},resource:{section:{citation:"引用",details:"詳細",description:"説明",keywords:"キーワード（Keywords）",status:"ステータス",resolution:"座標精度",representation:"リプレゼンテーション",browse:"閲覧図",format:"形式",usage:"使用状況",aggregateInfo:"集計",additional:"追加"},idAbs:"説明 (要約)",idPurp:"サマリー (目的)",suppInfo:"補足情報",idCredit:"著作権",envirDesc:"処理環境",dataLang:"リソース言語",dataExt:"情報資源範囲",idPoC:"問い合わせ先",resMaint:"リソース メンテナンス",resConst:"情報資源の制約",dsFormat:"リソース形式",dataScale:{caption:"データの縮尺",equScale:"縮尺解像度",scaleDist:"距離の解像度",scaleDist_value:"距離"},idSpecUse:{caption:"リソース利用法",specUsage:"特定利用法",usageDate:"使用日",usrDetLim:"制限事項",usrCntInfo:"利用方の問い合わせ先"}},service:{caption:"サービス",svType:"サービス タイプ",svType_Name:"名前",svAccProps:"アクセス プロパティ",svCouplRes:{caption:"結合リソース",svOpName:"操作名",svResCitId:"リソース識別子"},svCoupleType:"結合タイプ"},scaleRange:{caption:"縮尺範囲",maxScale:"最大縮尺",minScale:"最小縮尺"},spatRepInfo:{caption:"空間表現",section:{dimension:"ディメンション",parameters:"パラメーター"},numDims:"次元数",tranParaAv:"変換パラメーターの取得は可能ですか？",axisDimension:{caption:"ディメンション",dimSize:"サイズ",dimResol:{caption:"座標精度",_value:"座標精度の値",uom:"座標精度の単位"}},VectSpatRep:{caption:"ベクター",geometObjs:"ジオメトリック オブジェクト",geoObjCnt:"オブジェクト数"},GridSpatRep:{caption:"グリッド"},Georect:{caption:"幾何補正",section:{centerPoint:"中心点",cornerPts:"コーナー ポイント"},chkPtAv:"チェック ポイントの取得は可能ですか？",chkPtDesc:"チェック ポイントの説明",ptInPixel:"ピクセルのポイント",transDimDesc:"変換次元の説明",transDimMap:"変換次元マッピング",cornerPts:{caption:"コーナー ポイント",pos:"位置",gmlDesc:"説明",gmlDescRef:"参照",gmlIdent:"識別子",codeSpace:"識別子コード空間"}},Georef:{caption:"幾何補正可能",ctrlPtAv:"コントロール ポイントの取得は可能ですか？",orieParaAv:"方位パラメーターの取得は可能ですか？",orieParaDs:"方位パラメーターの説明",georefPars:"ジオリファレンス パラメーター",paraCit:"パラメーター引用"},Indref:{caption:"間接"}},booleanOptions:{_false:"いいえ",_true:"はい"},codelist:{CountryCode:"国",LanguageCode:"言語",MonetaryUnits:"通貨単位",MonetaryUnits_empty:"共通通貨なし",PresentationForm:"FGDC 地理空間データ プレゼンテーション形式",CI_PresentationFormCode:"プレゼンテーション形式",CI_RoleCode:"ロール（Role）",CI_OnLineFunctionCode:"機能",IMS_ContentType:"コンテンツ タイプ",DQ_ElementDimension:"ディメンション",DQ_ElementType:"レポート タイプ",DQ_EvaluationMethodTypeCode:"評価タイプ",DS_AssociationTypeCode:"関連付けタイプ",DS_InitiativeTypeCode:"活動タイプ",LI_SourceType:"ソース タイプ",MD_CellGeometryCode:"セル ジオメトリ",MD_CharacterSetCode:"文字集合",MD_ClassificationCode:"分類",MD_CoverageContentTypeCode:"コンテンツ タイプ",MD_DimensionNameTypeCode:"ディメンション タイプ",MD_GeometricObjectTypeCode:"ジオメトリック オブジェクト タイプ",MD_ImagingConditionCode:"画像条件",MD_MaintenanceFrequenceCode:"更新頻度",MD_MediumFormatCode:"フォーマット コード",MD_MediumNameCode:"媒体名",MD_PixelOrientationCode:"ピクセル方向",MD_ProgressCode:"ステータス",MD_RestrictionCode:"制限コード",MD_ScopeCode:"スコープ",MD_SpatialRepresentationTypeCode:"空間表現型",MD_TopicCategoryCode:"トピック カテゴリ",MD_TopologyLevelCode:"トポロジ レベル",RS_Dimension:"ディメンション",SV_CouplingType:"結合タイプ",UCUM:"単位",UCUM_Length:"距離単位"}});