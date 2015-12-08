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

    $scope.showProjectModal = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/team-members/project-modal.html',
            controller: 'TeamMembersProjectCtrl',
            windowClass: 'tm-modal-main'
        });

        modalInstance.result.then(function (res) {
        }, function () {

        });
    }
}]);
