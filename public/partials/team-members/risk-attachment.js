app.controller('RiskAttachmentCtrl',
    ['$scope', '$state', '$uibModalInstance', function($scope, $state, $uibModalInstance) {
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]
);
