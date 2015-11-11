var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./gulp.config')();

// var jshint = require('gulp-jshint');
// var jscs = require('gulp-jscs');
// var util = require('gulp-util');
// var gulpIf = require('gulp-if');
// var gulpPrint = require('gulp-print');

gulp.task('vet', function(){

	log('Analyzing source with jshint and jscs');

    return gulp.src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs()) 
        //.pipe(jscs.reporter())
        //.pipe(jscs.reporter('fail'))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));
});

gulp.task('style', ['clean-style'], function(){

    log('Compile less -> css')
    return gulp.src(config.less)
       .pipe($.plumber())
       .pipe($.less())
       //.on('error', errorLogger)
       .pipe($.autoprefixer({browsers:['last 2 version', '> 5%']}))
       .pipe(gulp.dest(config.temp));
});

gulp.task('clean-style', function(){
    var files = config.temp + '**/*.css';
    clean(files);
});

gulp.task('less-watcher', function(){
    gulp.watch([config.less], ['style']);
});

////////

//use gulp-plumber to repalce the error handle function
// function errorLogger(error) {
//     log('*** Start of Error ***');
//     console.log(error);
//     log('*** End of Error ***');
//     //tell gulp finished
//     this.emit('end');
// }

function clean(path) {
    log('Clean: ' + path)
    del(path);
}

function log(msg) {
    $.util.log($.util.colors.blue(msg));
}
