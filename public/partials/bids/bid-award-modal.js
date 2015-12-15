app.controller('BidAwardModalCtrl',
    ['$scope', '$state', '$uibModalInstance', function($scope, $state, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.award = function () {
            $uibModalInstance.close();
            $state.go('bids.compare');
        }
}]);