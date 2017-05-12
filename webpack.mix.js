const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

//copying the font-awesome fonts
mix.copy('./node_modules/font-awesome/fonts', 'public/bulids/fonts');

/**
 * concatenating multiple plugins css into one file
 */
mix.styles([
	'./node_modules/metismenu/dist/metisMenu.min.css',
	'./node_modules/gritter/css/jquery.gritter.css',
	'./resources/assets/css/animate.css',
	'./resources/assets/css/style.css',
	'./resources/assets/css/custom.css'
], 'public/css/plugins.css');


/**
 * concatenating multiple plugins js into one file
 */
mix.scripts([
        './node_modules/metismenu/dist/metisMenu.js',
        './node_modules/jquery-slimscroll/jquery.slimscroll.js',
        './node_modules/gritter/js/jquery.gritter.js',
        './resources/assets/js/inspinia/inspinia.js',
        './resources/assets/js/plugins/pace.min.js',
        './resources/assets/plugins/jquery-ui/jquery-ui.min.js'
    ], 'public/js/plugins.js');
