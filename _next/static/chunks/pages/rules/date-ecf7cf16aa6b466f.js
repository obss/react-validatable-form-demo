(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5140],{9410:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules/date",function(){return a(67344)}])},42256:function(e,n,a){"use strict";var t=a(85893),s=a(82280),i=a(38895),r=a(22797),l=a(23508),stringifyWithFunction=function(e){var n="____PLACEHOLDER____",a=[];return JSON.stringify(e,function(e,t){return"function"==typeof t?(a.push(t),n):t instanceof RegExp?(a.push("/"+t.source+"/"),n):t},2).replace(RegExp('"'+n+'"',"g"),function(){return a.shift()})};n.Z=function(e){var n=e.currentRules,a=e.header;return(0,t.jsx)("div",{className:"currentRuleInfoDiv",children:(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(i.Z,{expandIcon:(0,t.jsx)(l.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,t.jsx)("span",{className:"currentRuleLabel",children:void 0===a?"Current Rules":a})}),(0,t.jsx)(r.Z,{children:(0,t.jsx)("span",{suppressHydrationWarning:!0,className:"currentRuleString",children:stringifyWithFunction(n)})})]})})}},29439:function(e,n,a){"use strict";var t=a(85893),s=a(59808);n.Z=function(e){var n,a=e.isValid,i="";return a?(n="".concat(s.O,"/valid.png"),i="valid"):(n="".concat(s.O,"/invalid.png"),i="invalid"),(0,t.jsxs)("div",{className:"validationResultDiv",children:[(0,t.jsx)("span",{children:"Validation Result: "}),(0,t.jsx)("img",{src:n,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,t.jsx)("span",{className:a?"validationResultInfoSuccess":"validationResultInfoFail",children:i})]})}},12842:function(e,n,a){"use strict";a.d(n,{q:function(){return t}});var t=["equalTo","lessThan","lessThanOrEqualTo","greaterThan","greaterThanOrEqualTo","notEqualTo"]},67344:function(e,n,a){"use strict";a.r(n);var t=a(72253),s=a(14932),i=a(91309),r=a(4586),l=a(85893),u=a(67294),o=a(64459),c=a(53457),d=a(58843),h=a(85071),p=a(12842),m=a(91611),v=a(78466),f=a(2935),x=a(17389),g=a(37632),j=a(29439),_=a(42256),R=new Date,N=new Date;N.setDate(N.getDate()-1);var b={rule:"date"};b[p.q[0]]=R;var C=[{path:"val",ruleSet:["required",b],dependantPaths:["comparisonValue"]}],Z={val:N,ruleOption:p.q[0],comparisonValue:R};n.default=function(){var e=(0,o.c)({rules:C,initialFormData:Z}),n=e.isValid,a=e.setPathValue,N=e.setRules,b=e.getValue,O=e.getError,T=(0,i._)((0,u.useState)(C),2),y=T[0],S=T[1],w=(0,i._)((0,u.useState)(p.q[0]),2),E=w[0],F=w[1],V=(0,i._)((0,u.useState)(!1),2),k=V[0],D=V[1],q=(0,i._)((0,u.useState)(!1),2),I=q[0],P=q[1],updateRules=function(e,n,a){var t=JSON.parse(JSON.stringify(C)),s=(0,r._)(t[0].ruleSet),i={rule:"date"};n&&(e?i[n]=function(e){return e.comparisonValue}:i[n]=R),a&&(i.withTime=!0),s.splice(1,1,i),t[0].ruleSet=s,S(t),N(t)},handleSetIsFunc=function(e){updateRules(e,E,I),D(e)},handleRuleOptionChange=function(e){updateRules(k,e,I),F(e)},handleWithTimeChange=function(e){updateRules(k,E,e),P(e)},M=I?f.x:x.M,W=I?"MM/dd/yyyy HH:mm":"MM/dd/yyyy";return(0,l.jsxs)(m.Z,{header:"date",codeUrl:"pages/rules/date.js",children:[(0,l.jsxs)("p",{className:"infoParagraph",children:[(0,l.jsx)("b",{children:"date"})," rule checks if the given value is a valid date. If ",(0,l.jsx)("b",{children:"withTime"})," parameter is set, it compares hours and minutes, too. ",(0,l.jsx)("b",{children:p.q.join(", ")})," parameters are used to make comparisons with given comparison values."]}),(0,l.jsxs)("div",{className:"comparisonDiv",children:[(0,l.jsx)(M,{label:"val",inputFormat:W,value:b("val"),onChange:function(e){return a("val",e)},slotProps:{textField:{error:!!O("val"),helperText:O("val")||" "}}}),(0,l.jsx)(g.Z,{value:E,onChange:function(e,n){handleRuleOptionChange(n)},options:p.q,disableClearable:!1,renderInput:function(e){return(0,l.jsx)(v.Z,(0,s._)((0,t._)({},e),{label:"ruleOption"}))}}),k?(0,l.jsx)(M,{label:"comparisonValue",inputFormat:W,value:b("comparisonValue"),onChange:function(e){return a("comparisonValue",e)},slotProps:{textField:{className:"comparisonDateComponent"}}}):(0,l.jsx)(M,{disabled:!0,label:"comparisonValue",inputFormat:W,value:R,onChange:function(){},slotProps:{textField:{className:"comparisonDateComponent"}}}),(0,l.jsx)(c.Z,{className:"checkboxOnRight",children:(0,l.jsx)(d.Z,{control:(0,l.jsx)(h.Z,{checked:k,onChange:function(e){return handleSetIsFunc(e.target.checked)}}),label:"as Function"})})]}),(0,l.jsx)("div",{className:"comparisonDiv",children:(0,l.jsx)(c.Z,{className:"checkboxOnRight",children:(0,l.jsx)(d.Z,{control:(0,l.jsx)(h.Z,{checked:I,onChange:function(e){return handleWithTimeChange(e.target.checked)}}),label:"withTime"})})}),(0,l.jsx)(j.Z,{isValid:n}),(0,l.jsx)(_.Z,{currentRules:y})]})}}},function(e){e.O(0,[5720,6646,9774,2888,179],function(){return e(e.s=9410)}),_N_E=e.O()}]);