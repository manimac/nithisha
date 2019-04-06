var appModule = angular.module('school',['ui.router']);


appModule.config(function($stateProvider,$urlRouterProvider){   
    
    $stateProvider
    .state('home',
        {
            url : '/home',
            templateUrl : 'views/home.html'
        }
    )
    .state('about',
        {
            url : '/about',
            templateUrl : 'views/about.html'
        }
    )
    $urlRouterProvider.otherwise('/home');
});
appModule.run(['$rootScope',function($rootScope){
    $rootScope.location = "Us"; 
}])