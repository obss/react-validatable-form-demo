(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7128],{23508:function(e,a,n){"use strict";var r=n(91941);a.Z=void 0;var l=r(n(64938)),t=n(85893),i=(0,l.default)((0,t.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");a.Z=i},17257:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules/custom-on-provider",function(){return n(71632)}])},51172:function(e,a,n){"use strict";var r=n(82670),l=n(85893),t=n(74065),i=n(29618),s=n(47028),u=n(23508),c=function(e){var a="____PLACEHOLDER____",n=[],l=JSON.stringify(e,(function(e,l){return"function"===typeof l?(n.push(l),a):(0,r.Z)(l,RegExp)?(n.push("/"+l.source+"/"),a):l}),2);return l=l.replace(new RegExp('"'+a+'"',"g"),(function(){return n.shift()}))};a.Z=function(e){var a=e.currentRules,n=e.header,r=void 0===n?"Current Rules":n;return(0,l.jsx)("div",{className:"currentRuleInfoDiv",children:(0,l.jsxs)(t.Z,{children:[(0,l.jsx)(i.Z,{expandIcon:(0,l.jsx)(u.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,l.jsx)("span",{className:"currentRuleLabel",children:r})}),(0,l.jsx)(s.Z,{children:(0,l.jsx)("span",{className:"currentRuleString",children:c(a)})})]})})}},96799:function(e,a,n){"use strict";var r=n(85893),l=n(25640);a.Z=function(e){var a,n=e.isValid,t="";return n?(a="".concat(l.O,"/valid.png"),t="valid"):(a="".concat(l.O,"/invalid.png"),t="invalid"),(0,r.jsxs)("div",{className:"validationResultDiv",children:[(0,r.jsx)("span",{children:"Validation Result: "}),(0,r.jsx)("img",{src:a,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,r.jsx)("span",{className:n?"validationResultInfoSuccess":"validationResultInfoFail",children:t})]})}},71632:function(e,a,n){"use strict";n.r(a);var r=n(85893),l=n(64459),t=n(41664),i=n.n(t),s=n(68851),u=n(69873),c=n(96799),o=n(51172),d={val:"b",val2:"s",val3:"d"},v=[{path:"val",ruleSet:[{rule:"required"},{rule:"myCustomRule"}]},{path:"val2",ruleSet:[{rule:"required"},{rule:"myCustomRule2"}]},{path:"val3",ruleSet:[{rule:"required"},{rule:"myCustomRule3"}]}];a.default=function(){var e=(0,l.c)({rules:v,initialFormData:d}),a=e.isValid,n=e.setPathValue,t=e.getValue,h=e.getError;return(0,r.jsxs)(s.Z,{header:"custom on provider",codeUrl:["pages/rules/custom-on-provider.js","pages/_app.js"],children:[(0,r.jsxs)("p",{className:"infoParagraph",children:["Custom rules can be defined as a function and passed to"," ",(0,r.jsx)(i(),{className:"inner-link",href:"/library-api/react-validatable-form-provider",children:"ReactValidatableFormProvider"})," ","with a unique name and can be used anywhere in the app."]}),(0,r.jsx)("div",{children:(0,r.jsx)(u.Z,{error:!!h("val"),helperText:h("val")||" ",label:"val",type:"text",value:t("val")||"",onChange:function(e){return n("val",e.target.value)}})}),(0,r.jsx)("div",{children:(0,r.jsx)(u.Z,{error:!!h("val2"),helperText:h("val2")||" ",label:"val2",type:"text",value:t("val2")||"",onChange:function(e){return n("val2",e.target.value)}})}),(0,r.jsx)("div",{children:(0,r.jsx)(u.Z,{error:!!h("val3"),helperText:h("val3")||" ",label:"val3",type:"text",value:t("val3")||"",onChange:function(e){return n("val3",e.target.value)}})}),(0,r.jsx)(c.Z,{isValid:a}),(0,r.jsx)(o.Z,{currentRules:v})]})}},82670:function(e,a,n){"use strict";function r(e,a){return null!=a&&"undefined"!==typeof Symbol&&a[Symbol.hasInstance]?!!a[Symbol.hasInstance](e):e instanceof a}n.d(a,{Z:function(){return r}})}},function(e){e.O(0,[9774,2888,179],(function(){return a=17257,e(e.s=a);var a}));var a=e.O();_N_E=a}]);