(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3454],{23508:function(e,n,r){"use strict";var a=r(91941);n.Z=void 0;var t=a(r(64938)),s=r(85893),i=(0,t.default)((0,s.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=i},53457:function(e,n,r){"use strict";r.d(n,{Z:function(){return x}});var a=r(1048),t=r(32793),s=r(67294),i=r(90512),l=r(94780),o=r(90948),u=r(71657),c=r(1588),d=r(34867);function getFormGroupUtilityClass(e){return(0,d.Z)("MuiFormGroup",e)}(0,c.Z)("MuiFormGroup",["root","row","error"]);var p=r(74423),h=r(15704),f=r(85893);let v=["className","row"],useUtilityClasses=e=>{let{classes:n,row:r,error:a}=e;return(0,l.Z)({root:["root",r&&"row",a&&"error"]},getFormGroupUtilityClass,n)},m=(0,o.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,n)=>{let{ownerState:r}=e;return[n.root,r.row&&n.row]}})(({ownerState:e})=>(0,t.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),g=s.forwardRef(function(e,n){let r=(0,u.Z)({props:e,name:"MuiFormGroup"}),{className:s,row:l=!1}=r,o=(0,a.Z)(r,v),c=(0,p.Z)(),d=(0,h.Z)({props:r,muiFormControl:c,states:["error"]}),g=(0,t.Z)({},r,{row:l,error:d.error}),x=useUtilityClasses(g);return(0,f.jsx)(m,(0,t.Z)({className:(0,i.Z)(x.root,s),ownerState:g,ref:n},o))});var x=g},77545:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules/number",function(){return r(460)}])},42256:function(e,n,r){"use strict";var a=r(85893),t=r(82280),s=r(38895),i=r(22797),l=r(23508),stringifyWithFunction=function(e){var n="____PLACEHOLDER____",r=[];return JSON.stringify(e,function(e,a){return"function"==typeof a?(r.push(a),n):a instanceof RegExp?(r.push("/"+a.source+"/"),n):a},2).replace(RegExp('"'+n+'"',"g"),function(){return r.shift()})};n.Z=function(e){var n=e.currentRules,r=e.header;return(0,a.jsx)("div",{className:"currentRuleInfoDiv",children:(0,a.jsxs)(t.Z,{children:[(0,a.jsx)(s.Z,{expandIcon:(0,a.jsx)(l.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,a.jsx)("span",{className:"currentRuleLabel",children:void 0===r?"Current Rules":r})}),(0,a.jsx)(i.Z,{children:(0,a.jsx)("span",{suppressHydrationWarning:!0,className:"currentRuleString",children:stringifyWithFunction(n)})})]})})}},29439:function(e,n,r){"use strict";var a=r(85893),t=r(59808);n.Z=function(e){var n,r=e.isValid,s="";return r?(n="".concat(t.O,"/valid.png"),s="valid"):(n="".concat(t.O,"/invalid.png"),s="invalid"),(0,a.jsxs)("div",{className:"validationResultDiv",children:[(0,a.jsx)("span",{children:"Validation Result: "}),(0,a.jsx)("img",{src:n,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,a.jsx)("span",{className:r?"validationResultInfoSuccess":"validationResultInfoFail",children:s})]})}},12842:function(e,n,r){"use strict";r.d(n,{q:function(){return a}});var a=["equalTo","lessThan","lessThanOrEqualTo","greaterThan","greaterThanOrEqualTo","notEqualTo"]},460:function(e,n,r){"use strict";r.r(n);var a=r(72253),t=r(14932),s=r(91309),i=r(4586),l=r(85893),o=r(67294),u=r(64459),c=r(53457),d=r(58843),p=r(85071),h=r(12842),f=r(91611),v=r(78466),m=r(37632),g=r(29439),x=r(42256),j={rule:"number"};j[h.q[0]]=5;var Z=[{path:"val",ruleSet:["required",j],dependantPaths:["comparisonValue"]}],b={val:3,ruleOption:h.q[0],comparisonValue:5};n.default=function(){var e=(0,u.c)({rules:Z,initialFormData:b}),n=e.isValid,r=e.setPathValue,j=e.setRules,_=e.getValue,R=e.getError,N=(0,s._)((0,o.useState)(Z),2),C=N[0],y=N[1],O=(0,s._)((0,o.useState)(h.q[0]),2),w=O[0],S=O[1],E=(0,s._)((0,o.useState)(!1),2),I=E[0],k=E[1],F=(0,s._)((0,o.useState)(!1),2),V=F[0],q=F[1],updateRules=function(e,n,r){var a=JSON.parse(JSON.stringify(Z)),t=(0,i._)(a[0].ruleSet),s={rule:"number"};n&&(e?s[n]=function(e){return e.comparisonValue}:s[n]=5),r&&(s.onlyIntegers=!0),t.splice(1,1,s),a[0].ruleSet=t,y(a),j(a)},handleSetIsFunc=function(e){updateRules(e,w,V),k(e)},handleRuleOptionChange=function(e){updateRules(I,e,V),S(e)},handleOnlyIntegersChange=function(e){updateRules(I,w,e),q(e)};return(0,l.jsxs)(f.Z,{header:"number",codeUrl:"pages/rules/number.js",children:[(0,l.jsxs)("p",{className:"infoParagraph",children:[(0,l.jsx)("b",{children:"number"})," rule checks if the given value is a valid number. If ",(0,l.jsx)("b",{children:"onlyIntegers"})," parameter is set, it also checks if given value is an integer. ",(0,l.jsx)("b",{children:h.q.join(", ")})," parameters are used to make comparisons with given comparison values."]}),(0,l.jsxs)("div",{className:"comparisonDiv",children:[(0,l.jsx)(v.Z,{error:!!R("val"),helperText:R("val")||" ",label:"val",type:"number",value:_("val"),onChange:function(e){return r("val",e.target.value)}}),(0,l.jsx)(m.Z,{className:"ruleOptionComponent",value:w,onChange:function(e,n){handleRuleOptionChange(n)},options:h.q,disableClearable:!1,renderInput:function(e){return(0,l.jsx)(v.Z,(0,t._)((0,a._)({},e),{label:"ruleOption"}))}}),I?(0,l.jsx)(v.Z,{className:"comparisonComponent",label:"comparisonValue",type:"number",value:_("comparisonValue"),onChange:function(e){return r("comparisonValue",e.target.value)}}):(0,l.jsx)(v.Z,{disabled:!0,className:"comparisonComponent",label:"comparisonValue",type:"number",value:5,onChange:function(){}}),(0,l.jsx)(c.Z,{className:"checkboxOnRight",children:(0,l.jsx)(d.Z,{control:(0,l.jsx)(p.Z,{checked:I,onChange:function(e){return handleSetIsFunc(e.target.checked)}}),label:"as Function"})})]}),(0,l.jsx)("div",{className:"comparisonDiv",children:(0,l.jsx)(c.Z,{className:"checkboxOnRight",children:(0,l.jsx)(d.Z,{control:(0,l.jsx)(p.Z,{checked:V,onChange:function(e){return handleOnlyIntegersChange(e.target.checked)}}),label:"onlyIntegers"})})}),(0,l.jsx)(g.Z,{isValid:n}),(0,l.jsx)(x.Z,{currentRules:C})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=77545)}),_N_E=e.O()}]);