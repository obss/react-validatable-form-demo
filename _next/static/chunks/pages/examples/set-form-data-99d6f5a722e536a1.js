(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1213],{26205:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/set-form-data",function(){return n(11947)}])},51172:function(e,t,n){"use strict";var r=n(82670),a=n(85893),l=n(82280),u=n(38895),i=n(22797),s=n(23508),c=function(e){var t="____PLACEHOLDER____",n=[],a=JSON.stringify(e,(function(e,a){return"function"===typeof a?(n.push(a),t):(0,r.Z)(a,RegExp)?(n.push("/"+a.source+"/"),t):a}),2);return a=a.replace(new RegExp('"'+t+'"',"g"),(function(){return n.shift()}))};t.Z=function(e){var t=e.currentRules,n=e.header,r=void 0===n?"Current Rules":n;return(0,a.jsx)("div",{className:"currentRuleInfoDiv",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(u.Z,{expandIcon:(0,a.jsx)(s.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,a.jsx)("span",{className:"currentRuleLabel",children:r})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)("span",{className:"currentRuleString",children:c(t)})})]})})}},84103:function(e,t,n){"use strict";var r=n(85893),a=function(e){var t="____PLACEHOLDER____",n=[],r=JSON.stringify(e,(function(e,r){return"function"===typeof r?(n.push(r),t):r}),2);return r=r.replace(new RegExp('"'+t+'"',"g"),(function(){return n.shift()}))};t.Z=function(e){var t=e.formData;return(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"formDataString",children:a(t)})})}},96799:function(e,t,n){"use strict";var r=n(85893),a=(n(25675),n(25640));t.Z=function(e){var t,n=e.isValid,l="";return n?(t="".concat(a.O,"/valid.png"),l="valid"):(t="".concat(a.O,"/invalid.png"),l="invalid"),(0,r.jsxs)("div",{className:"validationResultDiv",children:[(0,r.jsx)("span",{children:"Validation Result: "}),(0,r.jsx)("img",{src:t,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,r.jsx)("span",{className:n?"validationResultInfoSuccess":"validationResultInfoFail",children:l})]})}},30994:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var r=["Asia","Europe","North America","South America","Africa","Australia","Antarctica"]},11947:function(e,t,n){"use strict";n.r(t);var r=n(41799),a=n(69396),l=n(85893),u=n(67294),i=n(64459),s=n(29208),c=n.n(s),o=n(94742),d=n(35545),f=n(83321),x=n(64666),h=n(37645),m=n(30994),p=n(96799),v=n(51172),V=n(68851),j=n(84103),_=[{path:"textVal1",ruleSet:[{rule:"required"}]},{path:"textVal2",ruleSet:[{rule:"required"}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}];t.default=function(){var e=(0,i.c)({rules:_,focusToErrorAfterSubmit:!0}),t=e.isValid,n=e.validationError,s=e.formData,g=e.setPathValue,Z=e.setFormData,E=e.setFormIsSubmitted,S=e.setPathIsBlurred,b=(0,u.useState)(!1),N=b[0],R=b[1],T=(0,u.useState)(0),w=T[0],C=T[1];(0,u.useEffect)((function(){setTimeout((function(){Z({textVal1:"aa",textVal2:"bb",numVal:5,selectVal:["Europe","South America"]}),C(1)}),2e3)}),[]),(0,u.useEffect)((function(){setTimeout((function(){Z({textVal1:"aa",numVal:8,selectVal:["Europe"]}),C(2)}),4e3)}),[]);return(0,l.jsxs)(V.Z,{header:"setFormData",codeUrl:"pages/examples/set-form-data.js",children:[(0,l.jsxs)("div",{children:[0===w?"Please wait for 2 seconds...":1===w?"Wait for another 2 seconds...":"Thanks for waiting 4 seconds",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("div",{children:(0,l.jsx)(o.Z,{error:!!c()(n,"textVal1"),helperText:c()(n,"textVal1")||" ",label:"Text1",type:"text",value:c()(s,"textVal1")||"",onChange:function(e){return g("textVal1",e.target.value)},onBlur:function(){return S("textVal1")},id:"textVal1"})}),(0,l.jsx)("div",{children:(0,l.jsx)(o.Z,{error:!!c()(n,"textVal2"),helperText:c()(n,"textVal2")||" ",label:"Text2",type:"text",value:c()(s,"textVal2")||"",onChange:function(e){return g("textVal2",e.target.value)},onBlur:function(){return S("textVal2")},id:"textVal2"})}),(0,l.jsx)("div",{children:(0,l.jsx)(o.Z,{error:!!c()(n,"numVal"),helperText:c()(n,"numVal")||" ",label:"Num Val",type:"number",value:c()(s,"numVal")||"",onChange:function(e){return g("numVal",e.target.value)},onBlur:function(){return S("numVal")},id:"numVal"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{id:"selectVal",onBlur:function(){return S("selectVal")},multiple:!0,value:c()(s,"selectVal")||[],onChange:function(e,t){g("selectVal",t)},options:m.Y,renderInput:function(e){return(0,l.jsx)(o.Z,(0,a.Z)((0,r.Z)({},e),{error:!!c()(n,"selectVal"),helperText:c()(n,"selectVal")||" ",label:"Select Val"}))}})}),(0,l.jsx)("div",{children:(0,l.jsx)(f.Z,{className:"mySubmitButton",variant:"contained",onClick:function(){E()&&R(!0)},children:"Submit Form"})}),(0,l.jsx)(p.Z,{isValid:t}),(0,l.jsx)(v.Z,{currentRules:_})]}),(0,l.jsxs)(x.Z,{open:N,onClose:function(){return R(!1)},children:[(0,l.jsx)(h.Z,{children:"Form Data Submitted"}),(0,l.jsx)(j.Z,{formData:s})]})]})}}},function(e){e.O(0,[3780,9774,2888,179],(function(){return t=26205,e(e.s=t);var t}));var t=e.O();_N_E=t}]);