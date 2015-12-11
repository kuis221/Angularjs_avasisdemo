app.controller('PhotosCtrl',
    ['$scope', function($scope) {
        $scope.folders = [
            {
                id: 1,
                name: 'Excavation',
                date: 'Mar 20, 2015',
                number_of_photos: 4
            }, {
                id: 2,
                name: 'Foundation',
                date: 'Apr 30, 2015'
                number_of_photos: 9
            }, {
                id: 3,
                name: 'Sub Rough',
                date: 'Jun 7, 2015'
                number_of_photos: 4
            }, {
                id: 4,
                name: 'Framing',
                date: 'Jul 2, 2015'
                number_of_photos: 6
            }, {
                id: 5,
                name: 'Roofing',
                date: 'Jul 14, 2015'
                number_of_photos: 5
            }, {
                id: 6,
                name: 'MEP Rough-In',
                date: 'Jul 25, 2015'
                number_of_photos: 4
            }, {
                id: 7,
                name: '4-Way Inspection',
                date: 'Aug 16, 2015'
                number_of_photos: 0
            }
        ];

        $scope.photos = [
            // Excavation Folder : 4
            {
                id: _.uniqueId(),
                name: 'Photo11.png',
                folders: [1]
            }, {
                id: _.uniqueId(),
                name: 'Photo12.png',
                folders; [1]
            }, {
                id: _.uniqueId(),
                name: 'Photo13.png',
                folders; [1]
            }, {
                id: _.uniqueId(),
                name: 'Photo14.png',
                folders; [1]
            },
            // Foundation Folder : 9
            {
                id: _.uniqueId(),
                name: 'Photo21.png',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'Photo22.png',
                folders; [2]
            }, {
                id: _.uniqueId(),,
                name: 'Photo23.png',
                folders; [2]
            }, {
                id: _.uniqueId(),
                name: 'Photo24.png',
                folders; [2]
            }, {
                id: _.uniqueId(),
                name: 'Photo25.png',
                folders; [2]
            }, {
                id: _.uniqueId(),,
                name: 'Photo26.png',
                folders; [2]
            }, {
                id: _.uniqueId(),
                name: 'Photo27.png',
                folders; [2]
            }, {
                id: _.uniqueId(),
                name: 'Photo28.png',
                folders; [2]
            }, {
                id: _.uniqueId(),
                name: 'Photo29.png',
                folders; [2]
            },
            // Sub Rough Folder : 4
            {
                id: _.uniqueId(),
                name: 'Photo31.png',
                folders: [3]
            }, {
                id: _.uniqueId(),
                name: 'Photo32.png',
                folders; [3]
            }, {
                id: _.uniqueId(),,
                name: 'Photo33.png',
                folders; [3]
            }, {
                id: _.uniqueId(),
                name: 'Photo34.png',
                folders; [3]
            },
            // Framing Folder : 6
            {
                id: _.uniqueId(),
                name: 'Photo41.png',
                folders: [4]
            }, {
                id: _.uniqueId(),
                name: 'Photo42.png',
                folders; [4]
            }, {
                id: _.uniqueId(),,
                name: 'Photo43.png',
                folders; [4]
            }, {
                id: _.uniqueId(),
                name: 'Photo44.png',
                folders; [4]
            }, {
                id: _.uniqueId(),
                name: 'Photo45.png',
                folders; [4]
            }, {
                id: _.uniqueId(),,
                name: 'Photo46.png',
                folders; [4]
            },
            // Roofing Folder : 5
            {
                id: _.uniqueId(),
                name: 'Photo51.png',
                folders: [5]
            }, {
                id: _.uniqueId(),
                name: 'Photo52.png',
                folders; [5]
            }, {
                id: _.uniqueId(),,
                name: 'Photo53.png',
                folders; [5]
            }, {
                id: _.uniqueId(),
                name: 'Photo54.png',
                folders; [5]
            }, {
                id: _.uniqueId(),
                name: 'Photo55.png',
                folders; [5]
            },
            // MEP Rough-In Folder : 4
            {
                id: _.uniqueId(),
                name: 'Photo61.png',
                folders: [6]
            }, {
                id: _.uniqueId(),
                name: 'Photo62.png',
                folders; [6]
            }, {
                id: _.uniqueId(),,
                name: 'Photo63.png',
                folders; [6]
            }, {
                id: _.uniqueId(),
                name: 'Photo64.png',
                folders; [6]
            }
            // 4-Way Inspection Folder : 0


        ];

        
    }]);
