(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1879],{96540:function(e,t,n){"use strict";var l=n(91941);t.Z=void 0;var r=l(n(64938)),i=n(85893),u=(0,r.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=u},41733:function(e,t,n){"use strict";var l=n(91941);t.Z=void 0;var r=l(n(64938)),i=n(85893),u=(0,r.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=u},23508:function(e,t,n){"use strict";var l=n(91941);t.Z=void 0;var r=l(n(64938)),i=n(85893),u=(0,r.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=u},56295:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/advanced/validate-complex-forms",function(){return n(25249)}])},49072:function(e,t,n){"use strict";var l=n(85893),r=n(74065),i=n(29618),u=n(47028),o=n(23508),a=function(e){var t="____PLACEHOLDER____",n=[];return JSON.stringify(e,function(e,l){return"function"==typeof l?(n.push(l),t):l instanceof RegExp?(n.push("/"+l.source+"/"),t):l},2).replace(RegExp('"'+t+'"',"g"),function(){return n.shift()})};t.Z=function(e){var t=e.currentRules,n=e.header;return(0,l.jsx)("div",{className:"currentRuleInfoDiv",children:(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(i.Z,{expandIcon:(0,l.jsx)(o.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,l.jsx)("span",{className:"currentRuleLabel",children:void 0===n?"Current Rules":n})}),(0,l.jsx)(u.Z,{children:(0,l.jsx)("span",{suppressHydrationWarning:!0,className:"currentRuleString",children:a(t)})})]})})}},6630:function(e,t,n){"use strict";var l=n(85893),r=function(e){var t="____PLACEHOLDER____",n=[];return JSON.stringify(e,function(e,l){return"function"==typeof l?(n.push(l),t):l},2).replace(RegExp('"'+t+'"',"g"),function(){return n.shift()})};t.Z=function(e){var t=e.formData;return(0,l.jsx)("div",{children:(0,l.jsx)("span",{className:"formDataString",children:r(t)})})}},73952:function(e,t,n){"use strict";var l=n(85893),r=n(365);t.Z=function(e){var t,n=e.isValid,i="";return n?(t="".concat(r.O,"/valid.png"),i="valid"):(t="".concat(r.O,"/invalid.png"),i="invalid"),(0,l.jsxs)("div",{className:"validationResultDiv",children:[(0,l.jsx)("span",{children:"Validation Result: "}),(0,l.jsx)("img",{src:t,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,l.jsx)("span",{className:n?"validationResultInfoSuccess":"validationResultInfoFail",children:i})]})}},25249:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var l=n(41799),r=n(828),i=n(36305),u=n(85893),o=n(67294),a=n(64459),s=n(31362),d=n(69873),c=n(75084),h=n(96540),m=n(41733),b=n(29620),f=n(77745),p=n(73952),x=n(49072),v=n(2386),C=n(6630),g=function(e){var t=e.setPathValue,n=e.setPathIsBlurred,l=e.getValue,r=e.getError;return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:"formField",children:[(0,u.jsx)(d.Z,{error:!!r("subComponentElement1"),helperText:r("subComponentElement1")||" ",label:"subComponentElement1",type:"text",value:l("subComponentElement1")||"",onChange:function(e){return t("subComponentElement1",e.target.value)},onBlur:function(){return n("subComponentElement1")},id:"subComponentElement1"}),(0,u.jsx)(d.Z,{error:!!r("subComponentElement2"),helperText:r("subComponentElement2")||" ",label:"subComponentElement2",type:"text",value:l("subComponentElement2")||"",onChange:function(e){return t("subComponentElement2",e.target.value)},onBlur:function(){return n("subComponentElement2")},id:"subComponentElement2"})]})})},j=[{path:"autonomousChild1",ruleSet:["required"]},{path:"autonomousChild2",ruleSet:["required"]}],E=(0,o.forwardRef)(function(e,t){var n=e.handleAutonomousFormDataIsChanged,l=e.handleAutonomousIsValidChanged,r=(0,a.c)({rules:j,hideBeforeSubmit:!0,showAfterBlur:!0,focusToErrorAfterSubmit:!0}),i=r.isValid,s=r.formData,c=r.setFormIsSubmitted,h=r.setPathValue,m=r.setPathIsBlurred,b=r.getValue,f=r.getError;return(0,o.useEffect)(function(){n(s)},[s]),(0,o.useEffect)(function(){l(i)},[i]),(0,o.useImperativeHandle)(t,function(){return{handleSetFormIsSubmitted:function(){c()}}}),(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:"formField",children:[(0,u.jsx)(d.Z,{error:!!f("autonomousChild1"),helperText:f("autonomousChild1")||" ",label:"autonomousChild1",type:"text",value:b("autonomousChild1")||"",onChange:function(e){return h("autonomousChild1",e.target.value)},onBlur:function(){return m("autonomousChild1")},id:"autonomousChild1"}),(0,u.jsx)(d.Z,{error:!!f("autonomousChild2"),helperText:f("autonomousChild2")||" ",label:"autonomousChild2",type:"text",value:b("autonomousChild2")||"",onChange:function(e){return h("autonomousChild2",e.target.value)},onBlur:function(){return m("autonomousChild2")},id:"autonomousChild2"})]})})}),S=function(e,t){return e.disableAllSubkey2Rule||e.listChild[t].disableSubkey2Rule},y=[{path:"child1",ruleSet:["required"]},{path:"child2",ruleSet:["required"]},{path:"child3.subchild1",ruleSet:["required"]},{path:"child3.subchild2",ruleSet:["required"]},{listPath:"listChild",subRules:[{path:"subkey1",ruleSet:["required",{rule:"length",greaterThan:3}]},{path:"subkey2",ruleSet:[{rule:"required",disableIf:S},{rule:"number",greaterThan:5,disableIf:S}]}],dependantPaths:["disableAllSubkey2Rule"]},{path:"listChild",ruleSet:[{rule:"required",customMessage:"This list should not be empty"},{rule:"listSize",greaterThan:2}],elementId:"listErrorFocusElement"},{path:"bottomElement1",ruleSet:["required"]},{path:"bottomElement2",ruleSet:[{rule:"length",greaterThan:3,applyToNulls:!0}]},{path:"subComponentElement1",ruleSet:["required"]},{path:"subComponentElement2",ruleSet:["required"]}],Z=function(){var e=(0,a.c)({rules:y,hideBeforeSubmit:!0,showAfterBlur:!0,focusToErrorAfterSubmit:!0}),t=e.isValid,n=e.formData,j=e.setPathValue,S=e.setFormIsSubmitted,Z=e.setPathIsBlurred,k=e.getValue,N=e.getError,_=(0,r.Z)((0,o.useState)(1),2),B=_[0],R=_[1],T=(0,r.Z)((0,o.useState)(!1),2),I=T[0],A=T[1],V=(0,r.Z)((0,o.useState)({}),2),F=V[0],D=V[1],P=(0,r.Z)((0,o.useState)(!1),2),q=P[0],w=P[1],L=(0,o.useRef)(),O=function(e){j("listChild",n.listChild.filter(function(t){return t.id!==e}))},H=null;return n.listChild&&n.listChild.length>0&&(H=n.listChild.map(function(e,t){return(0,u.jsxs)("div",{className:"formListItem",children:[(0,u.jsx)(d.Z,{error:!!N("listChild{".concat(t,"}.subkey1")),helperText:N("listChild{".concat(t,"}.subkey1"))||" ",label:"lengthGreaterThan3",type:"text",value:k("listChild[".concat(t,"].subkey1"))||"",onChange:function(e){return j("listChild[".concat(t,"].subkey1"),e.target.value)},onBlur:function(){return Z("listChild{".concat(t,"}.subkey1"))},id:"listChild{".concat(t,"}.subkey1")}),(0,u.jsx)(d.Z,{error:!!N("listChild{".concat(t,"}.subkey2")),helperText:N("listChild{".concat(t,"}.subkey2"))||" ",label:"numberGreaterThan5",type:"number",value:k("listChild[".concat(t,"].subkey2"))||"",onChange:function(e){return j("listChild[".concat(t,"].subkey2"),e.target.value)},onBlur:function(){return Z("listChild{".concat(t,"}.subkey2"))},id:"listChild{".concat(t,"}.subkey2")}),"disable",(0,u.jsx)(s.Z,{checked:k("listChild[".concat(t,"].disableSubkey2Rule"))||!1,onChange:function(e){return j("listChild[".concat(t,"].disableSubkey2Rule"),e.target.checked)}}),(0,u.jsxs)(c.Z,{className:"myDeleteButton",variant:"contained",onClick:function(){return O(e.id)},children:[(0,u.jsx)("span",{className:"myShinkableButtonSpan",children:"Delete Element"}),(0,u.jsx)(m.Z,{className:"myShinkableButtonIcon"})]})]},e.id)})),(0,u.jsxs)(v.Z,{header:"Validate Complex Forms",codeUrl:["pages/advanced/validate-complex-forms.js","components/SubComponent.js","components/AdvancedSubAutonomousComponent.js"],children:[(0,u.jsxs)("p",{className:"infoParagraph",children:[(0,u.jsx)("b",{children:"react-validatable-form"})," can handle validation of complex forms. The form can have multiple paths, listPaths and subcomponents."]}),(0,u.jsxs)("div",{children:[(0,u.jsx)(E,{ref:L,handleAutonomousFormDataIsChanged:function(e){D(e)},handleAutonomousIsValidChanged:function(e){w(e)}}),(0,u.jsxs)("div",{className:"formField",children:[(0,u.jsx)(d.Z,{error:!!N("child1"),helperText:N("child1")||" ",label:"child1",type:"text",value:k("child1")||"",onChange:function(e){return j("child1",e.target.value)},onBlur:function(){return Z("child1")},id:"child1"}),(0,u.jsx)(d.Z,{error:!!N("child2"),helperText:N("child2")||" ",label:"child2",type:"text",value:k("child2")||"",onChange:function(e){return j("child2",e.target.value)},onBlur:function(){return Z("child2")},id:"child2"}),(0,u.jsx)(d.Z,{error:!!N("child3.subchild1"),helperText:N("child3.subchild1")||" ",label:"child3.subchild1",type:"text",value:k("child3.subchild1")||"",onChange:function(e){return j("child3.subchild1",e.target.value)},onBlur:function(){return Z("child3.subchild1")},id:"child3.subchild1"}),(0,u.jsx)(d.Z,{error:!!N("child3.subchild2"),helperText:N("child3.subchild2")||" ",label:"child3.subchild2",type:"text",value:k("child3.subchild2")||"",onChange:function(e){return j("child3.subchild2",e.target.value)},onBlur:function(){return Z("child3.subchild2")},id:"child3.subchild2"})]}),(0,u.jsxs)("div",{children:[(0,u.jsxs)(c.Z,{className:"myAddButton",variant:"contained",onClick:function(){var e=n.listChild?(0,i.Z)(n.listChild):[];e.push({id:B}),R(B+1),j("listChild",e)},id:"listErrorFocusElement",children:[(0,u.jsx)("span",{className:"myShinkableButtonSpan",children:"Add New Element"}),(0,u.jsx)(h.Z,{className:"myShinkableButtonIcon"})]}),(0,u.jsx)("span",{style:{marginLeft:10},children:"disable all subkey2 rows"}),(0,u.jsx)(s.Z,{checked:k("disableAllSubkey2Rule")||!1,onChange:function(e){return j("disableAllSubkey2Rule",e.target.checked)}})]}),(0,u.jsx)("div",{className:"complexFormListField",children:H}),(0,u.jsx)("div",{className:"errorInfoText",children:N("listChild")}),(0,u.jsxs)("div",{className:"formField",children:[(0,u.jsx)(d.Z,{error:!!N("bottomElement1"),helperText:N("bottomElement1")||" ",label:"bottomElement1",type:"text",value:k("bottomElement1")||"",onChange:function(e){return j("bottomElement1",e.target.value)},onBlur:function(){return Z("bottomElement1")},id:"bottomElement1"}),(0,u.jsx)(d.Z,{error:!!N("bottomElement2"),helperText:N("bottomElement2")||" ",label:"bottomElement2",type:"text",value:k("bottomElement2")||"",onChange:function(e){return j("bottomElement2",e.target.value)},onBlur:function(){return Z("bottomElement2")},id:"bottomElement2"})]}),(0,u.jsx)(g,{getValue:k,getError:N,formData:n,setPathValue:j,setPathIsBlurred:Z}),(0,u.jsx)("div",{children:(0,u.jsx)(c.Z,{className:"mySubmitButton",variant:"contained",onClick:function(){var e=S();L.current.handleSetFormIsSubmitted(),e&&q&&A(!0)},children:"Submit Form"})}),(0,u.jsx)(p.Z,{isValid:t}),(0,u.jsx)(x.Z,{currentRules:y})]}),(0,u.jsxs)(b.Z,{open:I,onClose:function(){return A(!1)},children:[(0,u.jsx)(f.Z,{children:"Form Data Submitted"}),(0,u.jsx)(C.Z,{formData:(0,l.Z)({},n,F)})]})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=56295)}),_N_E=e.O()}]);