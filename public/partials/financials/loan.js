app.controller('LoanCtrl' ,
    ['$scope', '$state', '$stateParams', '$timeout', function ($scope, $state, $stateParams, $timeout) {
        $scope.$parent.setCurrentTab($state.current.name);

        if ($stateParams.initialize) {
            $timeout(function() {
                $scope.$parent.stats = {
                    estimated: 52,
                    contractual: 30,
                    direct: 12,
                    pending: 0,
                    unbudgeted: 0,
                    amount: {
                        total: ' -',
                        funds_disbursed: ' -',
                        est_budget: ' -',
                        contractual: ' -',
                        direct: ' -',
                        pending: ' -',
                        unbudgeted: ' -'
                    }
                };
            }, 400);
        }

        $scope.appendMonth = function() {
            if (!_.isUndefined($scope.loanTerm) && $scope.loanTerm != '') {
                month = $scope.loanTerm.match(/^\d+/);
                switch(parseInt(month)) {
                    case 0:
                    case 1: $scope.loanTerm = month + ' month'; break;
                    default: $scope.loanTerm = month + ' months';
                }
            }
        };

        $scope.sows = [
            {
                id: 1,
                name: "Wood Finish"
            }, {
                id: 2,
                name: "Duis mollis, est non commodo"
            }
        ];

        $scope.data = [
            {
                sow: $scope.sows[0],
                loan_amount: 123456987.00,
                drawn_date: '$123,456,987.00',
                pending_draws: '$123,456,987.00',
                amount_remaining: '$123,456,987.00',
                percent_drawn: '13%',
                percent_complete: '%68',
                percent_variance: '%24'
            }, {
                sow: $scope.sows[1],
                loan_amount: 123456987.00,
                drawn_date: '$123,456,987.00',
                pending_draws: '$123,456,987.00',
                amount_remaining: '$123,456,987.00',
                percent_drawn: '13%',
                percent_complete: '%68',
                percent_variance: '%24'
            }, {
                sow: $scope.sows[0],
                loan_amount: 123456987.00,
                drawn_date: '$123,456,987.00',
                pending_draws: '$123,456,987.00',
                amount_remaining: '$123,456,987.00',
                percent_drawn: '13%',
                percent_complete: '%68',
                percent_variance: '%24'
            }, {
                sow: $scope.sows[1],
                loan_amount: 123456987.00,
                drawn_date: '$123,456,987.00',
                pending_draws: '$123,456,987.00',
                amount_remaining: '$123,456,987.00',
                percent_drawn: '13%',
                percent_complete: '%68',
                percent_variance: '%24'
            }
        ];


    }]);
