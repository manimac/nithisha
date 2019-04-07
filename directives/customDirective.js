var app = angular.module('school');
app.directive('documentHistory',function(){
    return {
        restrict : 'E',
        // template : '<div>Directive Content</div>'
        templateUrl : 'views/directive.html'
    }
})