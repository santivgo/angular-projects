define(["exports","./../../dom.js","./../../scroller/smoothscroller.js","./../../focusmanager.js"],function(_exports,_dom,_smoothscroller,_focusmanager){function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}Object.defineProperty(_exports,"__esModule",{value:!0}),_exports.default=void 0,require(["css!modules/emby-elements/emby-tabs/emby-tabs.css"]);var buttonClass="emby-tab-button",activeButtonClass="emby-tab-button-active";function setActiveTabButton(tabs,newButton){newButton&&newButton.classList.add(activeButtonClass)}function onFocus(e){var delay;this.clearFocusTimeout(),e.target.closest("."+buttonClass)&&(delay=-1===this.selectedIndex()?0:700,this.focusTimeout=setTimeout(function(tabs,e){return function(){var target,activeElement=document.activeElement;activeElement&&(activeElement===(target=e.target)||activeElement.contains(target)?(e={type:e.type,target:target,currentTarget:e.currentTarget},onClick.call(tabs,e)):(activeElement=tabs.querySelector("."+activeButtonClass))&&tabs.scroller&&tabs.scroller.scrollToElement(activeElement,{}))}}(this,e),delay))}function triggerBeforeTabChangeInternal(tabs,index,previousIndex,triggerEvent){!1!==triggerEvent&&tabs.dispatchEvent(new CustomEvent("beforetabchange",{detail:{selectedTabIndex:index,previousIndex:previousIndex}}))}function onClick(e){this.clearFocusTimeout();var index,current=this.querySelector("."+activeButtonClass),tabButton=e.target.closest("."+buttonClass);tabButton&&tabButton!==current&&(current&&current.classList.remove(activeButtonClass),current=current?parseInt(current.getAttribute("data-index")):null,setActiveTabButton(0,tabButton),triggerBeforeTabChangeInternal(this,index=parseInt(tabButton.getAttribute("data-index")),current),this.selectedTabIndex=index,"click"!==e.type&&tabButton.href&&tabButton.click(),this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:index,previousIndex:current}})))}function onInit(){this.hasInit||(this.hasInit=!0,this.classList.add("emby-tabs","focusable"))}var EmbyTabs=function(_HTMLDivElement){function EmbyTabs(){babelHelpers.classCallCheck(this,EmbyTabs),t=this,o=EmbyTabs,o=babelHelpers.getPrototypeOf(o);var o,e,t=o=babelHelpers.possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],babelHelpers.getPrototypeOf(t).constructor):o.apply(t,e));return onInit.call(t),babelHelpers.possibleConstructorReturn(o,t)}return babelHelpers.inherits(EmbyTabs,_HTMLDivElement),babelHelpers.createClass(EmbyTabs,[{key:"connectedCallback",value:function(){var tabs,focusScroll,contentScrollSlider;onInit.call(this),_dom.default.removeEventListener(this,"click",onClick,{passive:!0}),_dom.default.addEventListener(this,"click",onClick,{passive:!0}),_dom.default.removeEventListener(this,"focus",onFocus,{passive:!0,capture:!0}),_dom.default.addEventListener(this,"focus",onFocus,{passive:!0,capture:!0}),!(tabs=this).scroller&&(focusScroll="true"===(focusScroll=tabs.getAttribute("data-focusscroll"))?"adaptive":"false"===focusScroll?null:focusScroll||("false"!==tabs.getAttribute("data-centerfocus")?"adaptive":null),contentScrollSlider=tabs.querySelector(".emby-tabs-slider"))&&(contentScrollSlider.classList.add("nohoverfocus"),tabs.scroller=new _smoothscroller.default(tabs,{horizontal:1,slidee:contentScrollSlider,speed:240,dragHandle:1,hiddenScroll:!0,focusScroll:focusScroll,focusScrollOffsetLeft:tabs.getAttribute("data-focusscrolloffsetleft")||tabs.getAttribute("data-focusscrolloffset")||null,allowNativeSmoothScroll:!0,autoPreventScrollOnFocus:!1,autoStartEdge:!1,adaptiveBorderXStart:0,adaptiveBorderXEnd:0}),tabs.scroller.init()),this.onTabsChanged(),this.readyFired||(this.readyFired=!0,this.dispatchEvent(new CustomEvent("ready",{})))}},{key:"onTabsChanged",value:function(){var current=this.querySelector("."+activeButtonClass),current=current?parseInt(current.getAttribute("data-index")):parseInt(this.getAttribute("data-index")||"0");-1!==(this.selectedTabIndex=current)&&(current=this.querySelectorAll("."+buttonClass)[current])&&(setActiveTabButton(0,current),this.scroller)&&this.scroller.scrollToElement(current,{behavior:"instant"})}},{key:"clearFocusTimeout",value:function(){this.focusTimeout&&clearTimeout(this.focusTimeout)}},{key:"detachedCallback",value:function(){this.scroller&&(this.scroller.destroy(),this.scroller=null),_dom.default.removeEventListener(this,"click",onClick,{passive:!0}),_dom.default.removeEventListener(this,"focus",onFocus,{passive:!0,capture:!0})}},{key:"focus",value:function(){var selected=this.querySelector("."+activeButtonClass);selected?_focusmanager.default.focus(selected):_focusmanager.default.autoFocus(this)}},{key:"selectedIndex",value:function(selected,triggerEvent){if(null==selected)return this.selectedTabIndex||0;this.clearFocusTimeout();var current=this.selectedIndex(),tabButtons=(this.selectedTabIndex=selected,this.querySelectorAll("."+buttonClass));current===selected||!1===triggerEvent||-1===selected?(triggerBeforeTabChangeInternal(this,selected,current,triggerEvent),!1!==triggerEvent&&this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:selected}})),triggerEvent=tabButtons[current],setActiveTabButton(0,tabButtons[selected]),current!==selected&&triggerEvent&&triggerEvent.classList.remove(activeButtonClass)):onClick.call(this,{target:tabButtons[selected]})}},{key:"triggerBeforeTabChange",value:function(selected){triggerBeforeTabChangeInternal(this,this.selectedIndex())}},{key:"triggerTabChange",value:function(selected){this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:this.selectedIndex()}}))}},{key:"setTabEnabled",value:function(index,enabled){index=this.querySelector('.emby-tab-button[data-index="'+index+'"]');enabled?index.classList.remove("hide"):index.classList.add("hide")}}])}(babelHelpers.wrapNativeSuper(HTMLDivElement));customElements.define("emby-tabs",EmbyTabs,{extends:"div"}),_exports.default=EmbyTabs});