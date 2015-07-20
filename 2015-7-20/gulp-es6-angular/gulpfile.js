var gulp = require('gulp');
var browserSync = require('browser-sync');

//var babel = require('gulp-babel');
var clean = require('gulp-clean');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

//for use mini

var minifyCss = require('gulp-minify-css');
var usemin = require('gulp-usemin');

/*
gulp.task("hello", function(){
  console.log("Hello World");
});

gulp.task("default", ["hello"]);

gulp.task("copyIndex", function(){
  gulp.src("src/index.html")
     .pipe(gulp.dest("./build"));

  var theFileorFiles = gulp.src("src/index.html");
  var filesYouCopied = gulp.dest(theFileorFiles, gulp.dest("./build"));
});
*/

gulp.task("copyIndex", function(){
  gulp.src("src/index.html")
   .pipe(usemin({css:[minifyCss(), 'concat']}))
   .pipe(gulp.dest("./build"))
   .pipe(browserSync.reload({stream: true}));

  gulp.src("src/partial/*.html")
   .pipe(gulp.dest("./build/partial"))
   .pipe(browserSync.reload({stream: true}));

  //var theFileorFiles = gulp.src("src/index.html");
  //var filesYouCopied = gulp.dest(theFileorFiles, gulp.dest("./build"));
  //var theFilesYouReloaded = browserSync.reload(filesYouCopied);
});

gulp.task('browserSync', function(){
    browserSync({
       server: {
          baseDir: './build'
       } 
    });
});

gulp.task("watchFiles", function(){
   gulp.watch('src/**/*.html', ['copyIndex']);
   gulp.watch('src/js/**/*.js', ['babelIt']);
});

gulp.task("babelIt", function(){
    browserify({
      entries: 'src/js/index.js',
      debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task("clean", function(){
    gulp.src("./build",{read: false})
     .pipe(clean());
});

gulp.task("default", ["copyIndex", "babelIt" ,"browserSync", "watchFiles"]);
