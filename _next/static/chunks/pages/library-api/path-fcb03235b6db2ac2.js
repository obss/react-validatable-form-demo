(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1466],{22971:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/library-api/path",function(){return s(29280)}])},29280:function(e,l,s){"use strict";s.r(l);var i=s(85893),t=s(2386);l.default=function(){return(0,i.jsxs)(t.Z,{header:"Path",children:[(0,i.jsxs)("div",{className:"infoParagraph",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"Path"})," is a string value that is used to access any value on the formData using"," ",(0,i.jsx)("a",{className:"inner-link",href:"https://lodash.com/docs/4.17.15#get",target:"_blank",rel:"noreferrer",children:"lodash get"})," ","method."]}),(0,i.jsx)("p",{children:"This table shows how to use path and listPath keys for the following code."}),(0,i.jsxs)("table",{className:"pathApiTable",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{className:"pathApiTableInfoCol",children:"Path Type"}),(0,i.jsx)("td",{className:"pathApiTableExampleCol",children:"Usage Example"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Update value of first level child"}),(0,i.jsxs)("td",{children:["setPathValue(","'child1'",", newValue)"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Update value of second level child"}),(0,i.jsxs)("td",{children:["setPathValue(","'child3.subchild1'",", newValue)"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Update value of list's element at 0th index"}),(0,i.jsxs)("td",{children:["setPathValue(","'listChild[0]'",", newValue)"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Update value of list of object's element at 0th index with key subkey1"}),(0,i.jsxs)("td",{children:["setPathValue(","'listChild[0].subkey1'",", newValue)"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Get value of first level child"}),(0,i.jsxs)("td",{children:["getValue(","'child1'",")"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Get value of second level child"}),(0,i.jsxs)("td",{children:["getValue(","'child3.subchild1'",")"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Get value of list's element at 0th index"}),(0,i.jsxs)("td",{children:["getValue(","'listChild[0]'",")"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Get value of list of object's element at 0th index with key subkey1"}),(0,i.jsxs)("td",{children:["getValue(","'listChild[0].subkey1'",")"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Get error of first level child"}),(0,i.jsxs)("td",{children:["getError(","'child1'",")"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Get error of second level child"}),(0,i.jsxs)("td",{children:["getError(","'child3.subchild1'",")"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Get error of list's element at 0th index"}),(0,i.jsxs)("td",{children:["getError(","'listChild{0}'",")"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Get error of list of object's element at 0th index with key subkey1"}),(0,i.jsxs)("td",{children:["getError(","'listChild{0}.subkey1'",")"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Unset value and key of first level child"}),(0,i.jsxs)("td",{children:["unsetPathValue(","'child1'",")"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Unset value and key of second level child"}),(0,i.jsxs)("td",{children:["unsetPathValue(","'child3.subchild1'",")"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Unset value and key of list's element at 0th index"}),(0,i.jsxs)("td",{children:["unsetPathValue(","'listChild[0]'",")"]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Unset value and key of list of object's element at 0th index with key subkey1"}),(0,i.jsxs)("td",{children:["unsetPathValue(","'listChild[0].subkey1'",")"]})]})]})]})]}),(0,i.jsx)("div",{className:"pageCodeWrapper",children:(0,i.jsx)("span",{className:"pageCode",children:'\n////////////-- example rules --///////////\nconst rules = [\n    { path: \'child1\', ruleSet: [\'required\'] },\n    { path: \'child2\', ruleSet: [\'required\'] },\n    { path: \'child3.subchild1\', ruleSet: [\'required\'] },\n    { path: \'child3.subchild2\', ruleSet: [\'required\'] },\n    {\n        listPath: \'listChild\',\n        subRules: [\n            {path: \'subkey1\', ruleSet: [\'required\', { rule: \'length\', greaterThan: 3 }]},\n            {path: \'subkey2\', ruleSet: [{rule: \'required\', }, { rule: \'number\', greaterThan: 5 }]}\n        ]\n    },\n    {path: \'listChild\', ruleSet: [{ rule: \'required\'}, { rule: \'listSize\', greaterThan: 2 }]}\n];\n\n////////////-- example formData --///////////\nconst formData = {\n    child1: "child1 value",\n    child2: "child2 value",\n    child3: {\n        subchild1: "child3 subchild1 value",\n        subchild2: "child3 subchild2 value",\n    },\n    listChild: [\n        {\n            subkey1: "list 0th element subkey1 value",\n            subkey2: "list 0th element subkey2 value",\n        },\n        {\n            subkey1: "list 1st element subkey1 value",\n            subkey2: "list 1st element subkey2 value",\n        }\n    ]\n};\n\n////////////-- example validationError result object --///////////\nconst validationError = {\n    "child1": "This field is required",                 // first level child\n    "child2": "This field is required",                 // first level child\n    "child3.subchild1": "This field is required",       // second level child\n    "child3.subchild2": "This field is required",       // second level child\n    "listChild": "This field is required",              // first level list child\n    "listChild{0}.subkey1": "This field is required",   // list of object\'s child\n    "listChild{0}.subkey2": "This field is required",   // list of object\'s child\n    "listChild{1}.subkey1": "This field is required",   // list of object\'s child\n    "listChild{1}.subkey2": "This field is required",   // list of object\'s child\n}\n\n'})})]})}}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=22971)}),_N_E=e.O()}]);