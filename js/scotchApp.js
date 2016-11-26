// Create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function($routeProvider) {
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