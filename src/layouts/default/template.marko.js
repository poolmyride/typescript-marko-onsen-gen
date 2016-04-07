function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      layout_placeholder = __loadTag(require("marko/taglibs/layout/placeholder-tag")),
      lasso_head = __loadTag(require("lasso/taglib/head-tag")),
      lasso_body = __loadTag(require("lasso/taglib/body-tag")),
      init_widgets = __loadTag(require("marko-widgets/taglib/init-widgets-tag")),
      async_fragments = __loadTag(require("marko/taglibs/async/async-fragments-tag")),
      browser_refresh = __loadTag(require("browser-refresh-taglib/refresh-tag"));

  return function render(data, out) {
    out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\"><meta name=\"mobile-web-app-capable\" content=\"yes\"><meta name=\"viewport\" content=\"initial-scale=1, maximum-scale=1, user-scalable=no\"><title>");

    layout_placeholder({
        name: "title",
        content: data.layoutContent
      }, out);

    out.w("</title>");

    lasso_head({}, out);

    out.w("</head><body>");

    layout_placeholder({
        name: "yield",
        content: data.layoutContent
      }, out);

    lasso_body({}, out);

    init_widgets({
        immediate: true
      }, out);

    async_fragments({}, out);

    browser_refresh({
        enabled: "true"
      }, out);

    out.w("</body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
