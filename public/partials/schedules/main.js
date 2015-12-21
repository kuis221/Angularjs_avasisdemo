'use strict';

app.controller('SchedulesCtrl',
    ['$scope', '$state', '$uibModal', function($scope, $state, $uibModal) {
        $scope.pieOptions = {
            type: 'pie',
            height: '60px',
            offset: -90,
            sliceColors: ['#3aabd5', '#f1f1f1', '#f6b875'],
            disableTooltips: true
        };
        $scope.financialChartData = [
            {
                value: 32,
                color: "#79c485",
                text: "32%"
            },
            {
                value: 64,
                color: "#3aabd5",
                text: "64%"
            }
        ];
        $scope.calendarScope = 'week';
        $scope.today = moment('2015-08-17').startOf('day');
        $scope.weekTitles = [];
        $scope.daysInRange = [];
        $scope.offset = 0;
        $scope.schedulesInRange = []; // schedules in date of range
        $scope.schedules = [{
            id: _.uniqueId(),
            description: "Roof Dry-In",
            start_date: moment('2015-08-17'),
            end_date: moment('2015-08-20'),
            schedule_type: "success",
            status: 'in progress',
            completion_percentage: 60,
            assigned_to: 'Dave Gebo',
            avatar: 'assets/img/users/dave_gebo.jpg'
        },
        {
            id: _.uniqueId(),
            description: "Rough HVAC",
            start_date: moment('2015-08-17'),
            end_date: moment('2015-08-25'),
            schedule_type: "warning",
            status: "suspended",
            completion_percentage: 40,
            assigned_to: 'Dave Musgrove',
            avatar: 'assets/img/users/dave.jpg'
        },
        {
            id: _.uniqueId(),
            description: "Rough Electrical",
            start_date: moment('2015-08-17'),
            end_date: moment('2015-08-18'),
            schedule_type: "primary",
            status: "in progress",
            completion_percentage: 90,
            assigned_to: 'Mike Riley',
            avatar: 'assets/img/users/mike.jpg'
        },
        {
            id: _.uniqueId(),
            description: "Framing",
            start_date: moment('2015-08-17'),
            end_date: moment('2015-08-17'),
            schedule_type: "danger",
            status: "in progress",
            completion_percentage: 100,
            assigned_to: 'Dan Bonker',
            avatar: 'assets/img/users/dan.jpg'
        },
        {
            id: _.uniqueId(),
            description: "Plumbing",
            start_date: moment('2015-08-17'),
            end_date: moment('2015-09-01'),
            schedule_type: "primary",
            status: "in progress",
            completion_percentage: 20,
            assigned_to: 'Mary',
            avatar: 'assets/img/users/mary.jpg'
        },
        {
            id: _.uniqueId(),
            description: "Landscaping",
            start_date: moment('2015-08-24'),
            end_date: moment('2015-09-04'),
            schedule_type: "success",
            status: "in progress",
            completion_percentage: 0
        },
        {
            id: _.uniqueId(),
            description: "Fire Sprinkler Rough-In",
            start_date: moment('2015-09-01'),
            end_date: moment('2015-09-04'),
            schedule_type: "success",
            status: "in progress",
            completion_percentage: 0
        }];
        _.each($scope.schedules, function(e) {
            e.days_of_period = e.end_date.diff(e.start_date, 'd') + 1;
        })

        $scope.schedulesOfToday = _.filter($scope.schedules, function(e){
            return e.start_date <= moment('2015-08-17') && moment('2015-08-17') <= e.end_date;
        })

        $scope.range = function(val) {
            return _.range(val);
        }
        $scope.isEmptyDate = function(week, day) {
            var scheduled = _.filter($scope.schedulesInRange[week], function(e) {
                return _.range(e.relativePos, e.relativePos + e.relativeLength).indexOf(day) >= 0;
            });
            return scheduled.length == 0;
        }

        function getWeekTitle(offset) {
            offset = $scope.offset + offset;
            if (offset == 0)
                return 'THIS WEEK';
            else if (offset == 1)
                return 'NEXT WEEK';
            else if (offset == -1)
                return 'PREV WEEK';
            else if (offset < 0)
                return -offset + ' WEEKS AGO';
            else
                return offset + ' WEEKS OUT';
        }
        function resetOffsetRange() {
            if ($scope.calendarScope == 'day') {
                $scope.startDate = moment('2015-08-16').startOf('day').add($scope.offset, 'd');
                $scope.endDate = moment('2015-08-16').startOf('day').add($scope.offset + 2, 'd');
                $scope.schedulesInRange = _.filter($scope.schedules, function(e) {
                    return ($scope.startDate <= e.end_date) && ($scope.endDate >= e.start_date);
                });
                var startDate = angular.copy($scope.startDate);
                $scope.dayTitles = [];
                _.times(3, function(i) {
                    $scope.dayTitles[i] = startDate.format('ddd, MMM DD');
                    startDate.add(1, 'd');
                });
                _.each($scope.schedulesInRange, function(e) {
                    var relativePos = e.start_date.diff($scope.startDate, 'd');
                    e.relativePos = Math.max(relativePos, 0);

                    // calculate relative length
                    e.relativeLength = Math.min(e.days_of_period + relativePos, 3) - e.relativePos;
                });
            }
            else if ($scope.calendarScope == 'week') {
                $scope.startDate = moment('2015-08-16').startOf('week').add($scope.offset, 'w');
                $scope.endDate = moment('2015-08-16').startOf('week').add($scope.offset + 2, 'w').endOf('week');

                $scope.weekTitles = [];
                _.each([0, 1, 2], function(i){ $scope.weekTitles.push(getWeekTitle(i)); });
                
                $scope.daysInRange = [];
                var startDate;
                for (var i = 0; i < 21; i ++) {
                    startDate = angular.copy($scope.startDate);
                    $scope.daysInRange.push(startDate.add(i, 'd').format('ddd, MMM DD'));
                }

                // filter schdules which are in date of range
                // repeat 3 times to filter schedules for 3 week
                _.times(3, function(i) {
                    var filteredInWeek = _.filter($scope.schedules, function(e) {
                        var startDate = moment($scope.startDate).add(i, 'w');
                        var endDate = moment(startDate).add(6, 'd');
                        return (startDate <= e.end_date) && (endDate >= e.start_date);
                    });
                    $scope.schedulesInRange[i] = (angular.copy(filteredInWeek));

                    _.each($scope.schedulesInRange[i], function(e) {
                        var startDate = moment($scope.startDate).add(i, 'w');
                        var relativePos = e.start_date.diff(startDate, 'd');
                        e.relativePos = Math.max(relativePos, 0);

                        // calculate relative length
                        e.relativeLength = Math.min(e.days_of_period + relativePos, 7) - e.relativePos;
                    });
                });
            }
        }

        $scope.plusOffset = function() {
            $scope.offset = $scope.offset + 3;
            resetOffsetRange();
        }
        $scope.minusOffset = function() {
            $scope.offset = $scope.offset - 3;
            resetOffsetRange();
        }
        $scope.getOffsetDate = function(offset) {
            var offseDate = $scope.startDate.add(offset, 'd').format('ddd, MMM DD')
            return offseDate;
        }
        $scope.changeCalendarScope = function(scope) {
            $scope.calendarScope = scope;
            $scope.offset = 0;
            resetOffsetRange();
        }
        $scope.showScheduleDetail = function(id) {
            $state.go("schedules.detail", {id: id});
        }

        $scope.showAddTeamMemberModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/team-members/invite-modal.html',
                controller: 'TeamMembersInviteCtrl',
                windowClass: 'tm-modal-main'
            });
        }
        $scope.showAddActionItemModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/action-items/gai-new-modal.html',
                controller: 'GAINewModalCtrl',
                windowClass: 'gai-modal'
            });
        }
        $scope.showAddDocumentModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/documents/upload-modal.html',
                controller: 'UploadDocumentModalCtrl',
            });
        }
        $scope.showAddPhotoModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/photos/upload-modal.html',
                controller: 'PhotoUploadModalCtrl',
                windowTopClass: 'drag-drop'
            });
        }
        
        resetOffsetRange();

        $scope.slickSetting = [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            }
        ];

        $scope.schedulesInList = [
            {
                id: 1,
                no: '1',
                title: 'Start Project',
                start_date: 'Aug 23, 2015',
                completion_date: 'Dec 12, 2015',
                duration: 2,
                predecessor: 'N/A',
                has_child: false,
                children: []
            },
            {
                id: 2,
                no: '2',
                title: 'Site Preparation',
                start_date: 'Aug 23, 2015',
                completion_date: 'Dec 12, 2015',
                duration: 2,
                predecessor: 'N/A',
                has_child: true,
                children: [
                    {
                        id: 3,
                        no: '2.1',
                        title: 'Site Clean Up',
                        start_date: 'Aug 23, 2015',
                        completion_date: 'Dec 12, 2015',
                        duration: 2,
                        predecessor: 'N/A',
                        children: []
                    },
                    {
                        id: 4,
                        title: 'Subphase',
                        no: '2.2',
                        start_date: 'Aug 23, 2015',
                        completion_date: 'Dec 12, 2015',
                        duration: 2,
                        predecessor: '2.1',
                        has_child: true,
                        children: [
                            {
                                id: 5,
                                no: '2.2.1',
                                title: 'Scope of work title',
                                start_date: 'Aug 23, 2015',
                                completion_date: 'Dec 12, 2015',
                                duration: 2,
                                predecessor: '2.1',
                                children: []
                            }
                        ]
                    },
                ]
            },
            {
                id: 6,
                no: '3',
                title: 'Foundation',
                start_date: 'Aug 23, 2015',
                completion_date: 'Dec 12, 2015',
                duration: 2,
                predecessor: 'N/A',
                has_child: false,
                children: []
            },
            {
                id: 7,
                no: '4',
                title: 'Framing',
                start_date: 'Aug 23, 2015',
                completion_date: 'Dec 12, 2015',
                duration: 2,
                predecessor: 'N/A',
                has_child: false,
                children: []
            },
            {
                id: 8,
                no: '5',
                title: 'Roof',
                start_date: 'Aug 23, 2015',
                completion_date: 'Dec 12, 2015',
                duration: 2,
                predecessor: 'N/A',
                has_child: false,
                children: []
            },
            {
                id: 9,
                no: '6',
                title: 'Exterior',
                start_date: 'Aug 23, 2015',
                completion_date: 'Dec 12, 2015',
                duration: 2,
                predecessor: 'N/A',
                has_child: false,
                children: []
            },
            {
                id: 10,
                no: '7',
                title: 'Windows & Doors',
                start_date: 'Aug 23, 2015',
                completion_date: 'Dec 12, 2015',
                duration: 2,
                predecessor: 'N/A',
                has_child: false,
                children: []
            },
            {
                id: 11,
                no: '8',
                title: 'Painting',
                start_date: 'Aug 23, 2015',
                completion_date: 'Dec 12, 2015',
                duration: 2,
                predecessor: 'N/A',
                has_child: false,
                children: []
            },
            {
                id: 12,
                no: '9',
                title: 'Interior Finishes',
                start_date: 'Aug 23, 2015',
                completion_date: 'Dec 12, 2015',
                duration: 2,
                predecessor: 'N/A',
                has_child: false,
                children: []
            },
            {
                id: 13,
                no: '10',
                title: 'Fixtures & Appliances',
                start_date: 'Aug 23, 2015',
                completion_date: 'Dec 12, 2015',
                duration: 2,
                predecessor: 'N/A',
                has_child: false,
                children: []
            },
            {
                id: 14,
                no: '11',
                title: 'Complete Project',
                start_date: 'Aug 23, 2015',
                completion_date: 'Dec 12, 2015',
                duration: 2,
                predecessor: 'N/A',
                has_child: false,
                children: []
            }
        ];
    }]
);