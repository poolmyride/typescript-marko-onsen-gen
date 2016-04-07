function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      app_nav_bar = __loadTag(require("../app-nav-bar")),
      app_tab_bar = __loadTag(require("../app-tab-bar"));

  return function render(data, out) {
    app_nav_bar({
        title: "Leader Board"
      }, out);

    app_tab_bar({}, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
