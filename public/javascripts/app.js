var app = angular.module('myApp', ['ngRoute','myApp.controllers']);

app.config(
    ['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        
        $routeProvider.when("/", {
            templateUrl: '/angular/users/index'
        })
                       .when("/edit/:id",{
                           templateUrl:'angular/users/edit',
                           
                       }).when('/new', {
                           templateUrl:'angular/users/new'
                       });
        //usando modo html5
        $locationProvider.html5Mode(true);        
    }]
);