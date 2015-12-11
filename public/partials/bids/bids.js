app.controller('BidsCtrl',
    ['$scope', '$state', '$stateParams', '$timeout', function($scope, $state, $stateParams, $timeout) {
        $scope.awards = [
            {
                id: 1,
                bid_name: "Wilmington 47 - Hardwood Flooring",
                initial_date: "Aug 3, 2015",
                initiated_by: "Bruce Wayne",
                dates_distributed: "Aug 4, 2015",
                status: "not yet awarded",
                distributed: "3",
                replies: 2,
                received: 67,
                avg_amount: 70400,
                documents: 2,
                children: [
                    {
                        id: 11,
                        distrib_to: "David Sokol",
                        company: "Rocky Mountain Hardwood Floors",
                        open_status: "opened",
                        date_submitted: "Aug 6, 2015",
                        submitted_by: "David Sokol",
                        amount: 62800
                    },
                    {
                        id: 12,
                        distrib_to: "John Smith",
                        company: "ABC Hardwood",
                        open_status: "not yet opened",
                        date_submitted: "-",
                        submitted_by: "",
                        amount: 0
                    },
                    {
                        id: 13,
                        distrib_to: "lark Johnson",
                        company: "Design Flooring",
                        open_status: "opened",
                        date_submitted: "Aug 8, 2015",
                        submitted_by: "Anne Johnson",
                        amount: 78000
                    }
                ]
            }
        ];
        $scope.drafts = [];
        $scope.awardeds = [
            {
                id: 1,
                bid_name: "Wilmington 47 - Concrete",
                initial_date: "Jan 25, 2015",
                initiated_by: "Bruce Wayne",
                dates_distributed: "Jan 25, 2015",
                status: "awarded",
                distributed: "3",
                replies: 2,
                received: 67,
                avg_amount: 157808,
                documents: 2,
                children: []
            },
            {
                id: 2,
                bid_name: "Wilmington 47 - Structural Metal Framing",
                initial_date: "Feb 5, 2015",
                initiated_by: "Bruce Wayne",
                dates_distributed: "Feb 25, 2015",
                status: "awarded",
                distributed: "2",
                replies: 2,
                received: 100,
                avg_amount: 52329,
                documents: 3,
                children: []
            },
            {
                id: 3,
                bid_name: "Wilmington 47 - Rough Carpentry",
                initial_date: "Feb 14, 2015",
                initiated_by: "Bruce Wayne",
                dates_distributed: "Feb 15, 2015",
                status: "awarded",
                distributed: "4",
                replies: 2,
                received: 50,
                avg_amount: 219615,
                documents: 1,
                children: []
            },
            {
                id: 4,
                bid_name: "Wilmington 47 - Building Service Piping",
                initial_date: "Mar 18, 2015",
                initiated_by: "Bruce Wayne",
                dates_distributed: "Mar 19, 2015",
                status: "awarded",
                distributed: "2",
                replies: 1,
                received: 50,
                avg_amount: 17500,
                documents: 1,
                children: []
            },
            {
                id: 5,
                bid_name: "Wilmington 47 - Electrical",
                initial_date: "Apr 15, 2015",
                initiated_by: "Bruce Wayne",
                dates_distributed: "Apr 16, 2015",
                status: "awarded",
                distributed: "3",
                replies: 3,
                received: 100,
                avg_amount: 70000,
                documents: 1,
                children: []
            },
            {
                id: 6,
                bid_name: "Wilmington 47 - HVAC",
                initial_date: "Apr 15, 2015",
                initiated_by: "Bruce Wayne",
                dates_distributed: "Apr 15, 2015",
                status: "awarded",
                distributed: "5",
                replies: 3,
                received: 60,
                avg_amount: 51030,
                documents: 2,
                children: []
            },
            {
                id: 6,
                bid_name: "Wilmington 47 - Fire Protection",
                initial_date: "Apr 18, 2015",
                initiated_by: "Bruce Wayne",
                dates_distributed: "Apr 18, 2015",
                status: "awarded",
                distributed: "2",
                replies: 2,
                received: 100,
                avg_amount: 13337,
                documents: 1,
                children: []
            }
        ];
        $scope.report = {};
        $timeout(function(){
            $scope.report = {
                bids_distrib: 8,
                completed: 100,
                response: 8,
                response_per: 100,
                awarded: 7,
                awarded_per: 88,
                amount: 581168
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