define(["exports"],function(_exports){Object.defineProperty(_exports,"__esModule",{value:!0}),_exports.default=void 0;var skinHeaderElement=document.querySelector(".skinHeader");function AppHeaderContent(){}AppHeaderContent.prototype.ensureSizeObserver=function(){this.resizeObserver||(this.resizeObserver=new ResizeObserver(function(){this._headerHeight=null}.bind(this),{}),this.resizeObserver.observe(skinHeaderElement))},AppHeaderContent.prototype.getHeight=function(){var height=this._headerHeight;return null==height&&(height=skinHeaderElement.offsetHeight,console.log("header height : "+height),height&&(this._headerHeight=height),this.ensureSizeObserver()),height};_exports.default=new AppHeaderContent});