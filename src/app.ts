require('app-module-path').addPath(__dirname + "/../");

import * as markoRequire from "marko/node-require"
markoRequire.install()
import * as lasso from "lasso"
import * as express from "express";
import * as bodyParser from "body-parser";
import * as errorhandler from "errorhandler";
import * as methodOverride from "method-override";
import * as serveStatic from "serve-static"
import  appConfig from "./config/appConfig"
import * as home from "./pages/home/index";

lasso.configure({
    plugins: ['lasso-marko', 'lasso-less','lasso-stylus'],
    minify: appConfig.get('minify'),
    outputDir: __dirname + '/static',
    bundlingEnabled: appConfig.get('bundlingEnabled'),
    bundles: [ // Create separate JS bundles. Only needed to guage the size of each library.
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
        }/*,
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
app.set('view options', {layout: false});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use('/static', serveStatic(__dirname + '/static') as any);

if (appConfig.get("errorHandling")) {
    app.use(errorhandler());
}


// Routes

app.get('/', home.get);


var port = appConfig.get("port")
app.listen(port, function () {
    console.log("Demo Express server listening on port %d in %s mode", port, app.settings.env);
    if (process.send) {
        process.send('online');
    }
});

export var App = app;