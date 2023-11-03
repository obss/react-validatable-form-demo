(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[104],{23508:function(e,t,a){"use strict";var r=a(91941);t.Z=void 0;var n=r(a(64938)),o=a(85893),i=(0,n.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=i},15483:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/library-api/react-validatable-form-provider",function(){return a(26918)}])},42755:function(e,t,a){"use strict";var r=a(85893);t.Z=function(e){var t=e.apiInfoList.map(function(e,t){var a=e.label,n=e.desc,o=e.indent||0,i={paddingLeft:20*o+10+"px"};return o&&(i.borderTop="1px dashed black"),(0,r.jsxs)("div",{style:i,className:"apiInfo",children:[(0,r.jsx)("div",{className:"apiLabel",children:a}),(0,r.jsx)("div",{className:"apiDesc",children:n})]},t)});return(0,r.jsx)("div",{className:"apiInfoWrapper",children:t})}},98532:function(e,t,a){"use strict";var r=a(85893),n=a(82280),o=a(38895),i=a(22797),s=a(23508);t.Z=function(e){var t=e.code;return(0,r.jsx)("div",{className:"codeExampleDiv",children:(0,r.jsxs)(n.Z,{children:[(0,r.jsx)(o.Z,{expandIcon:(0,r.jsx)(s.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,r.jsx)("span",{className:"codeExampleLabel",children:"Example Source Code"})}),(0,r.jsx)(i.Z,{children:(0,r.jsx)("span",{className:"codeExample",children:t})})]})})}},26918:function(e,t,a){"use strict";a.r(t);var r=a(85893),n=a(42755),o=a(98532),i=a(91611),s=[{label:"lang (string)",desc:"Selected language to show validation errors."},{label:"customRules (object)",desc:"Custom rules that are specific to app and that can used at any component wrapped by the provider."},{label:"translations (object)",desc:"Custom translation objects to override default error messages or to add a new language for error messages."},{label:"dateFormatterFunction (function)",desc:"Function that is used to format dates used in date rule without withTime option."},{label:"dateWithTimeFormatterFunction (function)",desc:"Function that is used to format dates used in date rule with withTime option."},{label:"hideBeforeSubmit (boolean)",desc:"Flag to hide validation errors before setFormIsSubmitted function is called."},{label:"showAfterBlur (boolean)",desc:"Flag to hide validation errors before setPathIsBlurred function is called for any path."},{label:"focusToErrorAfterSubmit (boolean)",desc:"Flag to automatically focus to first HTML element with validation error after setFormIsSubmitted function is called."},{label:"elementFocusHandler (function)",desc:'Function that accepts the first "elementId" of current validation errors as parameter that is used to customly manage DOM after submit.'}];t.default=function(e){return(0,r.jsxs)(i.Z,{header:"ReactValidatableFormProvider",children:[(0,r.jsx)(o.Z,{code:"<ReactValidatableFormProvider\nlang={lang}\ncustomRules={customRules}\ntranslations={translations}\ndateFormatterFunction={dateFormatterFunction}\ndateWithTimeFormatterFunction={dateWithTimeFormatterFunction}\nhideBeforeSubmit={hideBeforeSubmit}\nshowAfterBlur={showAfterBlur}\nfocusToErrorAfterSubmit={focusToErrorAfterSubmit}\nelementFocusHandler={elementFocusHandler}\n>\n    <App />\n</ReactValidatableFormProvider>"}),(0,r.jsxs)("div",{className:"apiInfoSectionHeader",children:["Provider Parameters",(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"inner-link",onClick:e.openSettingsDialog,children:"See Example Usages"})})]}),(0,r.jsx)(n.Z,{apiInfoList:s})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=15483)}),_N_E=e.O()}]);