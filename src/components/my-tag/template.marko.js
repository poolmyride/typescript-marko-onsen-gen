function create(__helpers) {
  var __widgetType = {
          name: "/src/components/my-tag",
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
      escapeXmlAttr = __helpers.xa,
      attrs = __helpers.as;

  return function render(data, out) {
    w_widget({
        type: __widgetType,
        _cfg: data.widgetConfig,
        _state: data.widgetState,
        _props: data.widgetProps,
        _body: data.widgetBody,
        renderBody: function renderBody(out, widget) {
          out.w("<div" +
            attr("id", widget.id) +
            " data-w-onclick=\"handleClick|" +
            escapeXmlAttr(widget.id) +
            "\"" +
            attrs(__widgetAttrs(widget)) +
            ">Hello bhai " +
            escapeXml(data.name) +
            "!</div>");
        }
      }, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
