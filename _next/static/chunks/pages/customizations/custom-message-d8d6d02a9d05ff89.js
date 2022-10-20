(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9210],{23508:function(e,a,s){"use strict";var t=s(91941);a.Z=void 0;var n=t(s(64938)),l=s(85893),r=(0,n.default)((0,l.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");a.Z=r},21443:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customizations/custom-message",function(){return s(90049)}])},51172:function(e,a,s){"use strict";var t=s(82670),n=s(85893),l=s(74065),r=s(29618),u=s(47028),i=s(23508),o=function(e){var a="____PLACEHOLDER____",s=[],n=JSON.stringify(e,(function(e,n){return"function"===typeof n?(s.push(n),a):(0,t.Z)(n,RegExp)?(s.push("/"+n.source+"/"),a):n}),2);return n=n.replace(new RegExp('"'+a+'"',"g"),(function(){return s.shift()}))};a.Z=function(e){var a=e.currentRules,s=e.header,t=void 0===s?"Current Rules":s;return(0,n.jsx)("div",{className:"currentRuleInfoDiv",children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(r.Z,{expandIcon:(0,n.jsx)(i.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,n.jsx)("span",{className:"currentRuleLabel",children:t})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("span",{className:"currentRuleString",children:o(a)})})]})})}},96799:function(e,a,s){"use strict";var t=s(85893),n=s(25640);a.Z=function(e){var a,s=e.isValid,l="";return s?(a="".concat(n.O,"/valid.png"),l="valid"):(a="".concat(n.O,"/invalid.png"),l="invalid"),(0,t.jsxs)("div",{className:"validationResultDiv",children:[(0,t.jsx)("span",{children:"Validation Result: "}),(0,t.jsx)("img",{src:a,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,t.jsx)("span",{className:s?"validationResultInfoSuccess":"validationResultInfoFail",children:l})]})}},90049:function(e,a,s){"use strict";s.r(a);var t=s(85893),n=s(64459),l=s(69873),r=s(96799),u=s(51172),i=s(68851),o=(s(67294),{val1:"a",val2:"a",val3:"s",val4:"sdd",checkVal:!1}),c=[{path:"val1",ruleSet:["required",{rule:"length",greaterThan:8,customMessage:"This field's length is ${value}, however it should be greater than ${comparisonValue}"}]},{path:"val2",ruleSet:["required",{rule:"length",equalTo:5,customMessage:function(e){return e.value>e.comparisonValue?"This field's length should be ".concat(e.comparisonValue,", your input's (").concat(e.value,") is greater than this value"):"This field's length should be ".concat(e.comparisonValue,", your input's (").concat(e.value,") is less than this value")}}]},{path:"val3",ruleSet:["required",{rule:"myCustomRule2",customMessage:"Hello, this is myCustomRule2 customMessage. This field is not valid, because text ${value} should either include letter 'a' or its length should be greater than 4"}]},{path:"val4",ruleSet:[{rule:"required",customMessage:(0,t.jsxs)("span",{children:["This field is ",(0,t.jsx)("b",{children:" required "})]})},{rule:"length",equalTo:6,customMessage:function(e){return(0,t.jsxs)("span",{children:["This field","'","s length should be ",(0,t.jsxs)("b",{children:[e.comparisonValue," "]}),", your input length is"," ",(0,t.jsxs)("b",{children:[" ",e.value," "]})]})}}]}];a.default=function(){var e=(0,n.c)({rules:c,initialFormData:o}),a=e.isValid,s=e.setPathValue,h=e.getValue,d=e.getError;return(0,t.jsxs)(i.Z,{header:"customMessage",codeUrl:"pages/customizations/custom-message.js",children:[(0,t.jsxs)("p",{className:"infoParagraph",children:["Validation error message of a rule can be customized by passing ",(0,t.jsx)("b",{children:"customMessage"})," param to the rule."]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{children:(0,t.jsx)(l.Z,{error:!!d("val1"),helperText:d("val1")||" ",label:"val1 (customMessage as string)",type:"text",value:h("val1")||"",onChange:function(e){return s("val1",e.target.value)}})}),(0,t.jsx)("div",{children:(0,t.jsx)(l.Z,{error:!!d("val2"),helperText:d("val2")||" ",label:"val2 (customMessage as function)",type:"text",value:h("val2")||"",onChange:function(e){return s("val2",e.target.value)}})}),(0,t.jsx)("div",{children:(0,t.jsx)(l.Z,{error:!!d("val3"),helperText:d("val3")||" ",label:"val3 (customMessage for custom rule)",type:"text",value:h("val3")||"",onChange:function(e){return s("val3",e.target.value)}})}),(0,t.jsx)("div",{children:(0,t.jsx)(l.Z,{error:!!d("val4"),helperText:d("val4")||" ",label:"val4 (customMessage for jsx)",type:"text",value:h("val4")||"",onChange:function(e){return s("val4",e.target.value)}})}),(0,t.jsx)(r.Z,{isValid:a}),(0,t.jsx)(u.Z,{currentRules:c})]})]})}},82670:function(e,a,s){"use strict";function t(e,a){return null!=a&&"undefined"!==typeof Symbol&&a[Symbol.hasInstance]?!!a[Symbol.hasInstance](e):e instanceof a}s.d(a,{Z:function(){return t}})}},function(e){e.O(0,[9774,2888,179],(function(){return a=21443,e(e.s=a);var a}));var a=e.O();_N_E=a}]);