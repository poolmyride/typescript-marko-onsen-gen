/**
 * Created by rohittalwar on 15/01/16.
 */
import * as nconf from "nconf";
import * as path from "path"

var currentEnv = process.env.NODE_ENV || "development";

 nconf.argv()
    .env()
    .file({ file: 'src/config/'+currentEnv+'.json' });

export default nconf
