(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8812],{23508:function(e,t,r){"use strict";var n=r(91941);t.Z=void 0;var a=n(r(64938)),l=r(85893),u=(0,a.default)((0,l.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=u},74066:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/validation-error-original-result",function(){return r(65887)}])},49072:function(e,t,r){"use strict";var n=r(85893),a=r(74065),l=r(29618),u=r(47028),i=r(23508),s=function(e){var t="____PLACEHOLDER____",r=[];return JSON.stringify(e,function(e,n){return"function"==typeof n?(r.push(n),t):n instanceof RegExp?(r.push("/"+n.source+"/"),t):n},2).replace(RegExp('"'+t+'"',"g"),function(){return r.shift()})};t.Z=function(e){var t=e.currentRules,r=e.header;return(0,n.jsx)("div",{className:"currentRuleInfoDiv",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(l.Z,{expandIcon:(0,n.jsx)(i.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,n.jsx)("span",{className:"currentRuleLabel",children:void 0===r?"Current Rules":r})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("span",{suppressHydrationWarning:!0,className:"currentRuleString",children:s(t)})})]})})}},6630:function(e,t,r){"use strict";var n=r(85893),a=function(e){var t="____PLACEHOLDER____",r=[];return JSON.stringify(e,function(e,n){return"function"==typeof n?(r.push(n),t):n},2).replace(RegExp('"'+t+'"',"g"),function(){return r.shift()})};t.Z=function(e){var t=e.formData;return(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"formDataString",children:a(t)})})}},73952:function(e,t,r){"use strict";var n=r(85893),a=r(365);t.Z=function(e){var t,r=e.isValid,l="";return r?(t="".concat(a.O,"/valid.png"),l="valid"):(t="".concat(a.O,"/invalid.png"),l="invalid"),(0,n.jsxs)("div",{className:"validationResultDiv",children:[(0,n.jsx)("span",{children:"Validation Result: "}),(0,n.jsx)("img",{src:t,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,n.jsx)("span",{className:r?"validationResultInfoSuccess":"validationResultInfoFail",children:l})]})}},75017:function(e,t,r){"use strict";r.d(t,{Y:function(){return n}});var n=["Asia","Europe","North America","South America","Africa","Australia","Antarctica"]},65887:function(e,t,r){"use strict";r.r(t);var n=r(41799),a=r(69396),l=r(828),u=r(85893),i=r(67294),s=r(64459),o=r(69873),c=r(30612),d=r(75084),h=r(29620),x=r(77745),f=r(75017),p=r(73952),v=r(49072),V=r(2386),m=r(6630),g=[{path:"textVal1",ruleSet:[{rule:"required"}]},{path:"textVal2",ruleSet:[{rule:"required"}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}],j=[{path:"textVal1",ruleSet:[{rule:"required"},{rule:"length",greaterThanOrEqualTo:10}]},{path:"textVal2",ruleSet:[{rule:"required"},{rule:"length",greaterThanOrEqualTo:15}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}],E=[{path:"textVal1",ruleSet:[{rule:"required"},{rule:"length",greaterThanOrEqualTo:13}]},{path:"textVal2",ruleSet:[{rule:"required"},{rule:"length",greaterThanOrEqualTo:25}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}];t.default=function(){var e=(0,s.c)({rules:g,hideBeforeSubmit:!0,showAfterBlur:!0,focusToErrorAfterSubmit:!0}),t=e.isValid,r=e.validationError,S=e.validationErrorOriginalResult,Z=e.formData,_=e.setPathValue,R=e.setFormDataAndRules,T=e.setFormIsSubmitted,b=e.setPathIsBlurred,N=e.getValue,q=e.getError,O=(0,l.Z)((0,i.useState)(!1),2),C=O[0],A=O[1],w=(0,l.Z)((0,i.useState)(g),2),D=w[0],y=w[1],B=(0,l.Z)((0,i.useState)(0),2),I=B[0],P=B[1];(0,i.useEffect)(function(){setTimeout(function(){R({textVal1:"aa",textVal2:"bb",numVal:5,selectVal:["Europe","South America"]},j),P(1),y(j)},2e3)},[]),(0,i.useEffect)(function(){setTimeout(function(){R({textVal1:"aa",numVal:8,selectVal:["Europe"]},E),P(2),y(E)},4e3)},[]);var k=function(){T()&&A(!0)};return(0,u.jsxs)(V.Z,{header:"validationErrorOriginalResult",codeUrl:"pages/examples/validation-error-original-result.js",children:[(0,u.jsxs)("div",{children:[0===I?"Please wait for 2 seconds...":1===I?"Wait for another 2 seconds...":"Thanks for waiting 4 seconds",(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{children:(0,u.jsx)(o.Z,{error:!!q("textVal1"),helperText:q("textVal1")||" ",label:"Text1",type:"text",value:N("textVal1")||"",onChange:function(e){return _("textVal1",e.target.value)},onBlur:function(){return b("textVal1")},id:"textVal1"})}),(0,u.jsx)("div",{children:(0,u.jsx)(o.Z,{error:!!q("textVal2"),helperText:q("textVal2")||" ",label:"Text2",type:"text",value:N("textVal2")||"",onChange:function(e){return _("textVal2",e.target.value)},onBlur:function(){return b("textVal2")},id:"textVal2"})}),(0,u.jsx)("div",{children:(0,u.jsx)(o.Z,{error:!!q("numVal"),helperText:q("numVal")||" ",label:"Num Val",type:"number",value:N("numVal")||"",onChange:function(e){return _("numVal",e.target.value)},onBlur:function(){return b("numVal")},id:"numVal"})}),(0,u.jsx)("div",{children:(0,u.jsx)(c.Z,{id:"selectVal",onBlur:function(){return b("selectVal")},multiple:!0,value:N("selectVal")||[],onChange:function(e,t){_("selectVal",t)},options:f.Y,renderInput:function(e){return(0,u.jsx)(o.Z,(0,a.Z)((0,n.Z)({},e),{error:!!q("selectVal"),helperText:q("selectVal")||" ",label:"Select Val"}))}})}),(0,u.jsx)("div",{children:(0,u.jsx)(d.Z,{className:"mySubmitButton",variant:"contained",onClick:function(){return k()},children:"Submit Form"})}),(0,u.jsx)(p.Z,{isValid:t}),(0,u.jsx)(v.Z,{currentRules:r,header:"Current validationError"}),(0,u.jsx)(v.Z,{currentRules:S,header:"Current validationErrorOriginalResult"}),(0,u.jsx)(v.Z,{currentRules:D})]}),(0,u.jsxs)(h.Z,{open:C,onClose:function(){return A(!1)},children:[(0,u.jsx)(x.Z,{children:"Form Data Submitted"}),(0,u.jsx)(m.Z,{formData:Z})]})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=74066)}),_N_E=e.O()}]);