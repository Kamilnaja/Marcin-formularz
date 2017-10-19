angular.module('FormApp')
  .controller('detailedInfoController', ['$scope', '$http', function ($scope, Data) {
    $scope.Data = Data;
  }])