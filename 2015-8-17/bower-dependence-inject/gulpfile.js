var gulp = require("gulp");
var inject = require("gulp-inject");
var useref = require('gulp-useref');
var config = require("./gulp.conf.js");


gulp.task('wiredep', function() {

    var wiredep = require('wiredep').stream;
    var options = config.getWiredepDefaultOptions();

    var js = gulp.src(config.js);
   
    return gulp
      .src(config.index)
      .pipe(wiredep(options))
      .pipe(inject(js, '', config.jsOrder))
      .pipe(gulp.dest(config.build));
});

gulp.task('build', ['wiredep'], function(){
    var assets = useref.assets();

    return gulp.src(config.build + "index.html")
        .pipe(assets)
        //.pipe(gulpif('*.js', uglify()))
        //.pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest(config.build));
});

gulp.task('default', ['build']);
