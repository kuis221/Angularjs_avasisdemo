app.controller('FinancialsCtrl',
    ['$scope', '$stateParams', function ($scope, $stateParams) {
        $scope.arcConfig = {
            size: 200,
            scale: 2,
            arcs: [
                {
                    percent: 76,
                    color: '#3aabd5',
                    width: 15,
                    radius: 50
                },
                {
                    percent: 61,
                    color: '#79c485',
                    width: 20,
                    radius: 35
                }
            ]
        };
    }]);
