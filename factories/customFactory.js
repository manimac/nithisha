var app = angular.module('school');
app.factory('customFactory',function($http){
    return {
        httpMethod : httpMethod
    };

    function httpMethod(url){
        return $http.get(url);
    }
})