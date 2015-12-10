app.controller('BidsCtrl',
    ['$scope', '$state', '$stateParams', '$timeout', function($scope, $state, $stateParams, $timeout) {
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
                bid_name: "Wood Framing",
                initial_date: "Aug 23, 2015",
                initiated_by: "Eric Hoffman",
                dates_distributed: "Dec 12, 2015",
                status: "awarded",
                distributed: "8",
                replies: 3,
                received: 24,
                avg_amount: 879564.5,
                documents: 3,
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
                bid_name: "Water Pipes",
                initial_date: "Aug 23, 2015",
                initiated_by: "David Hunter",
                dates_distributed: "Dec 12, 2015",
                status: "ready",
                distributed: "16",
                replies: 12,
                received: 33,
                avg_amount: 1098758.89,
                documents: 1,
                children: [
                    {
                        id: 31,
                        distrib_to: "Omare Tristique Vestibulum",
                        company: "ABC Company",
                        open_status: "ready",
                        date_submitted: "Aug 23, 2015",
                        submitted_by: "Mike Mayer",
                        amount: 879564.5
                    },
                    {
                        id: 32,
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
                id: 4,
                bid_name: "Main Plumbing",
                initial_date: "Aug 23, 2015",
                initiated_by: "Sam Kovac",
                dates_distributed: "Dec 12, 2015",
                status: "awating",
                distributed: "N/A",
                replies: 7,
                received: 9,
                avg_amount: 12435948,
                documents: 5,
                children: [
                    {
                        id: 41,
                        distrib_to: "Omare Tristique Vestibulum",
                        company: "ABC Company",
                        open_status: "ready",
                        date_submitted: "Aug 23, 2015",
                        submitted_by: "Mike Mayer",
                        amount: 879564.5
                    },
                    {
                        id: 42,
                        distrib_to: "Lorem Dolor",
                        company: "Flora Corp",
                        open_status: "ready",
                        date_submitted: "Aug 23, 2015",
                        submitted_by: "Jake James",
                        amount: 1089758.89
                    }
                ]
            }
        ];
        $scope.drafts = [
            {
                id: 1,
                bid_name: "Steel Framing 2nd Floor",
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
                bid_name: "2nd Floor Windows",
                initial_date: "Aug 23, 2015",
                initiated_by: "Eric Hoffman",
                dates_distributed: "Dec 12, 2015",
                status: "awarded",
                distributed: "8",
                replies: 3,
                received: 24,
                avg_amount: 879564.5,
                documents: 3,
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
            }
        ];
        $scope.awardeds = [
            {
                id: 1,
                bid_name: "Steel Framing 4th Floor",
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
                bid_name: "4th Floor Plumbing",
                initial_date: "Aug 23, 2015",
                initiated_by: "Eric Hoffman",
                dates_distributed: "Dec 12, 2015",
                status: "awarded",
                distributed: "8",
                replies: 3,
                received: 24,
                avg_amount: 879564.5,
                documents: 3,
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
                bid_name: "4th Floor Windows",
                initial_date: "Aug 23, 2015",
                initiated_by: "David Hunter",
                dates_distributed: "Dec 12, 2015",
                status: "ready",
                distributed: "16",
                replies: 12,
                received: 33,
                avg_amount: 1098758.89,
                documents: 1,
                children: [
                    {
                        id: 31,
                        distrib_to: "Omare Tristique Vestibulum",
                        company: "ABC Company",
                        open_status: "ready",
                        date_submitted: "Aug 23, 2015",
                        submitted_by: "Mike Mayer",
                        amount: 879564.5
                    },
                    {
                        id: 32,
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
                id: 4,
                bid_name: "5th Floor Plumbing",
                initial_date: "Aug 23, 2015",
                initiated_by: "Sam Kovac",
                dates_distributed: "Dec 12, 2015",
                status: "awating",
                distributed: "N/A",
                replies: 7,
                received: 9,
                avg_amount: 12435948,
                documents: 5,
                children: [
                    {
                        id: 41,
                        distrib_to: "Omare Tristique Vestibulum",
                        company: "ABC Company",
                        open_status: "ready",
                        date_submitted: "Aug 23, 2015",
                        submitted_by: "Mike Mayer",
                        amount: 879564.5
                    },
                    {
                        id: 42,
                        distrib_to: "Lorem Dolor",
                        company: "Flora Corp",
                        open_status: "ready",
                        date_submitted: "Aug 23, 2015",
                        submitted_by: "Jake James",
                        amount: 1089758.89
                    }
                ]
            }
        ];
        $scope.report = {};
        $timeout(function(){
            $scope.report = {
                bids_distrib: 57,
                completed: 100,
                response: 68,
                awarded: 61,
                amount: 1513986
            };
        }, 500);
        $scope.showBid = [];
        $scope.showDraft = [];
        $scope.showCreate = [];
        $scope.showAward = [];
        $scope.toggleBid = function(index) {
            $scope.showBid[index] = !$scope.showBid[index];
        };
        $scope.toggleDraft = function(index) {
            $scope.showDraft[index] = !$scope.showDraft[index];
        };
        $scope.toggleCreate = function(index) {
            $scope.showCreate[index] = !$scope.showCreate[index];
        };
        $scope.toggleAward = function(index) {
            $scope.showAward[index] = !$scope.showAward[index];
        };
        $scope.showAddress = false;
        $scope.toggleAddress = function() {
            $scope.showAddress = !$scope.showAddress;
        };
    }]);