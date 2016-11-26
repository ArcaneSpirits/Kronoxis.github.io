// Module
var module = angular.module('myModule', ['ngRoute']);

module.config(function($routeProvider) {
    $routeProvider
        // route for home page
        .when('/', {
            templateUrl : 'pages/home.html',
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
module.controller('mainController', function($scope) {
    
    // Create a message to display in view
    $scope.message = 'Main';

});

// Home Controller
module.controller('homeController', function($scope) {
    
    // Create a message to display in view
    $scope.message = "Home"
})

// About Controller
module.controller('aboutController', function($scope) {
    
    // Create a message to display in view
    $scope.message = 'About';
    
});

// Contact Controller
module.controller('contactController', function($scope) {
    
    // Create a message to display in view
    $scope.message = 'Contact';
    
});
