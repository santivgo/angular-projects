var undef,queue=[],urlRegExp=/^\/|\:|\?|\.js$/;function trimDots(ary){for(var part,length=ary.length,i=0;i<length;i++)"."===(part=ary[i])?(ary.splice(i,1),--i):".."!==part||0===i||1===i&&".."===ary[2]||".."===ary[i-1]||0<i&&(ary.splice(i-1,2),i-=2)}function reject(d,err){d.rejected=!0,d.reject(err)}function splitPrefix(name){var prefix,index=name?name.indexOf("!"):-1;return-1<index&&(prefix=name.substring(0,index),name=name.substring(index+1,name.length)),[prefix,name]}function makeErrback(d,name){return function(err){d.rejected||reject(d,err)}}var defined=Object.create(null),waiting=Object.create(null),config={baseUrl:"./"},mapCache=Object.create(null),deferreds=Object.create(null),calledDefine=Object.create(null),calledPlugin=Object.create(null),urlFetched=Object.create(null);function addUrlArgs(url){var args=config.urlArgs;return args?url+(-1===url.indexOf("?")?"?":"&")+args:url}var supportsCssVariables="undefined"!=typeof CSS&&CSS.supports&&CSS.supports("color","var(--fake-var)");function polyfillCssVars(link,loadFn){Emby.importModule("./modules/css-vars-ponyfill/css-vars-ponyfill.js").then(function(cssVars){cssVars({watch:!1,include:[link],onlyLegacy:!1,preserveVars:!1,shadowDOM:!1}),loadFn()})}function getXmlHttpRequestPromise(url){return new Promise(function(resolve,reject){var xhr=new XMLHttpRequest;xhr.open("GET",url,!0),xhr.onload=function(e){resolve(this.response)},xhr.onerror=reject,xhr.send()})}var plugins={css:{load:function(url){if(config.noRequireCss)return Promise.resolve();url.endsWith(".css")||(console.log("require CSS url not ending with .css: "+url),url+=".css");var linkUrl=addUrlArgs(url=url.includes("://")?url:config.baseUrl+url);return new Promise(function(resolve,reject){var link=document.createElement("link");link.setAttribute("rel","stylesheet"),link.setAttribute("type","text/css"),supportsCssVariables||!url.includes("card.css")&&!url.includes("layout.css")?link.onload=resolve:link.onload=polyfillCssVars(link,resolve),link.setAttribute("href",linkUrl);try{document.head.appendChild(link)}catch(err){console.log("Error loading stylesheet"),reject(err)}})}},text:{load:function(url){return getXmlHttpRequestPromise(url=addUrlArgs(url=url.includes("://")?url:config.baseUrl+url))}}};function normalize(name,baseName){return name&&(trimDots(name="."===(name=name.split("/"))[0].charAt(0)&&(baseName=null==baseName?void 0:baseName.split("/"))?baseName.slice(0,baseName.length-1).concat(name):name),name=name.join("/")),name}function takeQueue(anonId){for(var id,args,i=0;i<queue.length;i+=1){if("string"!=typeof queue[i][0]){if(!anonId)break;queue[i].unshift(anonId),anonId=undef}--i,(id=(args=queue.shift())[0])in defined||id in waiting||(id in deferreds?main.apply(undef,args):waiting[id]=args)}anonId&&main(anonId,[])}function defaultCallback(){return Array.prototype.slice.call(arguments,0)}function nameToUrl(moduleName){var url=moduleName;return addUrlArgs(url=urlRegExp.test(moduleName)?url:("/"===(url+=".js").charAt(0)||url.match(/^[\w\+\.\-]+:/)?"":config.baseUrl)+url)}function makeRequire(relName){return function(deps,callback){return callback=callback||defaultCallback,takeQueue(),main(undef,deps||[],callback,relName)}}function resolve(name,d,value){name&&(defined[name]=value),d.resolve(value)}function defineModule(d){var ret,name=d.map.id;try{ret=d.factory.apply(defined[name],d.values)}catch(err){return reject(d,err)}resolve(name,d,ret=name&&ret===undef&&d.usingExports?defined[name]:ret)}function Defer(name){var d=this;d.promise=new Promise(function(resolve,reject){d.resolve=resolve,d.reject=reject}),d.map=name?makeMap(name):{},d.depCount=0,d.depMax=0,d.values=[],d.depDefined=[]}function getDefer(name){var d=name?(d=deferreds[name])||(deferreds[name]=new Defer(name)):new Defer;return d}function waitForDep(depMap,relName,d,i){d.depMax+=1,callDep(depMap,relName).then(function(val){d.rejected||d.depDefined[i]||(d.depDefined[i]=!0,d.depCount+=1,d.values[i]=val,d.depending)||d.depCount!==d.depMax||defineModule(d)},makeErrback(d,depMap.id)).catch(makeErrback(d,d.map.id))}function importScriptsHack(url){var urls=[];-1===url.indexOf("://")?(urls.push(config.baseUrl+url),urls.push(config.baseUrl+"modules/emby-apiclient/"+url),urls.push(config.baseUrl+"modules/sync/"+url),urls.push(config.baseUrl+"modules/localdatabase/"+url),urls.push(config.baseUrl+"modules/common/"+url),urls.push(config.baseUrl+"modules/"+url)):urls.push(url);for(var i=0,length=urls.length;i<length;i++){console.log("importScripts: "+urls[i]);try{return void importScripts(urls[i])}catch(err){console.log("importScripts error: "+urls[i]+", err: "+err.toString())}}throw new Error("importScripts failed for: "+url)}function loadUsingImportScripts(url,id){getDefer(id),importScriptsHack(url),takeQueue(id)}function loadUsingScriptElement(url,id){var script=document.createElement("script");script.type="text/javascript",script.charset="utf-8",script.async=!0,script.addEventListener("load",function(){takeQueue(id)},!1),script.addEventListener("error",function(){var err=new Error("Load failed: "+id+": "+script.src);reject(getDefer(id),err)},!1),script.src=url,document.head.appendChild(script)}var load="function"==typeof importScripts?loadUsingImportScripts:loadUsingScriptElement;function callDep(map,relName){var name=map.id;if(name in waiting)args=waiting[name],delete waiting[name],main.apply(undef,args);else if(!(name in deferreds)){var newId=map.id,args=map.pr;if(args)return args=plugins[args],newId in calledPlugin||(calledPlugin[newId]=!0,args.load(map.n).then(function(response){resolve(newId,getDefer(newId),response)})),getDefer(newId).promise;args=map.url,urlFetched[args]||(urlFetched[args]=!0,load(args,newId))}return getDefer(name).promise}function makeMap(name,relName){if("string"!=typeof name)return name;var cacheKey=name+" & "+(relName||""),parts=splitPrefix(name),prefix=parts[0];if(name=parts[1],prefix)plugins[prefix]&&(name=normalize(name,relName));else{var cachedMap=mapCache[cacheKey];if(cachedMap)return cachedMap;prefix=(parts=splitPrefix(name=normalize(name,relName)))[0],cachedMap=nameToUrl(name=parts[1])}relName={id:prefix?prefix+"!"+name:name,n:name,pr:prefix,url:cachedMap};return prefix||(mapCache[cacheKey]=relName),relName}var handlers={require:makeRequire,exports:function(name){var e=defined[name];return void 0!==e?e:defined[name]={}}};function main(name,deps,factory,relName){if(name){if(name in calledDefine)return;calledDefine[name]=!0}var d=getDefer(name);if(deps&&!Array.isArray(deps)&&(factory=deps,deps=[]),deps=deps?Array.prototype.slice.call(deps,0):null,relName=relName||name,"function"==typeof factory){!deps.length&&factory.length&&(deps=(1===factory.length?["require"]:["require","exports","module"]).concat(deps)),d.factory=factory,d.deps=deps,d.depending=!0;for(var i=0,length=deps.length;i<length;i++){var depMap,depName=deps[i];deps[i]=depMap=makeMap(depName,relName),"require"===(depName=depMap.id)?d.values[i]=handlers.require(name):"exports"===depName?(d.values[i]=handlers.exports(name),d.usingExports=!0):void 0===depName?d.values[i]=void 0:waitForDep(depMap,relName,d,i)}d.depending=!1,d.depCount===d.depMax&&defineModule(d)}else name&&resolve(name,d,factory);return d.promise}var req=makeRequire(),define=(req.config=function(cfg){cfg.baseUrl&&"/"!==cfg.baseUrl.charAt(cfg.baseUrl.length-1)&&(cfg.baseUrl+="/"),cfg.urlArgs&&(config.urlArgs=cfg.urlArgs),cfg.baseUrl&&(config.baseUrl=cfg.baseUrl),config.noRequireCss=cfg.noRequireCss},function(){queue.push(Array.prototype.slice.call(arguments,0))});globalThis.define=define,globalThis.require=req,define.amd={};