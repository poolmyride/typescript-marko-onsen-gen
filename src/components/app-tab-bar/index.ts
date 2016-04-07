/**
 * Created by rohittalwar on 05/04/16.
 */
var defineWidget = require('marko-widgets').defineComponent
var template = require('marko').load(require.resolve('./template.marko'));

var comp = {
    template: template,
    getTemplateData: function(state,input) { // this is called whenever state changes using  this.setState('<state var name>',<value>);
        return {
            name:input.name
        };
    },
    init: function(){
        var el = this.el; // The root DOM element that the widget is bound to
        console.log('Initializing widget: ' + el.id);
    }

}
export = defineWidget(comp)