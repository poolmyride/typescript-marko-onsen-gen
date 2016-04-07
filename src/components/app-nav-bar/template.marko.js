function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<div class=\"navigation-bar navigation-bar--material\"><div class=\"navigation-bar__center navigation-bar--material__center\">" +
      escapeXml(data.title) +
      "</div></div>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
