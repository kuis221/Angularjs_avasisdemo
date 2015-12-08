app.controller('BidsCtrl',
    ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
        $scope.awards = [
            {
                id: 1,
                bid_name: "Steel Framing",
                initial_date: "Aug 23, 2015",
                initiated_by: "Bob Jones",
                dates_distributed: "Dec 12, 2015",
                status: "ready",
                distributed: "12",
                replies: 5,
                received: 67,
                avg_amount: 12435948.00,
                documents: 2,
                children: [
                    {
                        id: 11,
                        distrib_to: "Omare Tristique Vestibulum",
                        company: "ABC Company",
                        open_status: "ready",
                        date_submitted: "Aug 23, 2015",
                        submitted_by: "Mike Mayer",
                        amount: 879564.5
                    },
                    {
                        id: 12,
                        distrib_to: "Lorem Dolor",
                        company: "Flora Corp",
                        open_status: "ready",
                        date_submitted: "Aug 23, 2015",
                        submitted_by: "Jake James",
                        amount: 1089758.89
                    }
                ]
            },
            {
                id: 2,
                bid_name: "Steel Framing",
                initial_date: "Aug 23, 2015",
                initiated_by: "Bob Jones",
                dates_distributed: "Dec 12, 2015",
                status: "ready",
                distributed: "12",
                replies: 5,
                received: 67,
                avg_amount: 12435948.00,
                documents: 2,
                children: [
                    {
                        id: 21,
                        distrib_to: "Omare Tristique Vestibulum",
                        company: "ABC Company",
                        open_status: "ready",
                        date_submitted: "Aug 23, 2015",
                        submitted_by: "Mike Mayer",
                        amount: 879564.5
                    },
                    {
                        id: 22,
                        distrib_to: "Lorem Dolor",
                        company: "Flora Corp",
                        open_status: "ready",
                        date_submitted: "Aug 23, 2015",
                        submitted_by: "Jake James",
                        amount: 1089758.89
                    }
                ]
            },
            {
                id: 3,
                bid_name: "Steel Framing",
                initial_date: "Aug 23, 2015",
                initiated_by: "Bob Jones",
                dates_distributed: "Dec 12, 2015",
                status: "ready",
                distributed: "12",
                replies: 5,
                received: 67,
                avg_amount: 12435948.00,
                documents: 2,
                children: []
            },
            {
                id: 4,
                bid_name: "Steel Framing",
                initial_date: "Aug 23, 2015",
                initiated_by: "Bob Jones",
                dates_distributed: "Dec 12, 2015",
                status: "ready",
                distributed: "12",
                replies: 5,
                received: 67,
                avg_amount: 12435948.00,
                documents: 2,
                children: []
            }
        ];
    }]);