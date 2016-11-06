(function() {
    var app = angular.module('app', ['ngRoute', 'ngAnimate'])

    app.config(function($routeProvider) {
        $routeProvider
            .when('/pacman', {
                templateUrl: 'html/pacman.html'
            })
    })
})()
