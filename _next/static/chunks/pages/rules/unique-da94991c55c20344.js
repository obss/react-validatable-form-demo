(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9639],{96540:function(e,n,i){"use strict";var t=i(91941);n.Z=void 0;var s=t(i(64938)),l=i(85893),a=(0,s.default)((0,l.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=a},41733:function(e,n,i){"use strict";var t=i(91941);n.Z=void 0;var s=t(i(64938)),l=i(85893),a=(0,s.default)((0,l.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=a},23508:function(e,n,i){"use strict";var t=i(91941);n.Z=void 0;var s=t(i(64938)),l=i(85893),a=(0,s.default)((0,l.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=a},97048:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules/unique",function(){return i(36978)}])},49072:function(e,n,i){"use strict";var t=i(85893),s=i(74065),l=i(29618),a=i(47028),c=i(23508),r=function(e){var n="____PLACEHOLDER____",i=[];return JSON.stringify(e,function(e,t){return"function"==typeof t?(i.push(t),n):t instanceof RegExp?(i.push("/"+t.source+"/"),n):t},2).replace(RegExp('"'+n+'"',"g"),function(){return i.shift()})};n.Z=function(e){var n=e.currentRules,i=e.header;return(0,t.jsx)("div",{className:"currentRuleInfoDiv",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{expandIcon:(0,t.jsx)(c.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,t.jsx)("span",{className:"currentRuleLabel",children:void 0===i?"Current Rules":i})}),(0,t.jsx)(a.Z,{children:(0,t.jsx)("span",{suppressHydrationWarning:!0,className:"currentRuleString",children:r(n)})})]})})}},73952:function(e,n,i){"use strict";var t=i(85893),s=i(365);n.Z=function(e){var n,i=e.isValid,l="";return i?(n="".concat(s.O,"/valid.png"),l="valid"):(n="".concat(s.O,"/invalid.png"),l="invalid"),(0,t.jsxs)("div",{className:"validationResultDiv",children:[(0,t.jsx)("span",{children:"Validation Result: "}),(0,t.jsx)("img",{src:n,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,t.jsx)("span",{className:i?"validationResultInfoSuccess":"validationResultInfoFail",children:l})]})}},36978:function(e,n,i){"use strict";i.r(n);var t=i(828),s=i(36305),l=i(85893),a=i(64459),c=i(2386),r=i(69873),u=i(75084),d=i(96540),h=i(41664),o=i.n(h),f=i(41733),j=i(73952),v=i(49072),x=i(67294),m=[{listPath:"listChild",ruleSet:["required",{rule:"unique"}]},{listPath:"listOfObjectsChild",subRules:[{path:"subkey1",ruleSet:["required",{rule:"unique"}]}]}];n.default=function(){var e=(0,a.c)({rules:m,initialFormData:{listChild:["a","a"],listOfObjectsChild:[{id:1,subkey1:"b"},{id:2,subkey1:"b"}]}}),n=e.isValid,i=e.formData,h=e.setPathValue,p=e.getValue,b=e.getError,C=(0,t.Z)((0,x.useState)(3),2),O=C[0],N=C[1],Z=null,k=function(e){h("listChild",i.listChild.filter(function(n,i){return i!==e}))};i.listChild&&i.listChild.length>0&&(Z=i.listChild.map(function(e,n){return(0,l.jsxs)("div",{children:[(0,l.jsx)(r.Z,{error:!!b("listChild{".concat(n,"}")),helperText:b("listChild{".concat(n,"}"))||" ",label:"unique",type:"text",value:p("listChild[".concat(n,"]"))||"",onChange:function(e){return h("listChild[".concat(n,"]"),e.target.value)}}),(0,l.jsxs)(u.Z,{className:"myDeleteButton",variant:"contained",onClick:function(){return k(n)},children:[(0,l.jsx)("span",{className:"myShinkableButtonSpan",children:"Delete Element"}),(0,l.jsx)(f.Z,{className:"myShinkableButtonIcon"})]})]},n)}));var y=function(e){h("listOfObjectsChild",i.listOfObjectsChild.filter(function(n){return n.id!==e}))},g=null;return i.listOfObjectsChild&&i.listOfObjectsChild.length>0&&(g=i.listOfObjectsChild.map(function(e,n){return(0,l.jsxs)("div",{children:[(0,l.jsx)(r.Z,{error:!!b("listOfObjectsChild{".concat(n,"}.subkey1")),helperText:b("listOfObjectsChild{".concat(n,"}.subkey1"))||" ",label:"unique subkey",type:"text",value:p("listOfObjectsChild[".concat(n,"].subkey1"))||"",onChange:function(e){return h("listOfObjectsChild[".concat(n,"].subkey1"),e.target.value)},id:"listOfObjectsChild{".concat(n,"}.subkey1")}),(0,l.jsxs)(u.Z,{className:"myDeleteButton",variant:"contained",onClick:function(){return y(e.id)},children:[(0,l.jsx)("span",{className:"myShinkableButtonSpan",children:"Delete Element"}),(0,l.jsx)(f.Z,{className:"myShinkableButtonIcon"})]})]},e.id)})),(0,l.jsxs)(c.Z,{header:"Unique",codeUrl:"pages/rules/unique.js",children:[(0,l.jsxs)("p",{className:"infoParagraph",children:[(0,l.jsx)("b",{children:"unique"})," rule checks if non-unique values exist on a"," ",(0,l.jsx)(o(),{className:"inner-link",href:"/library-api/path",children:"listPath"}),"."]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsxs)(u.Z,{className:"myAddButton",variant:"contained",onClick:function(){var e=(0,s.Z)(i.listChild);e.push(""),h("listChild",e)},children:[(0,l.jsx)("span",{className:"myShinkableButtonSpan",children:"Add New Element"}),(0,l.jsx)(d.Z,{className:"myShinkableButtonIcon"})]})}),(0,l.jsx)("div",{className:"formListField",children:Z}),(0,l.jsx)("div",{className:"errorInfoText",children:b("listChild")}),(0,l.jsx)("div",{children:(0,l.jsxs)(u.Z,{className:"myAddButton",variant:"contained",onClick:function(){var e=(0,s.Z)(i.listOfObjectsChild);e.push({id:O}),N(O+1),h("listOfObjectsChild",e)},children:[(0,l.jsx)("span",{className:"myShinkableButtonSpan",children:"Add New Element"}),(0,l.jsx)(d.Z,{className:"myShinkableButtonIcon"})]})}),(0,l.jsx)("div",{className:"formListField",children:g}),(0,l.jsx)("div",{className:"errorInfoText",children:b("listOfObjectsChild")}),(0,l.jsx)(j.Z,{isValid:n}),(0,l.jsx)(v.Z,{currentRules:m})]})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=97048)}),_N_E=e.O()}]);