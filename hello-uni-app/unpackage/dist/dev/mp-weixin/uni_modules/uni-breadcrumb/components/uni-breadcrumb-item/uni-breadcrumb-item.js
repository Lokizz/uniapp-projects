"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentPage: ""
    };
  },
  props: {
    to: {
      type: [String, Object],
      default: ""
    },
    replace: {
      type: Boolean,
      default: false
    }
  },
  inject: ["uniBreadcrumb"],
  computed: {
    separator() {
      return this.uniBreadcrumb.separator;
    },
    separatorClass() {
      return this.uniBreadcrumb.separatorClass;
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(val) {
        this.currentPage = val.path;
      }
    }
  },
  methods: {
    navTo() {
      const {
        to,
        $router
      } = this;
      if (this.currentPage === to.path)
        return;
      if (to && $router) {
        this.replace ? $router.replace(to) : $router.push(to);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.to && $data.currentPage !== $props.to.path ? 1 : "",
    b: common_vendor.o((...args) => $options.navTo && $options.navTo(...args)),
    c: $options.separatorClass
  }, $options.separatorClass ? {
    d: common_vendor.n($options.separatorClass)
  } : {
    e: common_vendor.t($options.separator)
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/surloki/Documents/git-repos/uni-app-projects/demo01/hello-uni-app/uni_modules/uni-breadcrumb/components/uni-breadcrumb-item/uni-breadcrumb-item.vue"]]);
wx.createComponent(Component);
