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
      {id: 1, name: "bankowość"},
      {id: 2, name: "Ubezpieczenia"},
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
    //price - ustaw stawkę za 1000 znaków dla kategorii
    $scope.services = [
      {id: 1, name: "artykuły poradnikowe", price: 10, class: "sprite-Image-8"},
      {id: 2, name: "artykuły informacyjne", price: 17, class: "sprite-Image-9"},
      {id: 3, name: "artykuły specjalistyczne", price: 30, class: "sprite-Image-10"},
      {id: 4, name: "content reklamowy", price: 0, class: "sprite-Image-11"},
      {id: 5, name: "teksty seo", price: 15, class: "sprite-Image-12"},
      {id: 6, name: "prowadzenie blogów", price: "", class: "sprite-Image-13"},
      {id: 7, name: "opisy kategorii i produktów", price: "", class: "sprite-Image-14"},
      {id: 8, name: "Email marketing", price: 55, class: "sprite-Image-15"},
      {id: 9, name: "Pisanie e-booków", price: 38, class: "sprite-Image-16"},
      {id: 10, name: "Content na strony WWW", price: "", class: "sprite-Image-17"},
      {id: 11, name: "Prowadzenie fanpage", price: "", class: "sprite-Image-18"},
      {id: 12, name: "Usługa indywidualna", price: "", class: "sprite-Image-19"}];

    $scope.showClearFilter = false;

    //ustala cenę bazową po kliknięciu w item
    $scope.setBase = function (number, item) {
      $scope.base = number;
      //pokaż button, po wybraniu jakiegoś itema
      $scope.showClearFilterButton();

    };
    $scope.showClearFilterButton = function () {
      $scope.showClearFilter = true;
    };
    $scope.hideClearFilterButton = function () {
      $scope.showClearFilter = false;
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
    };

    $scope.filters = {};
  });