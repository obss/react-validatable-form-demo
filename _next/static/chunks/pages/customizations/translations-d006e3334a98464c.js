(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6288],{23508:function(e,a,n){"use strict";var r=n(95318);a.Z=void 0;var t=r(n(64938)),l=n(85893),i=(0,t.default)((0,l.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");a.Z=i},45822:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customizations/translations",function(){return n(412)}])},51172:function(e,a,n){"use strict";var r=n(82670),t=n(85893),l=n(82280),i=n(38895),s=n(22797),u=n(23508),c=function(e){var a="____PLACEHOLDER____",n=[],t=JSON.stringify(e,(function(e,t){return"function"===typeof t?(n.push(t),a):(0,r.Z)(t,RegExp)?(n.push("/"+t.source+"/"),a):t}),2);return t=t.replace(new RegExp('"'+a+'"',"g"),(function(){return n.shift()}))};a.Z=function(e){var a=e.currentRules,n=e.header,r=void 0===n?"Current Rules":n;return(0,t.jsx)("div",{className:"currentRuleInfoDiv",children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(i.Z,{expandIcon:(0,t.jsx)(u.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,t.jsx)("span",{className:"currentRuleLabel",children:r})}),(0,t.jsx)(s.Z,{children:(0,t.jsx)("span",{className:"currentRuleString",children:c(a)})})]})})}},96799:function(e,a,n){"use strict";var r=n(85893),t=(n(25675),n(25640));a.Z=function(e){var a,n=e.isValid,l="";return n?(a="".concat(t.O,"/valid.png"),l="valid"):(a="".concat(t.O,"/invalid.png"),l="invalid"),(0,r.jsxs)("div",{className:"validationResultDiv",children:[(0,r.jsx)("span",{children:"Validation Result: "}),(0,r.jsx)("img",{src:a,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,r.jsx)("span",{className:n?"validationResultInfoSuccess":"validationResultInfoFail",children:l})]})}},412:function(e,a,n){"use strict";n.r(a);var r=n(85893),t=n(64459),l=n(41664),i=n.n(l),s=n(94742),u=n(96799),c=n(51172),o=n(68851),d={val1:"",val2:"",val3:"not email",checkVal:!1},v=[{path:"val1",ruleSet:["required",{rule:"length",greaterThan:8}]},{path:"val2",ruleSet:["required",{rule:"length",equalTo:5}]},{path:"val3",ruleSet:["required","email"]}];a.default=function(){var e=(0,t.c)({rules:v,initialFormData:d}),a=e.isValid,n=e.setPathValue,l=e.getValue,h=e.getError;return(0,r.jsxs)(o.Z,{header:"translations",codeUrl:["pages/customizations/translations.js","pages/_app.js"],children:[(0,r.jsxs)("p",{className:"infoParagraph",children:["Validation error messages of any rules can be customized in app by passing ",(0,r.jsx)("b",{children:"translations"})," param to"," ",(0,r.jsx)(i(),{className:"inner-link",href:"/library-api/react-validatable-form-provider",children:"ReactValidatableFormProvider"}),"."]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.Z,{error:!!h("val1"),helperText:h("val1")||" ",label:"val1 (requiredAndLengthGreaterThan)",type:"text",value:l("val1"),onChange:function(e){return n("val1",e.target.value)}})}),(0,r.jsx)("div",{children:(0,r.jsx)(s.Z,{error:!!h("val2"),helperText:h("val2")||" ",label:"val2 (requiredAndLengthEqualTo)",type:"text",value:l("val2"),onChange:function(e){return n("val2",e.target.value)}})}),(0,r.jsx)("div",{children:(0,r.jsx)(s.Z,{error:!!h("val3"),helperText:h("val3")||" ",label:"val3 (email)",type:"text",value:l("val3"),onChange:function(e){return n("val3",e.target.value)}})}),(0,r.jsx)(u.Z,{isValid:a}),(0,r.jsx)(c.Z,{currentRules:v})]})]})}},82670:function(e,a,n){"use strict";function r(e,a){return null!=a&&"undefined"!==typeof Symbol&&a[Symbol.hasInstance]?!!a[Symbol.hasInstance](e):e instanceof a}n.d(a,{Z:function(){return r}})}},function(e){e.O(0,[9774,2888,179],(function(){return a=45822,e(e.s=a);var a}));var a=e.O();_N_E=a}]);