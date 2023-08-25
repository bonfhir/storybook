"use strict";(self.webpackChunk_bonfhir_storybook=self.webpackChunk_bonfhir_storybook||[]).push([[859],{"../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectSpread2})},"./src/stories/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function buildArgs(props){var result={};for(var key in props)for(var value=props[key],keys=key.split("."),currentObj=result,i=0;i<keys.length;i++){var currentKey=keys[i];currentKey&&(currentKey in currentObj||(currentObj[currentKey]={}),i===keys.length-1&&(currentObj[currentKey]=value),currentObj=currentObj[currentKey])}return result}__webpack_require__.d(__webpack_exports__,{f:()=>buildArgs})},"./src/stories/inputs/FhirInputArray.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_bonfhir_ui_mantine_r5__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/ui-mantine/dist/r5/esm/index.mjs"),_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/ui/dist/r5/esm/index.mjs"),_mantine_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@mantine+core@6.0.17_@emotion+react@11.11.1_@mantine+hooks@6.0.17_@types+react@18.2.17_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/Stack/Stack.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@mantine+core@6.0.17_@emotion+react@11.11.1_@mantine+hooks@6.0.17_@types+react@18.2.17_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/Box/Box.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/.pnpm/@mantine+core@6.0.17_@emotion+react@11.11.1_@mantine+hooks@6.0.17_@types+react@18.2.17_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/Group/Group.js"),_mantine_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/.pnpm/@mantine+core@6.0.17_@emotion+react@11.11.1_@mantine+hooks@6.0.17_@types+react@18.2.17_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/Button/Button.js"),_helpers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/helpers.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/FhirInputArray",component:_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_1__.vO,tags:["autodocs"],args:{label:"Array Label"},argTypes:{label:{control:"text",description:"The label to display above the input."},description:{control:"text",description:"A description for the input."},error:{control:"text",description:"An error message to display below the input."},required:{control:"boolean",description:"Indicate that the input is required"},min:{control:"Boolean"},max:{control:"Boolean"}},parameters:{docs:{description:{component:"Renders FHIR arrays as inputs, allowing management or repeatition."}}}};var Default={args:{min:1},render:function render(props){var form=(0,_bonfhir_ui_mantine_r5__WEBPACK_IMPORTED_MODULE_0__.PJ)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("form",{onSubmit:form.onSubmit((function(values){var value=JSON.stringify(values.value,void 0,2);alert(value),console.log("value",value)})),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.K,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.x,{maw:800,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_1__.vO,(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},(0,_helpers__WEBPACK_IMPORTED_MODULE_6__.f)(props)),form.getArrayInputProps("value",{newValue:""})),{},{children:function children(_ref){var index=_ref.index;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_1__.dE,(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({type:"string"},form.getInputProps("value.".concat(index))))}}))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_7__.Z,{mt:"md",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.z,{type:"submit",compact:!0,variant:"outline",children:"Submit"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mantine_core__WEBPACK_IMPORTED_MODULE_8__.z,{compact:!0,variant:"outline",color:"red",onClick:function onClick(){return form.reset()},children:"Reset"})]})]})})}};Default.parameters=(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},Default.parameters),{},{docs:(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:'{\n  args: {\n    min: 1\n  },\n  render: (props: any) => {\n    const form = useFhirForm();\n    return <form onSubmit={form.onSubmit(values => {\n      const value = JSON.stringify(values.value, undefined, 2);\n      alert(value);\n      console.log("value", value);\n    })}>\n        <Stack>\n          <Box maw={800}>\n            <FhirInputArray {...buildArgs(props)} {...form.getArrayInputProps("value", {\n            newValue: ""\n          })}>\n              {({\n              index\n            }) => <FhirInput type="string" {...form.getInputProps(`value.${index}`)} />}\n            </FhirInputArray>\n          </Box>\n          <Group mt="md">\n            <Button type="submit" compact variant="outline">\n              Submit\n            </Button>\n            <Button compact variant="outline" color="red" onClick={() => form.reset()}>\n              Reset\n            </Button>\n          </Group>\n        </Stack>\n      </form>;\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]}}]);