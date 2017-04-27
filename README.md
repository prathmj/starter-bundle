# LinkNYC Starter Bundle

An HTML5 application built for LINKNYC.   
This starter bundle will provide the neccessary tools to build and develop content & creative on a Link.    
With this bundle you will have the ability to test locally and package for production.

## Bundle Dependencies

```
$ npm install
```

## Bundle Structure
```
+-- _build
|   +-- _images
|   +----- placeholder.jpg
|   +-- _scripts
|   +----- _cortex
|   +--------- ajax.js
|   +--------- data.js
|   +--------- events.js
|   +--------- logger.js
|   +--------- placeholder.js
|   +--------- simulator.js
|   +--------- tracker.js
|   +----- main.js
|   +----- test-data.js
|   +----- view.js
|   +-- _styles
|   +----- _css
|   +--------- global.css
|   +--------- normalize.css
|   +----- _fonts
|   +-- bundle.js
|   +-- index.html
+-- _dist
|   +-- ${APP-NAME}-${Date-Time-Stamp}.zip
+-- _node_modules
+-- _src
|   +-- _images
|   +----- placeholder.jpg
|   +-- _scripts
|   +----- _cortex
|   +--------- ajax.js
|   +--------- data.js
|   +--------- events.js
|   +--------- logger.js
|   +--------- placeholder.js
|   +--------- simulator.js
|   +--------- tracker.js
|   +----- main.js
|   +----- test-data.js
|   +----- view.js
|   +-- _styles
|   +----- _css
|   +--------- global.css
|   +--------- normalize.css
|   +----- _fonts
|   +-- bundle.js
|   +-- index.html
+-- .eslintrc.json
+-- .gitignore
+-- Makefile
+-- package.json
+-- README.md
+-- webpack.config.js
+-- webpack.settings.js
```
- `./src/`: The src folder contains a structure for all your project files and assets. All your files should be stored in this folder. When the bundle is deployed, these files are copied to the `./build/` folder and zipped in the `./dist/` folder. 
- `./src/scripts/`: All your JS files should be stored in this folder. `./src/scripts/main.js` is the main entry point. All source files will get compiled into a single `./bundle.js` by webpack. If you are running the bundle locally the `./bundle.js` will be in memory, If you build for dev or production the file will be in `./build/bundle.js`.
 `./src/scripts/cortex/`: This folder containes all the cortex player related JS files, these files should never be edited. 
- `./src/styles/`: Contains CSS files and CSS related files such as fonts. You can include the CSS files under this folder by requiring them in JavaScript. See `src/scripts/main.js` for an example.
- `./src/images/`: All image file assets under this directory will get copied to the final HTML5 app directory.
- `index.html` is the default html file for your app. You can put your app skeleton in this file or dynamically create the DOM elements in JavaScript.

## Bundle Environments
The HTML5 application is set up to run in two environments: development and production.

### Local Development
You can test and run your code locally using webpack-dev-server. This runs your code in memory using simulation mode and will watch for any JS changes in your application. In simulation mode, the app will fire Cortex events
periodically and use the test data stored in `./src/test-data.js`. You can access your app in a web browser at `http://localhost:8080/`.

### Development Mode
The final HTML5 application will be saved under `./build`. The app will start in simulation mode. Open `./build/index.html`
in your browser to run the app.  This mode is useful for quickly building the UI and viewing the final folder structure. **Note, you will have to rebuild after any code changes.**

### Production Mode
Similar to the development mode, the final HTML5 application will be saved under `./build`. However, you can build a final
zip file as well by running `make dist`. The final zip will be located in `./dist/`. **The application will only work on Cortex player.**


### Customizing the App
* Change the app name in `package.json`. We use the app name in log messages.
* Change the `DATASET_ID` in `src/scripts/main.js` to the production dataset id.
* Update `src/scripts/test-data.js` with the test data. Make sure the test data is similar to the production data.
* Update the placeholder view in `src/scripts/cortex/placeholder.js`. Current implementation loads path to your `placeholder.jpg image`. You can simply replace this image with your version or update `src/scripts/cortex/placeholder.js` to create custom DOM elements.
* Update `src/scripts/view.js` to handle data updates and rendering.
  * Update View.setData() if you need to manipulate the incoming data or preload images.
  * Update View._render() to present the data on screen.
  * Update View.updateView() if you need to update the screen right before the app gets displayed.
* Build the app in production mode and deploy.

### Quick commands
* Run app locally (Dev mode)
```
$ npm start
```
* Build app locally (Dev mode)
```
$ npm run dev
```
* Build app for prod (Prod mode)
```
$ npm run prod
```
* Build and package app for prod (Prod mode)
```
$ make dist
```
