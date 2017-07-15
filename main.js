angular.module('FormApp', [])
  .controller('FormAppController', function ($scope) {

    $scope.letterCount = "";
    $scope.showServices = true;
    $scope.hardness = [
      {id: 1, name: "łatwy", counter: 1},
      {id: 2, name: "średni", counter: 1.5},
      {id: 3, name: "trudny", counter: 1.75}
    ];
    $scope.hardness.selected = 1;

    $scope.time = [
      {id: 1, name: "standardowy (3 - 7 dni)", counter: 1, biggerPrice: "nie"},
      {id: 2, name: "express ( do 2 dni), praca w weekend", counter: 1.5, biggerPrice: "tak"}
    ];
    $scope.time.selected = 1;

    $scope.materials = [
      {id: 1, name: "tak", counter: 1},
      {id: 2, name: "nie", counter: 1.1}
    ];
    $scope.materials.selected = 1;

    $scope.seo = [
      {id: 1, name: "Tak", counter: ""},
      {id: 2, name: "Nie", counter: ""}
    ];
    $scope.seo.selected = "";

    $scope.trades = [
      {id: 1, name: "bankowość"},
      {id: 2, name: "Ubezpieczenia"},
      {id: 3, name: "Finanse"},
      {id: 4, name: "Technika"},
      {id: 5, name: "Przemysł"},
      {id: 6, name: "Telekomunikacja"},
      {id: 7, name: "Technologie"},
      {id: 8, name: "Przemysł"},
      {id: 9, name: "Przemysł"},
      {id: 10, name: "IT"},
      {id: 11, name: "Budownictwo"},
      {id: 12, name: "E-commerce"},
      {id: 13, name: "Marketing"},
      {id: 14, name: "Lifestyle"},
      {id: 15, name: "moda"},
      {id: 16, name: "Dom i wnętrze"},
      {id: 17, name: "Żywność i napoje"},
      {id: 18, name: "Rozrywka"},
      {id: 19, name: "Rynek dziecięcy"},
      {id: 20, name: "Transport"},
      {id: 21, name: "Logistyka"},
      {id: 22, name: "Motoryzacja"}
    ];
    $scope.trades.selected = 1;

    //price - ustaw stawkę za 1000 znaków dla kategorii
    $scope.services = [
      {id: 1, name: "artykuły poradnikowe", price: 10, class: "sprite-Image-8"},
      {id: 2, name: "artykuły informacyjne", price: 17, class: "sprite-Image-9"},
      {id: 3, name: "artykuły specjalistyczne", price: 30, class: "sprite-Image-10"},
      {id: 4, name: "content reklamowy", price: "", class: "sprite-Image-11"},
      {id: 5, name: "teksty seo", price: 15, class: "sprite-Image-12"},
      {id: 6, name: "prowadzenie blogów", price: "", class: "sprite-Image-13"},
      {id: 7, name: "opisy kategorii i produktów", price: 12, class: "sprite-Image-14"},
      {id: 8, name: "Email marketing", price: 55, class: "sprite-Image-15"},
      {id: 9, name: "Pisanie e-booków", price: 38, class: "sprite-Image-16"},
      {id: 10, name: "Content na strony WWW", price: 25, class: "sprite-Image-17"},
      {id: 11, name: "Prowadzenie fanpage", price: "", class: "sprite-Image-18"},
      {id: 12, name: "Usługa indywidualna", price: "", class: "sprite-Image-19"}];
    $scope.services.selected = 1;

    $scope.showClearFilter = false;

    //parametry sidebara


    $scope.sidebarDetail = false;
    $scope.sidebarBigInfo = false;

    //parametry do przeliczenia w widoku
    $scope.base = 15;


    //ustala cenę bazową po kliknięciu w item
    $scope.setBase = function (item) {
      // po kliknięciu w item sprawdź, czy ma wartość liczbową. Jeśli nie, pokaż specjalne big info
      if (item.id === 12) {
        $scope.bigInfo = "Usługa indywidualna. Napisz, by dowiedzieć się więcej";
        // $scope.showDetails = false;
        $scope.sidebarDetails = false;
        $scope.sidebarBigInfo = true;
      } else if (item.id === 11) {
        //prowadzenie funpage
        $scope.bigInfo = "Cena zależy od ilości wpisów. Stawka bazowa: 300 zł netto za 4 wpisy w miesiącu i moderację komentarzy. Stawka rośnie +25 zł z każdym wpisem.";
        $scope.sidebarDetails = false;
        $scope.sidebarBigInfo = true;
      } else if (item.id === 6) {
        $scope.bigInfo = "Prowadzenie bloga – doprecyzuj: ile wpisów miesięcznie, ich objętość. Stawka bazowa za 4 wpisy w miesiącu: 300 zł netto/mc";
        $scope.sidebarDetails = false;
        $scope.sidebarBigInfo = true;
      } else if (item.id === 4) {
        $scope.bigInfo = "wycena indywidualna – określ: ulotki (50 zł za 1500 zzs), artykuły do gazet (40 zł/1k zzs), broszury (50 zł za 1500 zzs).";
        $scope.sidebarDetails = false;
        $scope.sidebarBigInfo = true;
      } else {
        $scope.sidebarDetails = true;
        $scope.sidebarBigInfo = false;
        $scope.selectedCategory = item.name;
        $scope.base = item.price;
      }
      //pokaż button, po wybraniu jakiegoś itema zawsze
      $scope.showClearFilterButton();
      //jeśli item nie ma ceny - wycena indywidualna ma się pojawić
      if (!item.price) {
        $scope.showParameters = false;
        //wyświetl szczegółową wycenę
      } else {
        $scope.showParameters = true;
      }
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
      if ($scope.period === 1) {

      }
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
    $scope.showParameters = true;
    //todo - przelicz selected hardness
    //toggle parameters
    $scope.checkParameters = function () {
      if (
        $scope.selectedHardness &&
        $scope.selectedMaterials &&
        $scope.selectedTime &&
        $scope.selectedTrade &&
        $scope.selectedSeo) {
        console.log("all selected");
        $scope.showParameters = false;
      }
    };

    $scope.showAllParameters = function () {

      $scope.showParameters = true;
    };
    $scope.monthlyTextNumber = 0;
  });

$(document).ready(function () {
  $('.hover').hover(function () {
    $(this).addClass('flip');
  }, function () {
    $(this).removeClass('flip');
  });

  // set up block configuration
  $('.block .action').click(function () {
    $('.block').addClass('flip');
  });
  $('.block .edit-submit').click(function (e) {
    $('.block').removeClass('flip');
    e.preventDefault();
  });
});

