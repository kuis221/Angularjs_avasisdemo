app.controller('BaselineScheduleSowCtrl',
    ['$scope', '$state', '$uibModalInstance',
    function($scope, $state, $uibModalInstance) {

        $scope.sow_insert_list = [
            {id: 1, name: 'New'},
            {id: 2, name: 'First'},
            {id: 3, name: 'Last'}
        ]
        $scope.responsible_user_list = [
            {id: 1, name: 'Eric Hoffman'},
            {id: 2, name: 'Bob Jones'}
        ];

        $scope.predecessor_list = [
            {id: 1, name: 'Eric Hoffman'},
            {id: 2, name: 'Bob Jones'}
        ];

        $scope.duration = 10;

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]
);
