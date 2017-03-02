/// <reference path="../angular.js" />
var app;
(function () {
    app = angular.module("EmployeeModule", ['ngRoute']);

    app.config(['$routeProvider', '$locationProvider',
function ($routeProvider, $locationProvider) {

    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

    //================================================
    // Routes
    //================================================
    $routeProvider.when('/employee', {
        templateUrl: 'Employee/EmployeeList',
        controller: 'EmployeeListController'
    }).when('/employee/:empId', {
        templateUrl: 'Employee/EmployeeDetails',
        controller: 'EmployeeDetailController'
    }).otherwise({
        redirectTo: '/'
    });
}]);

//    app.run(['$rootscope', '$scope', 'crudService',
//function ($rootscope, $scope, crudService) {
//}]);
})();
