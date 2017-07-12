angular.module('FormApp', [])
  .controller('FormAppController', function ($scope) {
    $scope.hardness = "";
    $scope.letterCount = 25;
    $scope.showServices = true;
    $scope.hardness = ["trudny", "średni", "łatwy"];
    $scope.time = ["standardowy", "express"];
    $scope.materials = ["tak", "nie"];
    $scope.language = ["Polski", "Rosyjski", "Angielski", "Hiszpański"];
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
      }, {
        id: 7, name: "Technologie"
      }, {
        id: 8, name: "Przemysł"
      }, {
        id: 9, name: "Przemysł"
      }, {
        id: 10, name: "IT"
      }, {
        id: 11, name: "Budownictwo"
      }, {
        id: 12, name: "E-commerce"
      }, {
        id: 13, name: "Marketing"
      }, {
        id: 14, name: "Lifestyle"
      },
      {id: 15, name: "moda"},
      {id: 16, name: "Dom i wnętrze"},
      {id: 17, name: "Żywność i napoje"},
      {id: 18, name: "Rozrywka"},
      {id: 19, name: "Rynek dziecięcy"},
      {id: 20, name: "Transport"},
      {id: 21, name: "Logistyka"},
      {id: 22, name: "Motoryzacja"}
    ];
    $scope.base = 10;
    //ustala cenę bazową po kliknięciu w item
    $scope.setBase = function (number) {
      $scope.base = number;
      console.log(number);

    };
    //ustawia okres współpracy po kliknięciu w item
    $scope.setPeriod = function (number) {
      $scope.period = number;
      console.log(number);
    };
    //todo add more items
    $scope.textInfo = "";
    $scope.toggleServices = function () {
      if (!$scope.showServices) {
        $scope.showServices = true;
      } else {
        $scope.showServices = false;
      }
    }

  });