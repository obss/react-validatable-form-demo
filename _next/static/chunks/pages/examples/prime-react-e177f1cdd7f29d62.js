(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[835],{54729:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/prime-react",function(){return a(15138)}])},51172:function(e,t,a){"use strict";var n=a(82670),r=a(85893),l=a(82280),i=a(38895),s=a(22797),u=a(23508),c=function(e){var t="____PLACEHOLDER____",a=[],r=JSON.stringify(e,(function(e,r){return"function"===typeof r?(a.push(r),t):(0,n.Z)(r,RegExp)?(a.push("/"+r.source+"/"),t):r}),2);return r=r.replace(new RegExp('"'+t+'"',"g"),(function(){return a.shift()}))};t.Z=function(e){var t=e.currentRules,a=e.header,n=void 0===a?"Current Rules":a;return(0,r.jsx)("div",{className:"currentRuleInfoDiv",children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{expandIcon:(0,r.jsx)(u.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,r.jsx)("span",{className:"currentRuleLabel",children:n})}),(0,r.jsx)(s.Z,{children:(0,r.jsx)("span",{className:"currentRuleString",children:c(t)})})]})})}},84103:function(e,t,a){"use strict";var n=a(85893),r=function(e){var t="____PLACEHOLDER____",a=[],n=JSON.stringify(e,(function(e,n){return"function"===typeof n?(a.push(n),t):n}),2);return n=n.replace(new RegExp('"'+t+'"',"g"),(function(){return a.shift()}))};t.Z=function(e){var t=e.formData;return(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"formDataString",children:r(t)})})}},96799:function(e,t,a){"use strict";var n=a(85893),r=(a(25675),a(25640));t.Z=function(e){var t,a=e.isValid,l="";return a?(t="".concat(r.O,"/valid.png"),l="valid"):(t="".concat(r.O,"/invalid.png"),l="invalid"),(0,n.jsxs)("div",{className:"validationResultDiv",children:[(0,n.jsx)("span",{children:"Validation Result: "}),(0,n.jsx)("img",{src:t,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,n.jsx)("span",{className:a?"validationResultInfoSuccess":"validationResultInfoFail",children:l})]})}},30994:function(e,t,a){"use strict";a.d(t,{Y:function(){return n}});var n=["Asia","Europe","North America","South America","Africa","Australia","Antarctica"]},15138:function(e,t,a){"use strict";a.r(t);var n=a(85893),r=a(67294),l=a(64459),i=a(25600),s=a(91176),u=a(99403),c=a(97465),o=a(63861),d=a(30994),m=a(96799),h=a(51172),x=a(68851),f=a(84103),v=[{path:"textVal1",ruleSet:[{rule:"required"}]},{path:"textVal2",ruleSet:[{rule:"required"}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}],p=function(e){var t=document.getElementById(e);if(t)if("INPUT"===t.tagName.toUpperCase())t.focus();else for(var a=t.getElementsByTagName("INPUT"),n=0;n<a.length;++n){return void a[n].focus()}else console.warn("Dom element with id ".concat(e," could not be found"))};t.default=function(){var e=(0,l.c)({rules:v,hideBeforeSubmit:!0,showAfterBlur:!0,focusToErrorAfterSubmit:!0,elementFocusHandler:p}),t=e.isValid,a=e.formData,V=e.setPathValue,j=e.setFormIsSubmitted,N=e.setPathIsBlurred,g=e.getValue,_=e.getError,E=(0,r.useState)(!1),R=E[0],S=E[1];return(0,n.jsxs)(x.Z,{header:"Example Usage with PrimeReact Components",codeUrl:"pages/examples/prime-react.js",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"my-prime-div",children:[(0,n.jsx)("label",{htmlFor:"textVal1",children:"Text1"}),(0,n.jsx)(i.o,{className:_("textVal1")&&"p-invalid",value:g("textVal1")||"",onChange:function(e){return V("textVal1",e.target.value)},onBlur:function(){return N("textVal1")},id:"textVal1"}),(0,n.jsx)("small",{className:"p-error",children:_("textVal1")||" "})]}),(0,n.jsxs)("div",{className:"my-prime-div",children:[(0,n.jsx)("label",{htmlFor:"textVal2",children:"Text2"}),(0,n.jsx)(i.o,{className:_("textVal2")&&"p-invalid",value:g("textVal2")||"",onChange:function(e){return V("textVal2",e.target.value)},onBlur:function(){return N("textVal2")},id:"textVal2"}),(0,n.jsx)("small",{className:"p-error",children:_("textVal2")||" "})]}),(0,n.jsxs)("div",{className:"my-prime-div",children:[(0,n.jsx)("label",{htmlFor:"numVal",children:"Num Val"}),(0,n.jsx)(s.R,{className:_("numVal")&&"p-invalid",value:g("numVal")||"",onChange:function(e){return V("numVal",e.value)},onBlur:function(){return N("numVal")},id:"numVal"}),(0,n.jsx)("small",{className:"p-error",children:_("numVal")||" "})]}),(0,n.jsxs)("div",{className:"my-prime-div",children:[(0,n.jsx)("label",{htmlFor:"selectVal",children:"Select Val"}),(0,n.jsx)(c.N,{className:_("selectVal")&&"p-invalid",value:g("selectVal")||[],options:d.Y,onChange:function(e){return V("selectVal",e.value)},onBlur:function(){return N("selectVal")},id:"selectVal"}),(0,n.jsx)("small",{className:"p-error",children:_("selectVal")||" "})]}),(0,n.jsx)("div",{children:(0,n.jsx)(u.z,{className:"mySubmitButton",onClick:function(){j()&&S(!0)},children:"Submit Form"})}),(0,n.jsx)(m.Z,{isValid:t}),(0,n.jsx)(h.Z,{currentRules:v})]}),(0,n.jsx)(o.V,{header:"Form Data Submitted",visible:R,modal:!0,style:{width:"50vw"},onHide:function(){return S(!1)},onMaskClick:function(){return S(!1)},draggable:!1,resizable:!1,children:(0,n.jsx)(f.Z,{formData:a})})]})}}},function(e){e.O(0,[1669,9423,9774,2888,179],(function(){return t=54729,e(e.s=t);var t}));var t=e.O();_N_E=t}]);