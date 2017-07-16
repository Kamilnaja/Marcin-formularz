angular.module('FormApp', [])
  .controller('FormAppController', function ($scope) {

    $scope.letterCount = 1000;
    $scope.textCount = 1000;

    $scope.showServices = true;
    $scope.hardness = [
      {id: 1, name: "łatwy", counter: 1},
      {id: 2, name: "średni", counter: 1.5},
      {id: 3, name: "trudny", counter: 1.75}
    ];
    $scope.hardness.selected = "";

    $scope.time = [
      {id: 1, name: "standardowy (3 - 7 dni)", counter: 1, biggerPrice: "nie"},
      {id: 2, name: "express ( do 2 dni), praca w weekend", counter: 1.5, biggerPrice: "tak"}
    ];
    $scope.time.selected = "";

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
      {id: 1, name: "Bankowość", counter: 1.5},
      {id: 2, name: "Ubezpieczenia", counter: 1.5},
      {id: 3, name: "Finanse", counter: 1.5},
      {id: 4, name: "Technika", counter: 1.5},
      {id: 5, name: "Przemysł", counter: 1.5},
      {id: 6, name: "Telekomunikacja", counter: 1.5},
      {id: 7, name: "Technologie", counter: 1.5},
      {id: 8, name: "Przemysł", counter: 1.5},
      {id: 10, name: "IT", counter: 1},
      {id: 11, name: "Budownictwo", counter: 1},
      {id: 12, name: "E-commerce", counter: 1},
      {id: 13, name: "Marketing", counter: 1},
      {id: 14, name: "Lifestyle", counter: 1},
      {id: 15, name: "moda", counter: 1},
      {id: 16, name: "Dom i wnętrze", counter: 1},
      {id: 17, name: "Żywność i napoje", counter: 1},
      {id: 18, name: "Rozrywka", counter: 1},
      {id: 19, name: "Rynek dziecięcy", counter: 1},
      {id: 20, name: "Transport", counter: 1.2},
      {id: 21, name: "Logistyka", counter: 1.2},
      {id: 22, name: "Motoryzacja", counter: 1.2}
    ];
    $scope.trades.selected = "";

    //price - ustaw stawkę za 1000 znaków dla kategorii
    $scope.services = [
      {id: 1, name: "artykuły poradnikowe", price: 10, class: "sprite-Image-8"},
      {id: 2, name: "artykuły informacyjne", price: 17, class: "sprite-Image-9"},
      {id: 3, name: "artykuły specjalistyczne", price: 30, class: "sprite-Image-10"},
      {
        id: 4,
        name: "content reklamowy",
        price: "Treści reklamowe. Wycena indywidualna – określ: ulotki (50 zł za 1500 zzs), artykuły do gazet (40 zł/1k zzs), broszury (50 zł za 1500 zzs).",
        class: "sprite-Image-11"
      },
      {id: 5, name: "teksty seo", price: 15, class: "sprite-Image-12"},
      {
        id: 6,
        name: "prowadzenie blogów",
        price: "Prowadzenie bloga – doprecyzuj: ile wpisów miesięcznie, ich objętość. Stawka bazowa za 4 wpisy w miesiącu: 300 zł netto/mc",
        class: "sprite-Image-13"
      },
      {id: 7, name: "opisy kategorii i produktów", price: 12, class: "sprite-Image-14"},
      {id: 8, name: "Email marketing", price: 55, class: "sprite-Image-15"},
      {id: 9, name: "Pisanie e-booków", price: 38, class: "sprite-Image-16"},
      {id: 10, name: "Content na strony WWW", price: 25, class: "sprite-Image-17"},
      {
        id: 11,
        name: "Prowadzenie fanpage",
        price: "Cena zależy od ilości wpisów. Stawka bazowa: 300 zł netto za 4 wpisy w miesiącu i moderację komentarzy. Stawka rośnie +25 zł z każdym wpisem.",
        class: "sprite-Image-18"
      },
      {
        id: 12,
        name: "Usługa indywidualna",
        price: "Usługa indywidualna. Napisz, by dowiedzieć się więcej",
        class: "sprite-Image-19"
      },
      //todo - dodać obrazek do itemów poniżej!!!
      {id: 13, name: "Tłumaczenia tekstów technicznych", price: 30, class: "sprite-Image-17"},
      {id: 14, name: "Ghostwriting", price: 20, class: "sprite-Image-18"},
      {id: 15, name: "Korekta i redakcja", price: "", class: "sprite-Image-19"}
    ];
//jeśli nan to price wypisać !!! todo
    $scope.showClearFilter = false;

    //parametry sidebara

    $scope.sidebarDetail = false;
    $scope.sidebarBigInfo = false;

    //parametry do przeliczenia w widoku
    $scope.base = 15;

    $scope.setActive = function ($index) {
      $scope.selectedIndex = $index;
      console.log($index);
      //nadaj wszystkim elementom klasę nieaktywną
      $('.text-variable-item').addClass('non-selected');
    };


    //ustala cenę bazową po kliknięciu w item
    $scope.setBase = function (item) {
      // po kliknięciu w item sprawdź, czy ma wartość liczbową. Jeśli nie, pokaż specjalne big info
      if (isNaN(item.price)) {
        $scope.bigInfo = item.price;
        $scope.sidebarDetails = false;
        $scope.sidebarBigInfo = true;
      } else {
        $scope.sidebarDetails = true;
        $scope.sidebarBigInfo = false;
        $scope.selectedCategory = item.name;
        $scope.services.selected = item.price;
      }
      //pokaż button, po wybraniu jakiegoś itema zawsze

      if (!item.price) {
        $scope.showParameters = false;
      } else {
        $scope.showParameters = true;
      }
    };

    $scope.monthlyTextNumberAwesomebonus = 1;
    $scope.yearlyTextNumberAwesomebonus = 1;

    $scope.textCount = 1;
    $scope.textBonus = 1.2;
    $scope.countTextBonus = function () {
      if ($scope.textCount < 5) {
        $scope.textBonus = 1.2;
      } else if
      (6 > $scope.textCount && $scope.textCount <= 10) {
        $scope.textBonus = 0.9;
      }
      else if ($scope.textCount > 10) {
        $scope.textBonus = 0.8;
      }
    };

    $scope.textInfo = "";
    //przekaż dane z sidebara do textarea

    $scope.copySidebar = function () {
      console.log("sidebar copied");
      $scope.textInfo = $scope.detailPriceMessage;
    };

    $scope.toggleServices = function () {
      if (!$scope.showServices) {
        $scope.showServices = true;
      } else {
        $scope.showServices = false;
      }
    };

    $scope.showParameters = true;
    //todo - przelicz selected hardness

    $scope.countAll = function () {
      $scope.detailPrice =
        $scope.services.selected *
        $scope.hardness.selected.counter *
        $scope.time.selected.counter *
        $scope.materials.selected.counter *
        $scope.textBonus *
        ($scope.letterCount / 1000)*
        $scope.textCount;

      $scope.detailPriceMessage =
        " Rodzaj tekstów: " + $scope.selectedCategory +
        "  \n Ilość znaków w jednym tekście: " + $scope.letterCount +
        "  \n Skomplikowanie tematyki: " + $scope.hardness.selected.counter +
        "  \n Dostarczone materiały: " + $scope.materials.selected.counter +
        "  \n Czas realizacji: " + $scope.time.selected.counter +
        "  \n Branża: " + $scope.trades.selected.counter +
        "  \n Ilość tekstów razem: " + $scope.textCount +
        "  \n Stawka bazowa za 1000 znaków: " + $scope.services.selected +
        "  \n Sugerowana wycena za zlecenie: " + Math.floor($scope.detailPrice);


      console.log($scope.detailPriceMessage);
    };



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