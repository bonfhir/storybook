"use strict";(self.webpackChunk_bonfhir_storybook=self.webpackChunk_bonfhir_storybook||[]).push([[945],{"../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectSpread2})},"./src/stories/data-display/FhirTable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithPagination:()=>WithPagination,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_WithPagination$param,_WithPagination$param2,_WithPagination$param3,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_bonfhir_query_r5__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/query/dist/r5/esm/index.mjs"),_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/react/dist/r5/esm/index.mjs"),_mantine_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/@mantine+core@7.3.0_@mantine+hooks@7.3.0_@types+react@18.2.41_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/components/Stack/Stack.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/helpers.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Data Display/FhirTable",component:_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_1__.Wq,tags:["autodocs"],args:{},argTypes:{columns:{control:"object"}},parameters:{docs:{description:{component:"Renders a table of resources"}}}};var Default={args:{columns:[{key:"name",title:"Name",sortable:!0,render:function render(row){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_1__.Zr,{type:"string",value:row.name})}},{key:"_lastUpdated",title:"Last Updated",sortable:!0,render:function render(row){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_1__.Zr,{type:"instant",value:row.meta.lastUpdated})}}]},render:function render(props){return(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)((function(){var searchController=(0,_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_1__.Sm)({pageSize:20,defaultSort:"name",defaultSearch:{name:void 0}}),organizationsQuery=(0,_bonfhir_query_r5__WEBPACK_IMPORTED_MODULE_0__.cm)("Organization",(function(search){var _searchController$sea;return search.name(null===(_searchController$sea=searchController.search)||void 0===_searchController$sea?void 0:_searchController$sea.name)._sort(searchController.sort)._count(searchController.pageSize)._total("accurate")}),searchController.pageUrl);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_1__.Wq,(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({onRowNavigate:function onRowNavigate(org){return alert("Clicked on ".concat(org.name))}},(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.f)(props)),searchController),organizationsQuery))}))}},WithPagination={args:{columns:[{key:"name",title:"Name",sortable:!0,render:function render(row){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_1__.Zr,{type:"string",value:row.name})}},{key:"_lastUpdated",title:"Last Updated",sortable:!0,render:function render(row){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_1__.Zr,{type:"instant",value:row.meta.lastUpdated})}}]},render:function render(props){return(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)((function(){var searchController=(0,_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_1__.Sm)({pageSize:20,defaultSort:"name",defaultSearch:{name:void 0}}),organizationsQuery=(0,_bonfhir_query_r5__WEBPACK_IMPORTED_MODULE_0__.cm)("Organization",(function(search){var _searchController$sea2;return search.name(null===(_searchController$sea2=searchController.search)||void 0===_searchController$sea2?void 0:_searchController$sea2.name)._sort(searchController.sort)._count(searchController.pageSize)._total("accurate")}),searchController.pageUrl);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.K,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_1__.Wq,(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({onRowNavigate:function onRowNavigate(org){return alert("Clicked on ".concat(org.name))}},(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.f)(props)),searchController),organizationsQuery)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_1__.vl,(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},organizationsQuery),searchController))]})}))}};Default.parameters=(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},Default.parameters),{},{docs:(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:'{\n  args: {\n    columns: [{\n      key: "name",\n      title: "Name",\n      sortable: true,\n      render: (row: Retrieved<Organization>) => <FhirValue type="string" value={row.name} />\n    }, {\n      key: "_lastUpdated",\n      title: "Last Updated",\n      sortable: true,\n      render: (row: Retrieved<Organization>) => <FhirValue type="instant" value={row.meta.lastUpdated} />\n    }]\n  },\n  render: (props: any) => createElement(() => {\n    const searchController = useFhirSearchController<OrganizationSortOrder, {\n      name: string | undefined;\n    }>({\n      pageSize: 20,\n      defaultSort: "name",\n      defaultSearch: {\n        name: undefined\n      }\n    });\n    const organizationsQuery = useFhirSearch("Organization", search => search.name(searchController.search?.name)._sort(searchController.sort)._count(searchController.pageSize)._total("accurate"), searchController.pageUrl);\n    return <FhirTable onRowNavigate={(org: Retrieved<Organization>) => alert(`Clicked on ${org.name}`)} {...buildArgs(props)} {...searchController} {...organizationsQuery} />;\n  })\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),WithPagination.parameters=(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},WithPagination.parameters),{},{docs:(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_WithPagination$param=WithPagination.parameters)||void 0===_WithPagination$param?void 0:_WithPagination$param.docs),{},{source:(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:'{\n  args: {\n    columns: [{\n      key: "name",\n      title: "Name",\n      sortable: true,\n      render: (row: Retrieved<Organization>) => <FhirValue type="string" value={row.name} />\n    }, {\n      key: "_lastUpdated",\n      title: "Last Updated",\n      sortable: true,\n      render: (row: Retrieved<Organization>) => <FhirValue type="instant" value={row.meta.lastUpdated} />\n    }]\n  },\n  render: (props: any) => createElement(() => {\n    const searchController = useFhirSearchController<OrganizationSortOrder, {\n      name: string | undefined;\n    }>({\n      pageSize: 20,\n      defaultSort: "name",\n      defaultSearch: {\n        name: undefined\n      }\n    });\n    const organizationsQuery = useFhirSearch("Organization", search => search.name(searchController.search?.name)._sort(searchController.sort)._count(searchController.pageSize)._total("accurate"), searchController.pageUrl);\n    return <Stack>\n          <FhirTable onRowNavigate={(org: Retrieved<Organization>) => alert(`Clicked on ${org.name}`)} {...buildArgs(props)} {...searchController} {...organizationsQuery} />\n          <FhirPagination {...organizationsQuery} {...searchController} />\n        </Stack>;\n  })\n}'},null===(_WithPagination$param2=WithPagination.parameters)||void 0===_WithPagination$param2||null===(_WithPagination$param3=_WithPagination$param2.docs)||void 0===_WithPagination$param3?void 0:_WithPagination$param3.source)})});const __namedExportsOrder=["Default","WithPagination"]},"./src/stories/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function buildArgs(props){var result={};for(var key in props)for(var value=props[key],keys=key.split("."),currentObj=result,i=0;i<keys.length;i++){var currentKey=keys[i];currentKey&&(currentKey in currentObj||(currentObj[currentKey]={}),i===keys.length-1&&(currentObj[currentKey]=value),currentObj=currentObj[currentKey])}return result}__webpack_require__.d(__webpack_exports__,{f:()=>buildArgs})}}]);