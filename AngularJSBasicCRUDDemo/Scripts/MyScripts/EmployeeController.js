
/// <reference path="../angular.js" />
/// <reference path="Module.js" />
/// <reference path="Service.js" />
//The controller is having 'crudService' dependency.
//This controller makes call to methods from the service 
app.controller('EmployeeListController', function ($scope, $location, crudService) {

    $scope.IsNewRecord = 1; //The flag for the new record

    loadRecords(); 

    //Function to load all Employee records
    function loadRecords() {
        var promiseGet = crudService.getEmployees(); //The MEthod Call from service

        promiseGet.then(function (pl) { $scope.Employees = pl.data },
              function (errorPl) {
                  $log.error('failure loading Employee', errorPl);
              });
    }

    //Method to Get Single Employee based on EmpNo
    $scope.get = function (Emp) {
        $location.path('/employee/' + Emp.EmpNo);
    }
    
});