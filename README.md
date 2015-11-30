# default-gulp-project

## Capabilities ##

* Compile Less
* Polyfills in CSS
* Minify JS & CSS (Disabled)
* Image optimization
* Update Fontello font & css
* Build pages from blocks

## Dependencies ##
Globally installed: 

* bower
* nodejs
* npm
* npm plugins: path, fontello-update, gulp
* gulp-plugins: gulp-imagemin, gulp-myth, gulp-concat, gulp-include-html, gulp-less, gulp-watch

## Init project ##
* `bower.json` - bower config
* `fontello.json` - fontello config

run `npm install gulp gulp-imagemin gulp-myth gulp-concat gulp-include-html fontello-update gulp-less gulp-watch`

run `bower update`

## Use ##
See `assets/tmpl/example.html`

## Build project ##
run `gulp watch` for start develop mode
run `gulp build` for build pages in production mode