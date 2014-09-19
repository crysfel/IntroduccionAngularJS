(function(){
    "use strict";

    angular.module('Bookmarks',[
        //dependencies here
    ])

    .controller('MainController',function($scope){
        $scope.name = 'Carl'
        $scope.categories = ['HTML5','JavaScript','CSS','Games'];
        
    });

})();