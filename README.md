# default-gulp-project

## Capabilities ##

* Compile Less
* Polyfills in CSS
* Minify CSS
* Image optimization
* Update Fontello font & css
* Build pages from blocks

## Dependencies ##
Globally installed: 

* bower
* nodejs
* npm
* npm plugins: path, fontello-update, gulp
* gulp-plugins: gulp-imagemin, gulp-myth, gulp-uglify, gulp-csso, gulp-concat, gulp-include-html, gulp-less

## Init project ##
* `bower.json` - bower config
* `fontello.json` - fontello config

run `npm install gulp gulp-imagemin gulp-myth gulp-uglify gulp-csso gulp-concat gulp-include-html fontello-update`

run `bower update`

## Use ##
See `assets/tmpl/example.html`

## Build project ##
run `gulp build`