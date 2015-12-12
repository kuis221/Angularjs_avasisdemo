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
                date: 'Apr 30, 2015',
                number_of_photos: 9
            }, {
                id: 3,
                name: 'Sub Rough',
                date: 'Jun 7, 2015',
                number_of_photos: 4
            }, {
                id: 4,
                name: 'Framing',
                date: 'Jul 2, 2015',
                number_of_photos: 6
            }, {
                id: 5,
                name: 'Roofing',
                date: 'Jul 14, 2015',
                number_of_photos: 5
            }, {
                id: 6,
                name: 'MEP Rough-In',
                date: 'Jul 25, 2015',
                number_of_photos: 4
            }, {
                id: 7,
                name: '4-Way Inspection',
                date: 'Aug 16, 2015',
                number_of_photos: 0
            }
        ];

        $scope.photos = [
            // Excavation Folder : 4
            {
                id: _.uniqueId(),
                name: 'photo11.png',
                folders: [1]
            }, {
                id: _.uniqueId(),
                name: 'photo12.png',
                folders: [1]
            }, {
                id: _.uniqueId(),
                name: 'photo13.png',
                folders: [1]
            }, {
                id: _.uniqueId(),
                name: 'photo14.png',
                folders: [1]
            },
            // Foundation Folder : 9
            {
                id: _.uniqueId(),
                name: 'photo21.png',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo22.png',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo23.png',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo24.png',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo25.png',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo26.png',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo27.png',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo28.png',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo29.png',
                folders: [2]
            },
            // Sub Rough Folder : 4
            {
                id: _.uniqueId(),
                name: 'photo31.png',
                folders: [3]
            }, {
                id: _.uniqueId(),
                name: 'photo32.png',
                folders: [3]
            }, {
                id: _.uniqueId(),
                name: 'photo33.png',
                folders: [3]
            }, {
                id: _.uniqueId(),
                name: 'photo34.png',
                folders: [3]
            },
            // Framing Folder : 6
            {
                id: _.uniqueId(),
                name: 'photo41.png',
                folders: [4]
            }, {
                id: _.uniqueId(),
                name: 'photo42.png',
                folders: [4]
            }, {
                id: _.uniqueId(),
                name: 'photo43.png',
                folders: [4]
            }, {
                id: _.uniqueId(),
                name: 'photo44.png',
                folders: [4]
            }, {
                id: _.uniqueId(),
                name: 'photo45.png',
                folders: [4]
            }, {
                id: _.uniqueId(),
                name: 'photo46.png',
                folders: [4]
            },
            // Roofing Folder : 5
            {
                id: _.uniqueId(),
                name: 'photo51.png',
                folders: [5]
            }, {
                id: _.uniqueId(),
                name: 'photo52.png',
                folders: [5]
            }, {
                id: _.uniqueId(),
                name: 'photo53.png',
                folders: [5]
            }, {
                id: _.uniqueId(),
                name: 'photo54.png',
                folders: [5]
            }, {
                id: _.uniqueId(),
                name: 'photo55.png',
                folders: [5]
            },
            // MEP Rough-In Folder : 4
            {
                id: _.uniqueId(),
                name: 'photo61.png',
                folders: [6]
            }, {
                id: _.uniqueId(),
                name: 'photo62.png',
                folders: [6]
            }, {
                id: _.uniqueId(),
                name: 'photo63.png',
                folders: [6]
            }, {
                id: _.uniqueId(),
                name: 'photo64.png',
                folders: [6]
            }
            // 4-Way Inspection Folder : 0
        ];



    }]);
