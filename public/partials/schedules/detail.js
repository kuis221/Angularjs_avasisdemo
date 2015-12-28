app.controller('ScheduleDetailCtrl',
    ['$scope', '$stateParams', '$uibModal', function($scope, $stateParams, $uibModal) {
        $scope.currentTab = 'summary';

        $scope.sowData = [
            {
                value: 60,
                color: "#79c485",
                text: "60%",
                font: '18px AvenirNextLTPro-Regular'
            },
        ];

        $scope.fundData = [
            {
                value: 40,
                color: "#3aabd5",
                text: "40%",
                font: '18px AvenirNextLTPro-Regular'
            },
        ];

        $scope.slider = {
            min: 10,
            max: 80,
            options: {
                floor: 0,
                ceil: 100,
                onChange: function() {
                }
            }
        };

        $scope.processes = [
        {
            title: 'Roofing Felt',
            description: 'Install roofing felt. All materials are in the garage.',
            responsible: {
                name: 'Dave Gebo',
                project: 'On Top Roofing'
            },
            start_date: moment('08/08/2015').format('MMM DD, YYYY'),
            end_date: moment('08/10/2015').format('MMM DD, YYYY'),
            completed: true
        },
        {
            title: 'Check Vents',
            description: "Double check all vents don't have anything blocking them",
            responsible: {
                name: 'Dave Gebo',
                project: 'On Top Roofing'
            },
            start_date: moment('08/17/2015').format('MMM DD, YYYY'),
            end_date: moment('08/18/2015').format('MMM DD, YYYY'),
            completed: false
        }];

        $scope.prodecessors = [
        {
            phase: 'Framing',
            sub_phase: 'Steel Framing',
            scope_of_work: 'Steel Framing',
            team_member: {
                name: 'John Steel',
                company: 'L&L Steel Erection'
            },
            status: 'Completed',
            lag: '2d'
        }];

        $scope.successors = [
        {
            phase: 'Exterior',
            sub_phase: '-',
            scope_of_work: '-',
            team_member: {
                name: '-',
                company: ''
            },
            lag: '-'
        }];

        $scope.showHistory = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/schedules/details/schedule-history-modal.html',
                size: 'xl'
            });
        }
        $scope.addProcess = function() {
            var modalInstance = $uibModal.open({
                controller: 'AddProcessModalCtrl',
                templateUrl: 'partials/schedules/details/add-process-modal.html',
                size: 'lg'
            });
        }
        $scope.addSuccessor = function() {
            var modalInstance = $uibModal.open({
                controller: 'AddSuccessorModalCtrl',
                templateUrl: 'partials/schedules/details/add-successor-modal.html',
                resolve: {
                    title: function() {
                        return 'Add Successor'
                    }
                },
                size: 'lg'
            });
        }
        $scope.addPredecessor = function() {
            var modalInstance = $uibModal.open({
                controller: 'AddSuccessorModalCtrl',
                templateUrl: 'partials/schedules/details/add-successor-modal.html',
                resolve: {
                    title: function() {
                        return 'Add Predecessor'
                    }
                },
                size: 'lg'
            });
        }

        //=============Photos===============
        $scope.folders = [
            {
                id: 5,
                name: 'Roofing',
                date: 'Jul 14, 2015',
                number_of_photos: 5
            }
        ];

        $scope.photos = [
            // Roofing Folder : 5
            {
                id: _.uniqueId(),
                name: 'photo54.jpg',
                folders: [5]
            }, {
                id: _.uniqueId(),
                name: 'photo53.jpg',
                folders: [5]
            }, {
                id: _.uniqueId(),
                name: 'photo52.jpg',
                folders: [5]
            },
            {
                id: _.uniqueId(),
                name: 'photo51.jpg',
                folders: [5]
            }
        ];

        _.each($scope.photos, function(photo) {
            photo.selected = false;
        });

        _.each($scope.folders, function(folder) {
            folder.thumbnail = _.result(_.find($scope.photos, function(photo) { return _.indexOf(photo.folders, folder.id) != -1}), 'name');
        });

        $scope.isOptionShow = false;

        $scope.toggleOption = function() {
            $scope.isOptionShow = !$scope.isOptionShow;
        };

        $scope.selectFolder = function(folder) {
            $scope.isFolderSelected = true;
            _.each($scope.photos, function(p) {
                if (_.indexOf(p.folders, folder.id) != -1)
                    p.selected = true;
                else
                    p.selected = false;
            });
        };

        $scope.showPreviewModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/photos/photo-preview-modal.html',
                controller: 'PhotoPreviewModalCtrl',
                windowTopClass: 'photos-preview'
            });

            modalInstance.result.then(function(res) {

            }, function() {

            });
        };

        $scope.showUploadModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/photos/upload-modal.html',
                controller: 'PhotoUploadModalCtrl',
                windowTopClass: 'drag-drop'
            });

            modalInstance.result.then(function(res) {

            }, function() {

            });
        }
    }]);