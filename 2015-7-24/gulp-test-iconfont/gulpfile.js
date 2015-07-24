var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var clean = require("gulp-clean");
var taskListing = require("gulp-task-listing");
var template = require("gulp-template");

var fs = require("fs");

var icons = fs.readdirSync("src/icons"); 

icons = icons.map(function(icon){
   return icon.replace(/\.\w+$/, '');
});

var fontName = 'iconfont';

gulp.task('iconfont', ['clean'], function(){
  gulp.src('src/icons/*.svg')
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'src/templates/_icons.css',
      targetPath: '../../build/css/_icons.css',
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: fontName
     }))
    .pipe(gulp.dest('build/fonts/'));
});

gulp.task('example', function(){
  gulp.src('src/example/index.html')
     .pipe(template({icons: icons}))
     .pipe(gulp.dest("./build/example"));
});

gulp.task('clean', function(){
   gulp.src("./build", {read: false}).pipe(clean());
});

gulp.task('help', taskListing);

gulp.task('default',['help']);
