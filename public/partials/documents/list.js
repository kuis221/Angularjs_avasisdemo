app.controller('DocumentsCtrl',
    ['$scope', '$uibModal', function($scope, $uibModal) {
        $scope.showUploadModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/documents/upload-modal.html',
                controller: 'UploadDocumentModalCtrl',
            });

            modalInstance.result.then(function (res) {
                console.log('Document uploaded')
            }, function () {

            });
        }
    }]);