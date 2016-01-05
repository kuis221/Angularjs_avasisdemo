app.controller('PurchaseOrdersCtrl' ,
    ['$scope', '$state', '$stateParams', '$timeout', function ($scope, $state, $stateParams, $timeout) {

        $scope.states = [
            {
                id: 1,
                name: 'AK'
            }, {
                id: 2,
                name: 'AL'
            }, {
                id: 3,
                name: 'CA'
            }, {
                id: 4,
                name: 'NY'
            }, {
                id: 5,
                name: 'TX'
            }, {
                id: 6,
                name: 'FL'
            }, {
                id: 7,
                name: 'HI'
            }, {
                id: 8,
                name: 'VA'
        }];

        $scope.isTextable = true;

        $scope.projects = [

        ];

        $scope.contracts = [

        ];

        $scope.sow = [

        ];

        $scope.procurements = [

        ];
    }]);
