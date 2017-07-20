angular.module('FormApp', ['duScroll']).value('duScrollDuration', 5000)
  .controller('FormAppController', function ($scope, $document) {

    $scope.letterCount = 0;
    $scope.textCount = 0;

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
    $scope.materials.selected = "";

    $scope.seo = [
      {id: 1, name: "tak", counter: ""},
      {id: 2, name: "nie", counter: ""}
    ];
    $scope.seo.selected = "";

    $scope.trades = [
      {id: 1, name: "bankowość", counter: 1.5},
      {id: 2, name: "ubezpieczenia", counter: 1.5},
      {id: 3, name: "finanse", counter: 1.5},
      {id: 4, name: "technika", counter: 1.5},
      {id: 5, name: "przemysł", counter: 1.5},
      {id: 6, name: "telekomunikacja", counter: 1.5},
      {id: 7, name: "technologie", counter: 1.5},
      {id: 8, name: "przemysł", counter: 1.5},
      {id: 10, name: "IT", counter: 1},
      {id: 11, name: "budownictwo", counter: 1},
      {id: 12, name: "e-commerce", counter: 1},
      {id: 13, name: "marketing", counter: 1},
      {id: 14, name: "lifestyle", counter: 1},
      {id: 15, name: "moda", counter: 1},
      {id: 16, name: "dom i wnętrze", counter: 1},
      {id: 17, name: "żywność i napoje", counter: 1},
      {id: 18, name: "rozrywka", counter: 1},
      {id: 19, name: "rynek dziecięcy", counter: 1},
      {id: 20, name: "transport", counter: 1.2},
      {id: 21, name: "logistyka", counter: 1.2},
      {id: 22, name: "motoryzacja", counter: 1.2}
    ];
    $scope.trades.selected = "";

    //price - ustaw stawkę za 1000 znaków dla kategorii
    $scope.services = [
      {
        id: 1,
        name: "artykuły poradnikowe",
        price: 10,
        class: "sprite-Image-8"
      },
      {
        id: 2,
        name: "artykuły informacyjne",
        price: 17,
        class: "sprite-Image-9"
      },
      {
        id: 3,
        name: "artykuły specjalistyczne",
        price: 30,
        class: "sprite-Image-10"
      },
      {
        id: 4,
        name: "content reklamowy",
        price: "nie",
        class: "sprite-Image-11",
        infoTitle: "Napisz do nas, by otrzymać indywidualną wycenę. Orientacyjna wycena to:",
        infoList: [
          "ulotki: (50 zł za 1500 zzs)",
          "artykuły do gazet (40 zł/1k zzs)",
          "broszury (50 zł za 1500 zzs)."
        ]
      },
      {id: 5, name: "teksty seo", price: 15, class: "sprite-Image-12"},
      {
        id: 6,
        name: "prowadzenie blogów",
        price: "nie",
        infoTitle: "Prowadzenie bloga  – doprecyzuj: ile wpisów miesięcznie",
        infoList: [
          "Stawka bazowa za 4 wpisy w miesiącu: 300 zł netto/mc"
        ],
        class: "sprite-Image-13"
      },
      {id: 7, name: "opisy kategorii i produktów", price: 12, class: "sprite-Image-14"},
      {id: 8, name: "email marketing", price: 55, class: "sprite-Image-15"},
      {id: 9, name: "pisanie e-booków", price: 38, class: "sprite-Image-16"},
      {id: 10, name: "content na strony WWW", price: 25, class: "sprite-Image-17"},
      {
        id: 11,
        name: "prowadzenie fanpage",
        price: "nie",
        infoTitle: "Cena zależy od ilości wpisów",
        infoList: [
          "Stawka bazowa: 300 zł netto za 4 wpisy w miesiącu i moderację komentarzy",
          "Stawka rośnie +25 zł z każdym wpisem."],
        class: "sprite-Image-18"
      },

      //todo - dodać obrazek do itemów poniżej!!!
      {id: 13, name: "tłumaczenia tekstów technicznych", price: 30, class: "sprite-Image-20"},
      {id: 14, name: "ghostwriting", price: 20, class: "sprite-Image-22"},
      {id: 15, name: "korekta i redakcja", price: "", class: "sprite-Image-21"},
      {
        id: 12,
        name: "usługa indywidualna",
        price: "nie",
        infoTitle: "Usługa wyceniana indywidualnie. Napisz do nas, by dowiedzieć się więcej",
        class: "sprite-Image-19"
      }
    ];

    $scope.showClearFilter = false;

    $scope.sidebarDetail = false;
    $scope.sidebarBigInfo = false;

    //parametry do przeliczenia w widoku
    $scope.base = 15;
    //kwota rabatu
    $scope.bonusNumber = 0;

    $scope.textCount = 1;

    $scope.setActive = function ($index) {
      $scope.selectedIndex = $index;
      //nadaj wszystkim elementom klasę nieaktywną
      $('.text-variable-item').addClass('non-selected');
      //przenieś do sekcji poniżej
      var target1 = angular.element(document.getElementById("parameters"));
      $document.scrollToElement(target1);
    };

    //ustala cenę bazową po kliknięciu w item
    $scope.setBase = function (item) {
      // po kliknięciu w item sprawdź, czy ma wartość liczbową. Jeśli nie, pokaż specjalne big info
      if (isNaN(item.price)) {
        $scope.bigInfoName = item.name;
        $scope.bigInfoTitle = item.infoTitle;
        $scope.bigInfoList = item.infoList;
        $scope.sidebarDetails = false;
        $scope.sidebarBigInfo = true;
        $scope.showParameters = false;
      } else {
        $scope.sidebarDetails = true;
        $scope.sidebarBigInfo = false;
        $scope.selectedCategory = item.name;
        $scope.services.selected = item.price;
        $scope.showParameters = true;
      }
    };


    $scope.resetSelectedValues = function () {
      $scope.textInfo = "";
      $scope.hardness.selected = "";
      $scope.materials.selected = "";
      $scope.time.selected = "";
      $scope.trades.selected = "";
      $scope.letterCount = 1000;
      $scope.textCount = 1;
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

      $scope.textInfo = $scope.detailPriceMessage;
    };

    $scope.toggleServices = function () {
      if (!$scope.showServices) {
        $scope.showServices = true;
      } else {
        $scope.showServices = false;
      }
    };

    //todo - przelicz selected hardness

    $scope.scrollToEnd = function () {
      var target2 = angular.element(document.getElementById("send-form"));
      $document.scrollToElement(target2);
    };
    $scope.countAll = function () {
      //fucking awesome immortal tests for this app - do not remove
      // console.log ( "serwis " + $scope.services.selected);
      // console.log("trudnośc "  + $scope.hardness.selected.counter);
      // console.log("materiały" + $scope.materials.selected.counter);
      // console.log(    "textbonus" +    $scope.textBonus)
      // console.log("bonsu za czas" +  $scope.time.selected.counter);
      // console.log("trade" + $scope.trades.selected.counter );
      // console.log("litery " + $scope.letterCount / 1000);
      // console.log("ile tekstów " + $scope.textCount);
      if (
        $scope.hardness.selected &&
        $scope.materials.selected &&
        $scope.time.selected &&
        $scope.trades.selected
      ) {
        $scope.showFormButton = true;
      }

      $scope.detailPrice =
        $scope.services.selected *
        $scope.hardness.selected.counter *
        $scope.time.selected.counter *
        $scope.materials.selected.counter *
        $scope.textBonus *
        $scope.trades.selected.counter *
        ($scope.letterCount / 1000) *
        $scope.textCount;
      //oblicz bonus za ilośc tekstów
      $scope.bonusNumber = $scope.detailPrice - ($scope.detailPrice * $scope.textBonus);
      if (isNaN($scope.detailPrice)) {
        $scope.detailPrice = "uzupełnij wszystkie pola";
      } else {
        $scope.detailPrice = Math.floor($scope.detailPrice);
      }

      $scope.detailPriceMessage =
        "Powyżej wpisz tekst wiadomości \n " +
        "Rodzaj tekstów: " + $scope.selectedCategory +
        "  \n Ilość znaków w jednym tekście: " + $scope.letterCount +
        "  \n Skomplikowanie tematyki: " + $scope.hardness.selected.name +
        "  \n Dostarczone materiały: " + $scope.materials.selected.name +
        "  \n Czas realizacji: " + $scope.time.selected.name +
        "  \n Branża: " + $scope.trades.selected.counter +
        "  \n Ilość tekstów razem: " + $scope.textCount +
        "  \n Stawka bazowa za 1000 znaków: " + $scope.services.selected +
        "  \n Sugerowana wycena za zlecenie: " + $scope.detailPrice;
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