// Khởi tạo một module
var myApp = angular.module('myModule', []);

// myApp.controller('myController', myController);

// function myController($scope) {
//     $scope.message = "Angular JS Application"
// }

//  Khai báo hàm nặc danh

myApp.controller('myController', function($scope){
    // $scope.message = "Angular JS Application";

    var empployee = {
        FirstName: "Đặng",
        LastName: "Đạt",
        Gender: "Nam"
    }

    $scope.empployee = empployee;

})