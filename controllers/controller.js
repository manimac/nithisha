var app = angular.module('school');
app.controller('landing1',function(service1,$scope,$rootScope, customFactory){
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
    customFactory.httpMethod("http://localhost/nithisha2/test.txt")
    .then(function(res){
        $scope.students = res.data;
    })
    .catch(function(err){

    })   
    customFactory.httpMethod("http://localhost/nithisha2/services.txt")
    .then(function(res){
        $scope.students2 = res.data;
    })
    .catch(function(err){

    })   
    
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