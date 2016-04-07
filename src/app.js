"use strict";
require('app-module-path').addPath(__dirname + "/../");
var markoRequire = require("marko/node-require");
markoRequire.install();
var lasso = require("lasso");
var express = require("express");
var bodyParser = require("body-parser");
var errorhandler = require("errorhandler");
var methodOverride = require("method-override");
var serveStatic = require("serve-static");
var appConfig_1 = require("./config/appConfig");
var home = require("./pages/home/index");
lasso.configure({
    plugins: ['lasso-marko', 'lasso-less', 'lasso-stylus'],
    minify: appConfig_1["default"].get('minify'),
    outputDir: __dirname + '/static',
    bundlingEnabled: appConfig_1["default"].get('bundlingEnabled'),
    bundles: [
        {
            name: 'marko',
            dependencies: [
                'require: marko'
            ]
        },
        {
            name: 'marko-widgets',
            dependencies: [
                'require: marko-widgets'
            ]
        } /*,
        {
            name: 'onsenui',
            dependencies: [
                'require: onsenui/css/ionicons/css/ionicons.css',
                "require: onsenui/css/onsenui.css",
                "require: onsenui/css/onsen-css-components.css",
                "require: onsenui/js/onsenui"
            ]
        }*/
    ]
});
var app = express();
// Configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use('/static', serveStatic(__dirname + '/static'));
if (appConfig_1["default"].get("errorHandling")) {
    app.use(errorhandler());
}
// Routes
app.get('/', home.get);
var port = appConfig_1["default"].get("port");
app.listen(port, function () {
    console.log("Demo Express server listening on port %d in %s mode", port, app.settings.env);
    if (process.send) {
        process.send('online');
    }
});
exports.App = app;
//# sourceMappingURL=app.js.map