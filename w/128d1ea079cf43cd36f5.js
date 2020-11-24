/*! For license information please see 128d1ea079cf43cd36f5.js.LICENSE.txt */
(self.webpackChunkaf_virtual_scroll=self.webpackChunkaf_virtual_scroll||[]).push([[990],{67175:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});const i=(0,s(67294).createContext)()},78611:(t,e,s)=>{"use strict";s.d(e,{Z:()=>w});var i=s(19756),r=s(85893),h=s(67294),o=s(32857),n=s(1531),a=s(26593);const c="a2uMg3Zj4kpPT6J8EoqLx";const d=[s(92549).IC],l=()=>(0,a.Z)((t=>(0,r.jsx)("div",{"aria-hidden":"true",className:c,style:{height:t.widgetScrollHeight}})),d),u="_3Jl24WrVf4wfsfDMBe4LVm",f=t=>{let{className:e,children:s}=t,a=(0,i.Z)(t,["className","children"]);const c=(0,h.useRef)(),d=(0,n.Z)();return(0,h.useEffect)((()=>{const t=c.current;d.setScrollContainerNode(t);const e=new ResizeObserver((t=>{if(1===t.length){const{width:e,height:s}=t[0].contentRect;d.setWidgetDimensions(Math.round(e),Math.round(s))}}));return e.observe(t),()=>e.unobserve(t)}),[]),(0,r.jsxs)("div",Object.assign({},a,{ref:c,tabIndex:"0",className:(0,o.Z)(u,e),ref:c,onScroll:t=>d.setScrollTop(t.target.scrollTop),children:[(0,r.jsx)(l,{}),s]}))},w=(0,h.memo)(f)},98406:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var i=s(85893);const r="_1HtCuT_dRO5NkFdxciGGTx";var h=s(26593);const o=[s(92549).a1],n=({as:t})=>(0,h.Z)((e=>(0,i.jsx)(t,{className:r,"aria-hidden":"true",style:{height:e.virtualTopOffset}})),o)},92549:(t,e,s)=>{"use strict";s.d(e,{Vd:()=>i,wN:()=>r,mW:()=>h,XW:()=>o,R9:()=>n,V9:()=>a,EE:()=>c,a1:()=>d,IC:()=>l,HT:()=>u,nV:()=>f,k_:()=>w});const i=0,r=1,h=2,o=3,n=4,a=5,c=6,d=7,l=8,u=9,f=10,w=11},1531:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var i=s(67294),r=s(67175);const h=()=>(0,i.useContext)(r.Z)},55089:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var i=s(67294);const r=(t,e,s,r,h,o)=>{const n=(0,i.useRef)();let a=n.current;return a instanceof t||(a=n.current=new t),e&&(e.current=a),a.startBatch().setViewParams(s,r,h,o),(0,i.useEffect)((()=>{a.endBatch()})),(0,i.useEffect)((()=>()=>a.destructor()),[a]),a}},26593:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var i=s(67294);const r=t=>t+1,h=()=>(0,i.useReducer)(r,0)[1];var o=s(1531);const n=(t,e)=>{const s=(0,i.useRef)(null),r=(0,o.Z)(),n=h();return(0,i.useEffect)((()=>(r.on(n,...e),()=>r.off(n,...e))),e),r.inBatch?r.queue(n):s.current=t(r),s.current}},73462:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var i=s(61386),r=s(26182),h=s(92549);class o extends i.Z{setRowHeight(t){t!==this.rowHeight&&(this.rowHeight=t,this.emit(h.nV))}constructor(){super(),this.rowHeight=0,this.updateRowHeightThrottled=(0,r.Z)(this.updateRowHeight,200,this),this.on(this.updateRowHeightThrottled,h.V9,h.EE,h.HT,h.XW)}destructor(){this.updateRowHeightThrottled.cancel(),super.destructor()}getIndex(t){return this.rowHeight&&Math.floor(t/this.rowHeight)}getOffset(t){return t*this.rowHeight}updateRowHeight(){if(this.rowsContainerNode&&this.rowsQuantity){const{firstElementChild:t}=this.rowsContainerNode;t&&this.setRowHeight(t.offsetHeight)}else this.setRowHeight(this.estimatedRowHeight)}}const n=o},61386:(t,e,s)=>{"use strict";s.d(e,{Z:()=>h});var i=s(92549);const r=class{constructor(){this._E=Array.from({length:i.k_},(()=>[])),this._Q=new Set,this.inBatch=0}_on(t,e,s){const i=s?Array.prototype.unshift:Array.prototype.push;for(let s of e)i.call(this._E[s],t);return this}on(t,...e){return this._on(t,e,!1)}prependListener(t,...e){return this._on(t,e,!0)}destructor(){for(let t of this._E)t.splice(0);this._Q.clear()}off(t,...e){for(let s of e)this._E[s].splice(this._E[s].indexOf(t)>>>0,1);return this}queue(t){this._Q.add(t)}emit(t){if(this.inBatch)for(let e of this._E[t])this._Q.add(e);else for(let e of this._E[t])e.call(this);return this}startBatch(){return this.inBatch++,this}endBatch(){if(!--this.inBatch){for(let t of this._Q)t.call(this);this._Q.clear()}return this}};const h=class extends r{setScrollContainerNode(t){this.scrollContainerNode=t}setScrollTop(t){t!==this.scrollTop&&(this.scrollTop=t,this.startBatch().emit(i.mW).endBatch())}constructor(){super(),this.scrollTop=0,this.rowsQuantity=0,this.overscanRowsCount=0,this.widgetHeight=0,this.widgetWidth=0,this.estimatedRowHeight=0,this.rowsContainerNode=null,this.scrollContainerNode=null,this.startIndex=0,this.endIndex=0,this.virtualTopOffset=0,this.widgetScrollHeight=0,this.on(this.updateWidgetScrollHeight,i.nV,i.XW).on(this.updateStartIndex,i.mW,i.nV,i.R9).on(this.updateEndIndex,i.XW,i.mW,i.EE,i.R9,i.nV).on(this.updateVirtualTopOffset,i.Vd,i.nV)}scrollToRow(t){this.scrollContainerNode&&(this.scrollContainerNode.scrollTop=this.getOffset(t))}updateStartIndex(){const t=Math.max(0,this.getIndex(this.scrollTop)-this.overscanRowsCount);t!==this.startIndex&&(this.startIndex=t,this.emit(i.Vd))}updateEndIndex(){const t=Math.min(this.rowsQuantity,this.getIndex(this.scrollTop+this.widgetHeight)+this.overscanRowsCount);t!==this.endIndex&&(this.endIndex=t,this.emit(i.wN))}updateVirtualTopOffset(){const t=this.getOffset(this.startIndex);t!==this.virtualTopOffset&&(this.virtualTopOffset=t,this.emit(i.a1))}updateWidgetScrollHeight(){const t=this.getOffset(this.rowsQuantity);t!==this.widgetScrollHeight&&(this.widgetScrollHeight=t,this.emit(i.IC))}setWidgetDimensions(t,e){this.startBatch(),t!==this.widgetWidth&&(this.widgetWidth=t,this.emit(i.V9)),e!==this.widgetHeight&&(this.widgetHeight=e,this.emit(i.EE)),this.endBatch()}setViewParams(t,e,s,r){this.estimatedRowHeight=t,this.startBatch(),e!==this.overscanRowsCount&&(this.overscanRowsCount=e,this.emit(i.R9)),s!==this.rowsQuantity&&(this.rowsQuantity=s,this.emit(i.XW)),r!==this.rowsContainerNode&&(this.rowsContainerNode=r,this.emit(i.HT)),this.endBatch()}}},16336:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});var i=s(61386),r=s(26182),h=s(92549);class o extends i.Z{constructor(){super(),this.rowHeights=[],this.fTree=[],this.msb=0,this.updateRowHeightsThrottled=(0,r.Z)(this.updateRowHeights,200,this),this.prependListener(this.grow,h.XW).prependListener(this.updateMsb,h.XW).on(this.updateRowHeightsThrottled,h.HT,h.V9,h.Vd,h.wN)}destructor(){this.updateRowHeightsThrottled.cancel(),super.destructor()}updateMsb(){this.msb=1<<31-Math.clz32(this.rowsQuantity)}grow(){const{rowsQuantity:t}=this,e=this.rowHeights.length;if(t>e){const s=this.rowHeights;if(this.rowHeights=new Uint32Array(t),this.fTree=new Uint32Array(t+1),e){this.rowHeights.set(s),this.rowHeights.fill(this.estimatedRowHeight,e),this.fTree.set(this.rowHeights,1);for(let e,s=1;s<=t;s++)e=s+(s&-s),e<=t&&(this.fTree[e]+=this.fTree[s]);this.emit(h.nV)}else this.resetCachedHeights()}}resetCachedHeights(t=this.estimatedRowHeight){this.rowHeights.fill(t);for(let e=1;e<=this.rowsQuantity;e++)this.fTree[e]=t*(e&-e);this.emit(h.nV)}getIndex(t){let e=0;for(let s,i=this.msb;i;i>>=1)if(s=e+i,!(s>this.rowsQuantity)){if(t===this.fTree[s])return s;t>this.fTree[s]&&(e=s,t-=this.fTree[e])}return e}getOffset(t){let e=0;for(;t>0;t-=t&-t)e+=this.fTree[t];return e}updateRowHeight(t,e){for(;t<=this.rowsQuantity;t+=t&-t)this.fTree[t]+=e}updateRowHeights(){const t=this.rowsContainerNode;if(t){let e,s=this.startIndex,i=!1;for(let r of t.children)e=r.offsetHeight-this.rowHeights[s],e&&(i=!0,this.rowHeights[s]+=e,this.updateRowHeight(s+1,e)),s++;i&&this.emit(h.nV)}}}const n=o},32857:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});const i=(t,e)=>e?t+" "+e:t},26182:(t,e,s)=>{"use strict";s.d(e,{Z:()=>i});const i=(t,e,s)=>{let i=0;const r=()=>{i=0,t.call(s)},h=()=>{0===i&&(i=setTimeout(r,e))};return h.cancel=()=>{clearTimeout(i),i=0},h}}}]);
//# sourceMappingURL=128d1ea079cf43cd36f5.js.map