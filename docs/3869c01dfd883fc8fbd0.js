/*! For license information please see 3869c01dfd883fc8fbd0.js.LICENSE.txt */
(self.webpackChunkaf_virtual_scroll=self.webpackChunkaf_virtual_scroll||[]).push([[108],{14108:(e,r,t)=>{"use strict";t.d(r,{Z:()=>w});var l=t(19756),s=t(67294),a=(t(45697),t(32857)),n=t(90975),o=t(24178),d=t(36365);const c=({model:e,children:r})=>{const[t,l]=(0,s.useState)();return(0,s.useEffect)((()=>{if(t&&e){let r=0;return(0,d.N)(t,(t=>{e.updateExtraStickyHeight(t-r),r=t})),()=>{(0,d.p)(t),e.updateExtraStickyHeight(-r)}}}),[t,e]),(0,s.cloneElement)(r,{ref:l})};var i=t(85893);const h=({columns:e})=>(0,i.jsx)("colgroup",{children:e.map((({dataKey:e,background:r,border:t,width:l})=>(0,i.jsx)("col",{style:{width:l,background:r,border:t}},e)))}),u=(0,s.memo)(h),m="_3xHZ6hLxyHZ-v8LLU1YA7y",x="_3VNLkND9VRhxpdmzEGLiXt",p=e=>{let{columns:r,getRowData:t,getRowProps:s,renderRow:d,Row:h,renderHeaderCells:p,renderTfootContent:w,Cell:j,headless:g,className:f}=e,R=(0,l.Z)(e,["columns","getRowData","getRowProps","renderRow","Row","renderHeaderCells","renderTfootContent","Cell","headless","className"]);return(0,i.jsx)(o.Z,Object.assign({className:(0,a.Z)(m,f)},R,{children:e=>(0,i.jsxs)("table",{className:x,children:[(0,i.jsx)(u,{columns:r}),g?null:(0,i.jsx)(c,{model:e,children:(0,i.jsx)("thead",{children:(0,i.jsx)("tr",{children:p(r)})})}),(0,i.jsx)("tbody",{children:(0,i.jsx)(n.Z,{model:e,Spacer:"tr",columns:r,getRowData:t,getRowProps:s,Row:h,Cell:j,children:d})}),w?(0,i.jsx)(c,{model:e,children:(0,i.jsx)("tfoot",{children:w(r)})}):null]})}))};p.defaultProps={headless:!1,renderRow:(e,r)=>(0,i.jsx)(r.Row,Object.assign({index:e},r),e),Row:({index:e,columns:r,getRowData:t,getRowProps:l,Cell:s})=>{const a=t(e);return(0,i.jsx)("tr",Object.assign({},a&&l&&l(a,e),{children:a?r.map((e=>(0,i.jsx)("td",{children:(0,i.jsx)(s,{rowData:a,column:e})},e.dataKey))):(0,i.jsx)("td",{colSpan:r.length,children:" "})}))},renderHeaderCells:e=>e.map((e=>(0,i.jsx)("th",{style:{minWidth:e.minWidth},children:e.label},e.dataKey))),Cell:({rowData:e,column:r})=>{const{render:t,dataKey:l,format:s}=r;let a=e[l];return void 0===a?" ":t?t(a,e):s?s(a):a}};const w=(0,s.memo)(p)},90975:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var l=t(19756),s=t(26593),a=t(92549);const n={spacer:"_2q9_Y-5hrbxfXeVDNj4Bxk"};var o=t(85893);const d=[a.Vd,a.wN],c=Math.random().toString(36),i=e=>{let{model:r,children:t,Spacer:a="div"}=e,i=(0,l.Z)(e,["model","children","Spacer"]);return(0,s.Z)(r,(({startIndex:e,endIndex:r,virtualTopOffset:l,setSpacerNode:s})=>{const d=[(0,o.jsx)(a,{className:n.wrapper,"aria-hidden":"true",style:{height:l},ref:s},c)];for(let l=e;l<r;l++)d.push(t(l,i));return d}),d)}}}]);
//# sourceMappingURL=3869c01dfd883fc8fbd0.js.map