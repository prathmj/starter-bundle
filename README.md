# LinkNYC HTML5 Adjacency Starter Bundle

This version of the starter bundle is meant for adjacent ads

## How-to

```bash
git clone https://github.com/LinkNYC/starter-bundle
cd starter-bundle
git checkout adjacency
npm install
```
Set time interval by the variable `interval` in src/scripts/view.js
Drop images into src/images and change the placeholder image

NOTE: If the placeholder image's extension is anything other than '.jpg', it must be changed in src/scripts/cortex/placeholder.js

### Quick commands
* Run app locally (local dev mode)
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
OR
```
$ make dist-custom app=${YOUR_CUSTOM_APP_NAME}
```

### Appendix
* `Cortex:` Player on Link.
* `Vistar:` Ad Server.
* `SBC:` Single Board Computer.
* `Silo:` Data distribution and management layer provided with Link.
