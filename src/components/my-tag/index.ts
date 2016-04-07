/*
* This is for client side rendering
* You can do following on the client side
var widget = require('./app-hello')
 .render({
 name: 'John'
 })
 .appendTo(document.body)
 .getWidget();

 // Changing the props will trigger the widget to re-render
 // with the new props and for the DOM to be updated:
 widget.setProps({
 name: 'Jane'
 });
* */
var defineWidget = require('marko-widgets').defineComponent
var template = require('marko').load(require.resolve('./template.marko'));

var comp = {
    template: template,
    getTemplateData: function(state,input)  { // this is called whenever state changes using  this.setState('<state var name>',<value>);
        return {
            name:input.name + "rajat"
        };
    },
    init: function(){
        var el = this.el; // The root DOM element that the widget is bound to
        console.log('Initializing widget: ' + el.id);
    },
    handleClick :function() {
        this.setSelected(true);
    },
    setSelected: function(selected) {
        if (selected) {
            this.el.style.backgroundColor = 'yellow';
        } else {
            this.el.style.backgroundColor = null;
        }
    }
}
export = defineWidget(comp)
