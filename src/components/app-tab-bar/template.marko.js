function create(__helpers) {
  var __widgetType = {
          name: "/src/components/app-tab-bar",
          def: function() {
            return require("./");
          }
        },
      __markoWidgets = require("marko-widgets"),
      __widgetAttrs = __markoWidgets.attrs,
      str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      w_widget = __loadTag(require("marko-widgets/taglib/widget-tag")),
      attr = __helpers.a,
      attrs = __helpers.as;

  return function render(data, out) {
    w_widget({
        type: __widgetType,
        _cfg: data.widgetConfig,
        _state: data.widgetState,
        _props: data.widgetProps,
        _body: data.widgetBody,
        renderBody: function renderBody(out, widget) {
          out.w("<div class=\"tab-bar tab-bar--top tab-bar--top-border\"" +
            attr("id", widget.id) +
            attrs(__widgetAttrs(widget)) +
            "><label class=\"tab-bar__item tab-bar--top-border__item\"><input type=\"radio\" name=\"top-tab-bar-b\" checked=\"checked\"><button class=\"tab-bar__button tab-bar--top-border__button\">Home</button></label><label class=\"tab-bar__item tab-bar--top-border__item\"><input type=\"radio\" name=\"top-tab-bar-b\"><button class=\"tab-bar__button tab-bar--top-border__button\">Comments</button></label><label class=\"tab-bar__item tab-bar--top-border__item\"><input type=\"radio\" name=\"top-tab-bar-b\"><button class=\"tab-bar__button tab-bar--top-border__button\">Activity</button></label></div>");
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
