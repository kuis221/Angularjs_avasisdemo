app.controller('InspectionDetailCtrl',
    ['$scope', '$state', '$uibModalInstance', function($scope, $state, $uibModalInstance) {

        $scope.userList = [
            { name: 'Bruce Wayne', company: 'Synergy Construction'},
            { name: 'Mike Montgomery', company: 'Summit County Inspectors'},
            { name: 'Christine Spendlove', company: 'Spendlove Plumbing'},
            { name: 'Mike Riley', company: 'Canyon River Electric'}
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
                photo: 'assets/img/avasisteam/mike.jpg',
                name: 'Mike Montgomery',
                content: 'No problem, I will be back on site to perform the inspection on the 21st. Please let me know if something will prevent you from being ready by then. See you soon.',
                date: 'Aug 17, 2015  1:17pm'
            },
            {
                photo: 'assets/img/avasisteam/bruce.jpg',
                name: 'Bruce Wayne',
                content: 'My apologies Mike. We will be ready by the 20th.',
                date: 'Aug 17, 2015  8:45pm'
            },
            {
                photo: 'assets/img/avasisteam/mike.jpg',
                name: 'Mike Montgomery',
                content: 'Hi Bruce, I stopped by the site this afternoon to start the 4-way. Wilmington 47 is close, but not quite ready for the inspection.',
                date: 'Aug 16, 2015  4:30pm'
            }
        ]

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]
);
