app.controller('GAINewModalCtrl',
    ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.isShowDatePicker = false;
        $scope.selectedDate = new Date();
        $scope.isMoreOptionsShow = false;

        $scope.projects = [
            {
                id: 1,
                name: "General Documents"
            }, {
                id: 2,
                name: "RFI"
            }, {
                id: 3,
                name: "Change Order"
            }, {
                id: 4,
                name: "Inspections"
            }, {
                id: 5,
                name: "Punch List"
            }
        ];

        $scope.selectedProject = angular.copy($scope.projects[0]);

        $scope.assignee = [
            {
                id: 1,
                name: "Andrew Klein"
            }, {
                id: 2,
                name: "Bryan Lloyd"
            }, {
                id: 3,
                name: "Darcy Bertrand"
            }
        ];

        $scope.selectedAssignee = angular.copy($scope.assignee[0]);

        $scope.sow = [
            {
                id: 1,
                name: "Risus Justo"
            }, {
                id: 2,
                name: "Elit In Justo"
            }, {
                id: 3,
                name: "Alberto In"
            }
        ];

        $scope.selectedSow = angular.copy($scope.sow[0]);

}]);
