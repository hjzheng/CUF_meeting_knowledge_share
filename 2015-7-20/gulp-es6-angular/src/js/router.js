configRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function configRouter($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise("/alertDemo");

  $stateProvider
    .state('alertDemo', {
      url: '/alertDemo',
      templateUrl: 'partial/alertDemo.html',
      controller:'alertDemoCtrl'
    })
    .state('buttonsDemo', {
      url: '/buttonsDemo',
      templateUrl: 'partial/buttonsDemo.html',
      controller:'buttonsDemoCtrl'
    })
    .state('collapseDemo', {
      url: '/collapseDemo',
      templateUrl: 'partial/collapseDemo.html',
      controller:'collapseDemoCtrl'
    });
}

export default configRouter;
