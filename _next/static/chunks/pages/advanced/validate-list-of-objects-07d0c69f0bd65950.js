(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7682],{96540:function(e,t,n){"use strict";var i=n(91941);t.Z=void 0;var l=i(n(64938)),s=n(85893),a=(0,l.default)((0,s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=a},41733:function(e,t,n){"use strict";var i=n(91941);t.Z=void 0;var l=i(n(64938)),s=n(85893),a=(0,l.default)((0,s.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=a},23508:function(e,t,n){"use strict";var i=n(91941);t.Z=void 0;var l=i(n(64938)),s=n(85893),a=(0,l.default)((0,s.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=a},6409:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/advanced/validate-list-of-objects",function(){return n(42387)}])},42256:function(e,t,n){"use strict";var i=n(85893),l=n(82280),s=n(38895),a=n(22797),r=n(23508),stringifyWithFunction=function(e){var t="____PLACEHOLDER____",n=[];return JSON.stringify(e,function(e,i){return"function"==typeof i?(n.push(i),t):i instanceof RegExp?(n.push("/"+i.source+"/"),t):i},2).replace(RegExp('"'+t+'"',"g"),function(){return n.shift()})};t.Z=function(e){var t=e.currentRules,n=e.header;return(0,i.jsx)("div",{className:"currentRuleInfoDiv",children:(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(s.Z,{expandIcon:(0,i.jsx)(r.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,i.jsx)("span",{className:"currentRuleLabel",children:void 0===n?"Current Rules":n})}),(0,i.jsx)(a.Z,{children:(0,i.jsx)("span",{suppressHydrationWarning:!0,className:"currentRuleString",children:stringifyWithFunction(t)})})]})})}},86471:function(e,t,n){"use strict";var i=n(85893),stringifyWithFunction=function(e){var t="____PLACEHOLDER____",n=[];return JSON.stringify(e,function(e,i){return"function"==typeof i?(n.push(i),t):i},2).replace(RegExp('"'+t+'"',"g"),function(){return n.shift()})};t.Z=function(e){var t=e.formData;return(0,i.jsx)("div",{children:(0,i.jsx)("span",{className:"formDataString",children:stringifyWithFunction(t)})})}},29439:function(e,t,n){"use strict";var i=n(85893),l=n(59808);t.Z=function(e){var t,n=e.isValid,s="";return n?(t="".concat(l.O,"/valid.png"),s="valid"):(t="".concat(l.O,"/invalid.png"),s="invalid"),(0,i.jsxs)("div",{className:"validationResultDiv",children:[(0,i.jsx)("span",{children:"Validation Result: "}),(0,i.jsx)("img",{src:t,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,i.jsx)("span",{className:n?"validationResultInfoSuccess":"validationResultInfoFail",children:s})]})}},42387:function(e,t,n){"use strict";n.r(t);var i=n(91309),l=n(4586),s=n(85893),a=n(67294),r=n(64459),u=n(41664),c=n.n(u),d=n(85071),o=n(78466),h=n(69417),f=n(96540),b=n(41733),v=n(64666),m=n(37645),y=n(29439),x=n(42256),p=n(91611),k=n(86471),disableSubkey2=function(e,t){return e.disableAllSubkey2Rule||e.listChild[t].disableSubkey2Rule},j=[{listPath:"listChild",subRules:[{path:"subkey1",ruleSet:["required",{rule:"length",greaterThan:3}]},{path:"subkey2",ruleSet:[{rule:"required",disableIf:disableSubkey2},{rule:"number",greaterThan:5,disableIf:disableSubkey2}]},{path:"subkey3",ruleSet:["required"],elementId:"subkey3ElementId"}],dependantPaths:["disableAllSubkey2Rule"]},{path:"listChild",ruleSet:["required",{rule:"listSize",greaterThan:2}],elementId:"listErrorFocusElement"}];t.default=function(){var e=(0,r.c)({rules:j,initialFormData:{listChild:[{id:1}]},hideBeforeSubmit:!0,showAfterBlur:!0,focusToErrorAfterSubmit:!0}),t=e.isValid,n=e.formData,u=e.setPathValue,C=e.setFormIsSubmitted,g=e.setPathIsBlurred,S=e.getValue,_=e.getError,Z=(0,i._)((0,a.useState)(2),2),E=Z[0],N=Z[1],R=(0,i._)((0,a.useState)(!1),2),I=R[0],w=R[1],D=null,handleAddElement=function(){var e=(0,l._)(n.listChild);e.push({id:E}),N(E+1),u("listChild",e)},handleDeleteElement=function(e){u("listChild",n.listChild.filter(function(t){return t.id!==e}))};return n.listChild&&n.listChild.length>0&&(D=n.listChild.map(function(e,t){return(0,s.jsxs)("div",{className:"formListItem",children:[(0,s.jsx)(o.Z,{style:{width:200},error:!!_("listChild{".concat(t,"}.subkey1")),helperText:_("listChild{".concat(t,"}.subkey1"))||" ",label:"lengthGreaterThan3",type:"text",value:S("listChild[".concat(t,"].subkey1"))||"",onChange:function(e){return u("listChild[".concat(t,"].subkey1"),e.target.value)},onBlur:function(){return g("listChild{".concat(t,"}.subkey1"))},id:"listChild{".concat(t,"}.subkey1")}),(0,s.jsx)(o.Z,{style:{width:200},error:!!_("listChild{".concat(t,"}.subkey2")),helperText:_("listChild{".concat(t,"}.subkey2"))||" ",label:"numberGreaterThan5",type:"number",value:S("listChild[".concat(t,"].subkey2"))||"",onChange:function(e){return u("listChild[".concat(t,"].subkey2"),e.target.value)},onBlur:function(){return g("listChild{".concat(t,"}.subkey2"))},id:"listChild{".concat(t,"}.subkey2")}),"disable",(0,s.jsx)(d.Z,{checked:S("listChild[".concat(t,"].disableSubkey2Rule"))||!1,onChange:function(e){return u("listChild[".concat(t,"].disableSubkey2Rule"),e.target.checked)}}),(0,s.jsx)(o.Z,{style:{width:200},error:!!_("listChild{".concat(t,"}.subkey3")),helperText:_("listChild{".concat(t,"}.subkey3"))||" ",label:"required",type:"text",value:S("listChild[".concat(t,"].subkey3"))||"",onChange:function(e){return u("listChild[".concat(t,"].subkey3"),e.target.value)},onBlur:function(){return g("listChild{".concat(t,"}.subkey3"))},id:"listChild{".concat(t,"}.subkey3ElementId")}),(0,s.jsxs)(h.Z,{className:"myDeleteButton",variant:"contained",onClick:function(){return handleDeleteElement(e.id)},children:[(0,s.jsx)("span",{className:"myShinkableButtonSpan",children:"Delete Element"}),(0,s.jsx)(b.Z,{className:"myShinkableButtonIcon"})]})]},e.id)})),(0,s.jsxs)(p.Z,{header:"Validate List of Objects",codeUrl:"pages/advanced/validate-list-of-objects.js",children:[(0,s.jsxs)("p",{className:"infoParagraph",children:["An array of objects with more than one subkeys can be validated using"," ",(0,s.jsx)(c(),{className:"inner-link",href:"/library-api/path",children:"listPath"})," ","and each subkey can have different rules which should be defined in ",(0,s.jsx)("b",{children:"subRules"})," key."]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)(h.Z,{className:"myAddButton",variant:"contained",onClick:function(){return handleAddElement()},id:"listErrorFocusElement",children:[(0,s.jsx)("span",{className:"myShinkableButtonSpan",children:"Add New Element"}),(0,s.jsx)(f.Z,{className:"myShinkableButtonIcon"})]}),(0,s.jsx)("span",{style:{marginLeft:10},children:"disable all subkey2 rows"}),(0,s.jsx)(d.Z,{checked:S("disableAllSubkey2Rule")||!1,onChange:function(e){return u("disableAllSubkey2Rule",e.target.checked)}})]}),(0,s.jsx)("div",{className:"formListField",children:D}),(0,s.jsx)("div",{className:"errorInfoText",children:_("listChild")}),(0,s.jsx)("div",{children:(0,s.jsx)(h.Z,{className:"mySubmitButton",variant:"contained",onClick:function(){C()&&w(!0)},children:"Submit Form"})}),(0,s.jsx)(y.Z,{isValid:t}),(0,s.jsx)(x.Z,{currentRules:j})]}),(0,s.jsxs)(v.Z,{open:I,onClose:function(){return w(!1)},children:[(0,s.jsx)(m.Z,{children:"Form Data Submitted"}),(0,s.jsx)(k.Z,{formData:n})]})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=6409)}),_N_E=e.O()}]);