app.controller('TeamMembersInviteCtrl',
    ['$scope', '$state', '$filter', '$uibModalInstance', function($scope, $state, $filter, $uibModalInstance) {
        $scope.inviteUserList = [
            {isUserListOpened: {status: false}}
        ];

        $scope.inviteProjectsList = [{}];
        $scope.option = {};
        $scope.option.isUserListOpened = false; //

        $scope.availableUsers = [
            {
                id: 1,
                photo: 'assets/img/1.png',
                email: 'darcy@gmail.com',
                name: 'Darcy Bertrand',
                title: 'Developer'
            },
            {
                id: 2,
                photo: 'assets/img/2.png',
                email: 'bryan@gmail.com',
                name: 'Bryan Lloyd',
                title: 'Developer'
            },
            {
                id: 3,
                photo: 'assets/img/3.png',
                email: 'andrew@gmail.com',
                name: 'Anrew Klein',
                title: 'Developer'
            },
            {
                id: 4,
                photo: 'assets/img/1.png',
                email: 'bart@gmail.com',
                name: 'Bart Zonk',
                title: 'Developer'
            },
            {
                id: 5,
                photo: 'assets/img/1.png',
                email: 'bertrand@gmail.com',
                name: 'Darcy Darcy',
                title: 'Developer'
            }
        ];

        $scope.filteredUsers = [];

        $scope.availableProjects = [
            {
                id: 1,
                name: "Parking Level A"
            },
            {
                id: 2,
                name: "Parking Level B"
            },
            {
                id: 3,
                name: "Parking Level C"
            }
        ];

        $scope.availableRoles = [
            {
                id: 1,
                name: "Subcontractor"
            },
            {
                id: 2,
                name: "Contractor"
            },
            {
                id: 3,
                name: "Another Role"
            },
            {
                id: 4,
                name: "Some Other Role"
            }
        ];

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.sendInvite = function() {
            $uibModalInstance.dismiss('cancel');
            $state.go('team-members.list');
        }

        $scope.selectUser = function(inviteUser, selectedUser) {
            inviteUser.user = angular.copy(selectedUser);
            inviteUser.isUserListOpened = !inviteUser.isUserListOpened;
        }

        $scope.selectProject = function(invitePrj, selectedProject) {
            invitePrj.project = selectedProject;
        }

        $scope.selectRole = function(invitePrj, selectedRole) {
            invitePrj.role = selectedRole;
        }

        $scope.addAnotherProject = function() {
            $scope.inviteProjectsList.push(new Object());
        }

        $scope.addAnotherUser = function() {
            $scope.inviteUserList.push(new Object({isUserListOpened: {status: false}}));
        }

        $scope.searchUserByName = function(inviteUser) {
            $scope.filteredUsers = $filter('filter')($scope.availableUsers, {name: inviteUser.user.name});
            inviteUser.isUserListOpened.status = $scope.filteredUsers.length != 0 && inviteUser.user.name != '';
        };
    }]
);
