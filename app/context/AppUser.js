define(["dojo/_base/declare",
        "dojo/_base/lang",
        "dojo/Deferred",
        "dojo/topic",
        "app/context/app-topics",
        "dojo/i18n!app/nls/resources",
        "app/context/AppClient",
        "app/common/SignIn",
        "app/content/SingleSession",
        "esri/IdentityManager",
        "esri/arcgis/OAuthInfo",
        "esri/arcgis/Portal",
        "esri/arcgis/utils"
    ],
    function(declare, lang, Deferred, topic, appTopics, i18n, AppClient, SignIn, SingleSession,
        esriId, OAuthInfo, arcgisPortal, arcgisUtils) {

        var oThisClass = declare(null, {

            appToken: null,
            arcgisPortalUser: null,
            geoportalUser: null,

            constructor: function(args) {
                lang.mixin(this, args);
            },

            getArcGISPortalUrlForLink: function() {
                var p = null,
                    url = null;
                try {
                    if (this.arcgisPortalUser !== null) p = this.arcgisPortalUser.portal;
                    if (p && p.customBaseUrl && (p.customBaseUrl.length > 0) && p.urlKey && (p.urlKey.length > 0)) {
                        url = window.location.protocol + "//" + p.urlKey + "." + p.customBaseUrl;
                        console.log(url);
                        // debugger; 
                        return url;
                    } else if (p && p.url) {
                        console.log(p.url);
                        // debugger; 
                        return p.url;
                    }
                } catch (ex) {
                    console.warn(ex);
                }
            },

            getGroups: function() {
                if (this.geoportalUser) {
                    return this.geoportalUser.groups;
                }
                return null;
            },

            getMyProfileUrl: function() {
                console.log("getMyProfileUrl");
                if (AppContext.geoportal && AppContext.geoportal.arcgisOAuth &&
                    AppContext.geoportal.arcgisOAuth.showMyProfileLink) {
                    if (this.arcgisPortalUser) {
                        var v = this.getArcGISPortalUrlForLink();
                        if (v) {
                            return v + "/home/user.html?user=" + encodeURIComponent(this.arcgisPortalUser.username);
                        }
                    }
                }
                return null;
            },

            getUsername: function() {
                if (this.geoportalUser) {
                    var v = this.geoportalUser.username;
                    if (typeof v === "string" && v.length > 0) return v;
                }
                return null;
            },

            isAdmin: function() {
                if (this.geoportalUser) {
                    return this.geoportalUser.isAdmin;
                }
                return false;
            },

            isSignedIn: function() {
                return (this.getUsername() !== null);
            },

            isPublisher: function() {
                if (this.geoportalUser) {
                    return this.geoportalUser.isPublisher;
                }
                return false;
            },

            _showAgsOAuthSignIn: function(oauth) {
                var self = this,
                    portalUrl = oauth.portalUrl;
                // arcgisUtils.arcgisUrl = portalUrl;  // PortalImplementation
                esriId._arcgisUrl = portalUrl;

                var signInStatus = esriId.checkSignInStatus(portalUrl);
                if (signInStatus != null) {
                    esriId.getCredential(portalUrl, { oAuthPopupConfirmation: true }).then(function() {
                        var portal = new arcgisPortal.Portal(portalUrl);
                        portal.signIn().then(function(portalUser) {
                            // console.warn("portalUser", portalUser);
                            self.arcgisPortalUser = portalUser;
                            var u = portalUser.username;
                            var p = "__rtkn__:" + portalUser.credential.token;
                            self.signIn(u, p).then(function() {}).otherwise(function(error) {
                                // TODO handle 
                                console.warn("Error occurred while signing in:", error);
                            });
                        }).otherwise(function(error) {
                            // TODO handle 
                            console.warn("Error occurred while signing in:", error);
                        });
                    });
                } else {
                    (new SingleSession()).show();
                }

            },

            showSignIn: function() {
                var ctx = window.AppContext;
                if (ctx.geoportal && ctx.geoportal.arcgisOAuth && ctx.geoportal.arcgisOAuth.appId) {
                    this._showAgsOAuthSignIn(ctx.geoportal.arcgisOAuth);
                } else {
                    (new SignIn()).show();
                }
            },

            signIn: function(u, p) {
                var self = this,
                    dfd = new Deferred(),
                    client = new AppClient();
                client.generateToken(u, p).then(function(oauthToken) {
                    if (oauthToken && oauthToken.access_token) {
                        client.pingGeoportal(oauthToken.access_token).then(function(info) {
                            if (info && info.user) {
                                self.appToken = oauthToken;
                                self.geoportalUser = info.user;
                                topic.publish(appTopics.SignedIn, { geoportalUser: info.user });
                                dfd.resolve();

                                var _userName = AppContext.appUser.getUsername();
                                // Audit Trail
                                /*
                                client.createAuditTrail(i18n.auditTrailType.signIn, "", "", "", _userName);
                                */
                                client.updateUserLastLogin(_userName);
                            } else {
                                dfd.reject(i18n.general.error);
                            }
                        }).otherwise(function(error) {
                            console.warn(error);
                            dfd.reject(i18n.general.error);
                        });
                    } else {
                        dfd.reject(i18n.login.invalidCredentials);
                    }
                }).otherwise(function(error) {
                    var msg = i18n.general.error;
                    if (error) {
                        if (error.status === 400) msg = i18n.login.invalidCredentials;
                        else console.warn(error);
                    }
                    dfd.reject(msg);
                });
                return dfd;
            },

            signOut: function() {
                // esriId.destroyCredentials();
                // var itemName = "esriJSAPIOAuth";
                // window.sessionStorage.removeItem(itemName);

                // Specific to MPA
                // Set Session as signout true
                window.sessionStorage.setItem("geoportalSignout", "True");

                /*
                var client = new AppClient();
                var _userName = AppContext.appUser.getUsername();
                client.createAuditTrail(i18n.auditTrailType.signOut, "", "", "", _userName);
                */

                var ctx = window.AppContext,
                    oauth;
                if (ctx.geoportal) oauth = ctx.geoportal.arcgisOAuth;
                var portalUrl = oauth.portalUrl;
                esriId._arcgisUrl = portalUrl;
                esriId.getCredential(portalUrl, { oAuthPopupConfirmation: false }).then(function() {
                    var portal = new arcgisPortal.Portal(portalUrl);
                    portal.signOut().then(function(url) {
                        console.log(url);
                    }).otherwise(function(error) {
                        // TODO handle 
                        console.warn("Error occurred while signing out:", error);
                    });
                });

                window.location.reload();
            },

            whenAppStarted: function() {
                var geoportalSignout = window.sessionStorage.geoportalSignout;
                var self = this,
                    dfd = new Deferred(),
                    ctx = window.AppContext,
                    oauth;
                if (ctx.geoportal) oauth = ctx.geoportal.arcgisOAuth;
                if (oauth && oauth.appId && geoportalSignout == "False") {
                    var portalUrl = oauth.portalUrl;
                    arcgisUtils.arcgisUrl = portalUrl; // PortalImplementation
                    var info = new OAuthInfo({
                        appId: oauth.appId,
                        // Uncomment this line to prevent the user's signed in state from being shared
                        // with other apps on the same domain with the same authNamespace value.
                        authNamespace: "portal_oauth_inline",
                        portalUrl: portalUrl,
                        expiration: oauth.expirationMinutes,
                        popup: true
                    });
                    esriId.registerOAuthInfos([info]);

                    esriId.checkSignInStatus(portalUrl).then(function() {
                        var portal = new arcgisPortal.Portal(portalUrl);
                        portal.signIn().then(function(portalUser) {
                            // console.warn("portalUser.....", portalUser);
                            self.arcgisPortalUser = portalUser;
                            var u = portalUser.username;
                            var p = "__rtkn__:" + portalUser.credential.token;
                            self.signIn(u, p).then(function() {
                                dfd.resolve();
                            }).otherwise(function(error) {
                                dfd.resolve();
                            });
                        }).otherwise(function(error) {
                            dfd.resolve();
                        });
                    }).otherwise(function(error) {
                        dfd.resolve();
                    });

                } else {
                    dfd.resolve();
                }

                window.sessionStorage.setItem("geoportalSignout", "False");
                return dfd;
            }

        });

        return oThisClass;
    });