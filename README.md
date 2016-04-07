# Node server written in Typescript to serve confengine mobile app html screens

## Overview 

This sample implements a complete Node.js application.
Notable features:

* Typed usage of express for server side MVC
* Typed usage of mongodb for server side database
* Typed usage of Node.js
* Use of external typings from DefinitelyTyped
* Visual Studio project file for working with the project

## Running 

Note: All commands entered need to be performed from within *this directory*.


1. From the project's directory, install the app's node dependencies, tsd, and typings with the following commands:
    ```shell
    npm install
    npm install -g tsd
    tsd install
    ```
    Some things to note:

    * `npm install` will install this project's node dependencies from `package.json`.
    * `tsd install` will retrieve `.d.ts` files from [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped).

4. Compile the app with the following command:
    ```shell
    tsc
    ```
    The above command will use `tsconfig.json` to compile all necessary files.

5. Launch the app with `browser-refresh` for live reloading of pages
       ```shell
       npm install -g browser-refresh
       browser-refresh src/app.js
       ```

6. Open your favorite browser and navigating to `http://localhost:3000/` to access the app.
