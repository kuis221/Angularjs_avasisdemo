app.controller('BidsQuickModalCtrl',
    ['$scope', '$state', '$uibModalInstance', function($scope, $state, $uibModalInstance) {

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.finalize = function () {
            $uibModalInstance.close();
            $state.go('bids.main');
        };

        $scope.isShowDatePicker = false;
        $scope.selectedDate = new Date(2015, 7, 18);
        $scope.quickBidList = [{}];

        $scope.addAnotherBid = function () {

        };

        $scope.projects = [
            {
                id: 1,
                name: "Close Garage Roof"
            },
            {
                id: 2,
                name: "Finish Closing in Roof"
            },
            {
                id: 3,
                name: "Roofline Medification"
            },
            {
                id: 4,
                name: "Install Project Fencing"
            },
            {
                id: 5,
                name: "Close Garage Roof"
            }
        ];

        $scope.availableSows = [
            {
                id: 1,
                name: "Close Garage Roof"
            },
            {
                id: 2,
                name: "Finish Closing in Roof"
            },
            {
                id: 3,
                name: "Roofline Medification"
            },
            {
                id: 4,
                name: "Install Project Fencing"
            },
            {
                id: 5,
                name: "Close Garage Roof"
            }
        ];

        $scope.availableTypes = [
            {
                id: 1,
                name: "Close Garage Roof"
            },
            {
                id: 2,
                name: "Finish Closing in Roof"
            },
            {
                id: 3,
                name: "Roofline Medification"
            },
            {
                id: 4,
                name: "Install Project Fencing"
            },
            {
                id: 5,
                name: "Close Garage Roof"
            }
        ];

        $scope.bidPrj = {
            project: {
                id: 1,
                name: "Choose"
            }
        };
        $scope.bidCont = {
            sow: {
                id: 1,
                name: "Choose"
            },
            typo: {
                id: 1,
                name: "Choose"
            }
        };

        $scope.selectProject = function(bidPrj, selectedProject) {
            bidPrj.project = selectedProject;
        }
        
        $scope.selectSow = function(bidCont, selectedSow) {
            bidCont.sow = selectedSow;
        }
        $scope.selectType = function(bidCont, selectedType) {
            bidCont.typo = selectedType;
        }
        $scope.addAnotherBid = function() {
            $scope.quickBidList.push(new Object());
        }

}]);