"use strict";
/**
 * Created by rohittalwar on 04/04/16.
 */
var defineWidget = require('marko-widgets').defineComponent;
var template = require('marko').load(require.resolve('./template.marko'));
var comp = {
    template: template,
    getTemplateData: function (state, input) {
        return {
            name: input.name + " talwar"
        };
    },
    init: function () {
        var el = this.el; // The root DOM element that the widget is bound to
        console.log('Initializing widget: ' + el.id);
    }
};
module.exports = defineWidget(comp);
//# sourceMappingURL=index.js.map