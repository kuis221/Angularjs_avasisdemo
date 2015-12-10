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

        $scope.sow = [
            {
                id: 1,
                name: "Risus Justo"
            }, {
                id: 2,
                name: "Elit In Justo"
            }, {
                id: 3,
                name: "A Project Name Might Go Here"
            }, {
                id : 4,
                name: "Aenean eu leo quam. Pellentesque"
            }, {
                id : 4,
                name: "Fusce dapibus, tellus ac"
            }
        ];

}]);
