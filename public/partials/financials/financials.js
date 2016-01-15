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

        $scope.stats = {
            estimated: 48.3,
            contractual: 31.8,
            direct: 10.7,
            pending: 2.9,
            unbudgeted: 0.2,
            amount: {
                total: '3,016,059',
                funds_disbursed: '903,347.67',
                est_budget: '1,456,937',
                contractual: '957,753',
                direct: '322,166',
                pending: '88,553',
                unbudgeted: '5,650'
            }
        };

        $scope.financialChartData = [
            {
                value: 30,
                color: "#79c485",
                text: "30%"
            },
            {
                value: 64,
                color: "#3aabd5",
                text: "64%"
            }
        ];

        $scope.currentState = 'financials.main';

        $scope.setCurrentTab = function(state) {
            $scope.currentState = state;
        }

        $scope.isActive = function(state) {
            return _.startsWith($scope.currentState, state);
        }

    }]);
