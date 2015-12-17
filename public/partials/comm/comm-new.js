app.controller('CommNewCtrl',
    ['$scope', '$state', '$stateParams', '$timeout', function($scope, $state, $stateParams, $timeout) {
        $scope.availableUsers = [
            {
                id: 1,
                photo: 'assets/img/avasisteam/jane.jpg',
                email: 'darcy@gmail.com',
                name: 'Jane Smith',
                title: 'Sub Contractor'
            },
            {
                id: 2,
                photo: 'assets/img/avasisteam/mike.jpg',
                email: 'bryan@gmail.com',
                name: 'Mike Riley',
                title: 'Sub Contractor'
            },
            {
                id: 3,
                photo: 'assets/img/avasisteam/mary.jpg',
                email: 'andrew@gmail.com',
                name: 'Mary Beroset',
                title: 'Sub Contractor'
            },
            {
                id: 4,
                photo: 'assets/img/avasisteam/john.jpg',
                email: 'bart@gmail.com',
                name: 'John Steel',
                title: 'Sub Contractor'
            },
            {
                id: 5,
                photo: 'assets/img/avasisteam/dan.jpg',
                email: 'bertrand@gmail.com',
                name: 'Dan Bonker',
                title: 'Sub Contractor'
            }
        ];
        $scope.receiver = {};
        $scope.selectUser = function(receiver, selectedUser) {
            receiver.user = selectedUser;
        };
        $scope.showReceivers = false;
        $scope.toggleReceivers = function() {
            $scope.showReceivers = !$scope.showReceivers;
        }
    }]);