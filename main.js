angular.module('FormApp', [])
  .controller('FormAppController', function ($scope) {
    $scope.hardness = "";
    $scope.letterCount = 25;
    $scope.showServices = true;
    $scope.hardness = ["trudny", "średni", "łatwy"];
    $scope.time = ["standardowy", "express"];
    $scope.materials = ["tak", "nie"];
    $scope.language = ["Polski", "Rosyjski", "Angielski", "Hiszpański"];
    $scope.trade = ["Finanse", "Bankowość", "Ubezpieczenia", "Technika", "Przemysł", "Technologie", "Telekomunikacja", "IT", "Budownictwo", "E-commerce", "Marketing", "Lifestyle", "Moda", "Dom i wnętrze", "Żywność i napoje", "Rozrywka", "Rynek dziecięcy", "Transport", "Logistyka", "Motoryzacja"];
   $scope.trades = [
     {
       id: 1, name: "bankowość"
     },
     {
       id: 2, name: "Ubezpieczenia"
     },
     {
       id: 3, name: "Finanse"
     },
     {
       id: 4, name: "Technika"
     },
     {
       id: 5, name: "Przemysł"
     },
       {
       id: 6, name: "Telekomunikacja"
     } , {
       id: 7, name: "Technologie"
     }  ,{
       id: 8, name: "Przemysł"
     }  ,{
       id: 9, name: "Przemysł"
     }  ,{
       id: 10, name: "IT"
     } , {
       id: 11, name: "Budownictwo"
     }  ,{
       id: 12, name: "E-commerce"
     } , {
       id: 13, name: "Marketing"
     },  {
       id: 14, name: "Lifestyle"
     }
   ];
    //todo add more items
    $scope.textInfo = "";
    $scope.selectedTrade = "";
    $scope.toggleServices = function () {
      if (!$scope.showServices) {
        $scope.showServices = true;
      } else {
        $scope.showServices = false;
      }
    }

  });