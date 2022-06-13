"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "textarea",
      focus: false
    };
  },
  methods: {
    bindTextAreaBlur: function(e) {
      console.log(e.detail.value);
    }
  }
};
if (!Array) {
  const _easycom_page_head2 = common_vendor.resolveComponent("page-head");
  _easycom_page_head2();
}
const _easycom_page_head = () => "../../../components/page-head/page-head.js";
if (!Math) {
  _easycom_page_head();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: $data.title
    }),
    b: common_vendor.o((...args) => $options.bindTextAreaBlur && $options.bindTextAreaBlur(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/surloki/Documents/git-repos/uni-app-projects/demo01/hello-uni-app/pages/component/textarea/textarea.vue"]]);
wx.createPage(MiniProgramPage);
