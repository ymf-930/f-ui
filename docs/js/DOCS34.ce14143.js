"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkf_ui_one"] = self["webpackChunkf_ui_one"] || []).push([[1294],{

/***/ 296:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": function() { return /* binding */ loading; }\n});\n\n// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.4.11/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js\nvar runtime_core_esm_bundler = __webpack_require__(6701);\n;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.23.7_webpack@5.89.0/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.4.11_vue@3.4.11_webpack@5.89.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.4.11_vue@3.4.11_webpack@5.89.0/node_modules/vue-loader/dist/index.js??clonedRuleSet-2.use[0]!./build/md-loader/index.js!./examples/docs/loading.md?vue&type=template&id=23773468\n\nconst _hoisted_1 = {\n  class: \"content element-doc\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h2\", {\n  id: \"jia-zai-jin-du\",\n  tabindex: \"-1\"\n}, \"加载进度\", -1);\nconst _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"p\", null, \"获取数据或加载中时显示，提示用户正在等待中。\", -1);\nconst _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"ji-chu-yong-fa\",\n  tabindex: \"-1\"\n}, \"基础用法\", -1);\nconst _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"p\", null, \"最简单的Loading\", -1);\nconst _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"\\n<template>\\n  <div class=\\\"demo-loading\\\">\\n    <f-loading></f-loading>\\n  </div>\\n</template>\\n\")], -1);\nconst _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"ju-zhong-gu-ding\",\n  tabindex: \"-1\"\n}, \"居中固定\", -1);\nconst _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"p\", null, \"可以在父级元素中居中固定 默认是居中固定的，fix设置为false后用于加载类似下拉加载的功能\", -1);\nconst _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"\\n<template>\\n  <div class=\\\"demo-loading\\\">\\n    <div>我是后面的段落我是后面的段落我是后面的段落我是后面的段落</div>\\n    <f-loading fix></f-loading>\\n  </div>\\n</template>\\n\")], -1);\nconst _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"zi-ding-yi-nei-rong\",\n  tabindex: \"-1\"\n}, \"自定义内容\", -1);\nconst _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"p\", null, \"可以自定义文字和内容\", -1);\nconst _hoisted_12 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"\\n<template>\\n  <div class=\\\"demo-loading\\\">\\n    <f-loading fix>加载中</f-loading>\\n  </div>\\n  <div class=\\\"demo-loading\\\">\\n    <f-loading fix show-text=\\\"loading\\\"></f-loading>\\n  </div>\\n  <div class=\\\"demo-loading\\\">\\n    <f-loading fix show-text=\\\"loading\\\" show-icon=\\\"loading2\\\"></f-loading>\\n  </div>\\n</template>\\n\")], -1);\nconst _hoisted_13 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"qie-huan-xian-shi-zhuang-tai\",\n  tabindex: \"-1\"\n}, \"切换显示状态\", -1);\nconst _hoisted_14 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"p\", null, \"切换显示状态\", -1);\nconst _hoisted_15 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"\\n<template>\\n  <div flex>\\n    <div>\\n      <p>普通使用</p>\\n      <div class=\\\"demo-loading\\\">\\n        <div>我是后面的段落我是后面的段落我是后面的段落我是后面的段落</div>\\n        <f-loading fix v-if=\\\"loading1\\\"></f-loading>\\n      </div>\\n      <div>\\n        <f-button @click=\\\"loading1=true\\\">加载</f-button>\\n        <f-button type=\\\"danger\\\" @click=\\\"loading1=false\\\">停止</f-button>\\n      </div>\\n    </div>\\n    <div>\\n      <p>指令调用</p>\\n      <div class=\\\"demo-loading\\\" v-loading:[loadingText]=\\\"loading2\\\">\\n        <div>我是后面的段落我是后面的段落我是后面的段落我是后面的段落</div>\\n      </div>\\n      <div>\\n        <f-button @click=\\\"loading2=true\\\">加载</f-button>\\n        <f-button type=\\\"danger\\\" @click=\\\"loading2=false\\\">停止</f-button>\\n      </div>\\n    </div>\\n  </div>\\n</template>\\n<script>\\n  export default {\\n    data() {\\n      return {\\n        loading1: true,\\n        loading2: true,\\n        loadingText: '正在努力加载中'\\n      }\\n    }\\n  }\\n</script>\\n\")], -1);\nconst _hoisted_16 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)(\"<h3 id=\\\"props\\\" tabindex=\\\"-1\\\">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>showIcon</td><td>显示加载图标</td><td>String</td><td>loading</td><td>—</td></tr><tr><td>showText</td><td>显示加载的文字</td><td>String</td><td>loading</td><td>—</td></tr><tr><td>fix</td><td>是否固定于父级中心</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>文字显示的大小</td><td>Number</td><td>—</td><td>—</td></tr></tbody></table>\", 2);\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_element_demo0 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo0\");\n  const _component_demo_block = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"demo-block\");\n  const _component_element_demo1 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo1\");\n  const _component_element_demo2 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo2\");\n  const _component_element_demo3 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo3\");\n  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(\"section\", _hoisted_1, [_hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo0)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_6]),\n    _: 1\n  }), _hoisted_7, _hoisted_8, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo1)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_9]),\n    _: 1\n  }), _hoisted_10, _hoisted_11, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo2)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_12]),\n    _: 1\n  }), _hoisted_13, _hoisted_14, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo3)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_15]),\n    _: 1\n  }), _hoisted_16]);\n}\n;// CONCATENATED MODULE: ./examples/docs/loading.md?vue&type=template&id=23773468\n\n// EXTERNAL MODULE: ./node_modules/.pnpm/vue@3.4.11/node_modules/vue/dist/vue.runtime.esm-bundler.js\nvar vue_runtime_esm_bundler = __webpack_require__(2400);\n;// CONCATENATED MODULE: ./node_modules/.pnpm/babel-loader@9.1.3_@babel+core@7.23.7_webpack@5.89.0/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.4.11_vue@3.4.11_webpack@5.89.0/node_modules/vue-loader/dist/index.js??clonedRuleSet-2.use[0]!./build/md-loader/index.js!./examples/docs/loading.md?vue&type=script&lang=js\n\n/* harmony default export */ var loadingvue_type_script_lang_js = ({\n  name: 'component-doc',\n  components: {\n    \"element-demo0\": function () {\n      const {\n        resolveComponent: _resolveComponent,\n        createVNode: _createVNode,\n        createElementVNode: _createElementVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      const _hoisted_1 = {\n        class: \"demo-loading\"\n      };\n      function render(_ctx, _cache) {\n        const _component_f_loading = _resolveComponent(\"f-loading\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createElementVNode(\"div\", _hoisted_1, [_createVNode(_component_f_loading)])]);\n      }\n      const democomponentExport = {};\n      return {\n        render,\n        ...democomponentExport\n      };\n    }(),\n    \"element-demo1\": function () {\n      const {\n        createElementVNode: _createElementVNode,\n        resolveComponent: _resolveComponent,\n        createVNode: _createVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      const _hoisted_1 = {\n        class: \"demo-loading\"\n      };\n      const _hoisted_2 = /*#__PURE__*/_createElementVNode(\"div\", null, \"我是后面的段落我是后面的段落我是后面的段落我是后面的段落\", -1);\n      function render(_ctx, _cache) {\n        const _component_f_loading = _resolveComponent(\"f-loading\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createElementVNode(\"div\", _hoisted_1, [_hoisted_2, _createVNode(_component_f_loading, {\n          fix: \"\"\n        })])]);\n      }\n      const democomponentExport = {};\n      return {\n        render,\n        ...democomponentExport\n      };\n    }(),\n    \"element-demo2\": function () {\n      const {\n        createTextVNode: _createTextVNode,\n        resolveComponent: _resolveComponent,\n        withCtx: _withCtx,\n        createVNode: _createVNode,\n        createElementVNode: _createElementVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      const _hoisted_1 = {\n        class: \"demo-loading\"\n      };\n      const _hoisted_2 = {\n        class: \"demo-loading\"\n      };\n      const _hoisted_3 = {\n        class: \"demo-loading\"\n      };\n      function render(_ctx, _cache) {\n        const _component_f_loading = _resolveComponent(\"f-loading\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createElementVNode(\"div\", _hoisted_1, [_createVNode(_component_f_loading, {\n          fix: \"\"\n        }, {\n          default: _withCtx(() => [_createTextVNode(\"加载中\")]),\n          _: 1\n        })]), _createElementVNode(\"div\", _hoisted_2, [_createVNode(_component_f_loading, {\n          fix: \"\",\n          \"show-text\": \"loading\"\n        })]), _createElementVNode(\"div\", _hoisted_3, [_createVNode(_component_f_loading, {\n          fix: \"\",\n          \"show-text\": \"loading\",\n          \"show-icon\": \"loading2\"\n        })])]);\n      }\n      const democomponentExport = {};\n      return {\n        render,\n        ...democomponentExport\n      };\n    }(),\n    \"element-demo3\": function () {\n      const {\n        createElementVNode: _createElementVNode,\n        resolveComponent: _resolveComponent,\n        openBlock: _openBlock,\n        createBlock: _createBlock,\n        createCommentVNode: _createCommentVNode,\n        createTextVNode: _createTextVNode,\n        withCtx: _withCtx,\n        createVNode: _createVNode,\n        resolveDirective: _resolveDirective,\n        createElementBlock: _createElementBlock,\n        withDirectives: _withDirectives\n      } = vue_runtime_esm_bundler;\n      const _hoisted_1 = {\n        flex: \"\"\n      };\n      const _hoisted_2 = /*#__PURE__*/_createElementVNode(\"p\", null, \"普通使用\", -1);\n      const _hoisted_3 = {\n        class: \"demo-loading\"\n      };\n      const _hoisted_4 = /*#__PURE__*/_createElementVNode(\"div\", null, \"我是后面的段落我是后面的段落我是后面的段落我是后面的段落\", -1);\n      const _hoisted_5 = /*#__PURE__*/_createElementVNode(\"p\", null, \"指令调用\", -1);\n      const _hoisted_6 = {\n        class: \"demo-loading\"\n      };\n      const _hoisted_7 = /*#__PURE__*/_createElementVNode(\"div\", null, \"我是后面的段落我是后面的段落我是后面的段落我是后面的段落\", -1);\n      const _hoisted_8 = [_hoisted_7];\n      function render(_ctx, _cache) {\n        const _component_f_loading = _resolveComponent(\"f-loading\");\n        const _component_f_button = _resolveComponent(\"f-button\");\n        const _directive_loading = _resolveDirective(\"loading\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createElementVNode(\"div\", _hoisted_1, [_createElementVNode(\"div\", null, [_hoisted_2, _createElementVNode(\"div\", _hoisted_3, [_hoisted_4, _ctx.loading1 ? (_openBlock(), _createBlock(_component_f_loading, {\n          key: 0,\n          fix: \"\"\n        })) : _createCommentVNode(\"\", true)]), _createElementVNode(\"div\", null, [_createVNode(_component_f_button, {\n          onClick: _cache[0] || (_cache[0] = $event => _ctx.loading1 = true)\n        }, {\n          default: _withCtx(() => [_createTextVNode(\"加载\")]),\n          _: 1\n        }), _createVNode(_component_f_button, {\n          type: \"danger\",\n          onClick: _cache[1] || (_cache[1] = $event => _ctx.loading1 = false)\n        }, {\n          default: _withCtx(() => [_createTextVNode(\"停止\")]),\n          _: 1\n        })])]), _createElementVNode(\"div\", null, [_hoisted_5, _withDirectives((_openBlock(), _createElementBlock(\"div\", _hoisted_6, [..._hoisted_8])), [[_directive_loading, _ctx.loading2, _ctx.loadingText]]), _createElementVNode(\"div\", null, [_createVNode(_component_f_button, {\n          onClick: _cache[2] || (_cache[2] = $event => _ctx.loading2 = true)\n        }, {\n          default: _withCtx(() => [_createTextVNode(\"加载\")]),\n          _: 1\n        }), _createVNode(_component_f_button, {\n          type: \"danger\",\n          onClick: _cache[3] || (_cache[3] = $event => _ctx.loading2 = false)\n        }, {\n          default: _withCtx(() => [_createTextVNode(\"停止\")]),\n          _: 1\n        })])])])]);\n      }\n      const democomponentExport = {\n        data() {\n          return {\n            loading1: true,\n            loading2: true,\n            loadingText: '正在努力加载中'\n          };\n        }\n      };\n      return {\n        render,\n        ...democomponentExport\n      };\n    }()\n  }\n});\n;// CONCATENATED MODULE: ./examples/docs/loading.md?vue&type=script&lang=js\n \n// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_@vue+compiler-sfc@3.4.11_vue@3.4.11_webpack@5.89.0/node_modules/vue-loader/dist/exportHelper.js\nvar exportHelper = __webpack_require__(8978);\n;// CONCATENATED MODULE: ./examples/docs/loading.md\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(loadingvue_type_script_lang_js, [['render',render]])\n\n/* harmony default export */ var loading = (__exports__);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjk2LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFsREE7Ozs7Ozs7QUFFQTtBQU9BO0FBQ0E7QUFWQTtBQWdCQTtBQUlBO0FBQ0E7QUFyQkE7QUE0QkE7QUFJQTtBQUNBO0FBakNBO0FBNkNBO0FBSUE7QUFDQTtBQWxEQTtBQXVGQTs7Ozs7OztBQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FFL1RBOzs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2YtdWktb25lLy4vZXhhbXBsZXMvZG9jcy9sb2FkaW5nLm1kPzYzM2MiLCJ3ZWJwYWNrOi8vZi11aS1vbmUvLi9leGFtcGxlcy9kb2NzL2xvYWRpbmcubWQ/NWVjMyIsIndlYnBhY2s6Ly9mLXVpLW9uZS8uL2V4YW1wbGVzL2RvY3MvbG9hZGluZy5tZD9iM2QxIiwid2VicGFjazovL2YtdWktb25lLy4vZXhhbXBsZXMvZG9jcy9sb2FkaW5nLm1kP2JhMjMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gIDx0ZW1wbGF0ZT5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRlbnQgZWxlbWVudC1kb2NcIj5cbiAgICAgIDxoMiBpZD1cImppYS16YWktamluLWR1XCIgdGFiaW5kZXg9XCItMVwiPuWKoOi9vei/m+W6pjwvaDI+XG48cD7ojrflj5bmlbDmja7miJbliqDovb3kuK3ml7bmmL7npLrvvIzmj5DnpLrnlKjmiLfmraPlnKjnrYnlvoXkuK3jgII8L3A+XG48aDMgaWQ9XCJqaS1jaHUteW9uZy1mYVwiIHRhYmluZGV4PVwiLTFcIj7ln7rnoYDnlKjms5U8L2gzPlxuPHA+5pyA566A5Y2V55qETG9hZGluZzwvcD5cbjxkZW1vLWJsb2NrPlxuICAgICAgICBcbiAgICAgICAgPHRlbXBsYXRlICNzb3VyY2U+PGVsZW1lbnQtZGVtbzAgLz48L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgI2hpZ2hsaWdodD48cHJlIHYtcHJlPjxjb2RlIGNsYXNzPVwiaHRtbFwiPlxuJmx0O3RlbXBsYXRlJmd0O1xuICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2RlbW8tbG9hZGluZyZxdW90OyZndDtcbiAgICAmbHQ7Zi1sb2FkaW5nJmd0OyZsdDsvZi1sb2FkaW5nJmd0O1xuICAmbHQ7L2RpdiZndDtcbiZsdDsvdGVtcGxhdGUmZ3Q7XG48L2NvZGU+PC9wcmU+PC90ZW1wbGF0ZT48L2RlbW8tYmxvY2s+PGgzIGlkPVwianUtemhvbmctZ3UtZGluZ1wiIHRhYmluZGV4PVwiLTFcIj7lsYXkuK3lm7rlrpo8L2gzPlxuPHA+5Y+v5Lul5Zyo54i257qn5YWD57Sg5Lit5bGF5Lit5Zu65a6aIOm7mOiupOaYr+WxheS4reWbuuWumueahO+8jGZpeOiuvue9ruS4umZhbHNl5ZCO55So5LqO5Yqg6L2957G75Ly85LiL5ouJ5Yqg6L2955qE5Yqf6IO9PC9wPlxuPGRlbW8tYmxvY2s+XG4gICAgICAgIFxuICAgICAgICA8dGVtcGxhdGUgI3NvdXJjZT48ZWxlbWVudC1kZW1vMSAvPjwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSAjaGlnaGxpZ2h0PjxwcmUgdi1wcmU+PGNvZGUgY2xhc3M9XCJodG1sXCI+XG4mbHQ7dGVtcGxhdGUmZ3Q7XG4gICZsdDtkaXYgY2xhc3M9JnF1b3Q7ZGVtby1sb2FkaW5nJnF1b3Q7Jmd0O1xuICAgICZsdDtkaXYmZ3Q75oiR5piv5ZCO6Z2i55qE5q616JC95oiR5piv5ZCO6Z2i55qE5q616JC95oiR5piv5ZCO6Z2i55qE5q616JC95oiR5piv5ZCO6Z2i55qE5q616JC9Jmx0Oy9kaXYmZ3Q7XG4gICAgJmx0O2YtbG9hZGluZyBmaXgmZ3Q7Jmx0Oy9mLWxvYWRpbmcmZ3Q7XG4gICZsdDsvZGl2Jmd0O1xuJmx0Oy90ZW1wbGF0ZSZndDtcbjwvY29kZT48L3ByZT48L3RlbXBsYXRlPjwvZGVtby1ibG9jaz48aDMgaWQ9XCJ6aS1kaW5nLXlpLW5laS1yb25nXCIgdGFiaW5kZXg9XCItMVwiPuiHquWumuS5ieWGheWuuTwvaDM+XG48cD7lj6/ku6Xoh6rlrprkuYnmloflrZflkozlhoXlrrk8L3A+XG48ZGVtby1ibG9jaz5cbiAgICAgICAgXG4gICAgICAgIDx0ZW1wbGF0ZSAjc291cmNlPjxlbGVtZW50LWRlbW8yIC8+PC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlICNoaWdobGlnaHQ+PHByZSB2LXByZT48Y29kZSBjbGFzcz1cImh0bWxcIj5cbiZsdDt0ZW1wbGF0ZSZndDtcbiAgJmx0O2RpdiBjbGFzcz0mcXVvdDtkZW1vLWxvYWRpbmcmcXVvdDsmZ3Q7XG4gICAgJmx0O2YtbG9hZGluZyBmaXgmZ3Q75Yqg6L295LitJmx0Oy9mLWxvYWRpbmcmZ3Q7XG4gICZsdDsvZGl2Jmd0O1xuICAmbHQ7ZGl2IGNsYXNzPSZxdW90O2RlbW8tbG9hZGluZyZxdW90OyZndDtcbiAgICAmbHQ7Zi1sb2FkaW5nIGZpeCBzaG93LXRleHQ9JnF1b3Q7bG9hZGluZyZxdW90OyZndDsmbHQ7L2YtbG9hZGluZyZndDtcbiAgJmx0Oy9kaXYmZ3Q7XG4gICZsdDtkaXYgY2xhc3M9JnF1b3Q7ZGVtby1sb2FkaW5nJnF1b3Q7Jmd0O1xuICAgICZsdDtmLWxvYWRpbmcgZml4IHNob3ctdGV4dD0mcXVvdDtsb2FkaW5nJnF1b3Q7IHNob3ctaWNvbj0mcXVvdDtsb2FkaW5nMiZxdW90OyZndDsmbHQ7L2YtbG9hZGluZyZndDtcbiAgJmx0Oy9kaXYmZ3Q7XG4mbHQ7L3RlbXBsYXRlJmd0O1xuPC9jb2RlPjwvcHJlPjwvdGVtcGxhdGU+PC9kZW1vLWJsb2NrPjxoMyBpZD1cInFpZS1odWFuLXhpYW4tc2hpLXpodWFuZy10YWlcIiB0YWJpbmRleD1cIi0xXCI+5YiH5o2i5pi+56S654q25oCBPC9oMz5cbjxwPuWIh+aNouaYvuekuueKtuaAgTwvcD5cbjxkZW1vLWJsb2NrPlxuICAgICAgICBcbiAgICAgICAgPHRlbXBsYXRlICNzb3VyY2U+PGVsZW1lbnQtZGVtbzMgLz48L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgI2hpZ2hsaWdodD48cHJlIHYtcHJlPjxjb2RlIGNsYXNzPVwiaHRtbFwiPlxuJmx0O3RlbXBsYXRlJmd0O1xuICAmbHQ7ZGl2IGZsZXgmZ3Q7XG4gICAgJmx0O2RpdiZndDtcbiAgICAgICZsdDtwJmd0O+aZrumAmuS9v+eUqCZsdDsvcCZndDtcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7ZGVtby1sb2FkaW5nJnF1b3Q7Jmd0O1xuICAgICAgICAmbHQ7ZGl2Jmd0O+aIkeaYr+WQjumdoueahOauteiQveaIkeaYr+WQjumdoueahOauteiQveaIkeaYr+WQjumdoueahOauteiQveaIkeaYr+WQjumdoueahOauteiQvSZsdDsvZGl2Jmd0O1xuICAgICAgICAmbHQ7Zi1sb2FkaW5nIGZpeCB2LWlmPSZxdW90O2xvYWRpbmcxJnF1b3Q7Jmd0OyZsdDsvZi1sb2FkaW5nJmd0O1xuICAgICAgJmx0Oy9kaXYmZ3Q7XG4gICAgICAmbHQ7ZGl2Jmd0O1xuICAgICAgICAmbHQ7Zi1idXR0b24gQGNsaWNrPSZxdW90O2xvYWRpbmcxPXRydWUmcXVvdDsmZ3Q75Yqg6L29Jmx0Oy9mLWJ1dHRvbiZndDtcbiAgICAgICAgJmx0O2YtYnV0dG9uIHR5cGU9JnF1b3Q7ZGFuZ2VyJnF1b3Q7IEBjbGljaz0mcXVvdDtsb2FkaW5nMT1mYWxzZSZxdW90OyZndDvlgZzmraImbHQ7L2YtYnV0dG9uJmd0O1xuICAgICAgJmx0Oy9kaXYmZ3Q7XG4gICAgJmx0Oy9kaXYmZ3Q7XG4gICAgJmx0O2RpdiZndDtcbiAgICAgICZsdDtwJmd0O+aMh+S7pOiwg+eUqCZsdDsvcCZndDtcbiAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7ZGVtby1sb2FkaW5nJnF1b3Q7IHYtbG9hZGluZzpbbG9hZGluZ1RleHRdPSZxdW90O2xvYWRpbmcyJnF1b3Q7Jmd0O1xuICAgICAgICAmbHQ7ZGl2Jmd0O+aIkeaYr+WQjumdoueahOauteiQveaIkeaYr+WQjumdoueahOauteiQveaIkeaYr+WQjumdoueahOauteiQveaIkeaYr+WQjumdoueahOauteiQvSZsdDsvZGl2Jmd0O1xuICAgICAgJmx0Oy9kaXYmZ3Q7XG4gICAgICAmbHQ7ZGl2Jmd0O1xuICAgICAgICAmbHQ7Zi1idXR0b24gQGNsaWNrPSZxdW90O2xvYWRpbmcyPXRydWUmcXVvdDsmZ3Q75Yqg6L29Jmx0Oy9mLWJ1dHRvbiZndDtcbiAgICAgICAgJmx0O2YtYnV0dG9uIHR5cGU9JnF1b3Q7ZGFuZ2VyJnF1b3Q7IEBjbGljaz0mcXVvdDtsb2FkaW5nMj1mYWxzZSZxdW90OyZndDvlgZzmraImbHQ7L2YtYnV0dG9uJmd0O1xuICAgICAgJmx0Oy9kaXYmZ3Q7XG4gICAgJmx0Oy9kaXYmZ3Q7XG4gICZsdDsvZGl2Jmd0O1xuJmx0Oy90ZW1wbGF0ZSZndDtcbiZsdDtzY3JpcHQmZ3Q7XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGluZzE6IHRydWUsXG4gICAgICAgIGxvYWRpbmcyOiB0cnVlLFxuICAgICAgICBsb2FkaW5nVGV4dDogJ+ato+WcqOWKquWKm+WKoOi9veS4rSdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiZsdDsvc2NyaXB0Jmd0O1xuPC9jb2RlPjwvcHJlPjwvdGVtcGxhdGU+PC9kZW1vLWJsb2NrPjxoMyBpZD1cInByb3BzXCIgdGFiaW5kZXg9XCItMVwiPlByb3BzPC9oMz5cbjx0YWJsZT5cbjx0aGVhZD5cbjx0cj5cbjx0aD7lj4LmlbA8L3RoPlxuPHRoPuivtOaYjjwvdGg+XG48dGg+57G75Z6LPC90aD5cbjx0aD7lj6/pgInlgLw8L3RoPlxuPHRoPum7mOiupOWAvDwvdGg+XG48L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbjx0cj5cbjx0ZD5zaG93SWNvbjwvdGQ+XG48dGQ+5pi+56S65Yqg6L295Zu+5qCHPC90ZD5cbjx0ZD5TdHJpbmc8L3RkPlxuPHRkPmxvYWRpbmc8L3RkPlxuPHRkPuKAlDwvdGQ+XG48L3RyPlxuPHRyPlxuPHRkPnNob3dUZXh0PC90ZD5cbjx0ZD7mmL7npLrliqDovb3nmoTmloflrZc8L3RkPlxuPHRkPlN0cmluZzwvdGQ+XG48dGQ+bG9hZGluZzwvdGQ+XG48dGQ+4oCUPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+Zml4PC90ZD5cbjx0ZD7mmK/lkKblm7rlrprkuo7niLbnuqfkuK3lv4M8L3RkPlxuPHRkPkJvb2xlYW48L3RkPlxuPHRkPuKAlDwvdGQ+XG48dGQ+dHJ1ZTwvdGQ+XG48L3RyPlxuPHRyPlxuPHRkPnNpemU8L3RkPlxuPHRkPuaWh+Wtl+aYvuekuueahOWkp+WwjzwvdGQ+XG48dGQ+TnVtYmVyPC90ZD5cbjx0ZD7igJQ8L3RkPlxuPHRkPuKAlDwvdGQ+XG48L3RyPlxuPC90Ym9keT5cbjwvdGFibGU+XG5cbiAgICA8L3NlY3Rpb24+XG4gIDwvdGVtcGxhdGU+XG4gIDxzY3JpcHQ+XG4gICAgICBpbXBvcnQgKiBhcyBWdWUgZnJvbSAndnVlJztcbiAgICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ2NvbXBvbmVudC1kb2MnLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgXCJlbGVtZW50LWRlbW8wXCI6IChmdW5jdGlvbigpIHtcbiAgICBcbiAgICBjb25zdCB7IHJlc29sdmVDb21wb25lbnQ6IF9yZXNvbHZlQ29tcG9uZW50LCBjcmVhdGVWTm9kZTogX2NyZWF0ZVZOb2RlLCBjcmVhdGVFbGVtZW50Vk5vZGU6IF9jcmVhdGVFbGVtZW50Vk5vZGUsIG9wZW5CbG9jazogX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrOiBfY3JlYXRlRWxlbWVudEJsb2NrIH0gPSBWdWVcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiZGVtby1sb2FkaW5nXCIgfVxuXG5mdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlKSB7XG4gIGNvbnN0IF9jb21wb25lbnRfZl9sb2FkaW5nID0gX3Jlc29sdmVDb21wb25lbnQoXCJmLWxvYWRpbmdcIilcblxuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBudWxsLCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9mX2xvYWRpbmcpXG4gICAgXSlcbiAgXSkpXG59XG4gIFxuICAgIGNvbnN0IGRlbW9jb21wb25lbnRFeHBvcnQgPSB7fVxuICAgIHJldHVybiB7XG4gICAgICByZW5kZXIsXG4gICAgICAuLi5kZW1vY29tcG9uZW50RXhwb3J0XG4gICAgfVxuICB9KSgpLFwiZWxlbWVudC1kZW1vMVwiOiAoZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgY29uc3QgeyBjcmVhdGVFbGVtZW50Vk5vZGU6IF9jcmVhdGVFbGVtZW50Vk5vZGUsIHJlc29sdmVDb21wb25lbnQ6IF9yZXNvbHZlQ29tcG9uZW50LCBjcmVhdGVWTm9kZTogX2NyZWF0ZVZOb2RlLCBvcGVuQmxvY2s6IF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jazogX2NyZWF0ZUVsZW1lbnRCbG9jayB9ID0gVnVlXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImRlbW8tbG9hZGluZ1wiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBudWxsLCBcIuaIkeaYr+WQjumdoueahOauteiQveaIkeaYr+WQjumdoueahOauteiQveaIkeaYr+WQjumdoueahOauteiQveaIkeaYr+WQjumdoueahOauteiQvVwiLCAtMSlcblxuZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSkge1xuICBjb25zdCBfY29tcG9uZW50X2ZfbG9hZGluZyA9IF9yZXNvbHZlQ29tcG9uZW50KFwiZi1sb2FkaW5nXCIpXG5cbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgbnVsbCwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgX2hvaXN0ZWRfMixcbiAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X2ZfbG9hZGluZywgeyBmaXg6IFwiXCIgfSlcbiAgICBdKVxuICBdKSlcbn1cbiAgXG4gICAgY29uc3QgZGVtb2NvbXBvbmVudEV4cG9ydCA9IHt9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbmRlcixcbiAgICAgIC4uLmRlbW9jb21wb25lbnRFeHBvcnRcbiAgICB9XG4gIH0pKCksXCJlbGVtZW50LWRlbW8yXCI6IChmdW5jdGlvbigpIHtcbiAgICBcbiAgICBjb25zdCB7IGNyZWF0ZVRleHRWTm9kZTogX2NyZWF0ZVRleHRWTm9kZSwgcmVzb2x2ZUNvbXBvbmVudDogX3Jlc29sdmVDb21wb25lbnQsIHdpdGhDdHg6IF93aXRoQ3R4LCBjcmVhdGVWTm9kZTogX2NyZWF0ZVZOb2RlLCBjcmVhdGVFbGVtZW50Vk5vZGU6IF9jcmVhdGVFbGVtZW50Vk5vZGUsIG9wZW5CbG9jazogX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrOiBfY3JlYXRlRWxlbWVudEJsb2NrIH0gPSBWdWVcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiZGVtby1sb2FkaW5nXCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwiZGVtby1sb2FkaW5nXCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IHsgY2xhc3M6IFwiZGVtby1sb2FkaW5nXCIgfVxuXG5mdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlKSB7XG4gIGNvbnN0IF9jb21wb25lbnRfZl9sb2FkaW5nID0gX3Jlc29sdmVDb21wb25lbnQoXCJmLWxvYWRpbmdcIilcblxuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBudWxsLCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9mX2xvYWRpbmcsIHsgZml4OiBcIlwiIH0sIHtcbiAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoXCLliqDovb3kuK1cIilcbiAgICAgICAgXSksXG4gICAgICAgIF86IDFcbiAgICAgIH0pXG4gICAgXSksXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9mX2xvYWRpbmcsIHtcbiAgICAgICAgZml4OiBcIlwiLFxuICAgICAgICBcInNob3ctdGV4dFwiOiBcImxvYWRpbmdcIlxuICAgICAgfSlcbiAgICBdKSxcbiAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzMsIFtcbiAgICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X2ZfbG9hZGluZywge1xuICAgICAgICBmaXg6IFwiXCIsXG4gICAgICAgIFwic2hvdy10ZXh0XCI6IFwibG9hZGluZ1wiLFxuICAgICAgICBcInNob3ctaWNvblwiOiBcImxvYWRpbmcyXCJcbiAgICAgIH0pXG4gICAgXSlcbiAgXSkpXG59XG4gIFxuICAgIGNvbnN0IGRlbW9jb21wb25lbnRFeHBvcnQgPSB7fVxuICAgIHJldHVybiB7XG4gICAgICByZW5kZXIsXG4gICAgICAuLi5kZW1vY29tcG9uZW50RXhwb3J0XG4gICAgfVxuICB9KSgpLFwiZWxlbWVudC1kZW1vM1wiOiAoZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgY29uc3QgeyBjcmVhdGVFbGVtZW50Vk5vZGU6IF9jcmVhdGVFbGVtZW50Vk5vZGUsIHJlc29sdmVDb21wb25lbnQ6IF9yZXNvbHZlQ29tcG9uZW50LCBvcGVuQmxvY2s6IF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrOiBfY3JlYXRlQmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZTogX2NyZWF0ZUNvbW1lbnRWTm9kZSwgY3JlYXRlVGV4dFZOb2RlOiBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4OiBfd2l0aEN0eCwgY3JlYXRlVk5vZGU6IF9jcmVhdGVWTm9kZSwgcmVzb2x2ZURpcmVjdGl2ZTogX3Jlc29sdmVEaXJlY3RpdmUsIGNyZWF0ZUVsZW1lbnRCbG9jazogX2NyZWF0ZUVsZW1lbnRCbG9jaywgd2l0aERpcmVjdGl2ZXM6IF93aXRoRGlyZWN0aXZlcyB9ID0gVnVlXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGZsZXg6IFwiXCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBudWxsLCBcIuaZrumAmuS9v+eUqFwiLCAtMSlcbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcImRlbW8tbG9hZGluZ1wiIH1cbmNvbnN0IF9ob2lzdGVkXzQgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBudWxsLCBcIuaIkeaYr+WQjumdoueahOauteiQveaIkeaYr+WQjumdoueahOauteiQveaIkeaYr+WQjumdoueahOauteiQveaIkeaYr+WQjumdoueahOauteiQvVwiLCAtMSlcbmNvbnN0IF9ob2lzdGVkXzUgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgbnVsbCwgXCLmjIfku6TosIPnlKhcIiwgLTEpXG5jb25zdCBfaG9pc3RlZF82ID0geyBjbGFzczogXCJkZW1vLWxvYWRpbmdcIiB9XG5jb25zdCBfaG9pc3RlZF83ID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgbnVsbCwgXCLmiJHmmK/lkI7pnaLnmoTmrrXokL3miJHmmK/lkI7pnaLnmoTmrrXokL3miJHmmK/lkI7pnaLnmoTmrrXokL3miJHmmK/lkI7pnaLnmoTmrrXokL1cIiwgLTEpXG5jb25zdCBfaG9pc3RlZF84ID0gW1xuICBfaG9pc3RlZF83XG5dXG5cbmZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUpIHtcbiAgY29uc3QgX2NvbXBvbmVudF9mX2xvYWRpbmcgPSBfcmVzb2x2ZUNvbXBvbmVudChcImYtbG9hZGluZ1wiKVxuICBjb25zdCBfY29tcG9uZW50X2ZfYnV0dG9uID0gX3Jlc29sdmVDb21wb25lbnQoXCJmLWJ1dHRvblwiKVxuICBjb25zdCBfZGlyZWN0aXZlX2xvYWRpbmcgPSBfcmVzb2x2ZURpcmVjdGl2ZShcImxvYWRpbmdcIilcblxuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBudWxsLCBbXG4gICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIG51bGwsIFtcbiAgICAgICAgX2hvaXN0ZWRfMixcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8zLCBbXG4gICAgICAgICAgX2hvaXN0ZWRfNCxcbiAgICAgICAgICAoX2N0eC5sb2FkaW5nMSlcbiAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9jb21wb25lbnRfZl9sb2FkaW5nLCB7XG4gICAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICAgIGZpeDogXCJcIlxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcIlwiLCB0cnVlKVxuICAgICAgICBdKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBudWxsLCBbXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfZl9idXR0b24sIHtcbiAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+IChfY3R4LmxvYWRpbmcxPXRydWUpKVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShcIuWKoOi9vVwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfOiAxXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfZl9idXR0b24sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoX2N0eC5sb2FkaW5nMT1mYWxzZSkpXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKFwi5YGc5q2iXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF86IDFcbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIG51bGwsIFtcbiAgICAgICAgX2hvaXN0ZWRfNSxcbiAgICAgICAgX3dpdGhEaXJlY3RpdmVzKChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfNiwgWy4uLl9ob2lzdGVkXzhdKSksIFtcbiAgICAgICAgICBbX2RpcmVjdGl2ZV9sb2FkaW5nLCBfY3R4LmxvYWRpbmcyLCBfY3R4LmxvYWRpbmdUZXh0XVxuICAgICAgICBdKSxcbiAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBudWxsLCBbXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfZl9idXR0b24sIHtcbiAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gJGV2ZW50ID0+IChfY3R4LmxvYWRpbmcyPXRydWUpKVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShcIuWKoOi9vVwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfOiAxXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfZl9idXR0b24sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiZGFuZ2VyXCIsXG4gICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbM10gfHwgKF9jYWNoZVszXSA9ICRldmVudCA9PiAoX2N0eC5sb2FkaW5nMj1mYWxzZSkpXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKFwi5YGc5q2iXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF86IDFcbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKSlcbn1cbiAgXG4gICAgY29uc3QgZGVtb2NvbXBvbmVudEV4cG9ydCA9IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZGluZzE6IHRydWUsXG4gICAgICAgIGxvYWRpbmcyOiB0cnVlLFxuICAgICAgICBsb2FkaW5nVGV4dDogJ+ato+WcqOWKquWKm+WKoOi9veS4rSdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgICByZXR1cm4ge1xuICAgICAgcmVuZGVyLFxuICAgICAgLi4uZGVtb2NvbXBvbmVudEV4cG9ydFxuICAgIH1cbiAgfSkoKSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvc2NyaXB0PlxuICAiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmFiZWwtbG9hZGVyQDkuMS4zX0BiYWJlbCtjb3JlQDcuMjMuN193ZWJwYWNrQDUuODkuMC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNy40LjJfQHZ1ZStjb21waWxlci1zZmNAMy40LjExX3Z1ZUAzLjQuMTFfd2VicGFja0A1Ljg5LjAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNy40LjJfQHZ1ZStjb21waWxlci1zZmNAMy40LjExX3Z1ZUAzLjQuMTFfd2VicGFja0A1Ljg5LjAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZVswXSEuLi8uLi9idWlsZC9tZC1sb2FkZXIvaW5kZXguanMhLi9sb2FkaW5nLm1kP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzNzczNDY4XCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JhYmVsLWxvYWRlckA5LjEuM19AYmFiZWwrY29yZUA3LjIzLjdfd2VicGFja0A1Ljg5LjAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTcuNC4yX0B2dWUrY29tcGlsZXItc2ZjQDMuNC4xMV92dWVAMy40LjExX3dlYnBhY2tANS44OS4wL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2VbMF0hLi4vLi4vYnVpbGQvbWQtbG9hZGVyL2luZGV4LmpzIS4vbG9hZGluZy5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmFiZWwtbG9hZGVyQDkuMS4zX0BiYWJlbCtjb3JlQDcuMjMuN193ZWJwYWNrQDUuODkuMC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNy40LjJfQHZ1ZStjb21waWxlci1zZmNAMy40LjExX3Z1ZUAzLjQuMTFfd2VicGFja0A1Ljg5LjAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZVswXSEuLi8uLi9idWlsZC9tZC1sb2FkZXIvaW5kZXguanMhLi9sb2FkaW5nLm1kP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9sb2FkaW5nLm1kP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIzNzczNDY4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbG9hZGluZy5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9sb2FkaW5nLm1kP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTcuNC4yX0B2dWUrY29tcGlsZXItc2ZjQDMuNC4xMV92dWVAMy40LjExX3dlYnBhY2tANS44OS4wL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXV0pXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///296\n");

/***/ })

}]);