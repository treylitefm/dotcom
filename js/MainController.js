(function() {
    angular.module('app').controller('MainController', ['$scope', '$http', '$location', function($scope, $http, $location) {
        console.log($location.url())
        if ($location.url() == '/' || $location.url() == '') {
            $scope.hover = false
            $scope.home = true 
        } else {
            $scope.home = false
        }

        $scope.goHome = function() {
            $scope.hover = true
            $scope.home = true
        }
        
        $scope.goPacman = function() {
            $scope.hover = true
            $scope.home = false
        }
    }])
})()
