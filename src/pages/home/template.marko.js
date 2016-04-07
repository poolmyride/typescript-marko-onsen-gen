function create(__helpers) {
  var loadTemplate = __helpers.l,
      default_template = loadTemplate(require.resolve("src/layouts/default/template.marko")),
      str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __browser_json = require.resolve("./browser.json"),
      __loadTag = __helpers.t,
      lasso_page = __loadTag(require("lasso/taglib/page-tag")),
      layout_use = __loadTag(require("marko/taglibs/layout/use-tag")),
      layout_put = __loadTag(require("marko/taglibs/layout/put-tag")),
      app_videos = __loadTag(require("../../components/app-videos"));

  return function render(data, out) {
    lasso_page({
        packagePath: __browser_json,
        dirname: __dirname,
        filename: __filename
      }, out);

    layout_use({
        __template: default_template,
        getContent: function getContent(__layoutHelper) {
          layout_put({
              into: "title",
              layout: __layoutHelper,
              renderBody: function renderBody(out) {
                out.w("Marko Widgets UI Components Playground");
              }
            }, out);

          layout_put({
              into: "yield",
              layout: __layoutHelper,
              renderBody: function renderBody(out) {
                out.w("<ons-page>");

                app_videos({}, out);

                out.w("</ons-page>");
              }
            }, out);
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
