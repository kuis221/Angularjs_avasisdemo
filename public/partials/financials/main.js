app.controller('FinancialsMainCtrl',
    ['$scope', '$state', function ($scope, $state) {
        
        $scope.$parent.setCurrentTab($state.current.name);

        $scope.genContCollapse = false;
        $scope.siteWorkCollapse = false;
    }]);
