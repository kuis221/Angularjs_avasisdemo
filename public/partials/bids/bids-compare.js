app.controller('BidsCompareCtrl',
    ['$scope', '$uibModal', function($scope, $uibModal){
        $scope.bids = [
            {
                id: 1,
                estimation: "Frusce Risus",
                duration: 5,
                material: 1234897,
                labor: 5987,
                equipment: 7897,
                miscell: 300,
                total: 9234897,
                addition: "",
                com_info: true,
                insure_req: false,
                history: false,
                references: true
            },
            {
                id: 2,
                estimation: "Dolor Purus Euismod",
                duration: 3,
                material: 1100150,
                labor: 5999,
                equipment: 7300,
                miscell: 400,
                total: 3234321,
                addition: "",
                com_info: true,
                insure_req: false,
                history: false,
                references: true
            },
            {
                id: 3,
                estimation: "Sit Bibendum",
                duration: 4,
                material: 1332152,
                labor: 6040,
                equipment: 7450,
                miscell: 200,
                total: 897,
                addition: "",
                com_info: true,
                insure_req: false,
                history: false,
                references: true
            }
        ];
        $scope.showBidAwardModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/bids/bid-award-modal.html',
                controller: 'BidAwardModalCtrl',
                windowClass: 'bids-modal'
            });

            modalInstance.result.then(function(res) {

            }, function() {

            });
        }
    }]);