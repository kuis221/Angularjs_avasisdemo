app.controller('BidsCompareModalCtrl',
    ['$scope', '$state', '$uibModal', '$uibModalInstance', function($scope, $state, $uibModal, $uibModalInstance) {
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.awardBid = function () {
            $uibModalInstance.close();
            $scope.confirmBid();
        }

        $scope.confirmBid = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/bids/modals/award-confirm.html',
                controller: 'BidsAwardCtrl',
                windowClass: 'bids-award-modal'
            });
        }

        $scope.selectedDate = new Date(2015, 7, 18);
        $scope.replaceCost = true;

        $scope.pastEstimates = [
            {
                id: _.uniqueId(),
                name: 'General Requirements',
                division: 'DIVISION1',
                topLevel: true,
                children: [
                    {
                        id: _.uniqueId(),
                        name: '12345 - Brick',
                        total: 250000,
                        estimated_by: "Joanna Boice",
                        estimated_on: "Aug 23, 2015",
                        children: [{
                                id: _.uniqueId(),
                                name: '12345 - Brick',
                                total: 2331600,
                                estimated_by: "Joanna Boice",
                                estimated_on: "Aug 23, 2015"
                            },
                            {
                                id: _.uniqueId(),
                                name: '12345 - Brick',
                                total: 2331600,
                                estimated_by: "Joanna Boice",
                                estimated_on: "Aug 23, 2015"
                            }
                        ]
                    },
                    {
                        id: _.uniqueId(),
                        name: '65431 - Stone',
                        total: 1345250.00,
                        estimated_by: "Eric Hoffman",
                        estimated_on: "Aug 23, 2015",
                        children: [{
                                id: _.uniqueId(),
                                name: '12345 - Brick',
                                total: 2331600,
                                estimated_by: "Joanna Boice",
                                estimated_on: "Aug 23, 2015"
                            },
                            {
                                id: _.uniqueId(),
                                name: '12345 - Brick',
                                total: 2331600,
                                estimated_by: "Joanna Boice",
                                estimated_on: "Aug 23, 2015"
                            }
                        ]
                    }
                ]
            }
        ];
}]);
