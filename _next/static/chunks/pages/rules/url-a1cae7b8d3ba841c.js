(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4],{23508:function(e,n,a){"use strict";var r=a(64836);n.Z=void 0;var l=r(a(64938)),t=a(85893),i=(0,l.default)((0,t.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=i},76232:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules/url",function(){return a(14835)}])},51172:function(e,n,a){"use strict";var r=a(82670),l=a(85893),t=a(74065),i=a(29618),s=a(47028),u=a(23508),c=function(e){var n="____PLACEHOLDER____",a=[],l=JSON.stringify(e,(function(e,l){return"function"===typeof l?(a.push(l),n):(0,r.Z)(l,RegExp)?(a.push("/"+l.source+"/"),n):l}),2);return l=l.replace(new RegExp('"'+n+'"',"g"),(function(){return a.shift()}))};n.Z=function(e){var n=e.currentRules,a=e.header,r=void 0===a?"Current Rules":a;return(0,l.jsx)("div",{className:"currentRuleInfoDiv",children:(0,l.jsxs)(t.Z,{children:[(0,l.jsx)(i.Z,{expandIcon:(0,l.jsx)(u.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,l.jsx)("span",{className:"currentRuleLabel",children:r})}),(0,l.jsx)(s.Z,{children:(0,l.jsx)("span",{className:"currentRuleString",children:c(n)})})]})})}},96799:function(e,n,a){"use strict";var r=a(85893),l=a(25640);n.Z=function(e){var n,a=e.isValid,t="";return a?(n="".concat(l.O,"/valid.png"),t="valid"):(n="".concat(l.O,"/invalid.png"),t="invalid"),(0,r.jsxs)("div",{className:"validationResultDiv",children:[(0,r.jsx)("span",{children:"Validation Result: "}),(0,r.jsx)("img",{src:n,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,r.jsx)("span",{className:a?"validationResultInfoSuccess":"validationResultInfoFail",children:t})]})}},14835:function(e,n,a){"use strict";a.r(n);var r=a(85893),l=a(64459),t=a(68851),i=a(69873),s=a(96799),u=a(51172),c={val:"aa"},o=[{path:"val",ruleSet:[{rule:"required"},{rule:"url"}]}];n.default=function(){var e=(0,l.c)({rules:o,initialFormData:c}),n=e.isValid,a=e.setPathValue,d=e.getValue,v=e.getError;return(0,r.jsxs)(t.Z,{header:"url",codeUrl:"pages/rules/url.js",children:[(0,r.jsxs)("p",{className:"infoParagraph",children:[(0,r.jsx)("b",{children:"url"})," rule checks if the given value is a valid url."]}),(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{error:!!v("val"),helperText:v("val")||" ",label:"val",type:"text",value:d("val")||"",onChange:function(e){return a("val",e.target.value)}})}),(0,r.jsx)(s.Z,{isValid:n}),(0,r.jsx)(u.Z,{currentRules:o})]})}},82670:function(e,n,a){"use strict";function r(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](e):e instanceof n}a.d(n,{Z:function(){return r}})}},function(e){e.O(0,[9774,2888,179],(function(){return n=76232,e(e.s=n);var n}));var n=e.O();_N_E=n}]);