define(["exports","./common/servicelocator.js","./layoutmanager.js","./common/globalize.js","./browser.js"],function(_exports,_servicelocator,_layoutmanager,_globalize,_browser){Object.defineProperty(_exports,"__esModule",{value:!0}),_exports.default=void 0;var isNativeLG="webos"===globalThis.appMode;var appMode=globalThis.appMode,isNativeTizen="tizen"===appMode,isNativeWindows="embyclient"===appMode;function getPremiumInfoUrl(){return isNativeTizen?"https://emby.media/premieresamsung":"https://emby.media/premiere"}_exports.default={getProductInfo:function(feature){return null},beginPurchase:function(feature,email){var options;return _servicelocator.appHost.supports("externalpremium")?_servicelocator.shell.openUrl(getPremiumInfoUrl()):(options="Please visit "+getPremiumInfoUrl(),Emby.importModule("./modules/common/dialogs/alert.js").then(function(alert){return alert(options)})),Promise.reject()},restorePurchase:function(id){return Promise.reject()},getSubscriptionOptions:function(){var options=[];return options.push({id:"embypremiere",title:_globalize.default.translate("HeaderBecomeProjectSupporter"),requiresEmail:!1}),Promise.resolve(options)},isUnlockedByDefault:function(feature,options){return("playback"===feature||"playback-tv"===feature)&&(!(_layoutmanager.default.tv||"playback-tv"===feature||isNativeWindows||_browser.default.electron)||_browser.default.operaTv||_browser.default.tizen||isNativeLG)?Promise.resolve():Promise.reject()},getAdminFeatureName:function(feature){return"playback"===feature&&(_layoutmanager.default.tv||isNativeWindows||_browser.default.electron)?"embytheater-unlock":feature},getRestoreButtonText:function(){return _globalize.default.translate("HeaderAlreadyPaid")},getPeriodicMessageIntervalMs:function(feature){return"playback"===feature&&(_layoutmanager.default.tv||isNativeWindows||_browser.default.electron)?864e5:0},getPremiumInfoUrl:getPremiumInfoUrl}});