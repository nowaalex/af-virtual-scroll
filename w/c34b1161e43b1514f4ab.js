/*! For license information please see c34b1161e43b1514f4ab.js.LICENSE.txt */
(self.webpackChunkaf_virtual_scroll=self.webpackChunkaf_virtual_scroll||[]).push([[603],{21678:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>P});var r=s(85893),o=s(19756),a=s(67294),n=s(40074),i=s(68949);const l=(e,t,s)=>{const r=t.length-1;const o=t[r],a=new Map;for(let n of e){const e=s(n);let i,l,d=a;for(let s=0;s<r;s++)l=e[t[s]],i=d.get(l),i||(i=new Map,d.set(l,i)),d=i;l=e[o],i=d.get(l),i?i.push(n):d.set(l,[n])}return a},d=(e,t,s)=>(r,o)=>{const a=e(r),n=e(o);if(a&&n){const e=a[t],r=n[t];return e>r?s:e<r?-s:0}return a?s:n?-s:0},u=(e,t,s,r,o,a=0)=>{const n=e.values();if(a<o-1)for(let e of n)u(e,t,s,r,o,a+1);else{const e=d(t,s,r);for(let t of n)t.sort(e)}},h=u,c=(e,t,s="",r=[],o=[])=>{let a;for(let[n,i]of e)a=-r.push(s+n),o.push(a),t.has(a)||(Array.isArray(i)?o.push.apply(o,i):c(i,t,s+n+".",r,o));return{groupValues:r,rowIndexes:o}},p=c;const g=class{setFiltering(e,t){t?this.filtersMap.set(e,t.toLowerCase()):this.filtersMap.delete(e)}setSorting(e){this.sortDataKey===e&&(this.sortDirection*=-1),this.sortDataKey=e}addGrouping(e){this.groupKeys.includes(e)||(this.groupKeys.push(e),this.collapsedGroups.clear())}toggleCollapsedGroup(e){this.collapsedGroups.has(e)?this.collapsedGroups.delete(e):this.collapsedGroups.add(e)}removeGrouping(e){const t=this.groupKeys.indexOf(e);-1!==t&&(this.groupKeys.splice(t,1),this.collapsedGroups.clear())}get orderedIndexes(){return Array.from({length:this.rowsQuantity},((e,t)=>t))}get grouped(){return l(this.filteredIndexes,this.groupKeys,this.getRowData)}get groupedSorted(){return this.sortDataKey&&h(this.grouped,this.getRowData,this.sortDataKey,this.sortDirection,this.groupKeys.length),this.grouped}get flattenedGroups(){return p(this.groupedSorted,this.collapsedGroups)}get filteredIndexes(){const{filtersMap:e,orderedIndexes:t}=this;if(this.filtersMap.size){return t.filter((t=>{const s=this.getRowData(t);for(let[t,r]of e)if(!(""+s[t]).toLowerCase().includes(r))return!1;return!0}))}return t}get noGroupsSortedIndexes(){return this.sortDataKey?this.filteredIndexes.sort(d(this.getRowData,this.sortDataKey,this.sortDirection)):this.filteredIndexes}get groupsSortedIndexes(){return this.flattenedGroups.rowIndexes}get hasGrouping(){return!!this.groupKeys.length}get finalIndexes(){return this.hasGrouping?this.groupsSortedIndexes:this.noGroupsSortedIndexes}constructor(){this.rowsQuantity=0,this.getRowData=null,this.filtersMap=new Map,this.groupKeys=[],this.sortDataKey="",this.sortDirection=-1,this.collapsedGroups=new Set,(0,i.ky)(this,{groupedSorted:(0,i.Fl)({equals:()=>!1}),groupsSortedIndexes:(0,i.Fl)({equals:()=>!1}),noGroupsSortedIndexes:(0,i.Fl)({equals:()=>!1}),finalIndexes:(0,i.Fl)({equals:()=>!1}),filteredIndexes:(0,i.Fl)({equals:()=>!1}),orderedIndexes:(0,i.Fl)({equals:()=>!1})})}merge(e){Object.assign(this,e)}};var f=s(39519),x=s(32857);const y="_2B3KY_2EhDdLzl3od9PxI3",m="_3xhCMieeqyydLLrsB_Rjwr",w="_7PdTV3zpJzO5l3JPCJbaz",D="_24CQvBWd2KIxalcwIBcG6S",K="_1Pfh0g4BE_cuNHu46ByRkY";var G=s(57865),j=s(84785),I=s(89862);const v=(0,n.P)((({m:e,dataKey:t,label:s})=>{const[o,a]=(0,j.useDrag)({item:{type:"h",dataKey:t}});return(0,r.jsx)("div",{ref:a,className:m,onClick:()=>e.setSorting(t),"aria-sort":e.sortDataKey===t?1===e.sortDirection?"ascending":"descending":void 0,children:s})})),C=(0,n.P)((({m:e,dataKey:t})=>(0,r.jsx)("input",{className:w,value:e.filtersMap.get(t)||"",onChange:s=>e.setFiltering(t,s.target.value)}))),R=(0,n.P)((({m:e})=>{const[t,s]=(0,j.useDrop)({accept:"h",drop(t){e.addGrouping(t.dataKey)}});return(0,r.jsx)("div",{className:D,ref:s,children:e.groupKeys.length?e.groupKeys.map((t=>(0,r.jsx)("div",{className:K,onDoubleClick:()=>e.removeGrouping(t),children:t},t))):"Drag column headers here to group by column"})})),S=(0,n.P)((({m:e,idx:t})=>{const s=e.collapsedGroups.has(t);return e.hasGrouping?(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)("span",{onClick:()=>e.toggleCollapsedGroup(t),children:s?"+":"-"})," ",e.flattenedGroups.groupValues[~t]]}):null})),N=(0,n.P)((e=>{let{rowsQuantity:t,getRowData:s,className:n}=e,i=(0,o.Z)(e,["rowsQuantity","getRowData","className"]);const[l]=(0,a.useState)((()=>new g)),{finalIndexes:d}=l;return(0,a.useEffect)((()=>l.merge({rowsQuantity:t,getRowData:s}))),(0,r.jsx)(I.W,{backend:G.PD,children:(0,r.jsxs)("div",{className:(0,x.Z)(y,n),children:[(0,r.jsx)(R,{m:l}),(0,r.jsx)(f.Z,Object.assign({rowsQuantity:d.length,getRowData:s,renderRow:(e,t,s,o,a,n)=>{const i=d[e];return(0,r.jsx)("tr",{children:i<0?(0,r.jsx)("td",{colSpan:t.length,children:(0,r.jsx)(S,{m:l,idx:i})}):(0,r.jsx)(a,{rowIndex:i,columns:t,getRowData:s,renderCell:o,Cell:n})},i)},renderTheadContents:e=>(0,r.jsx)("tr",{children:e.map((({dataKey:e,label:t})=>(0,r.jsxs)("th",{children:[(0,r.jsx)(v,{m:l,dataKey:e,label:t}),(0,r.jsx)(C,{m:l,dataKey:e})]},e)))})},i))]})})}));var b=s(85384),_=s.n(b);const k=Array.from({length:1e4},((e,t)=>({i:t,firstName:_().name.firstName(),lastName:_().name.lastName(),country:_().address.country()}))),M=e=>20+e%53+e%87,P=()=>(0,r.jsx)(N,{rowsQuantity:k.length,getRowData:e=>k[e],estimatedRowHeight:30,columns:[{dataKey:"i",render:(e,t,s)=>(0,r.jsx)("div",{style:{color:"#000",textAlign:"center",lineHeight:M(s)+"px",background:"hsl("+11*s%360+",60%,60%)"},children:e})},"firstName","lastName","country"]})}}]);
//# sourceMappingURL=c34b1161e43b1514f4ab.js.map