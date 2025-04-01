define(["exports","./../../dom.js","./../../layoutmanager.js","./../../actionsheet/actionsheet.js","./../../focusmanager.js"],function(_exports,_dom,_layoutmanager,_actionsheet,_focusmanager){function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}Object.defineProperty(_exports,"__esModule",{value:!0}),_exports.default=void 0;var ActionSheet=_actionsheet.default.constructor;function onFocus(){var _this$labelElement;document.attachIME&&document.attachIME(this),null!=(_this$labelElement=this.labelElement)&&_this$labelElement.classList.add("inputLabelFocused")}function onBlur(){var _this$labelElement2;null!=(_this$labelElement2=this.labelElement)&&_this$labelElement2.classList.remove("inputLabelFocused")}function destroyActionSheet(elem){clearInputTimer(elem);var actionsheet=elem.actionsheet;actionsheet&&(actionsheet.isShowing()&&actionsheet.close(),actionsheet.destroy(),elem.actionsheet=null)}function clearInputTimer(elem){elem.inputTimeout&&clearTimeout(elem.inputTimeout)}function onInput(){clearInputTimer(this),this.value.trim()?this.inputTimeout=setTimeout(function(){var options,refocus,elem=this,value=elem.value.trim();if(console.log("onInputTimeout: "+value),value){if(!elem.actionsheet)return value=new ActionSheet,elem.actionsheet=value,options={getItems:elem.getItems,enableVirtualScroller:!1,positionTo:elem,resolveWithSelectedItem:!0,hasItemIcon:!0,iconRight:!1,fields:["Name","Type","ParentName"],dialogClass:"emby-input-actionsheet",offsetTop:2,refocus:!1,artist:!1,enableDefaultIcon:!0,imageSize:"small",hasItemImage:!0,setCurrentFocusScope:!1},_layoutmanager.default.tv||(options.positionY="bottom",options.positionX="left",options.transformOrigin="center top",options.minWidthToElement=!0),refocus="false"!==elem.getAttribute("data-refocus"),elem.dispatchEvent(new CustomEvent("selectionopen",{bubbles:!1,cancelable:!1,detail:{}})),value.show(options).then(function(item){elem.value=item.Name,elem.dispatchEvent(new CustomEvent("itemselected",{bubbles:!1,cancelable:!1,detail:{item:item}})),refocus&&_focusmanager.default.focus(elem),elem.dispatchEvent(new CustomEvent("selectionclose",{bubbles:!1,cancelable:!1,detail:{}})),destroyActionSheet(elem)},function(){elem.dispatchEvent(new CustomEvent("selectioncancel",{bubbles:!1,cancelable:!1,detail:{}})),refocus&&_focusmanager.default.focus(elem),elem.dispatchEvent(new CustomEvent("selectionclose",{bubbles:!1,cancelable:!1,detail:{}})),destroyActionSheet(elem)});elem.actionsheet.refreshItems()}else destroyActionSheet(elem)}.bind(this),400):destroyActionSheet(this)}function isDecimal(val){return!Number.isInteger(parseFloat(val))}require(["css!modules/emby-elements/emby-input/emby-input.css"]);var inputId=0;function onInit(){var label,labelClass,parentNode=this.parentNode;parentNode&&(this.hasInit||(this.hasInit=!0,this.id||(this.id="embyinput"+inputId,inputId++),this.classList.contains("emby-input"))?this.labelElement&&(this.labelElement.htmlFor=this.id):(this.classList.add("emby-input"),_layoutmanager.default.tv?(this.classList.add("emby-input-tv"),"number"===this.type&&this.classList.add("emby-input-hide-spin-button")):this.classList.add("emby-input-largerfont","emby-input-smaller"),(label=this.ownerDocument.createElement("label")).innerHTML=this.getAttribute("label")||"",label.classList.add("inputLabel"),(labelClass=this.getAttribute("labelclass"))&&label.classList.add(labelClass),label.htmlFor=this.id,parentNode.insertBefore(label,this),this.labelElement=label,_dom.default.addEventListener(this,"focus",onFocus,{passive:!0}),_dom.default.addEventListener(this,"blur",onBlur,{passive:!0}),"true"===this.getAttribute("data-autocompleteitems")&&_dom.default.addEventListener(this,"input",onInput,{passive:!0}),function(elem){var isDecimalInput;"number"===elem.type&&(isDecimalInput=isDecimal(elem.getAttribute("step"))||isDecimal(elem.getAttribute("min"))||isDecimal(elem.getAttribute("max")),elem.setAttribute("inputmode",isDecimalInput?"decimal":"numeric"))}(this)))}function roundMsToStep(ms,step){return step=step||1,step*=1e3,ms-ms%(step=Math.floor(step))}var supportsValueAsNumber=void 0!==document.createElement("input").valueAsNumber,supportsValueAsDate=void 0!==document.createElement("input").valueAsDate;function pad(num,size){for(var s=num+"";s.length<size;)s="0"+s;return s}function toLocalIsoString(date){return date.getFullYear()+"-"+pad(date.getMonth()+1,2)+"-"+pad(date.getDate(),2)}_actionsheet=function(_HTMLInputElement){function EmbyInput(){babelHelpers.classCallCheck(this,EmbyInput),t=this,o=EmbyInput,o=babelHelpers.getPrototypeOf(o);var o,e,t=o=babelHelpers.possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],babelHelpers.getPrototypeOf(t).constructor):o.apply(t,e));return onInit.call(t),babelHelpers.possibleConstructorReturn(o,t)}return babelHelpers.inherits(EmbyInput,_HTMLInputElement),babelHelpers.createClass(EmbyInput,[{key:"connectedCallback",value:function(){onInit.call(this)}},{key:"disconnectedCallback",value:function(){destroyActionSheet(this)}},{key:"isSelectionDialogOpen",value:function(){var actionsheet=this.actionsheet;return(null==actionsheet?void 0:actionsheet.isShowing())||!1}},{key:"focusSelectionDialog",value:function(){var actionsheet=this.actionsheet;actionsheet&&actionsheet.isShowing()&&actionsheet.autoFocus()}},{key:"closeSelectionDialog",value:function(){destroyActionSheet(this)}},{key:"label",value:function(text){this.labelElement.innerHTML=text}},{key:"valueAsNumber",get:function(){if(supportsValueAsNumber)return babelHelpers.get(babelHelpers.getPrototypeOf(EmbyInput.prototype),"valueAsNumber",this);var value=this.value;if(value)try{return Date.parse(value)}catch(err){}return NaN},set:function(val){!val||isNaN(val)?this.value="":(val=roundMsToStep(val,this.step),supportsValueAsNumber?babelHelpers.set(babelHelpers.getPrototypeOf(EmbyInput.prototype),"valueAsNumber",val,this,!0):babelHelpers.set(babelHelpers.getPrototypeOf(EmbyInput.prototype),"value",val?toLocalIsoString(new Date(val)):"",this,!0))}},{key:"valueAsDate",get:function(){var value;return supportsValueAsDate?babelHelpers.get(babelHelpers.getPrototypeOf(EmbyInput.prototype),"valueAsDate",this):(value=this.valueAsNumber)&&!isNaN(value)?new Date(value):null},set:function(val){supportsValueAsDate?babelHelpers.set(babelHelpers.getPrototypeOf(EmbyInput.prototype),"valueAsDate",val,this,!0):babelHelpers.set(babelHelpers.getPrototypeOf(EmbyInput.prototype),"value",val?toLocalIsoString(val.getTime()):"",this,!0)}},{key:"valueAsDateUtc",get:function(){var offsetMs,val=this.valueAsNumber;return val&&!isNaN(val)?(offsetMs=60*new Date(val).getTimezoneOffset()*1e3,new Date(val+offsetMs)):null},set:function(date){var offsetMs;date?(offsetMs=60*date.getTimezoneOffset()*1e3,this.valueAsNumber=date.getTime()-offsetMs):this.value=""}},{key:"valueAsNumberUtc",get:function(){var val=this.valueAsNumber;return!val||isNaN(val)?val:val+60*(new Date).getTimezoneOffset(val)*1e3},set:function(val){var offsetMs;!val||isNaN(val)?this.value="":(offsetMs=60*new Date(val).getTimezoneOffset()*1e3,this.valueAsNumber=val-offsetMs)}},{key:"minDateTimeLocal",get:function(){return null},set:function(valueAsNumber){valueAsNumber=roundMsToStep(valueAsNumber-=60*new Date(valueAsNumber).getTimezoneOffset()*1e3,this.step),this.setAttribute("min",new Date(valueAsNumber).toISOString().replace("Z",""))}}])}(babelHelpers.wrapNativeSuper(HTMLInputElement));customElements.define("emby-input",_actionsheet,{extends:"input"}),_actionsheet.setLabel=function(elem,label){elem.label&&elem.labelElement?elem.label(label||""):elem.setAttribute("label",label||"")},_exports.default=_actionsheet});