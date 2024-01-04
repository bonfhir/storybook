"use strict";(self.webpackChunk_bonfhir_storybook=self.webpackChunk_bonfhir_storybook||[]).push([[859],{"../../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectSpread2})},"./src/stories/inputs/FhirInputArray.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_bonfhir_mantine_r5__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/mantine/dist/r5/esm/index.mjs"),_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/r5/esm/index.mjs"),_mantine_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mantine+core@7.3.1_@mantine+hooks@7.3.1_@types+react@18.2.43_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Stack/Stack.mjs"),_mantine_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@mantine+core@7.3.1_@mantine+hooks@7.3.1_@types+react@18.2.43_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/core/Box/Box.mjs"),_mantine_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/.pnpm/@mantine+core@7.3.1_@mantine+hooks@7.3.1_@types+react@18.2.43_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Group/Group.mjs"),_mantine_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/.pnpm/@mantine+core@7.3.1_@mantine+hooks@7.3.1_@types+react@18.2.43_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Button/Button.mjs"),_helpers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/helpers.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/FhirInputArray",component:_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_1__.vO,tags:["autodocs"],args:{label:"Array Label"},argTypes:{label:{control:"text",description:"The label to display above the input."},description:{control:"text",description:"A description for the input."},error:{control:"text",description:"An error message to display below the input."},required:{control:"boolean",description:"Indicate that the input is required"},min:{control:"Boolean"},max:{control:"Boolean"}},parameters:{docs:{description:{component:"Renders FHIR arrays as inputs, allowing management or repetition.\n\nSee https://bonfhir.dev/packages/react/components/fhir-input-array for more information."}}}};var Default={args:{min:1},render:function render(props){var form=(0,_bonfhir_mantine_r5__WEBPACK_IMPORTED_MODULE_0__.PJ)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("form",{onSubmit:form.onSubmit((function(values){var value=JSON.stringify(values.value,void 0,2);alert(value),console.log("value",value)})),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.K,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.x,{maw:800,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_1__.vO,(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},(0,_helpers__WEBPACK_IMPORTED_MODULE_6__.f)(props)),form.getArrayInputProps("value",{newValue:""})),{},{children:function children(_ref){var index=_ref.index;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_1__.dE,(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({type:"string"},form.getInputProps("value.".concat(index))))}}))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Z,{mt:"md",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.z,{type:"submit",variant:"outline",children:"Submit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.z,{variant:"outline",color:"red",onClick:function onClick(){return form.reset()},children:"Reset"})]})]})})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    min: 1\n  },\n  render: (props: any) => {\n    const form = useFhirForm();\n    return <form onSubmit={form.onSubmit(values => {\n      const value = JSON.stringify(values.value, undefined, 2);\n      alert(value);\n      console.log("value", value);\n    })}>\n        <Stack>\n          <Box maw={800}>\n            <FhirInputArray {...buildArgs(props)} {...form.getArrayInputProps("value", {\n            newValue: ""\n          })}>\n              {({\n              index\n            }) => <FhirInput type="string" {...form.getInputProps(`value.${index}`)} />}\n            </FhirInputArray>\n          </Box>\n          <Group mt="md">\n            <Button type="submit" variant="outline">\n              Submit\n            </Button>\n            <Button variant="outline" color="red" onClick={() => form.reset()}>\n              Reset\n            </Button>\n          </Group>\n        </Stack>\n      </form>;\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/stories/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function buildArgs(props){var result={};for(var key in props)for(var value=props[key],keys=key.split("."),currentObj=result,i=0;i<keys.length;i++){var currentKey=keys[i];currentKey&&(currentKey in currentObj||(currentObj[currentKey]={}),i===keys.length-1&&(currentObj[currentKey]=value),currentObj=currentObj[currentKey])}return result}__webpack_require__.d(__webpack_exports__,{f:()=>buildArgs})}}]);