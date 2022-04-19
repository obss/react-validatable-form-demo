(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[629],{23508:function(e,a,n){"use strict";var r=n(95318);a.Z=void 0;var o=r(n(64938)),l=n(85893),t=(0,o.default)((0,l.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");a.Z=t},53457:function(e,a,n){"use strict";n.d(a,{Z:function(){return d}});var r=n(63366),o=n(87462),l=n(67294),t=n(86010),s=n(77463),u=n(11496),i=n(33616),c=n(21420);function f(e){return(0,c.Z)("MuiFormGroup",e)}(0,n(11271).Z)("MuiFormGroup",["root","row"]);var p=n(85893);const v=["className","row"],O=(0,u.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:n}=e;return[a.root,n.row&&a.row]}})((({ownerState:e})=>(0,o.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})));var d=l.forwardRef((function(e,a){const n=(0,i.Z)({props:e,name:"MuiFormGroup"}),{className:l,row:u=!1}=n,c=(0,r.Z)(n,v),d=(0,o.Z)({},n,{row:u}),h=(e=>{const{classes:a,row:n}=e,r={root:["root",n&&"row"]};return(0,s.Z)(r,f,a)})(d);return(0,p.jsx)(O,(0,o.Z)({className:(0,t.Z)(h.root,l),ownerState:d,ref:a},c))}))},25347:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules/equality",function(){return n(22314)}])},49072:function(e,a,n){"use strict";var r=n(85893),o=n(82280),l=n(38895),t=n(22797),s=n(23508);var u=function(e){var a="____PLACEHOLDER____",n=[],r=JSON.stringify(e,(function(e,r){return"function"===typeof r?(n.push(r),a):(o=r,(null!=(l=RegExp)&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](o):o instanceof l)?(n.push("/"+r.source+"/"),a):r);var o,l}),2);return r=r.replace(new RegExp('"'+a+'"',"g"),(function(){return n.shift()}))};a.Z=function(e){var a=e.currentRules,n=e.header,i=void 0===n?"Current Rules":n;return(0,r.jsx)("div",{className:"currentRuleInfoDiv",children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.Z,{expandIcon:(0,r.jsx)(s.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,r.jsx)("span",{className:"currentRuleLabel",children:i})}),(0,r.jsx)(t.Z,{children:(0,r.jsx)("span",{className:"currentRuleString",children:u(a)})})]})})}},73952:function(e,a,n){"use strict";var r=n(85893),o=(n(25675),n(365));a.Z=function(e){var a,n=e.isValid,l="";return n?(a="".concat(o.O,"/valid.png"),l="valid"):(a="".concat(o.O,"/invalid.png"),l="invalid"),(0,r.jsxs)("div",{className:"validationResultDiv",children:[(0,r.jsx)("span",{children:"Validation Result: "}),(0,r.jsx)("img",{src:a,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,r.jsx)("span",{className:n?"validationResultInfoSuccess":"validationResultInfoFail",children:l})]})}},75017:function(e,a,n){"use strict";n.d(a,{Y:function(){return r}});var r=["Asia","Europe","North America","South America","Africa","Australia","Antarctica"]},22314:function(e,a,n){"use strict";n.r(a);var r=n(85893),o=n(64459),l=n(2386),t=n(37840),s=n(73952),u=n(49072),i=n(53457),c=n(94054),f=n(50480),p=n(85071),v=n(56815),O=n(93828),d=n(75017);function h(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function m(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(a){h(e,a,n[a])}))}return e}var x={val:!1,val2:"aa",val3:"bb",comparisonValueEqualTo:"aba",comparisonValueNotEqualTo:"aba",valIsOneOf1:"Asia",valIsOneOf2:"Asia",valIsOneOf3:"Asia",valIsOneOf4:"Asia",comparisonValueIsOneOf:["North America","Africa","Europe"],comparisonValueIsNoneOf:["North America","Africa","Europe"]},N=[{path:"val",ruleSet:[{rule:"required"},{rule:"equality",equalTo:!0}]},{path:"val2",ruleSet:[{rule:"required"},{rule:"equality",equalTo:function(e){return e.comparisonValueEqualTo}}],dependantPaths:["comparisonValueEqualTo"]},{path:"val3",ruleSet:[{rule:"required"},{rule:"equality",notEqualTo:function(e){return e.comparisonValueNotEqualTo}}],dependantPaths:["comparisonValueNotEqualTo"]},{path:"valIsOneOf1",ruleSet:[{rule:"required"},{rule:"equality",isOneOf:["North America","Africa","Europe"]}]},{path:"valIsOneOf2",ruleSet:[{rule:"required"},{rule:"equality",isOneOf:function(e){return e.comparisonValueIsOneOf}}],dependantPaths:["comparisonValueIsOneOf"]},{path:"valIsOneOf3",ruleSet:[{rule:"required"},{rule:"equality",isNoneOf:["North America","Africa","Europe"]}],dependantPaths:["comparisonValueIsNoneOf"]},{path:"valIsOneOf4",ruleSet:[{rule:"required"},{rule:"equality",isNoneOf:function(e){return e.comparisonValueIsNoneOf}}],dependantPaths:["comparisonValueIsNoneOf"]}];a.default=function(){var e=(0,o.c)({rules:N,initialFormData:x}),a=e.isValid,n=e.setPathValue,h=e.getValue,j=e.getError;return(0,r.jsxs)(l.Z,{header:"equality",codeUrl:"components/rules/equality.js",children:[(0,r.jsxs)("p",{className:"infoParagraph",children:[(0,r.jsx)("b",{children:"equality"})," rule checks if the given value is equal to comparison value."]}),(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{className:"checkboxOnRight",children:(0,r.jsx)(c.Z,{error:!!j("val"),children:(0,r.jsx)(f.Z,{control:(0,r.jsx)(p.Z,{checked:h("val")||!1,onChange:function(e){return n("val",e.target.checked)}}),label:(0,r.jsx)(v.Z,{children:j("val")||" "})})})})}),(0,r.jsxs)("div",{className:"comparisonDiv",children:[(0,r.jsx)(t.Z,{error:!!j("val2"),helperText:j("val2")||" ",label:"equalTo",type:"text",value:h("val2")||"",onChange:function(e){return n("val2",e.target.value)}}),(0,r.jsx)(t.Z,{className:"comparisonComponent",label:"comparisonValueEqualTo",type:"text",value:h("comparisonValueEqualTo"),onChange:function(e){return n("comparisonValueEqualTo",e.target.value)}})]}),(0,r.jsxs)("div",{className:"comparisonDiv",children:[(0,r.jsx)(t.Z,{error:!!j("val3"),helperText:j("val3")||" ",label:"notEqualTo",type:"text",value:h("val3")||"",onChange:function(e){return n("val3",e.target.value)}}),(0,r.jsx)(t.Z,{className:"comparisonComponent",label:"comparisonValueNotEqualTo",type:"text",value:h("comparisonValueNotEqualTo"),onChange:function(e){return n("comparisonValueNotEqualTo",e.target.value)}})]}),(0,r.jsxs)("div",{className:"comparisonDiv",children:[(0,r.jsx)(t.Z,{error:!!j("valIsOneOf1"),helperText:j("valIsOneOf1")||" ",label:"isOneOf",type:"text",value:h("valIsOneOf1")||"",onChange:function(e){return n("valIsOneOf1",e.target.value)}}),"['North America', 'Africa', 'Europe']"]}),(0,r.jsxs)("div",{className:"comparisonDiv",children:[(0,r.jsx)(t.Z,{error:!!j("valIsOneOf2"),helperText:j("valIsOneOf2")||" ",label:"isOneOf",type:"text",value:h("valIsOneOf2")||"",onChange:function(e){return n("valIsOneOf2",e.target.value)}}),(0,r.jsx)(O.Z,{multiple:!0,value:h("comparisonValueIsOneOf"),onChange:function(e,a){n("comparisonValueIsOneOf",a)},options:d.Y,renderInput:function(e){return(0,r.jsx)(t.Z,m({},e,{label:"comparisonValueIsOneOf"}))}})]}),(0,r.jsxs)("div",{className:"comparisonDiv",children:[(0,r.jsx)(t.Z,{error:!!j("valIsOneOf3"),helperText:j("valIsOneOf3")||" ",label:"isNoneOf",type:"text",value:h("valIsOneOf3")||"",onChange:function(e){return n("valIsOneOf3",e.target.value)}}),"['North America', 'Africa', 'Europe']"]}),(0,r.jsxs)("div",{className:"comparisonDiv",children:[(0,r.jsx)(t.Z,{error:!!j("valIsOneOf4"),helperText:j("valIsOneOf4")||" ",label:"isNoneOf",type:"text",value:h("valIsOneOf4")||"",onChange:function(e){return n("valIsOneOf4",e.target.value)}}),(0,r.jsx)(O.Z,{multiple:!0,value:h("comparisonValueIsNoneOf"),onChange:function(e,a){n("comparisonValueIsNoneOf",a)},options:d.Y,renderInput:function(e){return(0,r.jsx)(t.Z,m({},e,{label:"comparisonValueIsNoneOf"}))}})]}),(0,r.jsx)(s.Z,{isValid:a}),(0,r.jsx)(u.Z,{currentRules:N})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return a=25347,e(e.s=a);var a}));var a=e.O();_N_E=a}]);