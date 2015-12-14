app.controller('LoanCtrl' ,
    ['$scope', '$state', function ($scope, $state) {
        $scope.$parent.setCurrentTab($state.current.name);

        $scope.haveInterest = true;
        $scope.upload = false;
        $scope.checkCredit = false;

    }]);
