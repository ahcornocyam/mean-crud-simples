var gulp = require('gulp'),
    files = "./src/*.js";
    
gulp.task('default', function () {
    
  });    

gulp.task('copyjs',function () {
    return gulp.src([
                './bower_components/angular/angular.min.js',
                './bower_components/angular-resource/angular-resource.min.js',
                './bower_components/angular-route/angular-route.min.js',
                './bower_components/jquery/dist/jquery.min.js',                
                './bower_components/bootstrap/dist/js/bootstrap.min.js',
                './bower_components/bootstrap-material-design/dist/js/material.min.js',
                './bower_components/bootstrap-material-design/dist/js/ripples.min.js',
                './bower_components/sweetalert2/dist/sweetalert2.min.js',
                './bower_components/ngSweetAlert/SweetAlert.min.js'
                
                ])
                .pipe(gulp.dest('./public/libs/js'));
  });
  
 gulp.task('copycss', function () {
     return gulp.src([
         './bower_components/bootstrap/dist/css/bootstrap.min.css',
         './bower_components/bootstrap-material-design/dist/css/bootstrap-material-design.css',
         './bower_components/bootstrap-material-design/dist/css/bootstrap-material-design.min.css.map',
         './bower_components/bootstrap-material-design/dist/css/ripples.min.css',
         './bower_components/bootstrap-material-design/dist/css/ripples.min.css.map',
         './bower_components/sweetalert2/dist/sweetalert2.min.css'
     ])
     .pipe( gulp.dest('./public/libs/css'));
 });
