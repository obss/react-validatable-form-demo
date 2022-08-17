(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1323],{23508:function(e,a,r){"use strict";var n=r(95318);a.Z=void 0;var l=n(r(64938)),s=r(85893),i=(0,l.default)((0,s.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");a.Z=i},96566:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/library-api/use-validatable-form",function(){return r(3537)}])},44332:function(e,a,r){"use strict";var n=r(85893);a.Z=function(e){var a=e.apiInfoList.map((function(e,a){var r=e.label,l=e.desc,s=e.indent||0,i={paddingLeft:20*s+10+"px"};return s&&(i.borderTop="1px dashed black"),(0,n.jsxs)("div",{style:i,className:"apiInfo",children:[(0,n.jsx)("div",{className:"apiLabel",children:r}),(0,n.jsx)("div",{className:"apiDesc",children:l})]},a)}));return(0,n.jsx)("div",{className:"apiInfoWrapper",children:a})}},70876:function(e,a,r){"use strict";var n=r(85893),l=r(82280),s=r(38895),i=r(22797),t=r(23508);a.Z=function(e){var a=e.code;return(0,n.jsx)("div",{className:"codeExampleDiv",children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(s.Z,{expandIcon:(0,n.jsx)(t.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,n.jsx)("span",{className:"codeExampleLabel",children:"Example Source Code"})}),(0,n.jsx)(i.Z,{children:(0,n.jsx)("span",{className:"codeExample",children:a})})]})})}},3537:function(e,a,r){"use strict";r.r(a);var n=r(85893),l=r(44332),s=r(70876),i=r(68851),t=r(41664),d=r.n(t),o=[{label:(0,n.jsxs)("div",{children:["rules (array)"," ",(0,n.jsx)(d(),{href:"/library-api/rules",children:(0,n.jsx)("a",{className:"inner-link",children:" See rules API "})})]}),desc:"Array of validation rules to be run on current form."},{label:"initialFormData (object)",desc:"Initial form data to set default values of current form."},{label:(0,n.jsxs)("div",{children:["hideBeforeSubmit (boolean)"," ",(0,n.jsx)(d(),{href:"/advanced/hide-before-submit",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Flag to hide validation errors before setFormIsSubmitted function is called."},{label:(0,n.jsxs)("div",{children:["showAfterBlur (boolean)"," ",(0,n.jsx)(d(),{href:"/advanced/show-after-blur",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Flag to hide validation errors before setPathIsBlurred function is called for any path."},{label:(0,n.jsxs)("div",{children:["focusToErrorAfterSubmit (boolean)"," ",(0,n.jsx)(d(),{href:"/advanced/focus-to-error-after-submit",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Flag to automatically focus to first HTML element with validation error after setFormIsSubmitted function is called."},{label:(0,n.jsxs)("div",{children:["elementFocusHandler (function)"," ",(0,n.jsx)(d(),{href:"/customizations/custom-element-focus-handler",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:'Function that accepts the first "elementId" of current validation errors as parameter that is used to customly manage DOM after submit.'}],c=[{label:"isValid (boolean)",desc:"Always returns the form's combined validation result according to current formData and rules."},{label:(0,n.jsxs)("div",{children:["validationError (object)"," ",(0,n.jsx)(d(),{href:"/examples/validation-error",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Returns the validation result info of each rule with each path according to current formData and rules. Some validation results can be hide before submit or before blur."},{label:(0,n.jsxs)("div",{children:["validationErrorOriginalResult (object)"," ",(0,n.jsx)(d(),{href:"/examples/validation-error-original-result",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Returns the validation result info of each rule with each path according to current formData and rules. (is not hidden before submit or before blur)."},{label:(0,n.jsxs)("div",{children:["formData (object)"," ",(0,n.jsx)(d(),{href:"/examples/form-data",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Returns current formData."},{label:(0,n.jsxs)("div",{children:["formIsSubmitted (boolean)"," ",(0,n.jsx)(d(),{href:"/advanced/hide-before-submit",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Returns current formIsSubmitted info."},{label:(0,n.jsxs)("div",{children:["blurredPathList (array)"," ",(0,n.jsx)(d(),{href:"/advanced/show-after-blur",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Returns current blurredPathList info."},{label:(0,n.jsxs)("div",{children:["setPathValue(path, value)"," ",(0,n.jsx)(d(),{href:"/library-api/path",children:(0,n.jsx)("a",{className:"inner-link",children:" See Path API "})})," - ",(0,n.jsx)(d(),{href:"/examples/set-path-value",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Function to update given path of formData with given value."},{label:(0,n.jsxs)("div",{children:["unsetPathValue(path, value)"," ",(0,n.jsx)(d(),{href:"/library-api/path",children:(0,n.jsx)("a",{className:"inner-link",children:" See Path API "})})," - ",(0,n.jsx)(d(),{href:"/examples/unset-path-value",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Function to remove value and key for given path of formData."},{label:(0,n.jsxs)("div",{children:["setFormIsSubmitted()"," ",(0,n.jsx)(d(),{href:"/advanced/hide-before-submit",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Function to set form is submitted info true and show all current validation results if hideBeforeSubmit parameter is set true."},{label:(0,n.jsxs)("div",{children:["setPathIsBlurred(path)"," ",(0,n.jsx)(d(),{href:"/library-api/path",children:(0,n.jsx)("a",{className:"inner-link",children:" See Path API "})})]}),desc:"Function to set element of path is blurred info true and unhide its current validation result if showAfterBlur parameter is set true."},{label:(0,n.jsxs)("div",{children:["unsetPathIsBlurred(path)"," ",(0,n.jsx)(d(),{href:"/library-api/path",children:(0,n.jsx)("a",{className:"inner-link",children:" See Path API "})})," - ",(0,n.jsx)(d(),{href:"/examples/unset-path-is-blurred",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Function to unset element of path is blurred info and hide its current validation result if showAfterBlur parameter is set true."},{label:(0,n.jsxs)("div",{children:["setFormData(newFormData, pathToBeRun)"," ",(0,n.jsx)(d(),{href:"/examples/set-form-data",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Function to update whole formData and run validation rules of given pathToBeRun array."},{label:(0,n.jsxs)("div",{children:["setRules(newRules)"," ",(0,n.jsx)(d(),{href:"/examples/set-rules",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Function to update rules and run all validations according to these rules."},{label:(0,n.jsxs)("div",{children:["setFormDataAndRules(newFormData, newRules)"," ",(0,n.jsx)(d(),{href:"/examples/set-form-data-and-rules",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Function to update whole formData and rules simultaneously and run all validations according to these formData and rules."},{label:(0,n.jsxs)("div",{children:["resetForm()"," ",(0,n.jsx)(d(),{href:"/advanced/show-after-blur",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Function to reset form submitted info and elements blurred info."},{label:(0,n.jsxs)("div",{children:["isPathValid(path)"," ",(0,n.jsx)(d(),{href:"/examples/is-path-valid",children:(0,n.jsx)("a",{className:"inner-link",children:" See Example "})})]}),desc:"Function to get if path can be interpreted as valid."},{label:"getValue(path)",desc:"Function to get value of given path on formData object."},{label:"getError(path)",desc:"Function to get validation error of given path on validationError object."},{label:"forceRunAllValidations()",desc:"Function to run all validations according to current rules."}];a.default=function(){return(0,n.jsxs)(i.Z,{header:"useValidatableForm",children:[(0,n.jsx)(s.Z,{code:"const {isValid, validationError, validationErrorOriginalResult, formData, setPathValue, \n    unsetPathValue, setFormIsSubmitted, setPathIsBlurred, unsetPathIsBlurred, setFormData, \n    setRules, setFormDataAndRules, resetForm, getValue, getError, forceRunAllValidations } = \n    useValidatableForm({\n        rules,\n        initialFormData,\n        hideBeforeSubmit,\n        showAfterBlur,\n        focusToErrorAfterSubmit,\n});"}),(0,n.jsx)("div",{className:"apiInfoSectionHeader",children:"Hook Parameters"}),(0,n.jsx)(l.Z,{apiInfoList:o}),(0,n.jsx)("div",{className:"apiInfoSectionHeader",children:"Return Values"}),(0,n.jsx)(l.Z,{apiInfoList:c})]})}}},function(e){e.O(0,[9774,2888,179],(function(){return a=96566,e(e.s=a);var a}));var a=e.O();_N_E=a}]);