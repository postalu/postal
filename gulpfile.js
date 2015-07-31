var elixir  = require('laravel-elixir'),
    gulp    = require('gulp'),
    concat = require('gulp-concat');

elixir(function(mix) {
    mix.less([ 
        'admin.less'
    ]);
});

gulp.task('publish', function() {
    gulp.src('bower_components/bootstrap/less/*.less')
      .pipe(gulp.dest('resources/assets/less/framework/'));

    gulp.src('bower_components/bootstrap/less/mixins/*.less')
      .pipe(gulp.dest('resources/assets/less/framework/mixins/'));

    gulp.src('bower_components/awesome-bootstrap-checkbox/*.less')
      .pipe(gulp.dest('resources/assets/less/awesome-bootstrap-checkbox/'));

    gulp.src('bower_components/font-awesome/less/*.less')
      .pipe(gulp.dest('resources/assets/less/font-awesome/'));

    gulp.src('bower_components/font-awesome/fonts/*')
      .pipe(gulp.dest('public/fonts/'));

    gulp.src('bower_components/bootstrap/dist/fonts/*')
      .pipe(gulp.dest('public/fonts/'));

    gulp.src([
        'bower_components/modernizr/modernizr.js',
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-resource/angular-resource.min.js',
        'bower_components/ng-file-upload/angular-file-upload-all.min.js',
        'bower_components/ui-router/release/angular-ui-router.min.js',
        'bower_components/momentjs/min/moment-with-locales.min.js',
        'bower_components/fullcalendar/dist/fullcalendar.min.js',
        'bower_components/fullcalendar/dist/lang/es.js',
        'bower_components/formatter/dist/jquery.formatter.min.js',
        'bower_components/jquery-ui/ui/minified/effect.min.js',
        'bower_components/jquery-ui/ui/minified/effect-clip.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
      ])
      .pipe(concat('plugins.js'))
      //.pipe(uglify())
      .pipe(gulp.dest('public/js/'));

    gulp.src([
        'bower_components/fullcalendar/dist/fullcalendar.min.css'
      ])
      .pipe(concat('plugins.css'))
      //.pipe(uglify())
      .pipe(gulp.dest('public/css/'));

    gulp.src([
        'bower_components/fullcalendar/dist/fullcalendar.min.css'
      ])
      .pipe(concat('plugins_turnos.css'))
      //.pipe(uglify())
      .pipe(gulp.dest('public/css/'));

    gulp.src('bower_components/bootstrap/dist/fonts/*')
      .pipe(gulp.dest('public/fonts/'));

    gulp.src('bower_components/bootstrap/dist/css/*')
      .pipe(gulp.dest('public/css/bootstrap/css/'));

    gulp.src('bower_components/bootstrap/dist/fonts/*')
      .pipe(gulp.dest('public/css/bootstrap/fonts/'));
});