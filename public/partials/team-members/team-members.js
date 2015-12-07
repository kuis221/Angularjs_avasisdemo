app.controller('TeamMembersCtrl',  ['$scope', '$stateParams', '$uibModal', function ($scope, $stateParams, $uibModal) {

    $scope.showInviteModal = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/team-members/invite-modal.html',
            controller: 'TeamMembersInviteCtrl',
            windowClass: 'tm-modal-main'
        });

        modalInstance.result.then(function (res) {
        }, function () {

        });
    }
}]);
