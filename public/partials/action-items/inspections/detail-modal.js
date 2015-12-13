app.controller('InspectionDetailCtrl',
    ['$scope', '$state', '$uibModalInstance', function($scope, $state, $uibModalInstance) {

        $scope.userList = [
            { name: 'Eric Hoffman', company: 'Abc Inc.'},
            { name: 'Sam Smith', company: 'Flora Corp'},
            { name: 'Kimball W. Frank', company: 'Flora Corp'},
            { name: 'Bob Jones', company: 'Flora Corp'}
        ];

        $scope.photoList = [
            'assets/img/photos/photo11.jpg',
            'assets/img/photos/photo12.jpg',
            'assets/img/photos/photo13.jpg',
            'assets/img/photos/photo14.jpg',
            'assets/img/photos/photo21.jpg',
            'assets/img/photos/photo22.jpg',
            'assets/img/photos/photo23.jpg',
            'assets/img/photos/photo24.jpg',
            'assets/img/photos/photo25.jpg',
            'assets/img/photos/photo26.jpg',
            'assets/img/photos/photo27.jpg',
            'assets/img/photos/photo28.jpg'
        ]

        $scope.commentList = [
            {
                photo: 'assets/img/avasisteam/iris.jpg',
                name: 'Judy Simmons',
                content: 'Concrete to be poured tomorrow as soon as crew shows up',
                date: 'June 23, 2015  2:45pm'
            },
            {
                photo: 'assets/img/avasisteam/bruce.jpg',
                name: 'Eric Hoffman',
                content: 'Hi Judy!  I was thinking that we should get together on Tuesday and discuss the bid that came from Hoffman & Hoffman',
                date: 'June 23, 2015  2:45pm'
            },
            {
                photo: 'assets/img/avasisteam/iris.jpg',
                name: 'Judy Simmons',
                content: 'Concrete to be poured tomorrow as soon as crew shows up',
                date: 'June 23, 2015  2:45pm'
            }
        ]

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]
);
