(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7843],{23508:function(e,r,n){"use strict";var a=n(64836);r.Z=void 0;var l=a(n(64938)),s=n(85893),t=(0,l.default)((0,s.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");r.Z=t},92300:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules/regex",function(){return n(88042)}])},51172:function(e,r,n){"use strict";var a=n(82670),l=n(85893),s=n(74065),t=n(29618),i=n(47028),u=n(23508),c=function(e){var r="____PLACEHOLDER____",n=[],l=JSON.stringify(e,(function(e,l){return"function"===typeof l?(n.push(l),r):(0,a.Z)(l,RegExp)?(n.push("/"+l.source+"/"),r):l}),2);return l=l.replace(new RegExp('"'+r+'"',"g"),(function(){return n.shift()}))};r.Z=function(e){var r=e.currentRules,n=e.header,a=void 0===n?"Current Rules":n;return(0,l.jsx)("div",{className:"currentRuleInfoDiv",children:(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(t.Z,{expandIcon:(0,l.jsx)(u.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,l.jsx)("span",{className:"currentRuleLabel",children:a})}),(0,l.jsx)(i.Z,{children:(0,l.jsx)("span",{className:"currentRuleString",children:c(r)})})]})})}},96799:function(e,r,n){"use strict";var a=n(85893),l=n(25640);r.Z=function(e){var r,n=e.isValid,s="";return n?(r="".concat(l.O,"/valid.png"),s="valid"):(r="".concat(l.O,"/invalid.png"),s="invalid"),(0,a.jsxs)("div",{className:"validationResultDiv",children:[(0,a.jsx)("span",{children:"Validation Result: "}),(0,a.jsx)("img",{src:r,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,a.jsx)("span",{className:n?"validationResultInfoSuccess":"validationResultInfoFail",children:s})]})}},88042:function(e,r,n){"use strict";n.r(r);var a=n(85893),l=n(64459),s=n(68851),t=n(69873),i=n(96799),u=n(51172),c={val:"ab",val2:"a1"},o=[{path:"val",ruleSet:[{rule:"required"},{rule:"regex",regex:/ab+c/}]},{path:"val2",ruleSet:[{rule:"required"},{rule:"regex",regex:/\D\d\D/}]}];r.default=function(){var e=(0,l.c)({rules:o,initialFormData:c}),r=e.isValid,n=e.setPathValue,d=e.getValue,v=e.getError;return(0,a.jsxs)(s.Z,{header:"regex",codeUrl:"pages/rules/regex.js",children:[(0,a.jsxs)("p",{className:"infoParagraph",children:[(0,a.jsx)("b",{children:"regex"})," rule checks if the given value is a valid string according to given"," ",(0,a.jsx)("a",{className:"outsideUrlSpan",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions",target:"_blank",rel:"noreferrer",children:"regex"}),"."]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(t.Z,{error:!!v("val"),helperText:v("val")||" ",label:"val",type:"text",value:d("val")||"",onChange:function(e){return n("val",e.target.value)}}),(0,a.jsx)("span",{className:"regexInfo",children:"regex: /ab+c/"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(t.Z,{error:!!v("val2"),helperText:v("val2")||" ",label:"val2",type:"text",value:d("val2")||"",onChange:function(e){return n("val2",e.target.value)}}),(0,a.jsx)("span",{className:"regexInfo",children:"regex: /\\D\\d\\D/"})]}),(0,a.jsx)(i.Z,{isValid:r}),(0,a.jsx)(u.Z,{currentRules:o})]})}},82670:function(e,r,n){"use strict";function a(e,r){return null!=r&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?!!r[Symbol.hasInstance](e):e instanceof r}n.d(r,{Z:function(){return a}})}},function(e){e.O(0,[9774,2888,179],(function(){return r=92300,e(e.s=r);var r}));var r=e.O();_N_E=r}]);