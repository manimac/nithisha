var app = angular.module('school');
app.filter('convertToDollar',function($rootScope){
    return function(item){
        if($rootScope.location == 'India'){
            return item;
        }
        return item * 60;
    }
})

app.filter('toUpperCase',function(){
    return function(item){
        return item.toLowerCase();
    }
})