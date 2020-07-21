/*! For license information please see This library.1f53be9c211b39e75f9b.js.LICENSE.txt */
(window.Z=window.Z||[]).push([[0],{34:function(t,e,r){},42:function(t,e,r){"use strict";var o,n,i,s=r(12),a=r(13),c=r(0),u=r.n(c),l=(r(7),Object(c.createContext)()),h=function(t,e,r){var o=Object(c.useRef)(),n=Object(c.useRef)(),i=Object(c.useRef)(),s=i.current;return s&&s instanceof t||(s=i.current=new t),e&&(e.current=s),Object(c.useLayoutEffect)((function(){s.merge(Object.assign({},r,{rowsContainerNode:n.current,scrollContainerNode:o.current}))})),Object(c.useEffect)((function(){return function(){s.destructor()}}),[s]),[s,o,n]},f=r(9),d=r(8),g=r(2),w=(r(43),r(44),r(41),function(){function t(t){this.parent=t}return Object(d.a)(t,[{key:"visibleRowCount",get:function(){return this.parent.rows.length}}]),t}()),p=function(t){return function(t){function e(){return t.call(this,w)||this}return Object(f.a)(e,t),e}(t)},b=r(24),v=r(6),R=r(39),m=r.n(R),O=function(){throw new Error("getRowData must be provided")},y=(o=function(){var t=e.prototype;function e(t){Object(g.extendObservable)(this,{rows:[],overscanRowsCount:0,estimatedRowHeight:0,scrollLeft:0,scrollTop:0,widgetHeight:0,widgetWidth:0,getRowKey:void 0,getRowData:O,rowsContainerNode:null,scrollContainerNode:null},{rowsContainerNode:g.observable.ref,scrollContainerNode:g.observable.ref}),this.Rows=new t(this)}return t.merge=function(t){Object.assign(this,t)},Object(d.a)(e,[{key:"visibleRangeStart",get:function(){return this.getVisibleRangeStart(this.scrollTop)}},{key:"startIndex",get:function(){if(!this.estimatedRowHeight)return 0;var t=this.visibleRangeStart[0];return Math.max(0,t-this.overscanRowsCount)}},{key:"endIndex",get:function(){if(!this.estimatedRowHeight)return 0;var t=this.getVisibleRangeStart(this.scrollTop+this.widgetHeight)[0];return Math.min(t+1+this.overscanRowsCount,this.Rows.visibleRowCount)}},{key:"virtualTopOffset",get:function(){var t=this.visibleRangeStart,e=t[0],r=t[1],o=this.getDistanceBetweenIndexes(this.startIndex,e);return this.scrollTop-r-o}}]),t.destructor=function(){},t.scrollToRow=function(t){var e=this.scrollContainerNode;return e&&(e.scrollTop=this.getDistanceBetweenIndexes(0,m()(t,0,this.Rows.visibleRowCount))),this},t.scrollToStart=function(){return this.scrollToRow(0)},e}(),Object(v.a)(o.prototype,"visibleRangeStart",[g.computed],Object.getOwnPropertyDescriptor(o.prototype,"visibleRangeStart"),o.prototype),Object(v.a)(o.prototype,"startIndex",[g.computed],Object.getOwnPropertyDescriptor(o.prototype,"startIndex"),o.prototype),Object(v.a)(o.prototype,"endIndex",[g.computed],Object.getOwnPropertyDescriptor(o.prototype,"endIndex"),o.prototype),Object(v.a)(o.prototype,"virtualTopOffset",[g.computed],Object.getOwnPropertyDescriptor(o.prototype,"virtualTopOffset"),o.prototype),Object(v.a)(o.prototype,"merge",[g.action],Object.getOwnPropertyDescriptor(o.prototype,"merge"),o.prototype),o),j=function(){function t(t){this.minCacheOffset=t||15,this.cacheSize=0,this.N=0,this.cache=new Uint32Array(1),this.l=1/0,this.r=-1/0}var e=t.prototype;return e.reallocateIfNeeded=function(t,e){var r=this.cacheSize;if(t!==r){this.cacheSize=t;var o=2<<Math.log2(t,this.minCacheOffset);o!==this.N?(this.N=o,this.cache=new Uint32Array(o<<1)):r>t&&this.cache.fill(0,o+t,o+r)}this.reset(e)},e.reset=function(t){var e=this.cache,r=this.N,o=this.cacheSize;e.fill(t,r,r+o),this.calculateParentsInRange(0,o)},e.calculateParentsInRange=function(t,e){var r=this.cache,o=this.N;for(e+=o,t+=o;e>>=1;)for(var n=t>>=1;n<=e;n++)r[n]=r[n<<1]+r[n<<1|1]},e.set=function(t,e){var r=this.cache,o=this.N;r[o+t]!==e&&(r[o+t]=e,this.l=Math.min(this.l,t),this.r=Math.max(this.r,t))},e.flush=function(){var t=this.l,e=this.r;return!!Number.isFinite(t)&&(this.calculateParentsInRange(t,e),this.l=1/0,this.r=-1/0,!0)},e.getStartPositionForSum=function(t){for(var e,r=this.cache,o=this.N,n=1;n<o;)t>=(e=r[n<<=1])&&(t-=e,n|=1);return[n-o,t]},e.getDistanceBetweenIndexes=function(t,e){var r=this.cache,o=this.N,n=0;for(t+=o,e+=o;t<e;t>>=1,e>>=1)1&t&&(n+=r[t++]),1&e&&(n+=r[--e]);return n},Object(d.a)(t,[{key:"total",get:function(){return this.cache[1]}}]),t}(),C=p((n=function(t){Object(f.a)(r,t);var e=r.prototype;function r(e){var r;return(r=t.call(this,e)||this).rowsDomObserver=new MutationObserver((function(){return Object(g.runInAction)((function(){r.lastRowsRenderTimeStamp=performance.now()}))})),r.disposeCallbacks=[],r.sTree=new j,Object(g.extendObservable)(Object(b.a)(r),{widgetScrollHeight:0,lastRowsRenderTimeStamp:0,shouldResetInvisibleRowHeights:!0}),r.disposeCallbacks.push(Object(g.autorun)((function(){r.sTree.reallocateIfNeeded(r.rows.length&&r.Rows.visibleRowCount,r.estimatedRowHeight),r.syncWidgetScrollHeight()})),Object(g.autorun)((function(){r.widgetWidth&&r.merge({shouldResetInvisibleRowHeights:!0})}),{delay:200}),Object(g.autorun)((function(){r.rowsDomObserver.disconnect(),r.rowsContainerNode&&r.rowsDomObserver.observe(r.rowsContainerNode,{childList:!0,subtree:!0})})),Object(g.autorun)((function(){var t=r.rowsContainerNode;if(t&&r.lastRowsRenderTimeStamp){for(var e,o,n=Object(b.a)(r).sTree,i=0,s=0,a=t.firstElementChild;a;a=a.nextElementSibling,s++)o=parseInt(a.getAttribute("aria-rowindex"),10)-1,i+=e=a.offsetHeight,n.set(o,e);r.shouldResetInvisibleRowHeights?r.merge({estimatedRowHeight:Math.round(i/s),shouldResetInvisibleRowHeights:!1}):n.flush()&&r.syncWidgetScrollHeight()}}),{delay:200})),r}return e.syncWidgetScrollHeight=function(){this.widgetScrollHeight=this.sTree.total},e.getVisibleRangeStart=function(t){var e=this.widgetScrollHeight,r=this.estimatedRowHeight,o=this.sTree;return e&&r?o.getStartPositionForSum(t):[0,0]},e.destructor=function(){this.disposeCallbacks.forEach((function(t){return t()})),t.prototype.destructor.call(this)},e.getDistanceBetweenIndexes=function(t,e){return this.estimatedRowHeight?this.sTree.getDistanceBetweenIndexes(t,e):0},r}(y),Object(v.a)(n.prototype,"syncWidgetScrollHeight",[g.action],Object.getOwnPropertyDescriptor(n.prototype,"syncWidgetScrollHeight"),n.prototype),n)),S=p((i=function(t){function e(e){var r;return(r=t.call(this,e)||this).dispose=Object(g.autorun)((function(){if(r.widgetWidth){var t=r.rowsContainerNode;if(t){var e=t.firstElementChild;e&&(r.estimatedRowHeight=e.offsetHeight)}}}),{delay:200}),r}Object(f.a)(e,t);var r=e.prototype;return r.desctructor=function(){this.dispose(),t.prototype.destructor.call(this)},r.getVisibleRangeStart=function(t){var e=this.estimatedRowHeight;return e?[t/e|0,t%e]:[0,0]},r.getDistanceBetweenIndexes=function(t,e){return this.estimatedRowHeight*(e-t)},Object(d.a)(e,[{key:"widgetScrollHeight",get:function(){return this.estimatedRowHeight*this.Rows.visibleRowCount}}]),e}(y),Object(v.a)(i.prototype,"widgetScrollHeight",[g.computed],Object.getOwnPropertyDescriptor(i.prototype,"widgetScrollHeight"),i.prototype),i)),x=function(t,e){return e?t+" "+e:t},H=function(){return Object(c.useContext)(l)},N=r(10),I=u.a.createElement("div",{"aria-hidden":"true",className:"afvscr-height-provider"}),E=Object(N.a)((function(){return Object(c.cloneElement)(I,{style:{height:H().widgetScrollHeight}})})),T=Object(c.forwardRef)((function(t,e){var r=t.className,o=t.children,n=t.onScroll,i=Object(a.a)(t,["className","children","onScroll"]),l=H(),h=Object(c.useCallback)((function(t){var e=t.target,r=e.scrollTop,o=e.scrollLeft;l.merge({scrollLeft:o,scrollTop:r}),n&&n(t)}),[n]);return Object(c.useEffect)((function(){var t=e.current,r=new ResizeObserver((function(t){if(1===t.length){var e=t[0].target,r=e.offsetWidth,o=e.offsetHeight;l.merge({widgetHeight:Math.round(o),widgetWidth:Math.round(r)})}}));return r.observe(t),function(){r.unobserve(t)}}),[]),u.a.createElement("div",Object(s.a)({tabIndex:"0",className:x("afvscr-scroll-container",r),ref:e,onScroll:h},i),u.a.createElement(E,null),o)})),D=function(t){return function(e,r,o,n){var i,s=((i={})[t]=r+1,i);if(n){var a=n(e,r,o);a&&Object.assign(s,a)}return s}},P=D("aria-rowindex"),k=(D("aria-colindex"),function(t){var e=t.getRowData,r=t.getRowExtraProps,o=t.rowIndex,n=e(o);return u.a.createElement("div",P(n,o,o,r),n)});k.propTypes={};var W=k,M=Object(N.a)((function(t){var e=t.getRowExtraProps,r=t.RowComponent,o=H();return function(t,e,r,o,n,i){for(var s,a=[];t<e;t++)s=o?o(t):t,a.push(u.a.createElement(i,{getRowExtraProps:n,rowIndex:t,key:s,getRowData:r}));return a}(o.startIndex,o.endIndex,o.getRowData,o.getRowKey,e,r)})),z=Object(N.a)((function(t){var e=t.Component,r=H().virtualTopOffset;return u.a.createElement(e,{className:"afvscr-scroller","aria-hidden":"true",style:{height:r}})})),B={fixedSize:!1,rows:[],overscanRowsCount:4,estimatedRowHeight:16},K=function(t){var e=t.fixedSize,r=t.getRowData,o=t.getRowKey,n=t.getRowExtraProps,i=t.estimatedRowHeight,c=t.rows,f=t.overscanRowsCount,d=t.RowComponent,g=void 0===d?W:d,w=t.dataRef,p=t.className,b=Object(a.a)(t,["fixedSize","getRowData","getRowKey","getRowExtraProps","estimatedRowHeight","rows","overscanRowsCount","RowComponent","dataRef","className"]),v=h(e?S:C,w,{getRowData:r,getRowKey:o,overscanRowsCount:f,estimatedRowHeight:i,rows:c}),R=v[0],m=v[1],O=v[2];return u.a.createElement(l.Provider,{value:R},u.a.createElement(T,Object(s.a)({className:x("afvscr-list-wrapper",p),ref:m},b),u.a.createElement(z,{Component:"div"}),u.a.createElement("div",{ref:O},u.a.createElement(M,{RowComponent:g,getRowExtraProps:n}))))};K.propTypes={},K.defaultProps=Object.assign({},B,{RowComponent:Object(c.memo)(W)});e.a=Object(c.memo)(K)}}]);
//# sourceMappingURL=sm.This library.2544e2708751fb6601b17290b7b15f34.map