(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6568],{96540:function(l,e,a){"use strict";var t=a(64836);e.Z=void 0;var n=t(a(64938)),r=a(85893),i=(0,n.default)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");e.Z=i},41733:function(l,e,a){"use strict";var t=a(64836);e.Z=void 0;var n=t(a(64938)),r=a(85893),i=(0,n.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=i},84147:function(l,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customizations/apply-to-nulls",function(){return a(36385)}])},51172:function(l,e,a){"use strict";var t=a(82670),n=a(85893),r=a(74065),i=a(29618),u=a(47028),s=a(23508),o=function(l){var e="____PLACEHOLDER____",a=[],n=JSON.stringify(l,(function(l,n){return"function"===typeof n?(a.push(n),e):(0,t.Z)(n,RegExp)?(a.push("/"+n.source+"/"),e):n}),2);return n=n.replace(new RegExp('"'+e+'"',"g"),(function(){return a.shift()}))};e.Z=function(l){var e=l.currentRules,a=l.header,t=void 0===a?"Current Rules":a;return(0,n.jsx)("div",{className:"currentRuleInfoDiv",children:(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(i.Z,{expandIcon:(0,n.jsx)(s.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,n.jsx)("span",{className:"currentRuleLabel",children:t})}),(0,n.jsx)(u.Z,{children:(0,n.jsx)("span",{className:"currentRuleString",children:o(e)})})]})})}},96799:function(l,e,a){"use strict";var t=a(85893),n=a(25640);e.Z=function(l){var e,a=l.isValid,r="";return a?(e="".concat(n.O,"/valid.png"),r="valid"):(e="".concat(n.O,"/invalid.png"),r="invalid"),(0,t.jsxs)("div",{className:"validationResultDiv",children:[(0,t.jsx)("span",{children:"Validation Result: "}),(0,t.jsx)("img",{src:e,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,t.jsx)("span",{className:a?"validationResultInfoSuccess":"validationResultInfoFail",children:r})]})}},30994:function(l,e,a){"use strict";a.d(e,{Y:function(){return t}});var t=["Asia","Europe","North America","South America","Africa","Australia","Antarctica"]},36385:function(l,e,a){"use strict";a.r(e);var t=a(41799),n=a(69396),r=a(10797),i=a(85893),u=a(64459),s=a(69873),o=a(75084),c=a(30612),v=a(42821),d=a(96540),p=a(41733),h=a(30994),x=a(96799),f=a(51172),j=a(68851),y={listChild:["",""]},N=[{path:"val1",ruleSet:[{rule:"required",applyToNulls:!0}]},{path:"val2",ruleSet:[{rule:"number",equalTo:3,applyToNulls:!0}]},{path:"val3",ruleSet:[{rule:"length",equalTo:3,applyToNulls:!0}]},{path:"val4",ruleSet:[{rule:"listSize",equalTo:3,applyToNulls:!0}]},{path:"val5",ruleSet:[{rule:"date",applyToNulls:!0}]},{path:"val6",ruleSet:[{rule:"email",applyToNulls:!0}]},{path:"val7",ruleSet:[{rule:"url",applyToNulls:!0}]},{path:"val8",ruleSet:[{rule:"iban",applyToNulls:!0}]},{path:"val9",ruleSet:[{rule:"equality",equalTo:"aaa",applyToNulls:!0}]},{path:"val10",ruleSet:[{rule:"regex",regex:/a/,applyToNulls:!0}]},{listPath:"listChild",ruleSet:[{rule:"unique",applyToNulls:!0}]}];e.default=function(){var l=(0,u.c)({rules:N,initialFormData:y}),e=l.isValid,a=l.formData,m=l.setPathValue,T=l.getValue,g=l.getError,Z=null;return a.listChild&&a.listChild.length>0&&(Z=a.listChild.map((function(l,e){return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Z,{error:!!g("listChild{".concat(e,"}")),helperText:g("listChild{".concat(e,"}"))||" ",label:"unique",type:"text",value:T("listChild[".concat(e,"]"))||"",onChange:function(l){return m("listChild[".concat(e,"]"),l.target.value)}}),(0,i.jsxs)(o.Z,{className:"myDeleteButton",variant:"contained",onClick:function(){return function(l){var e=a.listChild.filter((function(e,a){return a!==l}));m("listChild",e)}(e)},children:[(0,i.jsx)("span",{className:"myShinkableButtonSpan",children:"Delete Element"}),(0,i.jsx)(p.Z,{className:"myShinkableButtonIcon"})]})]},e)}))),(0,i.jsxs)(j.Z,{header:"applyToNulls",codeUrl:"pages/customizations/apply-to-nulls.js",children:[(0,i.jsxs)("p",{className:"infoParagraph",children:["By default ",(0,i.jsx)("b",{children:"react-validatable-form"})," interprets ",(0,i.jsx)("b",{children:"undefined"}),", ",(0,i.jsx)("b",{children:"null"}),", ",(0,i.jsx)("b",{children:"empty string"})," ","or ",(0,i.jsx)("b",{children:"empty array"})," values as valid values. If you want any rule to be applied to these values,"," ",(0,i.jsx)("b",{children:"applyToNulls"})," parameter should be used."]}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!g("val1"),helperText:g("val1")||" ",label:"requiredApplyToNulls",type:"text",value:T("val1")||"",onChange:function(l){return m("val1",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!g("val2"),helperText:g("val2")||" ",label:"numberApplyToNulls",type:"number",value:T("val2")||"",onChange:function(l){return m("val2",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!g("val3"),helperText:g("val3")||" ",label:"lengthApplyToNulls",type:"text",value:T("val3")||"",onChange:function(l){return m("val3",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsx)(c.Z,{multiple:!0,value:T("val4")||[],onChange:function(l,e){m("val4",e)},options:h.Y,renderInput:function(l){return(0,i.jsx)(s.Z,(0,n.Z)((0,t.Z)({},l),{error:!!g("val4"),helperText:g("val4")||" ",label:"listSizeApplyToNulls"}))}})}),(0,i.jsx)("div",{children:(0,i.jsx)(v.$,{label:"dateApplyToNulls",inputFormat:"MM/dd/yyyy",value:T("val5")||null,onChange:function(l){return m("val5",l)},renderInput:function(l){return(0,i.jsx)(s.Z,(0,n.Z)((0,t.Z)({},l),{error:!!g("val5"),helperText:g("val5")||" "}))}})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!g("val6"),helperText:g("val6")||" ",label:"emailApplyToNulls",type:"text",value:T("val6")||"",onChange:function(l){return m("val6",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!g("val7"),helperText:g("val7")||" ",label:"urlApplyToNulls",type:"text",value:T("val7")||"",onChange:function(l){return m("val7",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!g("val8"),helperText:g("val8")||" ",label:"ibanApplyToNulls",type:"text",value:T("val8")||"",onChange:function(l){return m("val8",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!g("val9"),helperText:g("val9")||" ",label:"equalityApplyToNulls",type:"text",value:T("val9")||"",onChange:function(l){return m("val9",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.Z,{error:!!g("val10"),helperText:g("val10")||" ",label:"regexApplyToNulls",type:"text",value:T("val10")||"",onChange:function(l){return m("val10",l.target.value)}})}),(0,i.jsx)("div",{children:(0,i.jsxs)(o.Z,{className:"myAddButton",variant:"contained",onClick:function(){var l=a.listChild?(0,r.Z)(a.listChild):[];l.push(""),m("listChild",l)},children:[(0,i.jsx)("span",{className:"myShinkableButtonSpan",children:"Add New Element"}),(0,i.jsx)(d.Z,{className:"myShinkableButtonIcon"})]})}),(0,i.jsx)("div",{className:"formListField",children:Z}),(0,i.jsx)("div",{className:"errorInfoText",children:g("listChild")}),(0,i.jsx)(x.Z,{isValid:e}),(0,i.jsx)(f.Z,{currentRules:N})]})}}},function(l){l.O(0,[933,9774,2888,179],(function(){return e=84147,l(l.s=e);var e}));var e=l.O();_N_E=e}]);