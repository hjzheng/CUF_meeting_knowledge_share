import angular from '../../node_modules/angular';

collapseDemoCtrl.$inject = ['$scope'];

function collapseDemoCtrl($scope){
   $scope.isCollapsed = false;
}

angular.module('es6.with.angular')
              .controller('collapseDemoCtrl', collapseDemoCtrl);
