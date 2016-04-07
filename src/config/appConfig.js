"use strict";
/**
 * Created by rohittalwar on 15/01/16.
 */
var nconf = require("nconf");
var currentEnv = process.env.NODE_ENV || "development";
nconf.argv()
    .env()
    .file({ file: 'src/config/' + currentEnv + '.json' });
exports.__esModule = true;
exports["default"] = nconf;
//# sourceMappingURL=appConfig.js.map