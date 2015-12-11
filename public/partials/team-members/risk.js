app.controller('RiskCtrl',
    ['$scope', '$stateParams', '$uibModal', function ($scope, $stateParams, $uibModal) {

        $scope.showAttachment = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/team-members/risk-attachment.html',
                controller: 'RiskAttachmentCtrl'
            });

            modalInstance.result.then(function (res) {
            }, function () {

            });
        }
    }]
);
