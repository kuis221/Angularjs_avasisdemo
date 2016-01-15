app.controller('LoanCtrl' ,
    ['$scope', '$state', '$stateParams', '$timeout', '$uibModal', function ($scope, $state, $stateParams, $timeout, $uibModal) {
        $scope.$parent.setCurrentTab($state.current.name);

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
                desc: 'Ridiculus Cras Solistudin',
                sow: $scope.sows[0],
                loan_amount: 123456987,
                drawn_date: 12345698700,
                pending_draws: 123456987,
                amount_remaining: 123456987,
                percent_drawn: 13,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Vivamus sagittis lacus vel augue laoreet returun',
                sow: $scope.sows[1],
                loan_amount: 123456987,
                drawn_date: 12345698700,
                pending_draws: 123456987,
                amount_remaining: 123456987,
                percent_drawn: 13,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Ridiculus Cras Solistudin',
                sow: $scope.sows[0],
                loan_amount: 123456987,
                drawn_date: 12345698700,
                pending_draws: 123456987,
                amount_remaining: 123456987,
                percent_drawn: 13,
                percent_complete: 68,
                percent_variance: 24
            }, {
                desc: 'Vivamus sagittis lacus vel augue laoreet returun',
                sow: $scope.sows[1],
                loan_amount: 123456987,
                drawn_date: 12345698700,
                pending_draws: 123456987,
                amount_remaining: 123456987,
                percent_drawn: 13,
                percent_complete: 68,
                percent_variance: 24
            }
        ];

        $scope.isEdit = false;

        $scope.save = function() {
            $scope.isEdit = false;
        };

        $scope.addLine = function() {
            if ($scope.isEdit) {
                $scope.data.push({
                    desc: '',
                    loan_amount: 0,
                    drawn_date: 0,
                    pending_draws: 0,
                    amount_remaining: 0,
                    percent_drawn: 0,
                    percent_complete: 0,
                    percent_variance: 0
                });
            }
        }

        $scope.showDeletionModal = function() {
            $scope.modalInstance = $uibModal.open({
                windowClass: "loan-deletion-modal",
                templateUrl: "partials/financials/deletion-confirmation-modal.html",
                scope: $scope,
                backdrop: 'static'
            });
        };

        $scope.cancel = function() {
            $scope.modalInstance.dismiss('cancel');
            $scope.isConfirmed = false;
        };

        $scope.delete = function() {
            if (!$scope.isConfirmed) {
                $scope.isConfirmed = true;
            } else {
                $scope.modalInstance.dismiss('cancel');
                $scope.isConfirmed = false;
            }
        };

    }]);
