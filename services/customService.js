var app = angular.module('school');
app.service('service1',function(){
    return {
        content : getContent,
        setValue : setValue,
        getValue : getValue
    };

    function getContent(){
        return "test";
    }

    function setValue(param){
        this.name = param;
    }
    function getValue(){
        return this.name;
    }
});