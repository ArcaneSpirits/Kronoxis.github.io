// Module
var scotchApp = angular.module('myModule', ['ngRoute']);

scotchApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
    
        // route for home page
        .when('/', {
            templateUrl : 'index.html',
            controller : 'mainController'
        })
        
        // route for about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller : 'aboutController'
        })
        
        // route for contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller : 'contactController'
        });
        
        // use HTML5 History API
        $locationProvider.html5Mode(true);
});

// Main Controller
scotchApp.controller('mainController', function($scope) {
    
    // Create a message to display in view
    $scope.message = 'Home Page.';

});

// About Controller
scotchApp.controller('aboutController', function($scope) {
    
    // Create a message to display in view
    $scope.message = 'About me.';
    
});

// Contact Controller
scotchApp.controller('contactController', function($scope) {
    
    // Create a message to display in view
    $scope.message = 'Contact me: contact@kronoxis.com';
    
});