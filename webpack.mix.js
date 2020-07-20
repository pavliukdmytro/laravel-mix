const mix = require('laravel-mix');
require('mix-html-builder');

mix
    .js('app/js/app.js', '')
    .sass('app/scss/app.scss', '')
    .sourceMaps()
    .options({
        processCssUrls: false
    })
    .disableNotifications()

mix.html({
    htmlRoot: './app/html/*.html',
    output: './',
    partialRoot: './app/html/layouts',
});