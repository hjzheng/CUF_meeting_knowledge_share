module.exports = function() {
   
    var src = "./src/";
    var build = "./build/";
    var packages = "./package.json";

    var bower = {
        json: require('./bower.json'),
        directory: './bower_components/',
        ignorePath: '../..'
    };

    var config = {
        bower: bower,
        src: src,
        build: build,
        index: src + "index.html", 
        css: src + "styles/*.css", 
        js: [
            src + '**/*.module.js',
            src + '**/*.js'
        ],
        jsOrder: [
            '**/app.module.js',
            '**/*.module.js',
            '**/*.js'
        ]
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;
}();
