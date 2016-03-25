'use strict';
//
var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: 'html/home.html'})
    .state('animal', { url: '/animal', templateUrl: 'html/animal.html', controller: 'animalCtrl' })
    .state('customer', { url: '/customer', templateUrl: 'html/customer.html'})

  $urlRouterProvider.otherwise('/');
});






 // app.run(function(PetService) {});
