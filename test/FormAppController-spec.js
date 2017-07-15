describe("FormAppController", function () {
  var $scope,
    $rootScope,
    controller;
  beforeEach(function () {
    module('FormApp');
    inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')("FormAppController", {$scope: $scope});
    })
  });
  describe("Initialization", function () {
    it("should instantiate some variables", function () {
      expect($scope.materials.selected).toEqual(1);
    });
    it("should show services at starts", function () {
      expect($scope.services.selected).toEqual(1);
    });
    it("should be setup base price at start", function () {
      expect($scope.base).toEqual(15);
    });
    it("should be setup selectedHardness at start", function () {
      expect($scope.hardness.selected).toEqual(1);
    });
    it("should be setup TImeCounter at start", function () {
      expect($scope.time.selected).toEqual(1);
    });

  });

  describe("Action Handlers", function () {
    describe("showClearFilterButton", function () {

      it("should clear filter button after click", function () {
        $scope.showClearFilterButton();
        expect($scope.showClearFilter).toEqual(true);
      })
    });
    describe("hideClearFilterButton", function () {

      it("should show filter button after click", function () {
        $scope.hideClearFilterButton();
        expect($scope.showClearFilter).toEqual(false);
      })
    });
    describe("showallparameterss", function () {

      it("should show show all parameters after click", function () {
        $scope.showAllParameters();
        expect($scope.showParameters).toEqual(true);
      })
    })
  })
});