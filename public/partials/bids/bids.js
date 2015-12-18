app.controller('BidsCtrl', ['$scope', '$uibModal', function($scope, $uibModal){
    $scope.showBigsCompareModal = function(){
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/bids/bids-modal.html',
            controller: 'BidsCompareModalCtrl',
            windowClass: 'bids-award-modal'
        });
    };
}]);

app.controller('BidsAwardCtrl', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance){
	$scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.acceptBid = function() {
        $uibModalInstance.close();
        $state.go('bids.compare');
    }

    $scope.declineBid = function() {
    	$uibModalInstance.close();
    }
}]);
