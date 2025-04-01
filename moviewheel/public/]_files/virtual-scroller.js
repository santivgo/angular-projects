define(["exports","./../dom.js","./../layoutmanager.js","./../focusmanager.js"],function(_exports,_dom,_layoutmanager,_focusmanager){function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(_isNativeReflectConstruct=function(){return!!t})()}Object.defineProperty(_exports,"__esModule",{value:!0}),_exports.default=void 0,require(["css!modules/virtual-scroller/virtual-scroller.css"]);var rAF=requestAnimationFrame,cAF=cancelAnimationFrame,supportsContentVisibility=CSS.supports("content-visibility","hidden"),displayProp=supportsContentVisibility?"contentVisibility":"display",displayHiddenValue=supportsContentVisibility?"hidden":"none",supportsInsetShorthand=CSS.supports("inset","0 0 0 0"),supportsTransform=CSS.supports("transform","scale(1)"),supportsTranslate=CSS.supports("translate","40px 100px");function Layout1dBase(config){this._physicalMin=0,this._physicalMax=0,this._first=-1,this._last=-1,this._itemSize={width:0,height:0},this._scrollPosition=0,this._viewportSize={width:0,height:0},this._totalItems=0,this._scrollSize=1,this._pendingReflow=!1,Object.assign(this,config)}function Layout1dGrid(config){Layout1dBase.call(this,config),this._rolumns=1}function VirtualScroller(config){this._inlineMultiplier="rtl"===document.dir?-1:1,this._totalItems=0,this._num=1/0,this._first=0,this._last=0,this._prevFirst=0,this._prevLast=0,this._needsReset=!1,this._needsRemeasure=!1,this._pendingRender=null,this._container=null,this._ordered=[],this._keyToChild=[],this._indexToMeasure={},this.requestAnimationFrameCallbackFn=this.requestAnimationFrameCallback.bind(this),this._num=0,this._first=-1,this._last=-1,this._prevFirst=-1,this._prevLast=-1,this._needsUpdateViewSize=!1,this._needsUpdateViewScrollPosition=!1,this._layout=null,this._scrollTarget=null,this._scrollSize=null,this._childrenPos=null,this._container=null,this._containerSize=null,this._containerRO=new ResizeObserver(this._containerSizeChanged.bind(this)),this.boundOnScrollTargetResize=this._scrollTargetSizeChanged.bind(this),this._skipNextChildrenSizeChanged=!1,this.sameSizeChildren=config.sameSizeChildren,this.sameSizeChildren||(this._childrenRO=new ResizeObserver(this._childrenSizeChanged.bind(this))),this.boundHandleScroll=this.handleScroll.bind(this),this.setContainer(config.container),this.setScrollTarget(config.scrollTarget)}function getFocusableElements(newItemToFocus,activeElement,direction){return newItemToFocus||null==(newItemToFocus=function(instance,currentIndex,direction){var isVertical=(instance=instance._layout).isVertical,rolumns=instance._rolumns,instance=instance._totalItems,dim1Index=Math.floor(currentIndex/rolumns),dim2Index=currentIndex%rolumns,rowIndex=isVertical?dim1Index:dim2Index,dim2Index=isVertical?dim2Index:dim1Index,dim1Index=isVertical?rolumns?Math.ceil(instance/rolumns):Number.MAX_SAFE_INTEGER:rolumns,rolumns=isVertical?rolumns:rolumns?Math.ceil(instance/rolumns):Number.MAX_SAFE_INTEGER,newRowIndex=rowIndex,newColIndex=dim2Index;switch(direction){case 0:"rtl"===document.dir?newColIndex++:newColIndex--;break;case 1:"rtl"===document.dir?newColIndex--:newColIndex++;break;case 2:newRowIndex--;break;case 3:newRowIndex++;break;default:throw new Error("Invalid dir param")}return newRowIndex<0||newColIndex<0||dim1Index<=newRowIndex||rolumns<=newColIndex||(rowIndex=currentIndex<(rowIndex=isVertical?newRowIndex*rolumns+newColIndex:newColIndex*dim1Index+newRowIndex)?Math.min(rowIndex,instance-1):rowIndex)===currentIndex?-1:rowIndex}(this,activeElement._dataItemIndex,direction))?null:!(newItemToFocus<0)&&(activeElement=this._container.getElement(newItemToFocus))?[activeElement]:[]}function DataLoader(scroller,startIndex){this.scroller=scroller,this.startIndex=startIndex,this.dataLoadTimeout=setTimeout(function(){var scroller=this.scroller,abortController=new AbortController;this.abortController=abortController,scroller.loadItems(this.startIndex,abortController.signal)}.bind(this),140)}function removeItemOnce(arr,value){value=arr.indexOf(value);-1<value&&arr.splice(value,1)}function cancelDataLoading(scroller){var loaders=scroller.dataLoaders.slice(0);scroller.dataLoaders=[];for(var i=0,length=loaders.length;i<length;i++)loaders[i].destroy()}function onInit(){this.hasVirtualScrollerInit||(this.hasVirtualScrollerInit=!0,this.scroller=null,this.nodePool=[],this.dataLoaders=[],this.childTemplate=null,this.setItemSourceInternal(null))}function updateElementOuter(element,index,item,showElement,chunksChecked){(item=item||this._itemSource[index])?(this.updateElement(element,item,index),showElement&&(item=element.style)&&(item[displayProp]=null),index===this._focusIndex&&(this._focusIndex=null,function(element){setTimeout(function(){_focusmanager.default.focus(element)},0)}(element))):(element.innerHTML=this.templateInnerHTML,element.lastInnerHTML=null,index=index-index%(item=this.virtualChunkSize),!chunksChecked||chunksChecked[index]||(chunksChecked[index]=!0,function(scrollerElement,chunkSize){for(var loaders=scrollerElement.dataLoaders.slice(0),scroller=scrollerElement.scroller,first=scroller._first,last=scroller._last,i=0,length=loaders.length;i<length;i++){var loader=loaders[i],startIndex=loader.startIndex;(startIndex+chunkSize<first||last<startIndex)&&(removeItemOnce(scrollerElement.dataLoaders,loader),loader.destroy())}}(this,item),function(scroller,startIndex){for(var loaders=scroller.dataLoaders,i=0,length=loaders.length;i<length;i++){var loader=loaders[i];if(loader.startIndex===startIndex)return loader}}(this,index))||this.dataLoaders.push(new DataLoader(this,index)),showElement&&(chunksChecked=element.style)&&(chunksChecked[displayProp]=null))}Layout1dBase.prototype.setTotalItems=function(num){num!==this._totalItems&&(this._totalItems=num,this._scheduleReflow())},Layout1dBase.prototype.getDirection=function(){return this._direction},Layout1dBase.prototype.setDirection=function(dir){var overhangScaleFactor;(dir="horizontal"===dir?dir:"vertical")!==this._direction&&(this._direction=dir,this.isVertical="vertical"===dir,overhangScaleFactor=_layoutmanager.default.tv?1:this.isVertical?.25:.2,this.isVertical?this._overhang=Math.max(150,Math.round(_dom.default.getWindowSize().innerHeight*overhangScaleFactor)):this._overhang=Math.max(150,Math.round(_dom.default.getWindowSize().innerWidth*overhangScaleFactor)),this._sizeDim="horizontal"===dir?"width":"height",this._secondarySizeDim="horizontal"===dir?"height":"width",this._positionDim="horizontal"===dir?"left":"top",this._secondaryPositionDim="horizontal"===dir?"top":"left",this._scheduleReflow())},Layout1dBase.prototype.setItemSize=function(dims){var _itemDim1=this._itemDim1(),_itemDim2=this._itemDim2(),itemSize=this._itemSize;return itemSize.width=Math.floor(dims.width),itemSize.height=Math.floor(dims.height),(_itemDim1!==this._itemDim1()||_itemDim2!==this._itemDim2())&&(_itemDim2!==this._itemDim2()?this._itemDim2Changed():this._scheduleReflow(),!0)},Layout1dBase.prototype.setViewportSize=function(dims){var _viewDim1=this._viewDim1(),_viewDim2=this._viewDim2();this._viewportSize=dims,_viewDim2!==this._viewDim2()?this._viewDim2Changed():_viewDim1===this._viewDim1()&&dims.offset===this._viewportSize.offset||this._checkThresholds()},Layout1dBase.prototype.setViewportScroll=function(newScrollPosition){this._scrollPosition=newScrollPosition,this._checkThresholds()},Layout1dBase.prototype._itemDim1=function(){return this._itemSize[this._sizeDim]},Layout1dBase.prototype._itemDim2=function(){return this._itemSize[this._secondarySizeDim]},Layout1dBase.prototype._viewDim1=function(){return this._viewportSize[this._sizeDim]},Layout1dBase.prototype._viewDim2=function(){return this._viewportSize[this._secondarySizeDim]},Layout1dBase.prototype._num=function(){var first=this._first,last=this._last;return-1===first||-1===last?0:last-first+1},Layout1dBase.prototype.reflowIfNeeded=function(forceEmitChildPositions){this._pendingReflow&&(this._pendingReflow=!1,this._reflow(forceEmitChildPositions))},Layout1dBase.prototype._scheduleReflow=function(){this._pendingReflow=!0},Layout1dBase.prototype._reflow=function(forceEmitChildPositions){var _first=this._first,_last=this._last,_scrollSize=this._scrollSize,_scrollSize=(this._updateScrollSize(),this._getActiveItems(),this._scrollSize!==_scrollSize&&this._emitScrollSize(),this._first),last=this._last,hasEmittedChildPositions=!1;-1===_scrollSize&&-1===last?this._emitRange():_scrollSize===_first&&last===_last||(this._emitRange(),this._emitChildPositions(),hasEmittedChildPositions=!0),!hasEmittedChildPositions&&forceEmitChildPositions&&this._emitChildPositions()},Layout1dBase.prototype._updateScrollSize=function(){var itemDim1=this._itemDim1();itemDim1&&(this._scrollSize=Math.max(1,this._totalItems*itemDim1))},Layout1dBase.prototype._checkThresholds=function(){var overhang,min,scrollPosition,_viewDim1=this._viewDim1();(0===_viewDim1&&0<this._num()||(overhang=this._overhang,scrollPosition=Math.abs(this._scrollPosition),min=Math.max(0,scrollPosition-overhang-this._viewportSize.offset),scrollPosition=Math.min(this._scrollSize,scrollPosition+_viewDim1+overhang),this._physicalMin>min)||this._physicalMax<scrollPosition)&&this._scheduleReflow()},Layout1dBase.prototype._emitRange=function(){var fn=this.onRangeChange;fn&&fn({first:this._first,num:this._num()})},Layout1dBase.prototype._emitScrollSize=function(){var fn=this.onScrollSizeChange;fn&&fn(this._scrollSize)},Layout1dBase.prototype._emitChildPositions=function(){var fn=this.onItemPositionChange;fn&&fn({first:this._first,length:this._last+1})},Layout1dBase.prototype._itemDim2Changed=function(){},Layout1dBase.prototype._viewDim2Changed=function(){},Layout1dBase.prototype._getActiveItems=function(){},Layout1dBase.prototype._getItemPosition=function(idx,rolumns,itemDim1,itemDim2){},Object.assign(Layout1dGrid.prototype,Layout1dBase.prototype),Layout1dGrid.prototype.updateItemSizes=function(sizes){return!!sizes&&this.setItemSize(sizes)},Layout1dGrid.prototype._viewDim2Changed=function(){this._defineGrid()},Layout1dGrid.prototype._itemDim2Changed=function(){this._defineGrid()},Layout1dGrid.prototype._getActiveItems=function(){var rolumns,overhang=this._overhang,scrollPosition=Math.abs(this._scrollPosition),min=Math.max(0,scrollPosition-overhang-this._viewportSize.offset),scrollPosition=Math.min(this._scrollSize,scrollPosition+this._viewDim1()+overhang),overhang=this._itemDim1();overhang?(min=Math.floor(min/overhang),scrollPosition=Math.ceil(scrollPosition/overhang)-1,rolumns=this._rolumns,this._first=min*rolumns,this._last=Math.min((1+scrollPosition)*rolumns-1,this._totalItems),this._physicalMin=overhang*min,this._physicalMax=overhang*(1+scrollPosition)):(this._first=0,this._last=Math.min(1,this._totalItems))},Layout1dGrid.prototype._getItemPosition=function(idx,rolumns,itemDim1,itemDim2,secondaryPositionOffset){var result={};return result[this._positionDim]=Math.floor(idx/rolumns)*itemDim1,result[this._secondaryPositionDim]=idx%rolumns*itemDim2+secondaryPositionOffset,result},Layout1dGrid.prototype._defineGrid=function(){var itemDim2=this._itemDim2();itemDim2&&(this._rolumns=Math.max(1,Math.floor(this._viewDim2()/itemDim2))),this._scheduleReflow()},Layout1dGrid.prototype._updateScrollSize=function(){var itemDim1=this._itemDim1();itemDim1&&(this._scrollSize=Math.max(1,Math.ceil(this._totalItems/this._rolumns)*itemDim1))},VirtualScroller.prototype.getContainer=function(){return this._container},VirtualScroller.prototype.setContainer=function(container){this._container=container,this.requestReset(!0),this._containerRO.disconnect(),this._containerSize=null,this._needsUpdateViewSize=!0,this._needsUpdateViewScrollPosition=!0,this._scheduleRender(),this._containerRO.observe(container)},VirtualScroller.prototype.getLayout=function(){return this._layout},VirtualScroller.prototype.setLayout=function(layout){this._layout=layout,"function"==typeof this._layout.updateItemSizes&&this.requestRemeasure(),this._layout.onScrollSizeChange=this.onScrollSizeChange.bind(this),this._layout.onItemPositionChange=this.onItemPositionChange.bind(this),this._layout.onRangeChange=this.onRangeChange.bind(this),this._needsUpdateViewSize=!0,this._needsUpdateViewScrollPosition=!0,this._scheduleRender()},VirtualScroller.prototype.getScrollTarget=function(){return this._scrollTarget},VirtualScroller.prototype.setScrollTarget=function(target){(this._scrollTarget=target).addResizeObserver(this.boundOnScrollTargetResize),target.addScrollEventListener?target.addScrollEventListener(this.boundHandleScroll,{passive:!0}):_dom.default.addEventListener(target,"scroll",this.boundHandleScroll,{passive:!0});var target=this._container,containerClassList=target.classList;(containerClassList.contains("focuscontainer")||containerClassList.contains("focuscontainer-x")||containerClassList.contains("focuscontainer-y"))&&(target.getFocusableElements=getFocusableElements.bind(this))},VirtualScroller.prototype.getFirst=function(){return this._first},VirtualScroller.prototype.setFirst=function(idx){idx=Math.max(0,Math.min(idx,this._totalItems-this._num));return idx!==this._first&&(this._first=idx,this._scheduleRender(),!0)},VirtualScroller.prototype.setTotalItems=function(num,forceReset){var changed=!1;num!==this._totalItems&&(this._totalItems=num,this._keyToChild.length=num,this.setFirst(this._first),changed=!0),this._layout.setTotalItems(num),(changed||forceReset)&&this.requestReset(!0)},VirtualScroller.prototype.requestReset=function(requestRemeasure){requestRemeasure&&(this._needsRemeasure=!0,this._childSize=null),this._needsReset=!0,this._scheduleRender()},VirtualScroller.prototype.requestRemeasure=function(){this._needsRemeasure=!0,this._childSize=null,this._scheduleRender()},VirtualScroller.prototype._shouldRender=function(){var _containerSize=this._containerSize;if(!_containerSize){var container=this._container;if(!container)return!1;this._containerSize=_containerSize=container.getBoundingClientRect()}return 0<_containerSize.width||0<_containerSize.height},VirtualScroller.prototype.requestAnimationFrameCallback=function(){this._pendingRender=null,this._shouldRender()&&this._render()},VirtualScroller.prototype._scheduleRender=function(){this._pendingRender||(this._pendingRender=rAF(this.requestAnimationFrameCallbackFn))},VirtualScroller.prototype.get_toMeasure=function(){var kids,first,_this=this;return this.sameSizeChildren?(kids=this._ordered,first=this._first,this._needsRemeasure||first<this._prevFirst||first+kids.length-1>this._prevLast?{indices:[first],children:kids}:{indices:[],children:[]}):this._ordered.reduce(function(toMeasure,c,i){i=_this._first+i;return(_this._needsRemeasure||i<_this._prevFirst||i>_this._prevLast)&&(toMeasure.indices.push(i),toMeasure.children.push(c)),toMeasure},{indices:[],children:[]})},VirtualScroller.prototype._measureChildren=function(_ref){var child,_this2=this,indices=_ref.indices,_ref=_ref.children;return this.sameSizeChildren?!!(child=_ref[0])&&this._layout.updateItemSizes(this._measureChild(child,!0)):(child=_ref.map(function(c,i){return _this2._indexToMeasure[indices[i]]||_this2._measureChild(c)}).reduce(function(out,cur,i){return out[indices[i]]=_this2._indexToMeasure[indices[i]]=cur,out},{}),this._layout.updateItemSizes(child[0]))},VirtualScroller.prototype._baseRender=function(){var _first=this._first,rangeChanged=_first!==this._prevFirst||this._num!==this._prevNum,needsReset=this._needsReset;if((rangeChanged||needsReset)&&(this._last=_first+Math.min(this._num,this._totalItems-_first)-1,this._num||this._prevNum)){for(var o=this._ordered,_prevFirst=this._prevFirst,elemsToHide=[o.length],elemToHideIndex=-1,idx=_prevFirst;o.length&&idx<_first;idx++){var elem=o.shift();elemToHideIndex++,this._unassignChild(idx,elemsToHide[elemToHideIndex]=elem)}for(var _last=this._last,_idx=this._prevLast;o.length&&_last<_idx;_idx--){var _elem=o.pop();elemToHideIndex++,this._unassignChild(_idx,elemsToHide[elemToHideIndex]=_elem)}needsReset?this._reset(_first,_last):(this._addHead(_prevFirst={}),this._addTail(_prevFirst));for(var prop=displayProp,propValue=displayHiddenValue,i=0;i<=elemToHideIndex;i++){var _elem2=elemsToHide[i];_elem2._unassigned&&(_elem2._unassigned=null,_elem2=_elem2.style)&&(_elem2[prop]=propValue)}}this._needsRemeasure&&(this._indexToMeasure={});needsReset=0<this._num&&(rangeChanged||this._needsRemeasure)?this.get_toMeasure():null,this._prevFirst=this._first,this._prevLast=this._last,this._prevNum=this._num,this._needsReset=!1,this._needsRemeasure=!1,_prevFirst=this._childrenPos;return _prevFirst&&((supportsInsetShorthand?"rtl"===document.dir?function(instance,pos){var layout=instance._layout,rolumns=layout._rolumns,itemDim1=layout._itemDim1(),itemDim2=layout._itemDim2();if(itemDim1&&itemDim2)for(var kids=instance._ordered,first=instance._first,secondaryPositionOffset=0,childPosition=(layout.isVertical&&1<rolumns&&(instance=layout._totalItems)<rolumns&&(instance=itemDim2*instance)&&(secondaryPositionOffset=Math.floor((layout._viewDim2()-instance)/2)),{top:0,left:0}),_positionDim=layout._positionDim,_secondaryPositionDim=layout._secondaryPositionDim,i=pos.first,length=pos.length;i<length;i++){var inset,child=kids[i-first];child&&(childPosition[_positionDim]=Math.floor(i/rolumns)*itemDim1,childPosition[_secondaryPositionDim]=i%rolumns*itemDim2+secondaryPositionOffset,(inset=childPosition.top+"px "+childPosition.left+"px auto auto")!==child._lastInset)&&(child.style.inset=inset,child._lastInset=inset)}}:function(instance,pos){var layout=instance._layout,rolumns=layout._rolumns,itemDim1=layout._itemDim1(),itemDim2=layout._itemDim2();if(itemDim1&&itemDim2)for(var kids=instance._ordered,first=instance._first,secondaryPositionOffset=0,childPosition=(layout.isVertical&&1<rolumns&&(instance=layout._totalItems)<rolumns&&(instance=itemDim2*instance)&&(secondaryPositionOffset=Math.floor((layout._viewDim2()-instance)/2)),{top:0,left:0}),_positionDim=layout._positionDim,_secondaryPositionDim=layout._secondaryPositionDim,i=pos.first,length=pos.length;i<length;i++){var inset,child=kids[i-first];child&&(childPosition[_positionDim]=Math.floor(i/rolumns)*itemDim1,childPosition[_secondaryPositionDim]=i%rolumns*itemDim2+secondaryPositionOffset,(inset=childPosition.top+"px auto auto "+childPosition.left+"px")!==child._lastInset)&&(child.style.inset=inset,child._lastInset=inset)}}:supportsTranslate?function(instance,pos){var layout=instance._layout,rolumns=layout._rolumns,itemDim1=layout._itemDim1(),itemDim2=layout._itemDim2();if(itemDim1&&itemDim2)for(var kids=instance._ordered,first=instance._first,inlineMultiplier=instance._inlineMultiplier,secondaryPositionOffset=0,childPosition=(layout.isVertical&&1<rolumns&&(instance=layout._totalItems)<rolumns&&(instance=itemDim2*instance)&&(secondaryPositionOffset=Math.floor((layout._viewDim2()-instance)/2)),{top:0,left:0}),_positionDim=layout._positionDim,_secondaryPositionDim=layout._secondaryPositionDim,i=pos.first,length=pos.length;i<length;i++){var translate,child=kids[i-first];child&&(childPosition[_positionDim]=Math.floor(i/rolumns)*itemDim1,childPosition[_secondaryPositionDim]=i%rolumns*itemDim2+secondaryPositionOffset,(translate=childPosition.left*inlineMultiplier+"px "+childPosition.top+"px")!==child._lastTranslate)&&(child.style.translate=translate,child._lastTranslate=translate)}}:supportsTransform?function(instance,pos){var layout=instance._layout,rolumns=layout._rolumns,itemDim1=layout._itemDim1(),itemDim2=layout._itemDim2();if(itemDim1&&itemDim2){var kids=instance._ordered,first=instance._first,inlineMultiplier=instance._inlineMultiplier,secondaryPositionOffset=0;layout.isVertical&&1<rolumns&&(instance=layout._totalItems)<rolumns&&(instance=itemDim2*instance)&&(secondaryPositionOffset=Math.floor((layout._viewDim2()-instance)/2));for(var i=pos.first,length=pos.length;i<length;i++){var childPosition,child=kids[i-first];child&&(childPosition=layout._getItemPosition(i,rolumns,itemDim1,itemDim2,secondaryPositionOffset),(childPosition="translate("+childPosition.left*inlineMultiplier+"px, "+childPosition.top+"px)")!==child._lastTransform)&&(child.style.transform=childPosition,child._lastTransform=childPosition)}}}:function(instance,pos){var layout=instance._layout,rolumns=layout._rolumns,itemDim1=layout._itemDim1(),itemDim2=layout._itemDim2();if(itemDim1&&itemDim2){var kids=instance._ordered,first=instance._first,secondaryPositionOffset=0;layout.isVertical&&1<rolumns&&(instance=layout._totalItems)<rolumns&&(instance=itemDim2*instance)&&(secondaryPositionOffset=Math.floor((layout._viewDim2()-instance)/2));for(var i=pos.first,length=pos.length;i<length;i++){var childPosition,childStyle,left,child=kids[i-first];child&&(childPosition=layout._getItemPosition(i,rolumns,itemDim1,itemDim2,secondaryPositionOffset),childStyle=child.style,(left=childPosition.left+"px")!==child._lastLeft?(childStyle.left=left,child._lastLeft=left):console.log("no change"),(left=childPosition.top+"px")!==child._lastTop)&&(childStyle.top=left,child._lastTop=left)}}})(this,_prevFirst),this._childrenPos=null),!!needsReset&&this._measureChildren(needsReset)},VirtualScroller.prototype._render=function(){var childrenRO=this._childrenRO;for(childrenRO&&childrenRO.disconnect(),this._needsUpdateViewSize&&(this._needsUpdateViewSize=!1,this._updateViewSize()),this._needsUpdateViewScrollPosition&&(this._needsUpdateViewScrollPosition=!1,this._layout.setViewportScroll(this._scrollTarget.getScrollPosition())),this._layout.reflowIfNeeded();;){this._pendingRender&&(cAF(this._pendingRender),this._pendingRender=null),this._sizeContainer(this._scrollSize);var hasChanges=this._baseRender();if(this._layout.reflowIfNeeded(hasChanges),!this._pendingRender)break}if(childrenRO){this._skipNextChildrenSizeChanged=!0;for(var kids=this._ordered,i=0,length=kids.length;i<length;i++)childrenRO.observe(kids[i])}},VirtualScroller.prototype._addHead=function(chunksChecked){for(var start=this._first,end=Math.min(this._last,this._prevFirst-1),updateElement=this.updateElement,ordered=this._ordered,idx=end;start<=idx;idx--){var child=this._assignChild(idx,ordered[0],!0);updateElement(child,idx,null,!0,chunksChecked),ordered.unshift(child)}},VirtualScroller.prototype._addTail=function(chunksChecked){for(var start=Math.max(this._first,this._prevLast+1),end=this._last,updateElement=this.updateElement,ordered=this._ordered,idx=start;idx<=end;idx++){var child=this._assignChild(idx,null,!0);updateElement(child,idx,null,!0,chunksChecked),ordered.push(child)}},VirtualScroller.prototype._reset=function(first,last){for(var ordered=this._ordered,currentMarker=ordered[0],updateElement=(ordered.length=0,this.updateElement),chunksChecked={},i=first;i<=last;i++){var child=this._assignChild(i,currentMarker);ordered.push(child),updateElement(child,i,null,!0,chunksChecked)}},VirtualScroller.prototype.updateExistingElement=function(index,item){var child=this._keyToChild[index];child&&this.updateElement(child,index,item)},VirtualScroller.prototype._assignChild=function(idx,insertBefore,insertElement){var container,keyToChild=this._keyToChild,child=keyToChild[idx];return child?(container=this._container,insertElement&&container.insertBefore(child,insertBefore),child._dataItemIndex=idx):keyToChild[(child=this.createElement(insertBefore))._dataItemIndex=idx]=child,child._unassigned=null,child},VirtualScroller.prototype._unassignChild=function(idx,child){child._unassigned=!0,child._dataItemIndex=null,this._keyToChild[idx]=null,this.recycleElement(child,idx)},VirtualScroller.prototype._measureChild=function(child,sameSizeChildren){var childSize=this._childSize;return sameSizeChildren&&childSize||(this._childSize=childSize=child.getBoundingClientRect()),childSize},VirtualScroller.prototype._containerSizeChanged=function(entries){this.paused||(this._containerSize=entries[0].contentRect,this._needsUpdateViewSize=!0,this._needsUpdateViewScrollPosition=!0,this.requestRemeasure())},VirtualScroller.prototype._scrollTargetSizeChanged=function(entries){this.paused||(this._needsUpdateViewSize=!0,this._needsUpdateViewScrollPosition=!0,this.requestRemeasure())},VirtualScroller.prototype._childrenSizeChanged=function(){this.paused||(this._skipNextChildrenSizeChanged?this._skipNextChildrenSizeChanged=!1:this.requestRemeasure())},VirtualScroller.prototype.onRangeChange=function(range){var num=range.num;num!==this._num?(this._num=num,this.setFirst(range.first)||this._scheduleRender()):this.setFirst(range.first)},VirtualScroller.prototype.onItemPositionChange=function(event){this._childrenPos=event,this._scheduleRender()},VirtualScroller.prototype.onScrollSizeChange=function(size){this._scrollSize=size,this._scheduleRender()},VirtualScroller.prototype.handleScroll=function(event){this.paused||(this._needsUpdateViewScrollPosition=!0,this._scheduleRender())},VirtualScroller.prototype._updateViewSize=function(){var containerElement=this._container,layout=this._layout,containerElement=containerElement.getBoundingClientRect(),scrollBounds=this._scrollTarget.getScrollContainerBoundingClientRect(),scrollerWidth=scrollBounds.width,scrollerHeight=scrollBounds.height,xMin=Math.max(0,Math.min(scrollerWidth,containerElement.left-scrollBounds.left)),yMin=Math.max(0,Math.min(scrollerHeight,containerElement.top-scrollBounds.top)),directionIsVertical=layout.isVertical,scrollerWidth=directionIsVertical?Math.max(0,Math.min(scrollerWidth,containerElement.right-scrollBounds.left)):scrollerWidth,scrollerHeight=directionIsVertical?scrollerHeight:Math.max(0,Math.min(scrollerHeight,containerElement.bottom-scrollBounds.top)),scrollerWidth=Math.ceil(scrollerWidth-xMin),xMin=Math.ceil(scrollerHeight-yMin),scrollerHeight=directionIsVertical?Math.max(0,containerElement.top-scrollBounds.top):Math.max(0,containerElement.left-scrollBounds.left);layout.setViewportSize({width:scrollerWidth,height:xMin,offset:scrollerHeight})},VirtualScroller.prototype._sizeContainer=function(size){var containerElemStyle,containerElem=this._container,size=size?size+"px":null,layout=this._layout;layout.isVertical?containerElem.lastHeight!==size&&(containerElem.style.height=size,containerElem.lastHeight=size):containerElem.lastMinWidth!==size&&((containerElemStyle=containerElem.style).minWidth=size,containerElem.lastMinWidth=size,containerElem=layout._itemDim2(),size=layout._rolumns,containerElem)&&(containerElemStyle.height=containerElem*size+"px")},VirtualScroller.prototype.destroy=function(){var ro=this._containerRO,ro=(ro&&(ro.disconnect(),this._containerRO=null),(ro=this._childrenRO)&&(ro.disconnect(),this._childrenRO=null),this._scrollTarget);ro&&this.boundOnScrollTargetResize&&ro.removeResizeObserver&&ro.removeResizeObserver(this.boundOnScrollTargetResize),ro&&this.boundHandleScroll&&(ro.removeScrollEventListener?ro.removeScrollEventListener(this.boundHandleScroll,{passive:!0}):_dom.default.removeEventListener(ro,"scroll",this.boundHandleScroll,{passive:!0})),this.requestAnimationFrameCallbackFn=null,this.boundHandleScroll=null,this.boundOnScrollTargetResize=null,this._container=null,this._containerSize=null},DataLoader.prototype.destroy=function(){var timeout=this.dataLoadTimeout,timeout=(timeout&&(clearTimeout(timeout),this.dataLoadTimeout=null),this.abortController);timeout&&timeout.abort(),this.abortController=null,this.scroller=null};supportsContentVisibility=function(_HTMLDivElement){function VirtualScrollerElement(){babelHelpers.classCallCheck(this,VirtualScrollerElement),t=this,o=VirtualScrollerElement,o=babelHelpers.getPrototypeOf(o);var o,e,t=o=babelHelpers.possibleConstructorReturn(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],babelHelpers.getPrototypeOf(t).constructor):o.apply(t,e));return onInit.call(t),babelHelpers.possibleConstructorReturn(o,t)}return babelHelpers.inherits(VirtualScrollerElement,_HTMLDivElement),babelHelpers.createClass(VirtualScrollerElement,[{key:"addClasses",value:function(){this.classList.add("virtual-scroller")}},{key:"connectedCallback",value:function(){onInit.call(this)}},{key:"disconnectedCallback",value:function(){cancelDataLoading(this),this.hasVirtualScrollerInit=null;var scroller=this.scroller;this.scroller=null,scroller&&scroller.destroy(),this.nodePool=null,this.childTemplate=null,this.setItemSourceInternal(null),this.classList.remove("virtual-scroller")}},{key:"setItemSourceInternal",value:function(items){if(this._itemSource=items){for(var map={},i=0,length=items.length;i<length;i++){var item=items[i];if(!item)break;item=item.Id;item&&(map[item]=i)}this._itemSourceMap=map}else this._itemSourceMap=null}},{key:"setItemSource",value:function(itemSource,totalItems){cancelDataLoading(this),totalItems&&(itemSource.length=totalItems),this.setItemSourceInternal(itemSource);var layoutAttr,layout,totalItems=this.scroller;totalItems||(layoutAttr=this.getAttribute("layout"),(totalItems=this.scroller=new VirtualScroller({container:this,scrollTarget:this.closest(".emby-scroller"),sameSizeChildren:!0})).updateElement=updateElementOuter.bind(this),totalItems.createElement=function(insertBefore){var fragment,result=this.nodePool.pop();return result?(this.scroller._container.insertBefore(result,insertBefore),result):((result=this.childTemplate)||((fragment=document.createElement("div")).innerHTML=this.templateHTML,result=this.childTemplate=fragment.firstChild.cloneNode(!0),fragment.innerHTML=""),fragment=result.cloneNode(!0),this.scroller._container.insertBefore(fragment,insertBefore),fragment)}.bind(this),totalItems.recycleElement=function(element,index){this.nodePool.push(element);var fn=this.onRecycleElement;fn&&fn(element,index)}.bind(this),layoutAttr=0===layoutAttr.indexOf("horizontal")?"horizontal":"vertical",(layout=new Layout1dGrid({minOverhang:parseInt(this.getAttribute("data-minoverhang")||"0")})).setDirection(layoutAttr),totalItems.setLayout(layout)),totalItems.setTotalItems(itemSource.length,!0)}},{key:"loadItems",value:function(index,signal){var chunkSize=this.virtualChunkSize,chunkStart=index,instance=this;this.fetchItems({StartIndex:chunkStart,Limit:chunkSize,EnableTotalRecordCount:!1},signal).then(function(result){var items=result.Items||result,itemSource=instance._itemSource;if(itemSource)for(var itemSourceMap=instance._itemSourceMap,i=0,length=items.length;i<length;i++){var item,id,itemIndex=chunkStart+i;itemSource[itemIndex]||((id=(item=items[i]).Id)&&(itemSourceMap[id]=itemIndex),itemSource[itemIndex]=item,instance.scroller.updateExistingElement(itemIndex,item))}},function(error){for(var scrollerElement=instance,startIndex=chunkStart,loaders=scrollerElement.dataLoaders.slice(0),i=0,length=loaders.length;i<length;i++){var loader=loaders[i];loader.startIndex===startIndex&&(removeItemOnce(scrollerElement.dataLoaders,loader),loader.destroy())}})}},{key:"scrollToIndex",value:function(index,scrollOptions,setFocus){if(index=Math.min(index,this._itemSource.length-1),setFocus){var item=this.scroller._keyToChild[index];if(item)return void _focusmanager.default.focus(item)}var item=this.scroller,layout=item.getLayout(),rolumns=layout._rolumns,rolumns=Math.floor(index/rolumns),itemDim1=layout._itemDim1(),rolumns=rolumns*itemDim1,posOptions=(setFocus&&(this._focusIndex=index),{});(scrollOptions=scrollOptions||{}).behavior?posOptions.behavior=scrollOptions.behavior:setFocus&&!1!==scrollOptions.forceInstantScroll&&(posOptions.behavior="instant");layout.isVertical?(posOptions.top=rolumns,posOptions.offsetTop=scrollOptions.offsetTop,posOptions.skipWhenVisibleY=scrollOptions.skipWhenVisibleY,posOptions.skipWhenAnyVisibleY=scrollOptions.skipWhenVisibleY&&setFocus&&item.options.focusScroll):(posOptions.left=rolumns,posOptions.offsetLeft=scrollOptions.offsetLeft,posOptions.skipWhenVisibleX=scrollOptions.skipWhenVisibleX,posOptions.skipWhenAnyVisibleX=scrollOptions.skipWhenVisibleX&&setFocus&&item.options.focusScroll),posOptions.itemSize=itemDim1;layout=item._scrollTarget.scrollToPosition(posOptions);return setFocus&&this._focusIndexInternal(layout,index),layout}},{key:"_focusIndexInternal",value:function(promise,index){var instance=this;return promise.then(function(){var newFocusIndex=instance._focusIndex;null!=newFocusIndex&&newFocusIndex!==index||((newFocusIndex=instance.scroller._keyToChild[index])?_focusmanager.default.focus(newFocusIndex):instance._focusIndex=index)})}},{key:"pause",value:function(){var scroller=this.scroller;scroller&&(scroller.paused=!0)}},{key:"resume",value:function(){var scroller=this.scroller;scroller&&scroller.paused&&(scroller.paused=!1,scroller.requestReset(!0))}},{key:"onResized",value:function(){var scroller=this.scroller;scroller&&!scroller.paused&&scroller.requestReset(!0)}},{key:"resetAll",value:function(){cancelDataLoading(this),this.innerHTML="";var scroller=this.scroller;scroller&&(scroller.paused=!0,scroller.destroy()),this.hasVirtualScrollerInit=!1,onInit.call(this)}},{key:"indexOfItemId",value:function(id){var map=this._itemSourceMap;return!map||null==(map=map[id])?-1:map}},{key:"getElement",value:function(index){return this.scroller._keyToChild[index]}},{key:"getItem",value:function(index){return this._itemSource[index]}},{key:"getItemFromElement",value:function(element){element=this.indexOfElement(element);if(0<=element){element=this.getItem(element);if(element)return element}return null}},{key:"indexOfElement",value:function(element){element=element._dataItemIndex;return null==element?-1:element}},{key:"onItemUpdated",value:function(index,item){this._itemSource[index]=item,this._itemSourceMap[item.Id]=index,this.scroller.updateExistingElement(index,item)}},{key:"getActiveItems",value:function(){var scroller=this.scroller,first=scroller._first,last=scroller._last;return{elements:scroller._ordered.slice(0),firstIndex:first,lastIndex:last}}}])}(babelHelpers.wrapNativeSuper(HTMLDivElement));customElements.define("virtual-scroller",supportsContentVisibility,{extends:"div"}),_exports.default=supportsContentVisibility});