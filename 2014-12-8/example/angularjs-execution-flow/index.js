/**
 * myApp Module
 *
 * Created by hjzheng on 2014/12/9.
 *
 * 下面的执行顺序
 */
var app = angular.module('myApp', []);

app.controller('test', ['$scope', function($scope){
    console.log("step 1");
}]);

app.config(function() {
    console.log("step 2");
});

app.run(function(){
    console.log("step 3");
});

angular.element(document).ready(function () {
    console.log("step 4");
    angular.bootstrap(angular.element(document),['myApp']);
})

/*
 路由写到哪里
 */

/*app.config(['$routeProvider',function($routeProvider) {
 $routeProvider.when('/', {
 templateUrl:'partial/page-main.html',
 controller: 'mainController'
 })
 .when('/about', {
 templateUrl:'partial/page-about.html',
 controller: 'aboutController'
 })
 }]);*/
