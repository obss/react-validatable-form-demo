(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9787],{23508:function(e,t,r){"use strict";var n=r(91941);t.Z=void 0;var a=n(r(64938)),l=r(85893),u=(0,a.default)((0,l.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=u},75027:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/set-rules",function(){return r(56957)}])},49072:function(e,t,r){"use strict";var n=r(85893),a=r(74065),l=r(29618),u=r(47028),i=r(23508),s=function(e){var t="____PLACEHOLDER____",r=[];return JSON.stringify(e,function(e,n){return"function"==typeof n?(r.push(n),t):n instanceof RegExp?(r.push("/"+n.source+"/"),t):n},2).replace(RegExp('"'+t+'"',"g"),function(){return r.shift()})};t.Z=function(e){var t=e.currentRules,r=e.header;return(0,n.jsx)("div",{className:"currentRuleInfoDiv",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(l.Z,{expandIcon:(0,n.jsx)(i.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,n.jsx)("span",{className:"currentRuleLabel",children:void 0===r?"Current Rules":r})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("span",{className:"currentRuleString",children:s(t)})})]})})}},6630:function(e,t,r){"use strict";var n=r(85893),a=function(e){var t="____PLACEHOLDER____",r=[];return JSON.stringify(e,function(e,n){return"function"==typeof n?(r.push(n),t):n},2).replace(RegExp('"'+t+'"',"g"),function(){return r.shift()})};t.Z=function(e){var t=e.formData;return(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"formDataString",children:a(t)})})}},73952:function(e,t,r){"use strict";var n=r(85893),a=r(365);t.Z=function(e){var t,r=e.isValid,l="";return r?(t="".concat(a.O,"/valid.png"),l="valid"):(t="".concat(a.O,"/invalid.png"),l="invalid"),(0,n.jsxs)("div",{className:"validationResultDiv",children:[(0,n.jsx)("span",{children:"Validation Result: "}),(0,n.jsx)("img",{src:t,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,n.jsx)("span",{className:r?"validationResultInfoSuccess":"validationResultInfoFail",children:l})]})}},75017:function(e,t,r){"use strict";r.d(t,{Y:function(){return n}});var n=["Asia","Europe","North America","South America","Africa","Australia","Antarctica"]},56957:function(e,t,r){"use strict";r.r(t);var n=r(41799),a=r(69396),l=r(828),u=r(85893),i=r(67294),s=r(64459),c=r(69873),o=r(30612),d=r(75084),h=r(29620),x=r(77745),f=r(75017),p=r(73952),V=r(49072),v=r(2386),m=r(6630),j=[{path:"textVal1",ruleSet:[{rule:"required"}]},{path:"textVal2",ruleSet:[{rule:"required"}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}],g=[{path:"textVal1",ruleSet:[{rule:"required"},{rule:"length",greaterThanOrEqualTo:10}]},{path:"textVal2",ruleSet:[{rule:"required"},{rule:"length",greaterThanOrEqualTo:15}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}],S=[{path:"textVal1",ruleSet:[{rule:"required"},{rule:"length",greaterThanOrEqualTo:13}]},{path:"textVal2",ruleSet:[{rule:"required"},{rule:"length",greaterThanOrEqualTo:2}]},{path:"numVal",ruleSet:[{rule:"required"}]},{path:"selectVal",ruleSet:[{rule:"required"}]}];t.default=function(){var e=(0,s.c)({initialFormData:{textVal1:"aaa",textVal2:"bbb",numVal:5,selectVal:["Europe"]},rules:j,focusToErrorAfterSubmit:!0}),t=e.isValid,r=e.formData,_=e.setPathValue,Z=e.setRules,E=e.setFormIsSubmitted,b=e.setPathIsBlurred,R=e.getValue,N=e.getError,T=(0,l.Z)((0,i.useState)(!1),2),q=T[0],C=T[1],O=(0,l.Z)((0,i.useState)(j),2),D=O[0],y=O[1],A=(0,l.Z)((0,i.useState)(0),2),w=A[0],I=A[1],k=function(){0===w?(Z(g),I(1),y(g)):1===w?(Z(S),I(2),y(S)):2===w&&(Z(j),I(0),y(j))},B=function(){E()&&C(!0)};return(0,u.jsxs)(v.Z,{header:"setRules",codeUrl:"pages/examples/set-rules.js",children:[(0,u.jsxs)("div",{children:['Click "Change Rule" button to set new rules',(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{children:(0,u.jsx)(c.Z,{error:!!N("textVal1"),helperText:N("textVal1")||" ",label:"Text1",type:"text",value:R("textVal1")||"",onChange:function(e){return _("textVal1",e.target.value)},onBlur:function(){return b("textVal1")},id:"textVal1"})}),(0,u.jsx)("div",{children:(0,u.jsx)(c.Z,{error:!!N("textVal2"),helperText:N("textVal2")||" ",label:"Text2",type:"text",value:R("textVal2")||"",onChange:function(e){return _("textVal2",e.target.value)},onBlur:function(){return b("textVal2")},id:"textVal2"})}),(0,u.jsx)("div",{children:(0,u.jsx)(c.Z,{error:!!N("numVal"),helperText:N("numVal")||" ",label:"Num Val",type:"number",value:R("numVal")||"",onChange:function(e){return _("numVal",e.target.value)},onBlur:function(){return b("numVal")},id:"numVal"})}),(0,u.jsx)("div",{children:(0,u.jsx)(o.Z,{id:"selectVal",onBlur:function(){return b("selectVal")},multiple:!0,value:R("selectVal")||[],onChange:function(e,t){_("selectVal",t)},options:f.Y,renderInput:function(e){return(0,u.jsx)(c.Z,(0,a.Z)((0,n.Z)({},e),{error:!!N("selectVal"),helperText:N("selectVal")||" ",label:"Select Val"}))}})}),(0,u.jsxs)("div",{children:[(0,u.jsx)(d.Z,{className:"mySubmitButton",variant:"contained",onClick:function(){return B()},children:"Submit Form"}),(0,u.jsx)(d.Z,{className:"mySubmitButton",variant:"contained",onClick:function(){return k()},children:"Change Rule"})]}),(0,u.jsx)(p.Z,{isValid:t}),(0,u.jsx)(V.Z,{currentRules:D})]}),(0,u.jsxs)(h.Z,{open:q,onClose:function(){return C(!1)},children:[(0,u.jsx)(x.Z,{children:"Form Data Submitted"}),(0,u.jsx)(m.Z,{formData:r})]})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=75027)}),_N_E=e.O()}]);