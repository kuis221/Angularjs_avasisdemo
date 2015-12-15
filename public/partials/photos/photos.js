app.controller('PhotosCtrl',
    ['$scope', function($scope) {
        $scope.folders = [
            {
                id: 1,
                name: 'Excavation',
                date: 'Mar 20, 2015',
                number_of_photos: 4,
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
                name: 'photo11.jpg',
                folders: [1]
            }, {
                id: _.uniqueId(),
                name: 'photo12.jpg',
                folders: [1]
            }, {
                id: _.uniqueId(),
                name: 'photo13.jpg',
                folders: [1]
            }, {
                id: _.uniqueId(),
                name: 'photo14.jpg',
                folders: [1]
            },
            // Foundation Folder : 9
            {
                id: _.uniqueId(),
                name: 'photo21.jpg',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo22.jpg',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo23.jpg',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo24.jpg',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo25.jpg',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo26.jpg',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo27.jpg',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo28.jpg',
                folders: [2]
            }, {
                id: _.uniqueId(),
                name: 'photo29.jpg',
                folders: [2]
            },
            // Sub Rough Folder : 4
            {
                id: _.uniqueId(),
                name: 'photo31.jpg',
                folders: [3]
            }, {
                id: _.uniqueId(),
                name: 'photo32.jpg',
                folders: [3]
            }, {
                id: _.uniqueId(),
                name: 'photo33.jpg',
                folders: [3]
            }, {
                id: _.uniqueId(),
                name: 'photo34.jpg',
                folders: [3]
            },
            // Framing Folder : 6
            {
                id: _.uniqueId(),
                name: 'photo41.jpg',
                folders: [4]
            }, {
                id: _.uniqueId(),
                name: 'photo42.jpg',
                folders: [4]
            }, {
                id: _.uniqueId(),
                name: 'photo43.jpg',
                folders: [4]
            }, {
                id: _.uniqueId(),
                name: 'photo44.jpg',
                folders: [4]
            }, {
                id: _.uniqueId(),
                name: 'photo45.jpg',
                folders: [4]
            }, {
                id: _.uniqueId(),
                name: 'photo46.jpg',
                folders: [4]
            },
            // Roofing Folder : 5
            {
                id: _.uniqueId(),
                name: 'photo51.jpg',
                folders: [5]
            }, {
                id: _.uniqueId(),
                name: 'photo52.jpg',
                folders: [5]
            }, {
                id: _.uniqueId(),
                name: 'photo53.jpg',
                folders: [5]
            }, {
                id: _.uniqueId(),
                name: 'photo54.jpg',
                folders: [5]
            }, {
                id: _.uniqueId(),
                name: 'photo55.jpg',
                folders: [5]
            },
            // MEP Rough-In Folder : 4
            {
                id: _.uniqueId(),
                name: 'photo61.jpg',
                folders: [6]
            }, {
                id: _.uniqueId(),
                name: 'photo62.jpg',
                folders: [6]
            }, {
                id: _.uniqueId(),
                name: 'photo63.jpg',
                folders: [6]
            }, {
                id: _.uniqueId(),
                name: 'photo64.jpg',
                folders: [6]
            }
            // 4-Way Inspection Folder : 0
        ];

        _.each($scope.photos, function(photo) {
            photo.selected = false;
        });

        _.each($scope.folders, function(folder) {
            folder.thumbnail = _.result(_.find($scope.photos, function(photo) { return _.indexOf(photo.folders, folder.id) != -1}), 'name');
        });

        $scope.selectFolder = function(folder) {
            $scope.isFolderSelected = true;
            _.each($scope.photos, function(p) {
                if (_.indexOf(p.folders, folder.id) != -1)
                    p.selected = true;
                else
                    p.selected = false;
            });
        };

    }]);
