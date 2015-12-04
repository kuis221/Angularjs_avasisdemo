app.controller('UploadDocumentModalCtrl',
	['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
		$scope.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		};
	}]);