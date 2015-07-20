buttonsDemoCtrl.$inject = ['$scope'];

function buttonsDemoCtrl($scope) {
  $scope.singleModel = 1;

  $scope.radioModel = 'Middle';

  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };
}

export default buttonsDemoCtrl;
