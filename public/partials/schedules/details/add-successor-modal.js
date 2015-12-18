app.controller('AddSuccessorModalCtrl',
    ['$scope', '$uibModalInstance', 'title', function($scope, $uibModalInstance, title) {
        $scope.title = title;
        $scope.scopeOfWorks = [
            {
                id: 1,
                name: 'Scope 1'
            },
            {
                id: 1,
                name: 'Scope 2'
            },
        ];
        $scope.phases = [
            {
                id: 1,
                name: 'Phase 1'
            },
            {
                id: 1,
                name: 'Phase 2'
            },
        ];
        $scope.subPhases = [
            {
                id: 1,
                name: 'Sub Phase 1'
            },
            {
                id: 1,
                name: 'Sub Phase 2'
            },
        ];
    }]);