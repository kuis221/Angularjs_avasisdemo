app.controller('AddProcessModalCtrl',
    ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
        $scope.process = {};

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
    }]);