app.controller('FinancialsCtrl',
    ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
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

        $scope.setCurrentTab = function(state) {
            $scope.currentState = state;
        }

        $scope.isActive = function(state) {
            return _.startsWith($scope.currentState, state);
        }

        $scope.stats = {};

    }]);
