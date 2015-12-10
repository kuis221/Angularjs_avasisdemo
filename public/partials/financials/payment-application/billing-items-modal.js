app.controller('BillingItemsCtrl',
    ['$scope', '$state', '$uibModalInstance', function($scope, $state, $uibModalInstance) {
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.finalize = function() {
            $uibModalInstance.dismiss('cancel');
            $state.go('payment-application.finalize');
        }
    }]
);
