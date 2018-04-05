var angularApp = angular.module('angularApp', []);

angularApp.controller('appController', function appController($scope, $http){
    $http.get('data/data.json').then(function(res){
        $scope.users = res.data;
    });
});