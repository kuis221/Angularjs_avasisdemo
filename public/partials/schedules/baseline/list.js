app.controller('BaselineScheduleCtrl',
    ['$scope', '$stateParams', '$uibModal', function ($scope, $stateParams, $uibModal) {

        $scope.scheduleEditMode = false;
        $scope.project_start_date = "Apr 20, 2015";
        $scope.estimated_duration = 5;
        $scope.square_footage = 42421;
        $scope.average_days = 5.0;
        $scope.schedule_phase = 0.0;
        $scope.project_phase = 0.0;

        $scope.workingDaysList = [
            {id: 1, name: '1 Days'},
            {id: 2, name: '2 Days'},
            {id: 3, name: '3 Days'},
            {id: 4, name: '4 Days'},
            {id: 5, name: '5 Days'},
            {id: 6, name: '6 Days'},
            {id: 7, name: '7 Days'}
        ]

        $scope.schedules = [
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

        $scope.toggleEditMode = function() {
            $scope.scheduleEditMode = !$scope.scheduleEditMode;
        }

        $scope.cancelScheduleEdit = function() {
            $scope.scheduleEditMode = false;
        }

        $scope.showSowModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/schedules/baseline/sow-modal.html',
                controller: 'BaselineScheduleSowCtrl',
                windowClass: 'tm-modal-main'
            });

            modalInstance.result.then(function (res) {
            }, function () {

            });
        }
    }]
);
