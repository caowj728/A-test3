/**
 * Created by jing on 11/19 0019.
 */

angular.module("test3.baidu",[]).controller('baiduCtr',
    function($scope){
        var baidu=this;
        $scope.count=0;
        baidu.name="baidu-page";
        $scope.getBaidu=function(){
            return "baidu-pageload";
        };
        $scope.getCount=function(){
            $scope.count+=1;
            return $scope.count;
        };
    }
);