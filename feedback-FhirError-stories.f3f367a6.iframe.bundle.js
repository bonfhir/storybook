"use strict";(self.webpackChunk_bonfhir_storybook=self.webpackChunk_bonfhir_storybook||[]).push([[951],{"../../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectSpread2})},"./src/stories/feedback/FhirError.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/react/dist/r5/esm/index.mjs"),_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/helpers.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Feedback/FhirError",component:_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_0__.FZ,tags:["autodocs"],args:{onRetry:!0},argTypes:{error:{control:"text",description:"Can either be a string or an Error object."},onRetry:{control:"boolean",description:"This should be a function invoked when retrying."},"rendererProps.titleText":{control:"text"},"rendererProps.alert.variant":{control:"select",options:["filled","outline","light",void 0]}},render:function render(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_0__.FZ,(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.f)(props)),{},{onRetry:props.onRetry?function(){return alert("Retrying...")}:void 0}))},parameters:{docs:{description:{component:"Renders an error permanently on screen"}}}};var Default={args:{error:"This is an error message."}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    error: "This is an error message."\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/stories/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function buildArgs(props){var result={};for(var key in props)for(var value=props[key],keys=key.split("."),currentObj=result,i=0;i<keys.length;i++){var currentKey=keys[i];currentKey&&(currentKey in currentObj||(currentObj[currentKey]={}),i===keys.length-1&&(currentObj[currentKey]=value),currentObj=currentObj[currentKey])}return result}__webpack_require__.d(__webpack_exports__,{f:()=>buildArgs})}}]);