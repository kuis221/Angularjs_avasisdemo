app.controller('GAINewModalCtrl',
    ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
}]);
