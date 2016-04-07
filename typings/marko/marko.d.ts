declare module Marko{

    export function install()
}
declare module "marko/node-require" {
    export = Marko;
}