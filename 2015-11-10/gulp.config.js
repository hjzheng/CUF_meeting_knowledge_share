module.exports = function(){

    var src = './src/'; 
    var temp = './.temp/';
	
	var config = {
		temp: temp,
		alljs: ['src/app/**/*.js'],
		less: src + 'styles/*.less',
		index: src + 'index.html',
		js: src + 'app/**/*.js',
		css: temp + '**/*.css',
		src: src,
		build: './build',

		bower: {
			json: require('./bower.json'),
			directory: './bower_components',
			ignorePath: '../..'
		}
	};

    config.getWiredepDefaultOptions = function(){
    	var options = {
    		bowerJson: config.bower.json,
    		directory: config.bower.directory,
    		ignorePath: config.bower.ignorePath
    	};
    	return options;
    };

	return config;
}