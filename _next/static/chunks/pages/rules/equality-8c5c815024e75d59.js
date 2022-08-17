(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[629],{23508:function(e,a,r){"use strict";var n=r(95318);a.Z=void 0;var o=n(r(64938)),l=r(85893),t=(0,o.default)((0,l.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");a.Z=t},53457:function(e,a,r){"use strict";r.d(a,{Z:function(){return m}});var n=r(63366),o=r(87462),l=r(67294),t=r(86010),s=r(94780),u=r(11496),i=r(33616),c=r(34867);function f(e){return(0,c.Z)("MuiFormGroup",e)}(0,r(1588).Z)("MuiFormGroup",["root","row","error"]);var p=r(74423),v=r(15704),d=r(85893);const O=["className","row"],h=(0,u.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,r.row&&a.row]}})((({ownerState:e})=>(0,o.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})));var m=l.forwardRef((function(e,a){const r=(0,i.Z)({props:e,name:"MuiFormGroup"}),{className:l,row:u=!1}=r,c=(0,n.Z)(r,O),m=(0,p.Z)(),x=(0,v.Z)({props:r,muiFormControl:m,states:["error"]}),N=(0,o.Z)({},r,{row:u,error:x.error}),Z=(e=>{const{classes:a,row:r,error:n}=e,o={root:["root",r&&"row",n&&"error"]};return(0,s.Z)(o,f,a)})(N);return(0,d.jsx)(h,(0,o.Z)({className:(0,t.Z)(Z.root,l),ownerState:N,ref:a},c))}))},25369:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules/equality",function(){return r(45878)}])},51172:function(e,a,r){"use strict";var n=r(82670),o=r(85893),l=r(82280),t=r(38895),s=r(22797),u=r(23508),i=function(e){var a="____PLACEHOLDER____",r=[],o=JSON.stringify(e,(function(e,o){return"function"===typeof o?(r.push(o),a):(0,n.Z)(o,RegExp)?(r.push("/"+o.source+"/"),a):o}),2);return o=o.replace(new RegExp('"'+a+'"',"g"),(function(){return r.shift()}))};a.Z=function(e){var a=e.currentRules,r=e.header,n=void 0===r?"Current Rules":r;return(0,o.jsx)("div",{className:"currentRuleInfoDiv",children:(0,o.jsxs)(l.Z,{children:[(0,o.jsx)(t.Z,{expandIcon:(0,o.jsx)(u.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,o.jsx)("span",{className:"currentRuleLabel",children:n})}),(0,o.jsx)(s.Z,{children:(0,o.jsx)("span",{className:"currentRuleString",children:i(a)})})]})})}},96799:function(e,a,r){"use strict";var n=r(85893),o=(r(25675),r(25640));a.Z=function(e){var a,r=e.isValid,l="";return r?(a="".concat(o.O,"/valid.png"),l="valid"):(a="".concat(o.O,"/invalid.png"),l="invalid"),(0,n.jsxs)("div",{className:"validationResultDiv",children:[(0,n.jsx)("span",{children:"Validation Result: "}),(0,n.jsx)("img",{src:a,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,n.jsx)("span",{className:r?"validationResultInfoSuccess":"validationResultInfoFail",children:l})]})}},30994:function(e,a,r){"use strict";r.d(a,{Y:function(){return n}});var n=["Asia","Europe","North America","South America","Africa","Australia","Antarctica"]},45878:function(e,a,r){"use strict";r.r(a);var n=r(41799),o=r(69396),l=r(85893),t=r(64459),s=r(68851),u=r(94742),i=r(96799),c=r(51172),f=r(53457),p=r(94054),v=r(50480),d=r(85071),O=r(56815),h=r(35545),m=r(30994),x={val:!1,val2:"aa",val3:"bb",comparisonValueEqualTo:"aba",comparisonValueNotEqualTo:"aba",valIsOneOf1:"Asia",valIsOneOf2:"Asia",valIsOneOf3:"Asia",valIsOneOf4:"Asia",comparisonValueIsOneOf:["North America","Africa","Europe"],comparisonValueIsNoneOf:["North America","Africa","Europe"]},N=[{path:"val",ruleSet:[{rule:"required"},{rule:"equality",equalTo:!0}]},{path:"val2",ruleSet:[{rule:"required"},{rule:"equality",equalTo:function(e){return e.comparisonValueEqualTo}}],dependantPaths:["comparisonValueEqualTo"]},{path:"val3",ruleSet:[{rule:"required"},{rule:"equality",notEqualTo:function(e){return e.comparisonValueNotEqualTo}}],dependantPaths:["comparisonValueNotEqualTo"]},{path:"valIsOneOf1",ruleSet:[{rule:"required"},{rule:"equality",isOneOf:["North America","Africa","Europe"]}]},{path:"valIsOneOf2",ruleSet:[{rule:"required"},{rule:"equality",isOneOf:function(e){return e.comparisonValueIsOneOf}}],dependantPaths:["comparisonValueIsOneOf"]},{path:"valIsOneOf3",ruleSet:[{rule:"required"},{rule:"equality",isNoneOf:["North America","Africa","Europe"]}],dependantPaths:["comparisonValueIsNoneOf"]},{path:"valIsOneOf4",ruleSet:[{rule:"required"},{rule:"equality",isNoneOf:function(e){return e.comparisonValueIsNoneOf}}],dependantPaths:["comparisonValueIsNoneOf"]}];a.default=function(){var e=(0,t.c)({rules:N,initialFormData:x}),a=e.isValid,r=e.setPathValue,Z=e.getValue,I=e.getError;return(0,l.jsxs)(s.Z,{header:"equality",codeUrl:"pages/rules/equality.js",children:[(0,l.jsxs)("p",{className:"infoParagraph",children:[(0,l.jsx)("b",{children:"equality"})," rule checks if the given value is equal to comparison value."]}),(0,l.jsx)("div",{children:(0,l.jsx)(f.Z,{className:"checkboxOnRight",children:(0,l.jsx)(p.Z,{error:!!I("val"),children:(0,l.jsx)(v.Z,{control:(0,l.jsx)(d.Z,{checked:Z("val")||!1,onChange:function(e){return r("val",e.target.checked)}}),label:(0,l.jsx)(O.Z,{children:I("val")||" "})})})})}),(0,l.jsxs)("div",{className:"comparisonDiv",children:[(0,l.jsx)(u.Z,{error:!!I("val2"),helperText:I("val2")||" ",label:"equalTo",type:"text",value:Z("val2")||"",onChange:function(e){return r("val2",e.target.value)}}),(0,l.jsx)(u.Z,{className:"comparisonComponent",label:"comparisonValueEqualTo",type:"text",value:Z("comparisonValueEqualTo"),onChange:function(e){return r("comparisonValueEqualTo",e.target.value)}})]}),(0,l.jsxs)("div",{className:"comparisonDiv",children:[(0,l.jsx)(u.Z,{error:!!I("val3"),helperText:I("val3")||" ",label:"notEqualTo",type:"text",value:Z("val3")||"",onChange:function(e){return r("val3",e.target.value)}}),(0,l.jsx)(u.Z,{className:"comparisonComponent",label:"comparisonValueNotEqualTo",type:"text",value:Z("comparisonValueNotEqualTo"),onChange:function(e){return r("comparisonValueNotEqualTo",e.target.value)}})]}),(0,l.jsxs)("div",{className:"comparisonDiv",children:[(0,l.jsx)(u.Z,{error:!!I("valIsOneOf1"),helperText:I("valIsOneOf1")||" ",label:"isOneOf",type:"text",value:Z("valIsOneOf1")||"",onChange:function(e){return r("valIsOneOf1",e.target.value)}}),"['North America', 'Africa', 'Europe']"]}),(0,l.jsxs)("div",{className:"comparisonDiv",children:[(0,l.jsx)(u.Z,{error:!!I("valIsOneOf2"),helperText:I("valIsOneOf2")||" ",label:"isOneOf",type:"text",value:Z("valIsOneOf2")||"",onChange:function(e){return r("valIsOneOf2",e.target.value)}}),(0,l.jsx)(h.Z,{multiple:!0,value:Z("comparisonValueIsOneOf"),onChange:function(e,a){r("comparisonValueIsOneOf",a)},options:m.Y,renderInput:function(e){return(0,l.jsx)(u.Z,(0,o.Z)((0,n.Z)({},e),{label:"comparisonValueIsOneOf"}))}})]}),(0,l.jsxs)("div",{className:"comparisonDiv",children:[(0,l.jsx)(u.Z,{error:!!I("valIsOneOf3"),helperText:I("valIsOneOf3")||" ",label:"isNoneOf",type:"text",value:Z("valIsOneOf3")||"",onChange:function(e){return r("valIsOneOf3",e.target.value)}}),"['North America', 'Africa', 'Europe']"]}),(0,l.jsxs)("div",{className:"comparisonDiv",children:[(0,l.jsx)(u.Z,{error:!!I("valIsOneOf4"),helperText:I("valIsOneOf4")||" ",label:"isNoneOf",type:"text",value:Z("valIsOneOf4")||"",onChange:function(e){return r("valIsOneOf4",e.target.value)}}),(0,l.jsx)(h.Z,{multiple:!0,value:Z("comparisonValueIsNoneOf"),onChange:function(e,a){r("comparisonValueIsNoneOf",a)},options:m.Y,renderInput:function(e){return(0,l.jsx)(u.Z,(0,o.Z)((0,n.Z)({},e),{label:"comparisonValueIsNoneOf"}))}})]}),(0,l.jsx)(i.Z,{isValid:a}),(0,l.jsx)(c.Z,{currentRules:N})]})}},82670:function(e,a,r){"use strict";function n(e,a){return null!=a&&"undefined"!==typeof Symbol&&a[Symbol.hasInstance]?!!a[Symbol.hasInstance](e):e instanceof a}r.d(a,{Z:function(){return n}})}},function(e){e.O(0,[9774,2888,179],(function(){return a=25369,e(e.s=a);var a}));var a=e.O();_N_E=a}]);