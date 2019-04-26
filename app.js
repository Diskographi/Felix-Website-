var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/home', {
        controller: 'HomeController',
        templateUrl: 'home.html'
    })
    .when('characters', {
        controller: 'MainController',
        templateUrl: 'charInfo.html'
    })
    .when('store', {
        controller: 'StoreController',
        templateUrl: 'store.html'
    })
    .when('manga', {
        controller: 'MangaController',
        templateUrl: 'manga.html'
    })
    .when('about', {
        controller: 'AboutController',
        templateUrl: 'about.html'
    })
    .otherwise({
        redirectTo: '/home'
    })
})