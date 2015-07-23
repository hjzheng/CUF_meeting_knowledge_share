var gulp = require("gulp");
var less = require("gulp-less");
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-minify-css');
var rename = require("gulp-rename");
var eventStream = require('event-stream');
var browserSync = require("browser-sync");
var clean = require("gulp-clean");
var autoprefixer = require("gulp-autoprefixer");
var taskListing = require("gulp-task-listing");

var path = "bower_components/bootstrap/";
var lessPath = "bower_components/bootstrap/less/";
var dest = "build/bower_components/bootstrap/dist/";

gulp.task("help", taskListing);

gulp.task("copyJSandFonts", function(){
  gulp.src( path + "dist/js/**/*")
      .pipe(gulp.dest(dest + "js"));

  gulp.src( path + "dist/fonts/**/*")
      .pipe(gulp.dest(dest + "fonts"));
});

gulp.task("copyExample", function(){
   gulp.src("src/**/*")
     .pipe(gulp.dest("./build")); 
});

gulp.task("lessForBootstrap", function(){
  return gulp.src(lessPath + "bootstrap.less")
     .pipe(sourcemaps.init())
     .pipe(less())
     .pipe(autoprefixer())
     .pipe(gulp.dest(dest + "css"))
     .pipe(sourcemaps.write("./"))
     .pipe(gulp.dest(dest + "css"))
     .pipe(browserSync.reload({stream: true}));
});

gulp.task("lessForTheme", function(){
   return gulp.src(lessPath + "theme.less")
     .pipe(sourcemaps.init())
     .pipe(less())
     .pipe(autoprefixer())
     .pipe(rename("bootstrap-theme.css"))
     .pipe(gulp.dest(dest + "css"))
     .pipe(sourcemaps.write("./"))
     .pipe(rename("bootstrap-theme.css.map"))
     .pipe(gulp.dest(dest + "css"))
     .pipe(browserSync.reload({stream: true}));
});

gulp.task("less", ["lessForTheme", "lessForBootstrap"]);

gulp.task("mini", ["less"], function(){

   gulp.src(dest + "css/bootstrap.css")
     .pipe(minifyCSS())
     .pipe(rename("bootstrap.min.css"))
     .pipe(gulp.dest(dest + "css"))
     .pipe(browserSync.reload({stream: true}));

   gulp.src(dest + "css/bootstrap-theme.css")
     .pipe(minifyCSS())
     .pipe(rename("bootstrap-theme.min.css"))
     .pipe(gulp.dest(dest + "css"))
     .pipe(browserSync.reload({stream: true}));
});


gulp.task('browserSync', function(){
    browserSync({
       server: {
          baseDir: './build'
       } 
    });
});

gulp.task("watchFiles", function(){
   gulp.watch('src/**/*', ['copyExample']);
   gulp.watch('bower_components/bootstrap/less/**/*.less', ['less', 'mini']);
});

gulp.task("clean", function(){
   gulp.src("./build", {read:false}).pipe(clean());
});

gulp.task("default", ['copyJSandFonts', 'copyExample', 'less', 'mini', "browserSync", "watchFiles"]);

