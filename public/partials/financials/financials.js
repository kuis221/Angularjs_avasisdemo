app.controller('FinancialsCtrl',
    ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.arcConfig = {
            size: 200,
            scale: 2,
            arcs: [
                {
                    percent: 76,
                    color: '#3aabd5',
                    width: 15,
                    radius: 70
                },
                {
                    percent: 61,
                    color: '#79c485',
                    width: 20,
                    radius: 55
                }
            ]
        };

        $scope.currentState = 'financials.main';
        $rootScope.$on('$stateChangeSuccess', function(e, to) {
            $scope.currentState = to.name;
        });

        $scope.isActive = function(state) {
            return $scope.currentState === state;
        }
    }]);
