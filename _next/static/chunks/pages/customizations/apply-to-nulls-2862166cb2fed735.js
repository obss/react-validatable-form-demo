(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6568],{96540:function(l,e,a){"use strict";var t=a(91941);e.Z=void 0;var n=t(a(64938)),r=a(85893),i=(0,n.default)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");e.Z=i},41733:function(l,e,a){"use strict";var t=a(91941);e.Z=void 0;var n=t(a(64938)),r=a(85893),i=(0,n.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=i},84147:function(l,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customizations/apply-to-nulls",function(){return a(95367)}])},49072:function(l,e,a){"use strict";var t=a(85893),n=a(74065),r=a(29618),i=a(47028),u=a(23508),s=function(l){var e="____PLACEHOLDER____",a=[];return JSON.stringify(l,function(l,t){return"function"==typeof t?(a.push(t),e):t instanceof RegExp?(a.push("/"+t.source+"/"),e):t},2).replace(RegExp('"'+e+'"',"g"),function(){return a.shift()})};e.Z=function(l){var e=l.currentRules,a=l.header;return(0,t.jsx)("div",{className:"currentRuleInfoDiv",children:(0,t.jsxs)(n.Z,{children:[(0,t.jsx)(r.Z,{expandIcon:(0,t.jsx)(u.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,t.jsx)("span",{className:"currentRuleLabel",children:void 0===a?"Current Rules":a})}),(0,t.jsx)(i.Z,{children:(0,t.jsx)("span",{suppressHydrationWarning:!0,className:"currentRuleString",children:s(e)})})]})})}},73952:function(l,e,a){"use strict";var t=a(85893),n=a(365);e.Z=function(l){var e,a=l.isValid,r="";return a?(e="".concat(n.O,"/valid.png"),r="valid"):(e="".concat(n.O,"/invalid.png"),r="invalid"),(0,t.jsxs)("div",{className:"validationResultDiv",children:[(0,t.jsx)("span",{children:"Validation Result: "}),(0,t.jsx)("img",{src:e,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,t.jsx)("span",{className:a?"validationResultInfoSuccess":"validationResultInfoFail",children:r})]})}},75017:function(l,e,a){"use strict";a.d(e,{Y:function(){return t}});var t=["Asia","Europe","North America","South America","Africa","Australia","Antarctica"]},95367:function(l,e,a){"use strict";a.r(e);var t=a(41799),n=a(69396),r=a(36305),i=a(85893),u=a(64459),s=a(69873),o=a(75084),c=a(30612),v=a(81712),p=a(96540),d=a(41733),h=a(75017),x=a(73952),f=a(49072),j=a(2386),y={listChild:["",""]},N=[{path:"val1",ruleSet:[{rule:"required",applyToNulls:!0}]},{path:"val2",ruleSet:[{rule:"number",equalTo:3,applyToNulls:!0}]},{path:"val3",ruleSet:[{rule:"length",equalTo:3,applyToNulls:!0}]},{path:"val4",ruleSet:[{rule:"listSize",equalTo:3,applyToNulls:!0}]},{path:"val5",ruleSet:[{rule:"date",applyToNulls:!0}]},{path:"val6",ruleSet:[{rule:"email",applyToNulls:!0}]},{path:"val7",ruleSet:[{rule:"url",applyToNulls:!0}]},{path:"val8",ruleSet:[{rule:"iban",applyToNulls:!0}]},{path:"val9",ruleSet:[{rule:"equality",equalTo:"aaa",applyToNulls:!0}]},{path:"val10",ruleSet:[{rule:"regex",regex:/a/,applyToNulls:!0}]},{listPath:"listChild",ruleSet:[{rule:"unique",applyToNulls:!0}]}];e.default=function(){var l=(0,u.c)({rules:N,initialFormData:y}),e=l.isValid,a=l.formData,m=l.setPathValue,g=l.getValue,T=l.getError,Z=null,b=function(l){m("listChild",a.listChild.filter(function(e,a){return a!==l}))};return a.listChild&&a.listChild.length>0&&(Z=a.listChild.map(function(l,e){return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Z,{error:!!T("listChild{".concat(e,"}")),helperText:T("listChild{".concat(e,"}"))||" ",label:"unique",type:"text",value:g("listChild[".concat(e,"]"))||"",onChange:function(l){return m("listChild[".concat(e,"]"),l.target.value)}}),(0,i.jsxs)(o.Z,{className:"myDeleteButton",variant:"contained",onClick:function(){return b(e)},children:[(0,i.jsx)("span",{className:"myShinkableButtonSpan",children:"Delete Element"}),(0,i.jsx)(d.Z,{className:"myShinkableButtonIcon"})]})]},e)})),(0,i.jsxs)(j.Z,{header:"applyToNulls",codeUrl:"pages/customizations/apply-to-nulls.js",children:[(0,i.jsxs)("p",{className:"infoParagraph",children:["By default ",(0,i.jsx)("b",{children:"react-validatable-form"})," interprets ",(0,i.jsx)("b",{children:"undefined"}),", ",(0,i.jsx)("b",{children:"null"}),", ",(0,i.jsx)("b",{children:"empty string"})," ","or ",(0,i.jsx)("b",{children:"empty array"})," values as valid values. If you want any rule to be applied to these values,"," ",(0,i.jsx)("b",{children:"applyToNulls"})," parameter should be used."]}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!T("val1"),helperText:T("val1")||" ",label:"requiredApplyToNulls",type:"text",value:g("val1")||"",onChange:function(l){return m("val1",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!T("val2"),helperText:T("val2")||" ",label:"numberApplyToNulls",type:"number",value:g("val2")||"",onChange:function(l){return m("val2",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!T("val3"),helperText:T("val3")||" ",label:"lengthApplyToNulls",type:"text",value:g("val3")||"",onChange:function(l){return m("val3",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsx)(c.Z,{multiple:!0,value:g("val4")||[],onChange:function(l,e){m("val4",e)},options:h.Y,renderInput:function(l){return(0,i.jsx)(s.Z,(0,n.Z)((0,t.Z)({},l),{error:!!T("val4"),helperText:T("val4")||" ",label:"listSizeApplyToNulls"}))}})}),(0,i.jsx)("div",{children:(0,i.jsx)(v.$,{label:"dateApplyToNulls",inputFormat:"MM/dd/yyyy",value:g("val5")||null,onChange:function(l){return m("val5",l)},renderInput:function(l){return(0,i.jsx)(s.Z,(0,n.Z)((0,t.Z)({},l),{error:!!T("val5"),helperText:T("val5")||" "}))}})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!T("val6"),helperText:T("val6")||" ",label:"emailApplyToNulls",type:"text",value:g("val6")||"",onChange:function(l){return m("val6",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!T("val7"),helperText:T("val7")||" ",label:"urlApplyToNulls",type:"text",value:g("val7")||"",onChange:function(l){return m("val7",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!T("val8"),helperText:T("val8")||" ",label:"ibanApplyToNulls",type:"text",value:g("val8")||"",onChange:function(l){return m("val8",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!T("val9"),helperText:T("val9")||" ",label:"equalityApplyToNulls",type:"text",value:g("val9")||"",onChange:function(l){return m("val9",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!T("val10"),helperText:T("val10")||" ",label:"regexApplyToNulls",type:"text",value:g("val10")||"",onChange:function(l){return m("val10",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsxs)(o.Z,{className:"myAddButton",variant:"contained",onClick:function(){var l=a.listChild?(0,r.Z)(a.listChild):[];l.push(""),m("listChild",l)},children:[(0,i.jsx)("span",{className:"myShinkableButtonSpan",children:"Add New Element"}),(0,i.jsx)(p.Z,{className:"myShinkableButtonIcon"})]})}),(0,i.jsx)("div",{className:"formListField",children:Z}),(0,i.jsx)("div",{className:"errorInfoText",children:T("listChild")}),(0,i.jsx)(x.Z,{isValid:e}),(0,i.jsx)(f.Z,{currentRules:N})]})}}},function(l){l.O(0,[2601,9774,2888,179],function(){return l(l.s=84147)}),_N_E=l.O()}]);