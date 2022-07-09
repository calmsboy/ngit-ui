import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, renderSlot } from "vue";
var buButton_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const __default__ = {
  name: "BuButton"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    class: {
      type: String,
      default: "",
      required: false
    }
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    const clickHandler = (e) => {
      emits("click", e);
      alert("hi,customUI");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createElementVNode("button", {
          onClick: clickHandler,
          type: "button",
          class: normalizeClass(["btn", __props.class])
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 2)
      ]);
    };
  }
});
var buButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d87b825"]]);
buButton.install = (Vue) => Vue.component(buButton.name, buButton);
const components = [buButton];
const install = function(app) {
  if (install.installed)
    return;
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
var index = {
  install,
  buButton
};
export { index as default };
