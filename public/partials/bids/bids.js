app.controller('BidsCtrl', ['$scope', '$uibModal', function($scope, $uibModal){
    $scope.showBidsCompareModal = function(){
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/bids/bids-modal.html',
            controller: 'BidsCompareModalCtrl',
            windowClass: 'bids-award-modal'
        });
        modalInstance.result.then(function(){
    	}, function () {
    	});
    };
}]);

app.controller('BidsAwardCtrl', ['$scope', '$uibModal', '$uibModalInstance', function($scope, $uibModal, $uibModalInstance){
	$scope.bid = 'Ridiculus Ornare Venenatis';
	$scope.project = 'Building Pool';
	$scope.price = '123456700';

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	}

    $scope.acceptBid = function() {
        $uibModalInstance.close();
        $uibModal.open({
            templateUrl: 'partials/bids/modals/award-final.html',
            controller: 'BidsAwardFinalCtrl',
            windowClass: 'bids-award-small-modal'
        });
    }

    $scope.declineBid = function() {
    	$uibModalInstance.close();
    	$uibModal.open({
            templateUrl: 'partials/bids/modals/decline-bid.html',
            controller: 'BidsDeclineCtrl',
            windowClass: 'bids-award-small-modal'
        });
    }
}]);


app.controller('BidsDeclineCtrl', ['$scope', '$uibModal', '$uibModalInstance', function($scope, $uibModal, $uibModalInstance){
	$scope.contractor = 'General Contractor Name';
	$scope.bid = 'Bid Name Goes Here';

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	}

	$scope.submit = function() {
		$uibModalInstance.close();
	}
}]);


app.controller('BidsAwardFinalCtrl', ['$scope', '$uibModal', '$uibModalInstance', function($scope, $uibModal, $uibModalInstance){
	$scope.bid = 'Ridiculus Ornare Venenatis';
	$scope.project = 'Building Pool';
	$scope.price = '123456700';
	$scope.requireMore = false;
	$scope.responsible = [
		{
			id: 1,
			name: 'Bob Jones'
		},
		{
			id: 2,
			name: 'Sit Bibendum'
		},
		{
			id: 3,
			name: 'Frusce Risus'
		}
	];
	$scope.dueDate = 'Aug 23, 2015';
	$scope.requireMaterial = false;
	$scope.username = 'Eric Hoffman';
	$scope.signatureDate = 'Aug 23, 2015';

	$scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.submit = function() {
        $uibModalInstance.close();
    }
}]);

