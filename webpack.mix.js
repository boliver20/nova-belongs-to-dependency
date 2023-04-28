let mix = require("laravel-mix");
let path = require("path");
require("./nova.mix");

mix.setPublicPath("dist")
    .js("resources/js/field.js", "js")
    .vue({ version: 3 })
    .nova("webparking/nova-belongs-to-dependency");

mix.alias({
    "laravel-nova": path.join(
        __dirname,
        "vendor/laravel/nova/resources/js/mixins/packages.js"
    ),
    "@": path.join(
        __dirname,
        "../../vendor/laravel/nova/resources/js"
    ),
    'lodash': path.join(__dirname, 'node_modules/lodash'),
    'inflector-js': path.join(__dirname, 'node_modules/inflector-js'),
    'vuex': path.join(__dirname, 'node_modules/vuex'),
    '@inertiajs/inertia': path.join(__dirname, 'node_modules/@inertiajs/inertia'),
    'form-backend-validation': path.join(__dirname, 'node_modules/form-backend-validation'),
    '@babel/plugin-transform-runtime': path.join(__dirname, 'node_modules/@babel/plugin-transform-runtime'),
    '@babel/runtime': path.join(__dirname, 'node_modules/@babel/runtime'),
    'axios': path.join(__dirname, 'node_modules/axios'),

});



