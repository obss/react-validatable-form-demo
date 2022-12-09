(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5140],{9410:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules/date",function(){return a(51376)}])},49072:function(e,n,a){"use strict";var t=a(85893),r=a(74065),s=a(29618),i=a(47028),l=a(23508),u=function(e){var n="____PLACEHOLDER____",a=[];return JSON.stringify(e,function(e,t){return"function"==typeof t?(a.push(t),n):t instanceof RegExp?(a.push("/"+t.source+"/"),n):t},2).replace(RegExp('"'+n+'"',"g"),function(){return a.shift()})};n.Z=function(e){var n=e.currentRules,a=e.header;return(0,t.jsx)("div",{className:"currentRuleInfoDiv",children:(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(s.Z,{expandIcon:(0,t.jsx)(l.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,t.jsx)("span",{className:"currentRuleLabel",children:void 0===a?"Current Rules":a})}),(0,t.jsx)(i.Z,{children:(0,t.jsx)("span",{className:"currentRuleString",children:u(n)})})]})})}},73952:function(e,n,a){"use strict";var t=a(85893),r=a(365);n.Z=function(e){var n,a=e.isValid,s="";return a?(n="".concat(r.O,"/valid.png"),s="valid"):(n="".concat(r.O,"/invalid.png"),s="invalid"),(0,t.jsxs)("div",{className:"validationResultDiv",children:[(0,t.jsx)("span",{children:"Validation Result: "}),(0,t.jsx)("img",{src:n,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,t.jsx)("span",{className:a?"validationResultInfoSuccess":"validationResultInfoFail",children:s})]})}},39564:function(e,n,a){"use strict";a.d(n,{q:function(){return t}});var t=["equalTo","lessThan","lessThanOrEqualTo","greaterThan","greaterThanOrEqualTo","notEqualTo"]},51376:function(e,n,a){"use strict";a.r(n);var t=a(41799),r=a(69396),s=a(828),i=a(36305),l=a(85893),u=a(67294),c=a(64459),o=a(22416),d=a(22841),h=a(31362),p=a(39564),f=a(2386),v=a(69873),m=a(4101),x=a(81712),j=a(30612),Z=a(73952),g=a(49072),N=new Date,_=new Date;_.setDate(_.getDate()-1);var b={rule:"date"};b[p.q[0]]=N;var R=[{path:"val",ruleSet:["required",b],dependantPaths:["comparisonValue"]}],O={val:_,ruleOption:p.q[0],comparisonValue:N};n.default=function(){var e=(0,c.c)({rules:R,initialFormData:O}),n=e.isValid,a=e.setPathValue,_=e.setRules,b=e.getValue,T=e.getError,w=(0,s.Z)((0,u.useState)(R),2),C=w[0],E=w[1],V=(0,s.Z)((0,u.useState)(p.q[0]),2),k=V[0],D=V[1],S=(0,s.Z)((0,u.useState)(!1),2),q=S[0],y=S[1],I=(0,s.Z)((0,u.useState)(!1),2),F=I[0],P=I[1],M=function(e,n,a){var t=JSON.parse(JSON.stringify(R)),r=(0,i.Z)(t[0].ruleSet),s={rule:"date"};n&&(e?s[n]=function(e){return e.comparisonValue}:s[n]=N),a&&(s.withTime=!0),r.splice(1,1,s),t[0].ruleSet=r,E(t),_(t)},H=function(e){M(e,k,F),y(e)},J=function(e){M(q,e,F),D(e)},L=function(e){M(q,k,e),P(e)},X=F?m.x:x.$,A=F?"MM/dd/yyyy HH:mm":"MM/dd/yyyy";return(0,l.jsxs)(f.Z,{header:"date",codeUrl:"pages/rules/date.js",children:[(0,l.jsxs)("p",{className:"infoParagraph",children:[(0,l.jsx)("b",{children:"date"})," rule checks if the given value is a valid date. If ",(0,l.jsx)("b",{children:"withTime"})," parameter is set, it compares hours and minutes, too. ",(0,l.jsx)("b",{children:p.q.join(", ")})," parameters are used to make comparisons with given comparison values."]}),(0,l.jsxs)("div",{className:"comparisonDiv",children:[(0,l.jsx)(X,{label:"val",inputFormat:A,value:b("val"),onChange:function(e){return a("val",e)},renderInput:function(e){return(0,l.jsx)(v.Z,(0,r.Z)((0,t.Z)({},e),{error:!!T("val"),helperText:T("val")||" "}))}}),(0,l.jsx)(j.Z,{value:k,onChange:function(e,n){J(n)},options:p.q,disableClearable:!1,renderInput:function(e){return(0,l.jsx)(v.Z,(0,r.Z)((0,t.Z)({},e),{label:"ruleOption"}))}}),q?(0,l.jsx)(X,{label:"comparisonValue",inputFormat:A,value:b("comparisonValue"),onChange:function(e){return a("comparisonValue",e)},renderInput:function(e){return(0,l.jsx)(v.Z,(0,t.Z)({className:"comparisonDateComponent"},e))}}):(0,l.jsx)(X,{disabled:!0,label:"comparisonValue",inputFormat:A,value:N,onChange:function(){},renderInput:function(e){return(0,l.jsx)(v.Z,(0,t.Z)({className:"comparisonDateComponent"},e))}}),(0,l.jsx)(o.Z,{className:"checkboxOnRight",children:(0,l.jsx)(d.Z,{control:(0,l.jsx)(h.Z,{checked:q,onChange:function(e){return H(e.target.checked)}}),label:"as Function"})})]}),(0,l.jsx)("div",{className:"comparisonDiv",children:(0,l.jsx)(o.Z,{className:"checkboxOnRight",children:(0,l.jsx)(d.Z,{control:(0,l.jsx)(h.Z,{checked:F,onChange:function(e){return L(e.target.checked)}}),label:"withTime"})})}),(0,l.jsx)(Z.Z,{isValid:n}),(0,l.jsx)(g.Z,{currentRules:C})]})}}},function(e){e.O(0,[2601,7918,9774,2888,179],function(){return e(e.s=9410)}),_N_E=e.O()}]);