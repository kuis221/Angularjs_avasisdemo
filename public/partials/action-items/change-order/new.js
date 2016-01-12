app.controller('ChangeOrderCtrl',
    ['$scope', function($scope) {
        $scope.date = new Date(2015, 7, 26);

        $scope.users = [
            {
                id: _.uniqueId(),
                name: 'Bruce Wayne'
            }, {
                id: _.uniqueId(),
                name: 'Dan Bonker'
            }, {
                id: _.uniqueId(),
                name: 'Mike Riley'
            }];

        $scope.curResponsible = $scope.users[0];

        $scope.changeOptions = function(o) {
        };

        $scope.categories = [
            {
                id: 1,
                name: 'Other',
            }, {
                id: 2,
                name: 'Parturient Fusce Aenean',
            }, {
                id: 3,
                name: 'Elit In Justo',
            }, {
                id: 1,
                name: 'Dapibus Quam',
            },
        ];

        $scope.sows = [
            {
                id: 1,
                name: "Roof Dry-In"
            }
        ];

    }]);
