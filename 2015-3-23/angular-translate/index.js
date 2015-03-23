//include translate module
var test = angular.module('test', ['pascalprecht.translate']);
//config translate to load static file
test.config(function($translateProvider){
    $translateProvider.useStaticFilesLoader({
    	files: [{
    	  prefix: './i18n/locale-',
          suffix: '.json'
         }]
    });
    $translateProvider.registerAvailableLanguageKeys(['en', 'zh'], {
       'en_US': 'en',
       'en_UK': 'en',
       'zh_CN': 'zh'
    }); 
    //set preferred lang
    //$translateProvider.preferredLanguage('en');
    //auto determine preferred lang
    $translateProvider.determinePreferredLanguage();
    //when can not determine lang, choose en lang.
    $translateProvider.fallbackLanguage('en');
});
//use translate in controller
test.controller('testCtrl', ['$scope','$translate', function ($scope, $translate) {
    $translate(['test.title', 'test.subtitle']).then(function(translations){
        //console.log(translations);
        $scope.title = translations['test.title'];
        $scope.subtitle = translations['test.subtitle'];
    });

    $scope.changeLanguage = function (langKey) {
         $translate.use(langKey);
    }; 
}]);


