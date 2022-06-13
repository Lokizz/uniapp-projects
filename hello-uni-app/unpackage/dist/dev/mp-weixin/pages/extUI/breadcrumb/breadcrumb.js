"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      routes: [{
        to: "/",
        name: "\u9996\u9875"
      }, {
        to: "",
        name: "\u83DC\u5355 A"
      }, {
        to: "",
        name: "\u83DC\u5355 B"
      }]
    };
  }
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_breadcrumb_item2 = common_vendor.resolveComponent("uni-breadcrumb-item");
  const _easycom_uni_breadcrumb2 = common_vendor.resolveComponent("uni-breadcrumb");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_card2 + _easycom_uni_breadcrumb_item2 + _easycom_uni_breadcrumb2 + _easycom_uni_section2)();
}
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_breadcrumb_item = () => "../../../uni_modules/uni-breadcrumb/components/uni-breadcrumb-item/uni-breadcrumb-item.js";
const _easycom_uni_breadcrumb = () => "../../../uni_modules/uni-breadcrumb/components/uni-breadcrumb/uni-breadcrumb.js";
const _easycom_uni_section = () => "../../../components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_card + _easycom_uni_breadcrumb_item + _easycom_uni_breadcrumb + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["is-full"]: true,
      ["is-shadow"]: false
    }),
    b: common_vendor.f($data.routes, (route, k0, i0) => {
      return {
        a: common_vendor.t(route.name),
        b: "38a08242-3-" + i0 + ",38a08242-2",
        c: common_vendor.p({
          to: route.to
        })
      };
    }),
    c: common_vendor.p({
      separator: "/"
    }),
    d: common_vendor.p({
      title: "\u57FA\u7840\u7528\u6CD5",
      type: "line",
      padding: true
    }),
    e: common_vendor.f($data.routes, (route, k0, i0) => {
      return {
        a: common_vendor.t(route.name),
        b: "38a08242-6-" + i0 + ",38a08242-5",
        c: common_vendor.p({
          to: route.to
        })
      };
    }),
    f: common_vendor.p({
      separator: ">"
    }),
    g: common_vendor.p({
      title: "\u81EA\u5B9A\u4E49\u5206\u9694\u7B26",
      type: "line",
      padding: true
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/surloki/Documents/git-repos/uni-app-projects/demo01/hello-uni-app/pages/extUI/breadcrumb/breadcrumb.vue"]]);
wx.createPage(MiniProgramPage);
