(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5471],{23508:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var a=r(n(64938)),l=n(85893),u=(0,a.default)((0,l.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=u},82675:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/mui",function(){return n(34233)}])},51172:function(e,t,n){"use strict";var r=n(82670),a=n(85893),l=n(74065),u=n(29618),i=n(47028),s=n(23508),c=function(e){var t="____PLACEHOLDER____",n=[],a=JSON.stringify(e,(function(e,a){return"function"===typeof a?(n.push(a),t):(0,r.Z)(a,RegExp)?(n.push("/"+a.source+"/"),t):a}),2);return a=a.replace(new RegExp('"'+t+'"',"g"),(function(){return n.shift()}))};t.Z=function(e){var t=e.currentRules,n=e.header,r=void 0===n?"Current Rules":n;return(0,a.jsx)("div",{className:"currentRuleInfoDiv",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(u.Z,{expandIcon:(0,a.jsx)(s.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,a.jsx)("span",{className:"currentRuleLabel",children:r})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)("span",{className:"currentRuleString",children:c(t)})})]})})}},84103:function(e,t,n){"use strict";var r=n(85893),a=function(e){var t="____PLACEHOLDER____",n=[],r=JSON.stringify(e,(function(e,r){return"function"===typeof r?(n.push(r),t):r}),2);return r=r.replace(new RegExp('"'+t+'"',"g"),(function(){return n.shift()}))};t.Z=function(e){var t=e.formData;return(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"formDataString",children:a(t)})})}},96799:function(e,t,n){"use strict";var r=n(85893),a=n(25640);t.Z=function(e){var t,n=e.isValid,l="";return n?(t="".concat(a.O,"/valid.png"),l="valid"):(t="".concat(a.O,"/invalid.png"),l="invalid"),(0,r.jsxs)("div",{className:"validationResultDiv",children:[(0,r.jsx)("span",{children:"Validation Result: "}),(0,r.jsx)("img",{src:t,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,r.jsx)("span",{className:n?"validationResultInfoSuccess":"validationResultInfoFail",children:l})]})}},30994:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var r=["Asia","Europe","North America","South America","Africa","Australia","Antarctica"]},34233:function(e,t,n){"use strict";n.r(t);var r=n(41799),a=n(69396),l=n(85893),u=n(67294),i=n(64459),s=n(69873),c=n(30612),o=n(75084),d=n(29620),f=n(77745),x=n(30994),h=n(96799),p=n(51172),v=n(68851),m=n(84103),V=[{path:"textVal1",ruleSet:[{rule:"required"}]},{path:"textVal2",ruleSet:[{rule:"required"}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}];t.default=function(){var e=(0,i.c)({rules:V,hideBeforeSubmit:!0,showAfterBlur:!0,focusToErrorAfterSubmit:!0}),t=e.isValid,n=e.formData,j=e.setPathValue,_=e.setFormIsSubmitted,Z=e.setPathIsBlurred,g=e.getValue,S=e.getError,b=(0,u.useState)(!1),E=b[0],N=b[1];return(0,l.jsxs)(v.Z,{header:"Example Usage with MUI Components",codeUrl:"pages/examples/mui.js",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.Z,{error:!!S("textVal1"),helperText:S("textVal1")||" ",label:"Text1",type:"text",value:g("textVal1")||"",onChange:function(e){return j("textVal1",e.target.value)},onBlur:function(){return Z("textVal1")},id:"textVal1"})}),(0,l.jsx)("div",{children:(0,l.jsx)(s.Z,{error:!!S("textVal2"),helperText:S("textVal2")||" ",label:"Text2",type:"text",value:g("textVal2")||"",onChange:function(e){return j("textVal2",e.target.value)},onBlur:function(){return Z("textVal2")},id:"textVal2"})}),(0,l.jsx)("div",{children:(0,l.jsx)(s.Z,{error:!!S("numVal"),helperText:S("numVal")||" ",label:"Num Val",type:"number",value:g("numVal")||"",onChange:function(e){return j("numVal",e.target.value)},onBlur:function(){return Z("numVal")},id:"numVal"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c.Z,{id:"selectVal",onBlur:function(){return Z("selectVal")},multiple:!0,value:g("selectVal")||[],onChange:function(e,t){j("selectVal",t)},options:x.Y,renderInput:function(e){return(0,l.jsx)(s.Z,(0,a.Z)((0,r.Z)({},e),{error:!!S("selectVal"),helperText:S("selectVal")||" ",label:"Select Val"}))}})}),(0,l.jsx)("div",{children:(0,l.jsx)(o.Z,{className:"mySubmitButton",variant:"contained",onClick:function(){_()&&N(!0)},children:"Submit Form"})}),(0,l.jsx)(h.Z,{isValid:t}),(0,l.jsx)(p.Z,{currentRules:V})]}),(0,l.jsxs)(d.Z,{open:E,onClose:function(){return N(!1)},children:[(0,l.jsx)(f.Z,{children:"Form Data Submitted"}),(0,l.jsx)(m.Z,{formData:n})]})]})}},82670:function(e,t,n){"use strict";function r(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):e instanceof t}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[9774,2888,179],(function(){return t=82675,e(e.s=t);var t}));var t=e.O();_N_E=t}]);