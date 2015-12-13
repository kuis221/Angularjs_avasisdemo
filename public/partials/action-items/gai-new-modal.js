app.controller('GAINewModalCtrl',
    ['$scope', '$state', '$uibModalInstance', function($scope, $state, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.distribute = function () {
            $uibModalInstance.close();
            $state.go('action-items.general-action-items');
        }

        $scope.isShowDatePicker = false;
        $scope.selectedDate = new Date(2015, 7, 18);
        $scope.isMoreOptionsShow = false;

        $scope.projects = [
            {
                id: 1,
                name: "Wilmington 47"
            }
        ];

        $scope.assignee = [
            {
                id: 1,
                name: "Bruce Wayne"
            }, {
                id: 2,
                name: "Dan Bonker"
            }, {
                id: 3,
                name: "Mike Riley"
            }
        ];

        $scope.sow = [
            {
                id: 1,
                name: "Roof Dry-In"
            }
        ];

}]);
