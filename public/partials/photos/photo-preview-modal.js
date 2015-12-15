app.controller('PhotoPreviewModalCtrl',
    ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.tags = [
            'Dave Gebo',
            'Dan Bonker',
            'Jeff Price',
            'Jane Smith',
            'Roof',
            'Dry-In'
        ];

        $scope.comments = [
            {
                author: 'Jane Smith',
                avatar: 'jane.jpg',
                date: 'August 16, 2015 - 4:30pm',
                desc: 'I am so excited! My dream house is beginning to take shape. Keep up the good work!'
            }, {
                author: 'Bruce Wayne',
                avatar: 'bruce.jpg',
                date: 'August 17, 2015 - 7:13pm',
                desc: 'Oh we will!, Glad you like it! In the next week or two we will be finishing the shingles and adding the soffit and facia you have picked out. More pictures to come soon.'
            }, {
                author: 'Jane Smith',
                avatar: 'jane.jpg',
                date: 'August 17, 2015 - 7:55am',
                desc: 'Cant wait to se...'
        }];

    }]);
