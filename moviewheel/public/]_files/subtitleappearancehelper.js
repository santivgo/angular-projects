define(["exports"],function(_exports){function getTextStyles(settings){var list=[],multiplier={smaller:.5,small:.7,medium:1,large:1.3,larger:1.72,extralarge:2}[settings.textSize||"medium"],multiplier=(list.push({name:"font-size",value:multiplier+"em"}),settings.positionBottom||"10"),multiplier=(list.push({name:"positionBottom",value:multiplier}),settings.positionTop||"5");switch(list.push({name:"positionTop",value:multiplier}),settings.dropShadow||""){case"raised":list.push({name:"text-shadow",value:"-1px -1px white, 0px -1px white, -1px 0px white, 1px 1px black, 0px 1px black, 1px 0px black"});break;case"depressed":list.push({name:"text-shadow",value:"1px 1px white, 0px 1px white, 1px 0px white, -1px -1px black, 0px -1px black, -1px 0px black"});break;case"uniform":list.push({name:"text-shadow",value:"-1px 0px #000000, 0px 1px #000000, 1px 0px #000000, 0px -1px #000000"});break;case"none":list.push({name:"text-shadow",value:"none"});break;default:list.push({name:"text-shadow",value:"#000000 0 0 .5em"})}multiplier=function(hex,alpha){if("transparent"===hex)return hex;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex))return hex="0x"+(hex=3===(hex=hex.substring(1).split("")).length?[hex[0],hex[0],hex[1],hex[1],hex[2],hex[2]]:hex).join(""),alpha=Math.min(1,alpha),alpha=Math.max(0,alpha),"rgba("+[hex>>16&255,hex>>8&255,255&hex].join(",")+","+alpha+")";throw new Error("Bad Hex")}(settings.textBackground,parseFloat(settings.textBackgroundOpacity)),multiplier&&list.push({name:"background-color",value:multiplier}),multiplier=settings.textColor||"#ffffff";return multiplier&&list.push({name:"color",value:multiplier}),list.push({name:"font-family",value:"inherit"}),list}function convertStyleListToObject(list){for(var obj={},i=0,length=list.length;i<length;i++)obj[function(name){switch(name){case"background-color":return"backgroundColor";case"text-shadow":return"textShadow";case"font-family":return"fontFamily";case"font-size":return"fontSize";default:return name}}(list[i].name)]=list[i].value;return obj}function getStyles(settings,options){return{text:getTextStyles(settings),window:[]}}function applyStyleList(styles,elem){for(var i=0,length=styles.length;i<length;i++){var style=styles[i];elem.style[style.name]=style.value}}Object.defineProperty(_exports,"__esModule",{value:!0}),_exports.default=void 0;_exports.default={getStyles:getStyles,applyStyles:function(elements,appearanceSettings,options){appearanceSettings=getStyles(appearanceSettings),elements.text&&applyStyleList(appearanceSettings.text,elements.text),elements.window&&applyStyleList(appearanceSettings.window,elements.window)},getStyleObjects:function(settings,options){return{text:convertStyleListToObject((settings=getStyles(settings)).text),window:convertStyleListToObject(settings.window)}}}});