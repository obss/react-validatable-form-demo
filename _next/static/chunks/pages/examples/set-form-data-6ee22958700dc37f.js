(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1213],{26205:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/set-form-data",function(){return n(75952)}])},42256:function(e,t,n){"use strict";var r=n(85893),a=n(82280),i=n(38895),u=n(22797),l=n(23508),stringifyWithFunction=function(e){var t="____PLACEHOLDER____",n=[];return JSON.stringify(e,function(e,r){return"function"==typeof r?(n.push(r),t):r instanceof RegExp?(n.push("/"+r.source+"/"),t):r},2).replace(RegExp('"'+t+'"',"g"),function(){return n.shift()})};t.Z=function(e){var t=e.currentRules,n=e.header;return(0,r.jsx)("div",{className:"currentRuleInfoDiv",children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(i.Z,{expandIcon:(0,r.jsx)(l.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,r.jsx)("span",{className:"currentRuleLabel",children:void 0===n?"Current Rules":n})}),(0,r.jsx)(u.Z,{children:(0,r.jsx)("span",{suppressHydrationWarning:!0,className:"currentRuleString",children:stringifyWithFunction(t)})})]})})}},86471:function(e,t,n){"use strict";var r=n(85893),stringifyWithFunction=function(e){var t="____PLACEHOLDER____",n=[];return JSON.stringify(e,function(e,r){return"function"==typeof r?(n.push(r),t):r},2).replace(RegExp('"'+t+'"',"g"),function(){return n.shift()})};t.Z=function(e){var t=e.formData;return(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"formDataString",children:stringifyWithFunction(t)})})}},29439:function(e,t,n){"use strict";var r=n(85893),a=n(59808);t.Z=function(e){var t,n=e.isValid,i="";return n?(t="".concat(a.O,"/valid.png"),i="valid"):(t="".concat(a.O,"/invalid.png"),i="invalid"),(0,r.jsxs)("div",{className:"validationResultDiv",children:[(0,r.jsx)("span",{children:"Validation Result: "}),(0,r.jsx)("img",{src:t,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,r.jsx)("span",{className:n?"validationResultInfoSuccess":"validationResultInfoFail",children:i})]})}},8072:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var r=["Asia","Europe","North America","South America","Africa","Australia","Antarctica"]},75952:function(e,t,n){"use strict";n.r(t);var r=n(72253),a=n(14932),i=n(91309),u=n(85893),l=n(67294),s=n(64459),c=n(29208),o=n.n(c),d=n(78466),f=n(37632),x=n(69417),h=n(64666),m=n(37645),p=n(8072),v=n(29439),V=n(42256),j=n(91611),_=n(86471),g=[{path:"textVal1",ruleSet:[{rule:"required"}]},{path:"textVal2",ruleSet:[{rule:"required"}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}];t.default=function(){var e=(0,s.c)({rules:g,focusToErrorAfterSubmit:!0}),t=e.isValid,n=e.validationError,c=e.formData,S=e.setPathValue,b=e.setFormData,E=e.setFormIsSubmitted,Z=e.setPathIsBlurred,N=(0,i._)((0,l.useState)(!1),2),R=N[0],y=N[1],F=(0,i._)((0,l.useState)(0),2),T=F[0],C=F[1];(0,l.useEffect)(function(){setTimeout(function(){b({textVal1:"aa",textVal2:"bb",numVal:5,selectVal:["Europe","South America"]}),C(1)},2e3)},[]),(0,l.useEffect)(function(){setTimeout(function(){b({textVal1:"aa",numVal:8,selectVal:["Europe"]}),C(2)},4e3)},[]);var handleFormSubmit=function(){E()&&y(!0)};return(0,u.jsxs)(j.Z,{header:"setFormData",codeUrl:"pages/examples/set-form-data.js",children:[(0,u.jsxs)("div",{children:[0===T?"Please wait for 2 seconds...":1===T?"Wait for another 2 seconds...":"Thanks for waiting 4 seconds",(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{children:(0,u.jsx)(d.Z,{error:!!o()(n,"textVal1"),helperText:o()(n,"textVal1")||" ",label:"Text1",type:"text",value:o()(c,"textVal1")||"",onChange:function(e){return S("textVal1",e.target.value)},onBlur:function(){return Z("textVal1")},id:"textVal1"})}),(0,u.jsx)("div",{children:(0,u.jsx)(d.Z,{error:!!o()(n,"textVal2"),helperText:o()(n,"textVal2")||" ",label:"Text2",type:"text",value:o()(c,"textVal2")||"",onChange:function(e){return S("textVal2",e.target.value)},onBlur:function(){return Z("textVal2")},id:"textVal2"})}),(0,u.jsx)("div",{children:(0,u.jsx)(d.Z,{error:!!o()(n,"numVal"),helperText:o()(n,"numVal")||" ",label:"Num Val",type:"number",value:o()(c,"numVal")||"",onChange:function(e){return S("numVal",e.target.value)},onBlur:function(){return Z("numVal")},id:"numVal"})}),(0,u.jsx)("div",{children:(0,u.jsx)(f.Z,{id:"selectVal",onBlur:function(){return Z("selectVal")},multiple:!0,value:o()(c,"selectVal")||[],onChange:function(e,t){S("selectVal",t)},options:p.Y,renderInput:function(e){return(0,u.jsx)(d.Z,(0,a._)((0,r._)({},e),{error:!!o()(n,"selectVal"),helperText:o()(n,"selectVal")||" ",label:"Select Val"}))}})}),(0,u.jsx)("div",{children:(0,u.jsx)(x.Z,{className:"mySubmitButton",variant:"contained",onClick:function(){return handleFormSubmit()},children:"Submit Form"})}),(0,u.jsx)(v.Z,{isValid:t}),(0,u.jsx)(V.Z,{currentRules:g})]}),(0,u.jsxs)(h.Z,{open:R,onClose:function(){return y(!1)},children:[(0,u.jsx)(m.Z,{children:"Form Data Submitted"}),(0,u.jsx)(_.Z,{formData:c})]})]})}}},function(e){e.O(0,[4041,9774,2888,179],function(){return e(e.s=26205)}),_N_E=e.O()}]);