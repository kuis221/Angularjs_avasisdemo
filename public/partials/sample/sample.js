app.controller('SampleCtrl',
    ['$scope', function($scope) {
        $scope.options = [
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

        $scope.selectedItem = angular.copy($scope.options[0]);
    }]);
