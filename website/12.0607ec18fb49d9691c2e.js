/*! For license information please see 12.0607ec18fb49d9691c2e.js.LICENSE.txt */
(window.Z=window.Z||[]).push([[12],{1320:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(1),a=t(6),u=t(62),c=t(39),i=t(66),l=t.n(i),s=t(5);var d={name:"vmlbzc-hueBlockCss",styles:"padding:0.5em;border-radius:5px;;label:hueBlockCss;"},f=function(e){return Object(s.c)("div",{css:d,style:{background:"hsl("+e+",90%,70%)"}},"hue: ",e)},v=[{dataKey:"n1",label:"N1",width:100,render:f},{dataKey:"n2",label:"N2",width:100,render:f},{dataKey:"n3",label:"N3",width:100,render:f}],b=Object(r.memo)(Object(a.a)(c.a));n.default=function(e){var n=e.className,t=Object(r.useState)((function(){for(var e=Object(o.observable)([]),n=0;n<200;n++)e.push({n1:0,n2:0,n3:0});return e}))[0],a=Object(r.useCallback)((function(e){return t[e]}),[t]);return Object(r.useEffect)((function(){var e=setInterval((function(){for(var e=0;e<50;e++)t[l()(0,199)]["n"+l()(1,3)]=l()(0,360)}),1e3);return function(){clearInterval(e)}}),[t]),Object(s.c)(u.a,{className:n,CellComponent:b,getRowData:a,rowCount:200,columns:v})}},65:function(e,n,t){var r=t(69),o=t(73),a=t(71),u=t(68);e.exports=function(e,n,t){if(!u(t))return!1;var c=typeof n;return!!("number"==c?o(t)&&a(n,t.length):"string"==c&&n in t)&&r(t[n],e)}},66:function(e,n,t){var r=t(67),o=t(65),a=t(74),u=parseFloat,c=Math.min,i=Math.random;e.exports=function(e,n,t){if(t&&"boolean"!=typeof t&&o(e,n,t)&&(n=t=void 0),void 0===t&&("boolean"==typeof n?(t=n,n=void 0):"boolean"==typeof e&&(t=e,e=void 0)),void 0===e&&void 0===n?(e=0,n=1):(e=a(e),void 0===n?(n=e,e=0):n=a(n)),e>n){var l=e;e=n,n=l}if(t||e%1||n%1){var s=i();return c(e+s*(n-e+u("1e-"+((s+"").length-1))),n)}return r(e,n)}},67:function(e,n){var t=Math.floor,r=Math.random;e.exports=function(e,n){return e+t(r()*(n-e+1))}}}]);
//# sourceMappingURL=sm.12.7fd37d619e8d63660bea1cec8c378f42.map