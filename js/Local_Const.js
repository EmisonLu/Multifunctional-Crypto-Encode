window["LocalConst"] = {
  IS_PJAX: "1",
  IS_PAJX_COMMENT: "1",
  PJAX_ANIMATE: "default",
  PJAX_TO_TOP: "auto",
  TO_TOP_SPEED: "80",

  USER_COMPLETED: {
    data: '_hmt.push(["_trackPageview", document.location.pathname]);',
  },
  VDITOR_COMPLETED: { data: "" },

  NO_SHOW_RIGHT_SIDE_IN_POST: "",

  CDN_NAME: "UPYUN",
  LAZY_LOAD: "",
  PAGE_ANIMATE: "",
  THEME_COLOR: "14",
  THEME_COLOR_EDIT: "white-white-white",
  THEME_HEADER_FIX: "1",
  THEME_ASIDE_FIX: "1",
  THEME_ASIDE_FOLDED: "",
  THEME_ASIDE_DOCK: "",
  THEME_CONTAINER_BOX: "1",
  THEME_HIGHLIGHT_CODE: "1",
  THEME_TOC: "1",
  THEME_DARK_MODE: "auto",
  THEME_DARK_MODE_VALUE: "auto",
  SHOW_SETTING_BUTTON: "1",

  THEME_DARK_HOUR: "18",
  THEME_LIGHT_HOUR: "6",
  THUMB_STYLE: "normal",
  AUTO_READ_MODE: "",
  SHOW_LYRIC: "1",
  AUTO_SHOW_LYRIC: "1",
  THEME_POST_CONTENT: "1",
  //other
  OFF_SCROLL_HEIGHT: "55",
  SHOW_IMAGE_ALT: "1",
  USER_LOGIN: "",
  USE_CACHE: "1",
  POST_SPEECH: "1",
  POST_MATHJAX: "",
  SHOW_FOOTER: "1",
  IS_TRANSPARENT: "",
};

if ("serviceWorker" in navigator) {
  if (LocalConst.USE_CACHE) {
    navigator.serviceWorker
      .register(LocalConst.BLOG_URL + "sw.min.js?v=8.1.02021030201")
      .then(function (reg) {})
      .catch(function (error) {
        console.log("cache failed with " + error); // registration failed
      });
  } else {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (var index in registrations) {
        registrations[index].unregister();
        // 清除缓存
        window.caches &&
          caches.keys &&
          caches.keys().then(function (keys) {
            keys.forEach(function (key) {
              caches.delete(key);
            });
          });
        console.log("unregister success");
      }
    });
  }
}

var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3b1f6198215a81b2f56b1387c009c48f";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
