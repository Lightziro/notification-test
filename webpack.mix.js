const mix = require("laravel-mix");

mix.js("resources/assets/js/app.js", "public/js").react();

mix.sass("resources/assets/sass/app.scss", "public/css");
