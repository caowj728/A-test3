/**
 * Created by jing on 11/19 0019.
 */
var app = angular.module('myApp',[
    'ngRoute',
    'test3.baidu',
    'test3.taobao',
    'test3.sina',
    'test3.sohu',
]);

app.config(function($routeProvider){
    $routeProvider
    .when('/webside/baidu',{
    templateUrl:"view/baidu.html",
    controller:"baiduCtr"
    })
    .when('/webside/sina',{
     templateUrl:"view/sina.html",
      controller:"sinaCtr"
    })
    .when('/webside/taobao',{
     templateUrl:"view/taobao.html",
     controller:"taobaoCtr"
    })
    .when('/webside/sohu',{
     templateUrl:"view/sohu.html",
     controller:"sohuCtr"
    })
    .otherwise({redirectTo:'/'})
});
