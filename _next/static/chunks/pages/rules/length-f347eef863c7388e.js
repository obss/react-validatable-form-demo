(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5499],{23508:function(e,n,r){"use strict";var a=r(91941);n.Z=void 0;var t=a(r(64938)),o=r(85893),s=(0,t.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=s},22416:function(e,n,r){"use strict";r.d(n,{Z:function(){return x}});var a=r(1048),t=r(32793),o=r(67294),s=r(86010),l=r(94780),i=r(67074),u=r(6446),c=r(34867);function d(e){return(0,c.Z)("MuiFormGroup",e)}(0,r(1588).Z)("MuiFormGroup",["root","row","error"]);var p=r(59711),h=r(56594),f=r(85893);const v=["className","row"],m=(0,i.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,r.row&&n.row]}})((({ownerState:e})=>(0,t.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})));var x=o.forwardRef((function(e,n){const r=(0,u.Z)({props:e,name:"MuiFormGroup"}),{className:o,row:i=!1}=r,c=(0,a.Z)(r,v),x=(0,p.Z)(),Z=(0,h.Z)({props:r,muiFormControl:x,states:["error"]}),g=(0,t.Z)({},r,{row:i,error:Z.error}),j=(e=>{const{classes:n,row:r,error:a}=e,t={root:["root",r&&"row",a&&"error"]};return(0,l.Z)(t,d,n)})(g);return(0,f.jsx)(m,(0,t.Z)({className:(0,s.Z)(j.root,o),ownerState:g,ref:n},c))}))},65104:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules/length",function(){return r(96130)}])},51172:function(e,n,r){"use strict";var a=r(82670),t=r(85893),o=r(74065),s=r(29618),l=r(47028),i=r(23508),u=function(e){var n="____PLACEHOLDER____",r=[],t=JSON.stringify(e,(function(e,t){return"function"===typeof t?(r.push(t),n):(0,a.Z)(t,RegExp)?(r.push("/"+t.source+"/"),n):t}),2);return t=t.replace(new RegExp('"'+n+'"',"g"),(function(){return r.shift()}))};n.Z=function(e){var n=e.currentRules,r=e.header,a=void 0===r?"Current Rules":r;return(0,t.jsx)("div",{className:"currentRuleInfoDiv",children:(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(s.Z,{expandIcon:(0,t.jsx)(i.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,t.jsx)("span",{className:"currentRuleLabel",children:a})}),(0,t.jsx)(l.Z,{children:(0,t.jsx)("span",{className:"currentRuleString",children:u(n)})})]})})}},96799:function(e,n,r){"use strict";var a=r(85893),t=r(25640);n.Z=function(e){var n,r=e.isValid,o="";return r?(n="".concat(t.O,"/valid.png"),o="valid"):(n="".concat(t.O,"/invalid.png"),o="invalid"),(0,a.jsxs)("div",{className:"validationResultDiv",children:[(0,a.jsx)("span",{children:"Validation Result: "}),(0,a.jsx)("img",{src:n,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,a.jsx)("span",{className:r?"validationResultInfoSuccess":"validationResultInfoFail",children:o})]})}},7645:function(e,n,r){"use strict";r.d(n,{q:function(){return a}});var a=["equalTo","lessThan","lessThanOrEqualTo","greaterThan","greaterThanOrEqualTo","notEqualTo"]},96130:function(e,n,r){"use strict";r.r(n);var a=r(41799),t=r(69396),o=r(10797),s=r(85893),l=r(67294),i=r(64459),u=r(22416),c=r(22841),d=r(31362),p=r(7645),h=r(68851),f=r(69873),v=r(30612),m=r(96799),x=r(51172),Z={rule:"length"};Z[p.q[0]]=5;var g=[{path:"val",ruleSet:["required",Z],dependantPaths:["comparisonValue"]}],j={val:"aa",ruleOption:p.q[0],comparisonValue:5};n.default=function(){var e=(0,i.c)({rules:g,initialFormData:j}),n=e.isValid,r=e.setPathValue,Z=e.setRules,w=e.getValue,N=e.getError,_=(0,l.useState)(g),b=_[0],R=_[1],S=(0,l.useState)(p.q[0]),C=S[0],E=S[1],O=(0,l.useState)(!1),V=O[0],q=O[1],y=function(e,n){var r=JSON.parse(JSON.stringify(g)),a=(0,o.Z)(r[0].ruleSet),t={rule:"length"};t[n]=e?function(e){return e.comparisonValue}:5,a.splice(1,1,t),r[0].ruleSet=a,R(r),Z(r)};return(0,s.jsxs)(h.Z,{header:"length",codeUrl:"pages/rules/length.js",children:[(0,s.jsxs)("p",{className:"infoParagraph",children:[(0,s.jsx)("b",{children:"length"})," rule checks the length of a string. ",(0,s.jsx)("b",{children:p.q.join(", ")})," parameters are used to make comparisons with given comparison values."]}),(0,s.jsxs)("div",{className:"comparisonDiv",children:[(0,s.jsx)(f.Z,{error:!!N("val"),helperText:N("val")||" ",label:"val",type:"text",value:w("val"),onChange:function(e){return r("val",e.target.value)}}),(0,s.jsx)(v.Z,{className:"ruleOptionComponent",value:C,onChange:function(e,n){!function(e){y(V,e),E(e)}(n)},options:p.q,disableClearable:!0,renderInput:function(e){return(0,s.jsx)(f.Z,(0,t.Z)((0,a.Z)({},e),{label:"ruleOption"}))}}),V?(0,s.jsx)(f.Z,{className:"comparisonComponent",label:"comparisonValue",type:"number",value:w("comparisonValue"),onChange:function(e){return r("comparisonValue",e.target.value)}}):(0,s.jsx)(f.Z,{disabled:!0,className:"comparisonComponent",label:"comparisonValue",type:"number",value:5,onChange:function(){}}),(0,s.jsx)(u.Z,{className:"checkboxOnRight",children:(0,s.jsx)(c.Z,{control:(0,s.jsx)(d.Z,{checked:V,onChange:function(e){return n=e.target.checked,y(n,C),void q(n);var n}}),label:"as Function"})})]}),(0,s.jsx)(m.Z,{isValid:n}),(0,s.jsx)(x.Z,{currentRules:b})]})}},82670:function(e,n,r){"use strict";function a(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](e):e instanceof n}r.d(n,{Z:function(){return a}})}},function(e){e.O(0,[9774,2888,179],(function(){return n=65104,e(e.s=n);var n}));var n=e.O();_N_E=n}]);