define(["exports","./emby-apiclient/connectionmanager.js","./common/servicelocator.js","./common/usersettings/usersettings.js","./browser.js","./emby-apiclient/events.js","./common/appsettings.js"],function(_exports,_connectionmanager,_servicelocator,_usersettings,_browser,_events,_appsettings){Object.defineProperty(_exports,"__esModule",{value:!0}),_exports.default=void 0;var themeStyleElement,currentThemeId,currentThemeInfo,currentThemeController,SupportsCSSAccentColor=!1,SupportsNativeAccentColor=SupportsCSSAccentColor||_servicelocator.appHost.supports("systemaccentcolor");function tryRemove(elem){try{elem.remove()}catch(err){console.log("Error removing child node: "+err)}}var supportsCssVariables=CSS.supports("color","var(--fake-var)");supportsCssVariables||document.documentElement.classList.add("nocssvars");var defaultSettingsThemeIsMainTheme=!supportsCssVariables||_servicelocator.appHost.supports("multiserver");var skinManager={loadSkin:function(){return skinManager.setTheme(_usersettings.default.theme())},getThemes:function(){var defaultTheme="dark",themes=(supportsCssVariables&&_browser.default.electron?defaultTheme="blueradiance":_servicelocator.appHost.getPreferredTheme&&"windows"===_servicelocator.appHost.getPreferredTheme()&&(defaultTheme="windows"),[]),defaultController="./modules/themes/themecontroller.js";return supportsCssVariables&&themes.push({name:"Apple TV",id:"appletv",controller:defaultController}),themes.push({name:"Black",id:"black",isDefault:"black"===defaultTheme,controller:defaultController}),themes.push({name:"Blue Radiance",id:"blueradiance",isDefault:"blueradiance"===defaultTheme,baseThemeId:"darkgradient",controller:defaultController}),themes.push({name:"Dark",id:"dark",isDefault:"dark"===defaultTheme,controller:defaultController}),supportsCssVariables&&(themes.push({name:"Light",id:"light",isSettingsDefault:!defaultSettingsThemeIsMainTheme,controller:defaultController}),_servicelocator.appHost.supports("windowstheme")&&themes.push({name:"Windows",id:"windows",isDefault:"windows"===defaultTheme,controller:Emby.Page.baseUrl()+"/modules/themes/windows/windowsthemecontroller.js"}),themes.push({name:"Superman",id:"superman",baseThemeId:"darkgradient",controller:defaultController})),supportsCssVariables&&themes.push({name:"Windows Media Center",id:"wmc",baseThemeId:"darkgradient",controller:defaultController}),themes},getCurrentThemeId:function(){return currentThemeId},getCurrentThemeInfo:function(){return currentThemeInfo},getCurrentThemeController:function(){return currentThemeController}};function onRegistrationSuccess(){_appsettings.default.set("appthemesregistered","true")}function onRegistrationFailure(){_appsettings.default.set("appthemesregistered","false")}function isRegistered(){return Emby.importModule("./modules/registrationservices/registrationservices.js").then(function(registrationServices){registrationServices.validateFeature("themes",{showDialog:!1}).then(onRegistrationSuccess,onRegistrationFailure)}),"false"!==_appsettings.default.get("appthemesregistered")}function getAllAccentColors(){var _getSystemAccent,list=[];return list.push({dark:{primaryColorHue:"209",primaryColorSaturation:"100%",primaryColorLightness:"50.2%",text:"hsl(var(--theme-primary-color-hue), var(--theme-primary-color-saturation), var(--theme-primary-color-lightness))"},light:{primaryColorHue:"211",primaryColorSaturation:"100%",primaryColorLightness:"50%",text:"hsl(var(--theme-primary-color-hue), var(--theme-primary-color-saturation), var(--theme-primary-color-lightness))"},name:"blue"}),list.push({dark:{primaryColorHue:"320",primaryColorSaturation:"100%",primaryColorLightness:"47.45%",text:"hotpink"},light:{primaryColorHue:"320",primaryColorSaturation:"100%",primaryColorLightness:"47.45%",text:"hsl(var(--theme-primary-color-hue), var(--theme-primary-color-saturation), var(--theme-primary-color-lightness))"},name:"pink"}),list.push({dark:{primaryColorHue:"262",primaryColorSaturation:"51.87%",primaryColorLightness:"47.25%",text:"mediumpurple"},light:{primaryColorHue:"262",primaryColorSaturation:"51.87%",primaryColorLightness:"47.25%",text:"hsl(var(--theme-primary-color-hue), var(--theme-primary-color-saturation), var(--theme-primary-color-lightness))"},name:"purple"}),list.push({dark:{primaryColorHue:"0",primaryColorSaturation:"60%",primaryColorLightness:"50%",text:"red"},light:{primaryColorHue:"0",primaryColorSaturation:"60%",primaryColorLightness:"50%",text:"hsl(var(--theme-primary-color-hue), var(--theme-primary-color-saturation), var(--theme-primary-color-lightness))"},name:"red"}),list.push({dark:{primaryColorHue:"16",primaryColorSaturation:"100%",primaryColorLightness:"50%",text:"orangered"},light:{primaryColorHue:"16",primaryColorSaturation:"100%",primaryColorLightness:"50%",text:"orangered"},name:"orangered"}),list.push({dark:{primaryColorHue:"116",primaryColorSaturation:"41.7%",primaryColorLightness:"50.2%",text:"#6CCF65",textAlt:"hsl(209, 100%, 50.2%)"},light:{primaryColorHue:"116",primaryColorSaturation:"41.7%",primaryColorLightness:"50.2%",text:"green",textAlt:"hsl(211, 100%, 50%)"},name:"emby"}),list.push({dark:{primaryColorHue:"116",primaryColorSaturation:"41.7%",primaryColorLightness:"50.2%",text:"#6CCF65"},light:{primaryColorHue:"116",primaryColorSaturation:"41.7%",primaryColorLightness:"50.2%",text:"green"},name:"green"}),SupportsNativeAccentColor&&(_getSystemAccent=null==(_getSystemAccent=function(){if(SupportsCSSAccentColor)return function(){var accentColor=function(prop){var hue,saturation,lightness,div=document.createElement("div"),prop=(div.style.color=prop,document.body.appendChild(div),getComputedStyle(div).getPropertyValue("color"));div.remove(),prop.startsWith("rgb(")&&(div=(prop=prop.replace("rgb(","").replace(")")).split(","),prop=function(r,g,b){r/=255,g/=255,b/=255;var l=Math.max(r,g,b),s=l-Math.min(r,g,b),h=s?l===r?(g-b)/s:l===g?2+(b-r)/s:4+(r-g)/s:0;return[60*h<0?60*h+360:60*h,100*(s?l<=.5?s/(2*l-s):s/(2-(2*l-s)):0),100*(2*l-s)/2]}(parseInt(div[0]),parseInt(div[1]),parseInt(div[2])),hue=prop[0],saturation=prop[1],lightness=prop[2]);return{hue:hue,saturation:saturation,lightness:lightness}}("AccentColor");return{accentColor:accentColor,accentColorText:accentColor}}();if(_servicelocator.appHost.supports("systemaccentcolor"))return _servicelocator.appHost.getSystemAccentColor();return null}())?void 0:_getSystemAccent.accentColor)&&list.push({dark:{primaryColorHue:_getSystemAccent.hue,primaryColorSaturation:_getSystemAccent.saturation+"%",primaryColorLightness:_getSystemAccent.lightness+"%",text:"hsl("+_getSystemAccent.hue+", "+_getSystemAccent.saturation+"%, "+_getSystemAccent.lightness+"%)"},light:{primaryColorHue:_getSystemAccent.hue,primaryColorSaturation:_getSystemAccent.saturation+"%",primaryColorLightness:_getSystemAccent.lightness+"%",text:"hsl("+_getSystemAccent.hue+", "+_getSystemAccent.saturation+"%, "+_getSystemAccent.lightness+"%)"},name:"system"}),list}var accentNode;function setThemeOptionClassname(value,prefix){for(var elem=document.documentElement,classesToRemove=[],i=0,length=elem.classList.length;i<length;i++){var className=elem.classList[i];className.startsWith(prefix)&&classesToRemove.push(className)}for(var _i=0,_length=classesToRemove.length;_i<_length;_i++)elem.classList.remove(classesToRemove[_i]);elem.classList.add(prefix+value)}function loadAccentColor(){accentNode||(accentNode=function(){for(var link=document.createElement("style"),list=(link.type="text/css",getAllAccentColors()),html="",i=0,length=list.length;i<length;i++)var accent=list[i],html=(html=(html=(html=(html=(html=(html=(html+=" .accent-"+accent.name+":root {")+("--theme-primary-color-hue: "+accent.light.primaryColorHue+";"))+("--theme-primary-color-saturation: "+accent.light.primaryColorSaturation+";"))+("--theme-primary-color-lightness: "+accent.light.primaryColorLightness+";"))+("--theme-accent-text-color-darkbg: "+accent.dark.text+";"))+("--theme-accent-text-color-lightbg: "+accent.light.text+";"))+("--theme-accent-text-color-darkbg-alt: "+(accent.dark.textAlt||accent.dark.text)+";"))+("--theme-accent-text-color-lightbg-alt: "+(accent.light.textAlt||accent.light.text)+";")+"}";return link.innerHTML=html,link}(),(document.head||document.querySelector("head")).appendChild(accentNode));var accent=_usersettings.default.accentColor()||"emby";if("emby"===(accent=_usersettings.default.useSystemAccentColor()&&SupportsNativeAccentColor?"system":accent)||isRegistered()){for(var elem=document.documentElement,classesToRemove=[],i=0,length=elem.classList.length;i<length;i++){var className=elem.classList[i];className.startsWith("accent-")&&classesToRemove.push(className)}for(var _i2=0,_length2=classesToRemove.length;_i2<_length2;_i2++)elem.classList.remove(classesToRemove[_i2]);setThemeOptionClassname(accent,"accent-")}}function onThemeLoaded(themeLoadInfo,updateLastTheme){return updateLastTheme&&_appsettings.default.set("lastTheme",themeLoadInfo.themeId),Emby.importModule(themeLoadInfo.controller).then(function(ThemeController){return currentThemeController=new ThemeController,require([themeLoadInfo.themeInfoPath]).then(function(responses){(currentThemeInfo=JSON.parse(responses[0])).id=themeLoadInfo.themeId;try{_servicelocator.appHost.setTheme(currentThemeInfo)}catch(err){console.log("Error setting theme color: "+err)}return loadAccentColor(),currentThemeController.load(currentThemeInfo).then(function(){_events.default.trigger(skinManager,"themeloaded",[{themeInfo:currentThemeInfo}])})})})}skinManager.setTheme=function(id,context){var themeLoadInfo,requiresRegistration=!0,context="settings"===context,updateLastTheme=!context;return"auto"===id&&_servicelocator.appHost.getPreferredTheme&&(id=_servicelocator.appHost.getPreferredTheme()||"dark",requiresRegistration=!1),currentThemeId&&currentThemeId===id?Promise.resolve():(themeLoadInfo=function(id,isSettings,requiresRegistration){id||isSettings||(apiClient=_connectionmanager.default.currentApiClient())&&apiClient.getCurrentUserId()||(id=_appsettings.default.get("lastTheme"));for(var defaultMainTheme,defaultSettingsTheme,themes=skinManager.getThemes(),i=0,length=themes.length;i<length;i++){var theme=themes[i];theme.isDefault?defaultMainTheme=theme:theme.isSettingsDefault&&(defaultSettingsTheme=theme),id===theme.id&&(selectedTheme=theme)}defaultSettingsThemeIsMainTheme&&(defaultSettingsTheme=defaultMainTheme);var selectedTheme,apiClient=isSettings&&"maintheme"!==id?defaultSettingsTheme:defaultMainTheme;return(selectedTheme=selectedTheme||apiClient).id!==apiClient.id&&requiresRegistration&&!isRegistered()&&(selectedTheme=apiClient),{themeInfoPath:"text!"+Emby.Page.baseUrl()+"/modules/themes/"+(selectedTheme.baseThemeId||selectedTheme.id)+"/theme.json",stylesheetPath:Emby.Page.baseUrl()+"/modules/themes/"+(selectedTheme.baseThemeId||selectedTheme.id)+"/theme.css",themeId:selectedTheme.id,controller:selectedTheme.controller}}(id,context,requiresRegistration),currentThemeId&&currentThemeId===themeLoadInfo.themeId?(loadAccentColor(),Promise.resolve()):new Promise(function(resolve,reject){var nextSibling,elem,linkUrl=themeLoadInfo.stylesheetPath,link=(globalThis.urlCacheParam&&(linkUrl+="?"+globalThis.urlCacheParam),(elem=themeStyleElement)&&(supportsCssVariables||(nextSibling=elem.nextSibling)&&nextSibling.getAttribute("data-cssvars-job")&&tryRemove(nextSibling),tryRemove(elem),(currentThemeInfo=currentThemeId=themeStyleElement=null)!=(nextSibling=currentThemeController)&&nextSibling.destroy(),currentThemeController=null),document.createElement("link"));link.setAttribute("rel","stylesheet"),link.setAttribute("type","text/css"),link.onload=function(){(supportsCssVariables?onThemeLoaded(themeLoadInfo,updateLastTheme):function(link,themeLoadInfo,updateLastTheme){return Emby.importModule("./modules/css-vars-ponyfill/css-vars-ponyfill.js").then(function(cssVars){return cssVars({watch:!1,include:[link],onlyLegacy:!1,preserveVars:!1,shadowDOM:!1}),onThemeLoaded(themeLoadInfo,updateLastTheme)})}(link,themeLoadInfo,updateLastTheme)).then(resolve)},link.setAttribute("href",linkUrl),document.head.appendChild(link),themeStyleElement=link,setThemeOptionClassname(currentThemeId=themeLoadInfo.themeId,"theme-")}))};var currentThemeType,defaultLogoImageTypes=["Logo"];function changeTheme(viewType){var context,mainTheme=_usersettings.default.theme();1===viewType?(context="settings",viewType=_usersettings.default.settingsTheme(),skinManager.setTheme(viewType="maintheme"===(viewType=!viewType&&defaultSettingsThemeIsMainTheme?"maintheme":viewType)&&mainTheme?mainTheme:viewType,context)):skinManager.setTheme(mainTheme,context)}skinManager.getPreferredLogoImageTypes=function(){return currentThemeInfo&&currentThemeInfo.preferredLogoImageTypes||defaultLogoImageTypes},document.addEventListener("viewbeforeshow",function(e){var _e$detail$params;"true"!==(null==(_e$detail$params=e.detail.params)?void 0:_e$detail$params.asDialog)&&(_e$detail$params=e.detail.settingsTheme?1:0)!==currentThemeType&&changeTheme(currentThemeType=_e$detail$params)}),_events.default.on(_usersettings.default,"change",function(e,name){"appTheme"===name||"settingsTheme"===name?changeTheme(currentThemeType):"accentColor"===name&&loadAccentColor()}),_events.default.on(_connectionmanager.default,"localusersignedin",function(e){currentThemeType=null});_exports.default=skinManager});