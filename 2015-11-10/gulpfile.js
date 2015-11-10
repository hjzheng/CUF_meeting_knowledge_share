var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var util = require('gulp-util');
var gulpIf = require('gulp-if');
var gulpPrint = require('gulp-print');
var args = require('yargs').argv;

gulp.task('vet', function(){

	log("Analyzing source with jshint and jscs");

    return gulp.src('./src/*.js')
        .pipe(gulpIf(args.verbose, gulpPrint()))
        .pipe(jscs()) 
        //.pipe(jscs.reporter())
        //.pipe(jscs.reporter('fail'))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe(jshint.reporter('fail'));
});


////////
function log(msg) {
    util.log(util.colors.blue(msg));
}
