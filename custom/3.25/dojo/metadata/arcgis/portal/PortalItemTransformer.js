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

define(["dojo/_base/declare", 
        "dojo/_base/lang", 
        "dojo/_base/array", 
        "dojo/has", 
        "dojo/query", 
        "dijit/registry", 
        "dijit/_WidgetBase", 
        "../../../../kernel"], 
function (t, n, e, i, l, u, r, o) {
    var a = t([r], {
        gxeDocument: null,
        isPull: !0,
        portal: null,
        portalItem: null,
        portalUser: null,
        portalUrl: null,
        itemPropertiesToPush: null,
        postCreate: function () {
            this.inherited(arguments)
        },
        afterPullValue: function (t, n) {},
        checkCoordinate: function (t) {
            var n = typeof t;
            if ("undefined" === n && null === t) return null;
            if ("string" === n) {
                if (t = parseFloat(t), isNaN(t)) return null;
                n = typeof t
            }
            return "number" === n && isFinite(t) ? t : null
        },
        checkVisibility: function (t, n) {},
        findInputValue: function (t, n, e) {
            var i, l = this.findInputWidget(t, n, e);
            if (null !== l)
                for (i = l.getParent(); i;) {
                    if (i._isOptionallyOff) {
                        l = null;
                        break
                    }
                    i = i.getParent()
                }
            if (null !== l) return l.getInputValue()
        },
        findInputWidget: function (t, n, e) {
            var i, r = l("[data-gxe-path='" + n + "']", this.gxeDocument.rootDescriptor.domNode);
            if (r && 1 === r.length) {
                if (i = u.byNode(r[0])) return i.inputWidget
            } else if (r && r.length > 0 && e && (i = u.byNode(r[0]))) return i.inputWidget;
            return null
        },
        generatePush: function (t, n) {
            this.isPull = !1, this.gxeDocument = t, this.portalItem = n, this.itemPropertiesToPush = null;
            var e = {},
                i = this.newTransformationInfo(t);
            this.populateTransformationInfo(t, n, i);
            var l = null,
                u = !1;
            for (l in i) i.hasOwnProperty(l) && this.pushValue(e, i, l);
            for (l in e) e.hasOwnProperty(l) && (u = !0);
            return u && (this.itemPropertiesToPush = e), this.itemPropertiesToPush
        },
        pull: function (t, n) {
            this.isPull = !0, this.gxeDocument = t, this.portalItem = n;
            var e = this.newTransformationInfo(t);
            this.populateTransformationInfo(t, n, e);
            var i = null;
            for (i in e) e.hasOwnProperty(i) && this.pullValue(n, e, i, !1)
        },
        newTransformationInfo: function (t) {
            var n = function (t) {
                return {
                    path: null,
                    canPull: !0,
                    canPush: t,
                    isSelected: !0,
                    valueToPush: null
                }
            };
            return {
                id: n(!1),
                title: n(!1),
                snippet: n(!0),
                description: n(!0),
                accessInformation: n(!1),
                licenseInfo: n(!1),
                thumbnail: n(!1),
                culture: n(!1),
                url: n(!1),
                created: n(!1),
                modified: n(!1),
                type: n(!1),
                tags: n(!0),
                typeKeywords: n(!1),
                extent: {
                    xmin: n(!0),
                    ymin: n(!0),
                    xmax: n(!0),
                    ymax: n(!0)
                },
                spatialReference: n(!1),
                name: n(!1),
                owner: n(!1)
            }
        },
        populateTransformationInfo: function (t, n, e) {},
        pullValue: function (t, n, e, i) {
            var l = null,
                u = null,
                r = null,
                o = null,
                a = null,
                s = null;
            if (e in t && e in n) {
                if (o = t[e], u = n[e], void 0 === o) return;
                if ("string" == typeof o && null !== o && 0 === o.length) return;
                if (void 0 === u) return;
                if ("extent" === e) {
                    if (o && o.push && 2 === o.length && 2 === o[0].length && 2 === o[1].length) {
                        a = {
                            xmin: o[0][0],
                            ymin: o[0][1],
                            xmax: o[1][0],
                            ymax: o[1][1]
                        };
                        for (s in a) a.hasOwnProperty(s) && this.pullValue(a, u, s, !0)
                    }
                    return
                }
                null !== u && u.canPull && u.isSelected && void 0 === (r = u.path) && (r = null), "tags" === e && null !== o && 0 === o.length && (o = null)
            }
            var h = !i;
            null !== o && null !== r && null !== (l = this.findInputWidget(e, r, h)) && (l.setInputValue(o), l.parentXNode && l.parentXNode.toggleContent && l.parentXNode.toggleContent(!0), this.checkVisibility(l, r), this.afterPullValue(l, r))
        },
        pushExtent: function (t, n, e, i, l) {
            if (n = this.checkCoordinate(n), e = this.checkCoordinate(e), i = this.checkCoordinate(i), l = this.checkCoordinate(l), null !== n && null !== i && null !== e && null !== l && !(n < -180 || n > 180 || i < -180 || i > 180 || e < -90 || e > 90 || l < -90 || l > 90 || i < n || l < e)) {
                var u = !0,
                    r = this.portalItem.extent;
                r && r.push && 2 === r.length && 2 === r[0].length && 2 === r[1].length && n === r[0][0] && e === r[0][1] && i === r[1][0] && l === r[1][1] && (u = !1), u && (t.extent = n + "," + e + "," + i + "," + l)
            }
        },
        pushString: function (t, e, i) {
            if (void 0 !== i && null !== i && "string" == typeof i) {
                var l = n.trim(i);
                if (0 !== l.length) {
                    var u = this.portalItem[e];
                    (void 0 === u || l !== u) && (t[e] = l)
                }
            }
        },
        pushTags: function (t, n) {
            if (void 0 !== n && null !== n && n.push && n.length > 0) {
                var i = this.portalItem.tags,
                    l = [],
                    u = !0,
                    r = 0;
                void 0 !== i && null !== i && i.push ? (e.forEach(i, function (t) {
                    l.push(t)
                }), e.forEach(n, function (t) {
                    e.some(i, function (n) {
                        return t === n
                    }) || l.push(t)
                }), l.length === i.length && (e.forEach(l, function (t) {
                    e.some(i, function (n) {
                        return t === n
                    }) && r++
                }), r === l.length && (u = !1)), u && (t.tags = l.join(","))) : t.tags = n.join(",")
            }
        },
        pushValue: function (t, n, e) {
            var i, l = null,
                u = null,
                r = {};
            if (void 0 !== (i = n[e])) {
                if ("extent" === e) {
                    for (u in i) i.hasOwnProperty(u) && this.pushValue(r, i, u);
                    return void this.pushExtent(t, r.xmin, r.ymin, r.xmax, r.ymax)
                }
                if (i.canPush && i.isSelected && void 0 === (l = i.path) && (l = null), null !== l) {
                    var o = "tags" === e,
                        a = this.findInputValue(e, l, o);
                    void 0 !== a && null !== a && ("string" == typeof a ? this.pushString(t, e, a) : a.push && a.length > 0 && "tags" === e && this.pushTags(t, a))
                }
            }
        }
    });
    return i("extend-esri") && n.setObject("dijit.metadata.arcgis.portal.PortalItemTransformer", a, o), a
});