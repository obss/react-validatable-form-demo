(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5471],{23508:function(e,t,n){"use strict";var r=n(91941);t.Z=void 0;var i=r(n(64938)),a=n(85893),u=(0,i.default)((0,a.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=u},82675:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/mui",function(){return n(34646)}])},42256:function(e,t,n){"use strict";var r=n(85893),i=n(82280),a=n(38895),u=n(22797),l=n(23508),stringifyWithFunction=function(e){var t="____PLACEHOLDER____",n=[];return JSON.stringify(e,function(e,r){return"function"==typeof r?(n.push(r),t):r instanceof RegExp?(n.push("/"+r.source+"/"),t):r},2).replace(RegExp('"'+t+'"',"g"),function(){return n.shift()})};t.Z=function(e){var t=e.currentRules,n=e.header;return(0,r.jsx)("div",{className:"currentRuleInfoDiv",children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(a.Z,{expandIcon:(0,r.jsx)(l.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,r.jsx)("span",{className:"currentRuleLabel",children:void 0===n?"Current Rules":n})}),(0,r.jsx)(u.Z,{children:(0,r.jsx)("span",{suppressHydrationWarning:!0,className:"currentRuleString",children:stringifyWithFunction(t)})})]})})}},86471:function(e,t,n){"use strict";var r=n(85893),stringifyWithFunction=function(e){var t="____PLACEHOLDER____",n=[];return JSON.stringify(e,function(e,r){return"function"==typeof r?(n.push(r),t):r},2).replace(RegExp('"'+t+'"',"g"),function(){return n.shift()})};t.Z=function(e){var t=e.formData;return(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"formDataString",children:stringifyWithFunction(t)})})}},29439:function(e,t,n){"use strict";var r=n(85893),i=n(59808);t.Z=function(e){var t,n=e.isValid,a="";return n?(t="".concat(i.O,"/valid.png"),a="valid"):(t="".concat(i.O,"/invalid.png"),a="invalid"),(0,r.jsxs)("div",{className:"validationResultDiv",children:[(0,r.jsx)("span",{children:"Validation Result: "}),(0,r.jsx)("img",{src:t,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,r.jsx)("span",{className:n?"validationResultInfoSuccess":"validationResultInfoFail",children:a})]})}},8072:function(e,t,n){"use strict";n.d(t,{Y:function(){return r}});var r=["Asia","Europe","North America","South America","Africa","Australia","Antarctica"]},34646:function(e,t,n){"use strict";n.r(t);var r=n(72253),i=n(14932),a=n(91309),u=n(85893),l=n(67294),s=n(64459),c=n(78466),o=n(37632),d=n(69417),f=n(64666),h=n(37645),x=n(8072),p=n(29439),m=n(42256),v=n(91611),V=n(86471),j=[{path:"textVal1",ruleSet:[{rule:"required"}]},{path:"textVal2",ruleSet:[{rule:"required"}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}];t.default=function(){var e=(0,s.c)({rules:j,hideBeforeSubmit:!0,showAfterBlur:!0,focusToErrorAfterSubmit:!0}),t=e.isValid,n=e.formData,_=e.setPathValue,g=e.setFormIsSubmitted,Z=e.setPathIsBlurred,S=e.getValue,E=e.getError,N=(0,a._)((0,l.useState)(!1),2),b=N[0],R=N[1],handleFormSubmit=function(){g()&&R(!0)};return(0,u.jsxs)(v.Z,{header:"Example Usage with MUI Components",codeUrl:"pages/examples/mui.js",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{children:(0,u.jsx)(c.Z,{error:!!E("textVal1"),helperText:E("textVal1")||" ",label:"Text1",type:"text",value:S("textVal1")||"",onChange:function(e){return _("textVal1",e.target.value)},onBlur:function(){return Z("textVal1")},id:"textVal1"})}),(0,u.jsx)("div",{children:(0,u.jsx)(c.Z,{error:!!E("textVal2"),helperText:E("textVal2")||" ",label:"Text2",type:"text",value:S("textVal2")||"",onChange:function(e){return _("textVal2",e.target.value)},onBlur:function(){return Z("textVal2")},id:"textVal2"})}),(0,u.jsx)("div",{children:(0,u.jsx)(c.Z,{error:!!E("numVal"),helperText:E("numVal")||" ",label:"Num Val",type:"number",value:S("numVal")||"",onChange:function(e){return _("numVal",e.target.value)},onBlur:function(){return Z("numVal")},id:"numVal"})}),(0,u.jsx)("div",{children:(0,u.jsx)(o.Z,{id:"selectVal",onBlur:function(){return Z("selectVal")},multiple:!0,value:S("selectVal")||[],onChange:function(e,t){_("selectVal",t)},options:x.Y,renderInput:function(e){return(0,u.jsx)(c.Z,(0,i._)((0,r._)({},e),{error:!!E("selectVal"),helperText:E("selectVal")||" ",label:"Select Val"}))}})}),(0,u.jsx)("div",{children:(0,u.jsx)(d.Z,{className:"mySubmitButton",variant:"contained",onClick:function(){return handleFormSubmit()},children:"Submit Form"})}),(0,u.jsx)(p.Z,{isValid:t}),(0,u.jsx)(m.Z,{currentRules:j})]}),(0,u.jsxs)(f.Z,{open:b,onClose:function(){return R(!1)},children:[(0,u.jsx)(h.Z,{children:"Form Data Submitted"}),(0,u.jsx)(V.Z,{formData:n})]})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=82675)}),_N_E=e.O()}]);