app.controller('BankDrawDocumentsCtrl',
    ['$scope', '$state', function ($scope, $state) {
        $scope.$parent.setCurrentStep($state.current.name);
    }]);
