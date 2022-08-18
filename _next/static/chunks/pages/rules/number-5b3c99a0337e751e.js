(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3454],{23508:function(e,n,r){"use strict";var a=r(95318);n.Z=void 0;var t=a(r(64938)),s=r(85893),o=(0,t.default)((0,s.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=o},53457:function(e,n,r){"use strict";r.d(n,{Z:function(){return x}});var a=r(63366),t=r(87462),s=r(67294),o=r(86010),i=r(94780),l=r(11496),u=r(33616),c=r(34867);function d(e){return(0,c.Z)("MuiFormGroup",e)}(0,r(1588).Z)("MuiFormGroup",["root","row","error"]);var p=r(74423),v=r(15704),h=r(85893);const m=["className","row"],f=(0,l.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,r.row&&n.row]}})((({ownerState:e})=>(0,t.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})));var x=s.forwardRef((function(e,n){const r=(0,u.Z)({props:e,name:"MuiFormGroup"}),{className:s,row:l=!1}=r,c=(0,a.Z)(r,m),x=(0,p.Z)(),Z=(0,v.Z)({props:r,muiFormControl:x,states:["error"]}),g=(0,t.Z)({},r,{row:l,error:Z.error}),j=(e=>{const{classes:n,row:r,error:a}=e,t={root:["root",r&&"row",a&&"error"]};return(0,i.Z)(t,d,n)})(g);return(0,h.jsx)(f,(0,t.Z)({className:(0,o.Z)(j.root,s),ownerState:g,ref:n},c))}))},77545:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules/number",function(){return r(86282)}])},51172:function(e,n,r){"use strict";var a=r(82670),t=r(85893),s=r(82280),o=r(38895),i=r(22797),l=r(23508),u=function(e){var n="____PLACEHOLDER____",r=[],t=JSON.stringify(e,(function(e,t){return"function"===typeof t?(r.push(t),n):(0,a.Z)(t,RegExp)?(r.push("/"+t.source+"/"),n):t}),2);return t=t.replace(new RegExp('"'+n+'"',"g"),(function(){return r.shift()}))};n.Z=function(e){var n=e.currentRules,r=e.header,a=void 0===r?"Current Rules":r;return(0,t.jsx)("div",{className:"currentRuleInfoDiv",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(o.Z,{expandIcon:(0,t.jsx)(l.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,t.jsx)("span",{className:"currentRuleLabel",children:a})}),(0,t.jsx)(i.Z,{children:(0,t.jsx)("span",{className:"currentRuleString",children:u(n)})})]})})}},96799:function(e,n,r){"use strict";var a=r(85893),t=(r(25675),r(25640));n.Z=function(e){var n,r=e.isValid,s="";return r?(n="".concat(t.O,"/valid.png"),s="valid"):(n="".concat(t.O,"/invalid.png"),s="invalid"),(0,a.jsxs)("div",{className:"validationResultDiv",children:[(0,a.jsx)("span",{children:"Validation Result: "}),(0,a.jsx)("img",{src:n,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,a.jsx)("span",{className:r?"validationResultInfoSuccess":"validationResultInfoFail",children:s})]})}},7645:function(e,n,r){"use strict";r.d(n,{q:function(){return a}});var a=["equalTo","lessThan","lessThanOrEqualTo","greaterThan","greaterThanOrEqualTo","notEqualTo"]},86282:function(e,n,r){"use strict";r.r(n);var a=r(41799),t=r(69396),s=r(10797),o=r(85893),i=r(67294),l=r(64459),u=r(53457),c=r(50480),d=r(85071),p=r(7645),v=r(68851),h=r(94742),m=r(35545),f=r(96799),x=r(51172),Z={rule:"number"};Z[p.q[0]]=5;var g=[{path:"val",ruleSet:["required",Z],dependantPaths:["comparisonValue"]}],j={val:3,ruleOption:p.q[0],comparisonValue:5};n.default=function(){var e=(0,l.c)({rules:g,initialFormData:j}),n=e.isValid,r=e.setPathValue,Z=e.setRules,b=e.getValue,N=e.getError,w=(0,i.useState)(g),R=w[0],_=w[1],S=(0,i.useState)(p.q[0]),C=S[0],O=S[1],y=(0,i.useState)(!1),E=y[0],k=y[1],V=(0,i.useState)(!1),I=V[0],q=V[1],T=function(e,n,r){var a=JSON.parse(JSON.stringify(g)),t=(0,s.Z)(a[0].ruleSet),o={rule:"number"};n&&(o[n]=e?function(e){return e.comparisonValue}:5),r&&(o.onlyIntegers=!0),t.splice(1,1,o),a[0].ruleSet=t,_(a),Z(a)};return(0,o.jsxs)(v.Z,{header:"number",codeUrl:"pages/rules/number.js",children:[(0,o.jsxs)("p",{className:"infoParagraph",children:[(0,o.jsx)("b",{children:"number"})," rule checks if the given value is a valid number. If ",(0,o.jsx)("b",{children:"onlyIntegers"})," parameter is set, it also checks if given value is an integer. ",(0,o.jsx)("b",{children:p.q.join(", ")})," parameters are used to make comparisons with given comparison values."]}),(0,o.jsxs)("div",{className:"comparisonDiv",children:[(0,o.jsx)(h.Z,{error:!!N("val"),helperText:N("val")||" ",label:"val",type:"number",value:b("val"),onChange:function(e){return r("val",e.target.value)}}),(0,o.jsx)(m.Z,{className:"ruleOptionComponent",value:C,onChange:function(e,n){!function(e){T(E,e,I),O(e)}(n)},options:p.q,disableClearable:!1,renderInput:function(e){return(0,o.jsx)(h.Z,(0,t.Z)((0,a.Z)({},e),{label:"ruleOption"}))}}),E?(0,o.jsx)(h.Z,{className:"comparisonComponent",label:"comparisonValue",type:"number",value:b("comparisonValue"),onChange:function(e){return r("comparisonValue",e.target.value)}}):(0,o.jsx)(h.Z,{disabled:!0,className:"comparisonComponent",label:"comparisonValue",type:"number",value:5,onChange:function(){}}),(0,o.jsx)(u.Z,{className:"checkboxOnRight",children:(0,o.jsx)(c.Z,{control:(0,o.jsx)(d.Z,{checked:E,onChange:function(e){return n=e.target.checked,T(n,C,I),void k(n);var n}}),label:"as Function"})})]}),(0,o.jsx)("div",{className:"comparisonDiv",children:(0,o.jsx)(u.Z,{className:"checkboxOnRight",children:(0,o.jsx)(c.Z,{control:(0,o.jsx)(d.Z,{checked:I,onChange:function(e){return n=e.target.checked,T(E,C,n),void q(n);var n}}),label:"onlyIntegers"})})}),(0,o.jsx)(f.Z,{isValid:n}),(0,o.jsx)(x.Z,{currentRules:R})]})}},82670:function(e,n,r){"use strict";function a(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](e):e instanceof n}r.d(n,{Z:function(){return a}})}},function(e){e.O(0,[9774,2888,179],(function(){return n=77545,e(e.s=n);var n}));var n=e.O();_N_E=n}]);