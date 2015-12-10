app.controller('GAINewModalCtrl',
    ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

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
                name: "Bob Jones"
            }
        ];

        $scope.sow = [
            {
                id: 1,
                name: "Roof Dry-In"
            }
        ];

}]);
