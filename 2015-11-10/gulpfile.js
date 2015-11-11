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


gulp.task('wiredep', function(){

    log('Write up bower css js and our app js into html');

    var options = config.getWiredepDefaultOptions();
    var wiredep = require('wiredep').stream;
    
    return gulp.src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.src));
});

gulp.task('inject', ['style', 'wiredep'], function(){
    log('Write up app css into html and call wiredep');

    return gulp.src(config.index)
        .pipe($.inject(gulp.src(config.css)))
        .pipe(gulp.dest(config.src));
});

// gulp.task('serve-dev', ['inject'], function(){

//     /*
//        config.nodeServer : express app.js
//        config.server: express dir
//     */

//     var isDev = true;
//     var nodeOptions = {
//         script: 'config.nodeServer',
//         env: {
//             'PORT': port,
//             'NODE_ENV': isDev ? 'dev' : 'build'
//         },
//         watch: [config.server]
//     }

//     return $.nodemon(nodeOptions)
//         .on('restart', ['vet'], function(){
//             log('server restart');
//         })
//         .on('start',function(){
//             log('server start');
//         })
//         .on('crash', function(){
//             log('server crash');
//         })
//         .on('exit', function(){
//             log('server exit');
//         });
// });

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
