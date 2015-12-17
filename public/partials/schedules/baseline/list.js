app.controller('BaselineScheduleCtrl',
    ['$scope', '$stateParams', function ($scope, $stateParams) {
        $scope.schedules = [
            {
                id: 1,
                no: '1',
                title: 'Start Project',
                start_date: 'Aug 23, 2015',
                completion_date: 'Dec 12, 2015',
                duration: 2,
                predecessor: 'N/A',
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
                children: []
            }
        ];
    }]
);
