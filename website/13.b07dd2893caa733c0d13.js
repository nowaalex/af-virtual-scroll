/*! For license information please see 13.b07dd2893caa733c0d13.js.LICENSE.txt */
(window.Z=window.Z||[]).push([[13],{1276:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(33),i=n(32),s=n(31),a=(n(7),Object(r.createContext)()),c=function(e,t){var n=Object(r.useRef)(),o=n.current;return o&&o instanceof e||(o=n.current=new e),t&&(t.current=o),Object(r.useEffect)((function(){return function(){o.destructor()}}),[o]),o},l=n(42),u=(n(40),n(38),n(39)),d=n(90),h=n.n(d),f=function(){function e(){this._T=Object.create(null)}var t=e.prototype;return t._a=function(e,t,n,r){var o=this._T[e];if(r){var i=this,s=t;t=function(){s.apply(i.off(e,t),arguments)}}return o||(o=this._T[e]=[]),o[n?"unshift":"push"](t),this},t.on=function(e,t){return this._a(e,t,!1,!1)},t.prependListener=function(e,t){return this._a(e,t,!0,!1)},t.prependOnceListener=function(e,t){return this._a(e,t,!0,!0)},t.once=function(e,t){return this._a(e,t,!1,!0)},t.off=function(e,t){var n=this._T[e];if(n){var r=n.indexOf(t);-1!==r&&n.splice(r,1)}return this},t.emit=function(e,t,n,r,o){var i=this._T[e];if(i){for(var s,a,c,l=0,u=arguments.length;l<i.length;l++)switch(a=i[l],u){case 1:a.call(this);break;case 2:a.call(this,t);break;case 3:a.call(this,t,n);break;case 4:a.call(this,t,n,r);break;case 5:a.call(this,t,n,r,o);break;default:if(!c)for(s=1,c=new Array(u-1);s<u;s++)c[s-1]=arguments[s];a.apply(this,c)}return!0}return!1},t.removeAllListeners=function(e){return e?this._T[e]=[]:this._T=Object.create(null),this},e}();f.prototype.removeListener=f.prototype.off,f.prototype.addListener=f.prototype.on;var w=f,g=n(48),p=n.n(g);var b=function(){throw new Error("getRowData must be provided")},v=function(e){Object(u.a)(r,e);t=r;var t,n=r.prototype;function r(){var t;return(t=e.call(this)||this).totalRows=0,t.startIndex=0,t.endIndex=0,t.virtualTopOffset=0,t.widgetScrollHeight=0,t.overscanRowsCount=0,t.estimatedRowHeight=16,t.scrollTop=0,t.widgetHeight=0,t.widgetWidth=0,t.rowKeyGetter=void 0,t.rowDataGetter=b,t.rowsContainerNode=null,t.scrollContainerNode=null,t.increaseEndIndexIfNeeded=p()((function(){var e=t.getDistanceBetweenIndexes(t.startIndex,t.endIndex);return t.widgetHeight>t.virtualTopOffset+e-t.scrollTop&&t.updateEndIndex(),Object(l.a)(t)}),400),t.on("#totalRows",t.updateWidgetScrollHeight).on("#totalRows",t.updateEndIndex).on("#widgetScrollHeight",t.increaseEndIndexIfNeeded).on("#endIndex",t.increaseEndIndexIfNeeded.cancel).on("#scrollTop",t.updateStartOffset).on("#overscanRowsCount",t.updateStartOffset).on("#widgetHeight",t.updateEndIndex).on("#startIndex",t.updateEndIndex),t}return n.set=function(e,t){return this[e]!==t&&(this[e]=t,this.emit("#"+e)),this},n.merge=function(e){for(var t in e)this.set(t,e[t]);return this},n.destructor=function(){this.increaseEndIndexIfNeeded.cancel(),this.removeAllListeners()},n.reportRowsRendered=function(){this.emit("rows-rendered")},n.updateStartOffset=function(){var e=this.scrollTop,t=this.overscanRowsCount,n=this.getVisibleRangeStart(e),r=n[0],o=n[1],i=Math.max(0,r-t),s=this.getDistanceBetweenIndexes(i,r);return this.set("virtualTopOffset",e-o-s).set("startIndex",i)},n.updateEndIndex=function(){var e=this.getVisibleRangeStart(this.scrollTop+this.widgetHeight)[0];return this.set("endIndex",Math.min(e+1+this.overscanRowsCount,this.totalRows))},n.scrollToRow=function(e){var t=this.scrollContainerNode;return t&&(e=h()(e,0,this.totalRows),t.scrollTop=this.getDistanceBetweenIndexes(0,e)),this},n.scrollToStart=function(){return this.scrollToRow(0)},r}(w);var R=Uint32Array,m=new R(2),O=function(e){Object(u.a)(r,e);t=r;var t,n=r.prototype;function r(){var t;return(t=e.call(this)||this).sTree=m,t.N=0,t.shouldResetInvisibleRowHeights=!0,t.setVisibleRowsHeights=p()((function(){var e=t.rowsContainerNode;if(e){for(var n,r,o=Object(l.a)(t),i=o.sTree,s=o.N,a=-1,c=-1,u=0,d=0,h=e.firstElementChild;h;h=h.nextElementSibling,d++)r=parseInt(h.getAttribute("aria-rowindex"),10)-1,u+=n=h.offsetHeight,i[s+r]!==n&&(i[s+r]=n,-1===a&&(a=r),c=r);-1!==a&&(t.shouldResetInvisibleRowHeights?(t.set("estimatedRowHeight",Math.round(u/d)),t.shouldResetInvisibleRowHeights=!1):t.calculateParentsInRange(a,c).updateWidgetScrollHeight())}return Object(l.a)(t)}),50,{maxWait:150}),t.prependListener("#totalRows",t.resetMeasurementsCache).on("#estimatedRowHeight",t.resetMeasurementsCache).on("#estimatedRowHeight",t.updateWidgetScrollHeight).on("rows-rendered",t.setVisibleRowsHeights).on("#widgetWidth",t.markResetInvisibleRowHeights).on("#widgetWidth",t.setVisibleRowsHeights),t}return n.markResetInvisibleRowHeights=function(){this.shouldResetInvisibleRowHeights=!0},n.updateWidgetScrollHeight=function(){return this.set("widgetScrollHeight",this.sTree[1])},n.calculateParentsInRange=function(e,t){var n=this.sTree,r=this.N;for(t+=r,e+=r;t>>=1;)for(var o=e>>=1;o<=t;o++)n[o]=n[o<<1]+n[o<<1|1];return this},n.getVisibleRangeStart=function(e){for(var t,n=this.sTree,r=this.N,o=1;o<r;)e>=(t=n[o<<=1])&&(e-=t,o|=1);return[o-r,e]},n.resetMeasurementsCache=function(){var e=this.totalRows;if(e){var t=this.estimatedRowHeight,n=this.sTree,r=this.N;if(e>r)r=this.N=Math.pow(2,Math.ceil(Math.log2(e+32))),n=this.sTree=new R(2*r);else{var o=n[0];e!==o&&n.fill(0,2,r+Math.max(e,o)>>1)}n.fill(t,r,r+e),this.calculateParentsInRange(0,e)}else this.sTree=m;return this},n.destructor=function(){this.setVisibleRowsHeights.cancel(),e.prototype.destructor.call(this)},n.getDistanceBetweenIndexes=function(e,t){var n=this.sTree,r=this.N,o=0;for(e+=r,t+=r;e<t;e>>=1,t>>=1)1&e&&(o+=n[e++]),1&t&&(o+=n[--t]);return o},r}(v);var j=function(e){Object(u.a)(r,e);t=r;var t,n=r.prototype;function r(){var t;return(t=e.call(this)||this).on("#estimatedRowHeight",t.updateWidgetScrollHeight).on("#widgetWidth",t.updateEstimatedRowHeight),t}return n.updateWidgetScrollHeight=function(){return this.set("widgetScrollHeight",this.estimatedRowHeight*this.totalRows)},n.updateEstimatedRowHeight=function(){var e=this.rowsContainerNode;e&&(e.firstElementChild&&this.set("estimatedRowHeight",e.firstElementChild.offsetHeight))},n.getVisibleRangeStart=function(e){var t=this.estimatedRowHeight;return[e/t|0,e%t]},n.getDistanceBetweenIndexes=function(e,t){return this.estimatedRowHeight*(t-e)},r}(v),x=n(92),C=function(e){return e+1},I=function(e){var t=Object(r.useContext)(a),n=Object(r.useReducer)(C,0)[1];return Object(r.useLayoutEffect)((function(){for(var r=0;r<e.length;r++)t.on(e[r],n);return function(){for(var r=0;r<e.length;r++)t.off(e[r],n)}}),e),t},H=n(1);var y=["#widgetScrollHeight"],T=Object(s.a)({name:"18yz6zz-heightProviderClass",styles:"position:absolute;top:0;left:0;visibility:hidden;width:1px;;label:heightProviderClass;"}),S=Object(H.c)("div",{"aria-hidden":"true",className:T}),N=Object(r.memo)((function(){var e={style:{height:I(y).widgetScrollHeight}};return Object(r.cloneElement)(S,e)}));var E=[],W=Object(s.a)({name:"13rh01w-scrollContainerClass",styles:"overflow:auto;outline:none;min-height:0;flex:1 1 auto;position:relative;;label:scrollContainerClass;"}),D=Object(r.forwardRef)((function(e,t){var n=e.className,a=e.children,c=e.onScroll,l=e.reportScrollLeft,u=Object(i.a)(e,["className","children","onScroll","reportScrollLeft"]),d=I(E),h=Object(r.useCallback)((function(e){var t=e.target,n=t.scrollTop,r=t.scrollLeft;d.set("scrollTop",n),l&&d.set("scrollLeft",r),c&&c(e)}),[c,l]),f=Object(r.useCallback)((function(e){var t=e.width,n=e.height;d.set("widgetHeight",n).set("widgetWidth",t)}),[]);return Object(x.a)({ref:t,onResize:f}),Object(H.c)("div",Object(o.a)({tabIndex:"0",className:Object(s.b)(W,n),ref:t,onScroll:h},u),Object(H.c)(N,null),a)})),P=function(e,t,n){var r={"aria-rowindex":t+1};if(n){var o=n(e,t);o&&Object.assign(r,o)}return r},L=function(e){var t=e.getRowData,n=e.getRowExtraProps,r=e.rowIndex,o=t(r);return Object(H.c)("div",P(o,r,n),o)};L.propTypes={};var _=L,k=["#startIndex","#endIndex","#rowKeyGetter","#rowDataGetter"],M=function(e){var t=e.getRowExtraProps,n=e.RowComponent,o=I(k);return Object(r.useEffect)((function(){o.reportRowsRendered()})),function(e,t,n,r,o,i){for(var s,a=[];e<t;e++)s=r?r(e):e,a.push(Object(H.c)(i,{getRowExtraProps:o,rowIndex:e,key:s,getRowData:n}));return a}(o.startIndex,o.endIndex,o.rowDataGetter,o.rowKeyGetter,t,n)},V=["#virtualTopOffset"],z=Object(r.memo)((function(e){var t=e.Component,n=I(V).virtualTopOffset;return Object(H.c)(t,{"aria-hidden":"true",style:{height:n,visibility:"hidden"}})}));var G=Object(s.a)({name:"bua8iw-wrapperClass",styles:"flex:1 1 auto;overflow:hidden;display:flex;justify-content:center;align-items:center;;label:wrapperClass;"}),K=function(e){var t=e.className,n=Object(i.a)(e,["className"]);return Object(H.c)("div",Object(o.a)({className:Object(s.b)(G,t)},n))},A={fixedSize:!1,rowCount:0,overscanRowsCount:4};var B=Object(s.a)({name:"wl3ryj-wrapperClass",styles:"min-height:0;flex:1 1 auto;*{box-sizing:border-box;};label:wrapperClass;"}),Z=function(e){var t=e.fixedSize,n=e.getRowData,s=e.getRowKey,l=e.getRowExtraProps,u=e.rowCount,d=e.overscanRowsCount,h=e.rowCountWarningsTable,f=e.RowCountWarningContainer,w=e.RowComponent,g=void 0===w?_:w,p=e.dataRef,b=Object(i.a)(e,["fixedSize","getRowData","getRowKey","getRowExtraProps","rowCount","overscanRowsCount","rowCountWarningsTable","RowCountWarningContainer","RowComponent","dataRef"]),v=Object(r.useRef)(),R=Object(r.useRef)(),m=c(t?j:O,p);return Object(r.useEffect)((function(){m.merge({rowDataGetter:n,rowKeyGetter:s,overscanRowsCount:d,totalRows:u,rowsContainerNode:R.current,scrollContainerNode:v.current})})),Object(H.c)(a.Provider,{value:m},u>0?Object(H.c)(D,Object(o.a)({className:B,ref:v},b),Object(H.c)(z,{Component:"div"}),Object(H.c)("div",{ref:R},Object(H.c)(M,{RowComponent:g,getRowExtraProps:l}))):h?Object(H.c)(f,null,h[u]):null)};Z.propTypes={},Z.defaultProps=Object.assign({},A,{RowComponent:Object(r.memo)(_),RowCountWarningContainer:K});var U=Object(r.memo)(Z),q=n(36),F=n.n(q),J=n(44);var Q={name:"aro5ig-wrapperCss",styles:"display:flex;flex-flow:column nowrap;;label:wrapperCss;"},X=n.n(J)()(1e5,(function(){return F()(50,250)})),Y=function(e){return Object(H.c)("div",{style:{lineHeight:X[e]+"px",borderTop:"1px solid #666",background:"hsl("+F()(0,360)+","+F()(30,80)+"%,"+F()(30,80)+"%)"}},"row",e,": ",X[e],"px")};t.default=function(e){var t=e.className,n=Object(r.useRef)();return Object(H.c)("div",{css:Q,className:t},Object(H.c)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.scrollRow.value;n.current.scrollToRow(+t)}},Object(H.c)("label",null,"Row: ",Object(H.c)("input",{name:"scrollRow",type:"number",defaultValue:"0"})),Object(H.c)("button",{type:"submit"},"Scroll")),Object(H.c)(U,{dataRef:n,getRowData:Y,rowCount:1e5}))}},43:function(e,t,n){var r=n(54);e.exports=function(e){return e?(e=r(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},74:function(e,t){e.exports=function(e){return e}},75:function(e,t,n){var r=n(43);e.exports=function(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}}}]);
//# sourceMappingURL=sm.13.8a89a77171a6bb41b5509e35dec04df7.map