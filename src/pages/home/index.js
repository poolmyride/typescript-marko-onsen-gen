"use strict";
var template = require('marko').load(require.resolve('./template.marko'));
function get(req, res) {
    template.render({
        name: 'Frank'
    }, res);
}
exports.get = get;
;
//# sourceMappingURL=index.js.map