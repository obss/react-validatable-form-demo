(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1],{23508:function(e,a,n){"use strict";var l=n(91941);a.Z=void 0;var r=l(n(64938)),s=n(85893),i=(0,r.default)((0,s.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");a.Z=i},54164:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rules/includes",function(){return n(69813)}])},49072:function(e,a,n){"use strict";var l=n(85893),r=n(74065),s=n(29618),i=n(47028),t=n(23508),u=function(e){var a="____PLACEHOLDER____",n=[];return JSON.stringify(e,function(e,l){return"function"==typeof l?(n.push(l),a):l instanceof RegExp?(n.push("/"+l.source+"/"),a):l},2).replace(RegExp('"'+a+'"',"g"),function(){return n.shift()})};a.Z=function(e){var a=e.currentRules,n=e.header;return(0,l.jsx)("div",{className:"currentRuleInfoDiv",children:(0,l.jsxs)(r.Z,{children:[(0,l.jsx)(s.Z,{expandIcon:(0,l.jsx)(t.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,l.jsx)("span",{className:"currentRuleLabel",children:void 0===n?"Current Rules":n})}),(0,l.jsx)(i.Z,{children:(0,l.jsx)("span",{suppressHydrationWarning:!0,className:"currentRuleString",children:u(a)})})]})})}},73952:function(e,a,n){"use strict";var l=n(85893),r=n(365);a.Z=function(e){var a,n=e.isValid,s="";return n?(a="".concat(r.O,"/valid.png"),s="valid"):(a="".concat(r.O,"/invalid.png"),s="invalid"),(0,l.jsxs)("div",{className:"validationResultDiv",children:[(0,l.jsx)("span",{children:"Validation Result: "}),(0,l.jsx)("img",{src:a,alt:"validationresult",width:24,height:24,className:"validationResultIcon"}),(0,l.jsx)("span",{className:n?"validationResultInfoSuccess":"validationResultInfoFail",children:s})]})}},69813:function(e,a,n){"use strict";n.r(a);var l=n(85893),r=n(2386),s=n(69873),i=n(73952),t=n(49072),u=n(64459),c={val:"example",val2:"abc",comparisonValue:"bcc"},o=[{path:"val",ruleSet:[{rule:"required"},{rule:"includes",includes:"exe"}],dependantPaths:["comparisonValue"]},{path:"val2",ruleSet:[{rule:"required"},{rule:"includes",includes:function(e){return e.comparisonValue}}],dependantPaths:["comparisonValue"]}];a.default=function(){var e=(0,u.c)({rules:o,initialFormData:c}),a=e.isValid,n=e.setPathValue,d=e.getValue,v=e.getError;return(0,l.jsxs)(r.Z,{header:"includes",codeUrl:"pages/rules/includes.js",children:[(0,l.jsxs)("p",{className:"infoParagraph",children:[(0,l.jsx)("b",{children:" includes "})," rule checks if the given value includes comparison value."]}),(0,l.jsx)("div",{className:"comparisonDiv",children:(0,l.jsx)(s.Z,{error:!!v("val"),helperText:v("val")||" ",label:"val",type:"text",value:d("val"),onChange:function(e){return n("val",e.target.value)}})}),(0,l.jsxs)("div",{className:"comparisonDiv",children:[(0,l.jsx)(s.Z,{error:!!v("val2"),helperText:v("val2")||" ",label:"val2",type:"text",value:d("val2"),onChange:function(e){return n("val2",e.target.value)}}),(0,l.jsx)(s.Z,{className:"comparisonComponent",label:"comparisonValue",type:"text",value:d("comparisonValue"),onChange:function(e){return n("comparisonValue",e.target.value)}})]}),(0,l.jsx)(i.Z,{isValid:a}),(0,l.jsx)(t.Z,{currentRules:o})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=54164)}),_N_E=e.O()}]);