app.controller('UploadDocumentModalCtrl',
    ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
        $scope.dropzoneConfig = {
            url: '/upload',
            parallelUploads: 3,
            maxFileSize: 30
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);