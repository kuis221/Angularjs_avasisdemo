app.controller('LoanEditParamsCtrl' ,
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

        $scope.loanAmount = 2860509.00;
        $scope.loanTerm = 24;
        $scope.rate = 4.675;

        $scope.haveInterest = true;
        $scope.upload = false;
        $scope.checkCredit = true;
        $scope.drawApproval = true;
        $scope.proofSupplierPayment = false;
        $scope.subBackgrdCheck = false;
        $scope.subJudgeCheck = true;
        $scope.subVerificationLicense = true;
        $scope.subVerificationIsurance = true;
        $scope.photos = true;

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

    }]);
