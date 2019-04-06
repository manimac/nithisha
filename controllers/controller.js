var app = angular.module('school');
app.controller('landing1',function(service1,$scope,$rootScope){
    $scope.serviceProp = service1.content();
    service1.setValue('landing 1 controller')
    $rootScope.username = 'Dinesh';
    $rootScope.dfjnsf = function(){
        alert("dsfjksdfkn");
    }
    $scope.test = function(){
        $rootScope.$broadcast('passfromlanding1',{name : $scope.testname});
    }

    $scope.price1 = 10;
    $scope.price2 = 20;
    $scope.price3 = 30;
    
})
app.controller('landing2',function(service1,$scope,$rootScope){
    $scope.pagename = service1.getValue();
    $scope.$on('passfromlanding1',function(ev,args){
        console.log(ev)
        $scope.page = args.name;
    })
})

app.controller('aboutController',function(service1,$scope,$rootScope){
   
})