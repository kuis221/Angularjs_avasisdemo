app.controller('FinancialsPaymentFinalizeCtrl',
    ['$scope', '$stateParams', function ($scope, $stateParams) {

        $scope.payment_application = [
            {
                project: "Ormare Euismod Nullam",
                contract: "Aenean Lacinia bibendum nulla",
                scope: "Malesuada Vehicula Amet",
                labor: {
                    contracted: 10000,
                    completed: 50,
                    earned: 4000,
                    previously_paid: 4000,
                    invoiced: 4000,
                    varience: 1000,
                    balance: 5000
                },
                materials: {
                    contracted: 20000,
                    completed: 90,
                    earned: 16000,
                    previously_paid: 16000,
                    invoiced: 20000,
                    varience: 4000,
                    balance: 0
                },
                equipment: {
                    contracted: 10000,
                    completed: 50,
                    earned: 4000,
                    previously_paid: 4000,
                    varience: 1000,
                    balance: 5000
                },
                total : {
                    contracted: 10000,
                    completed: 50,
                    earned: 4000,
                    previously_paid: 4000,
                    varience: 1000,
                    balance: 5000
                },
                summary : {
                    duration: 20,
                    retainage: 10,
                    scheduled_completion: 'Aug 26, 2015',
                    estimated_completion: 'Aug 26, 2015',
                    varience: 5
                }
            },
            {
                project: "Ormare Euismod Nullam",
                contract: "Aenean Lacinia bibendum nulla",
                scope: "Malesuada Vehicula Amet",
                labor: {
                    contracted: 10000,
                    completed: 50,
                    earned: 4000,
                    previously_paid: 4000,
                    invoiced: 4000,
                    varience: 1000,
                    balance: 5000
                },
                materials: {
                    contracted: 20000,
                    completed: 90,
                    earned: 16000,
                    previously_paid: 16000,
                    invoiced: 20000,
                    varience: 4000,
                    balance: 0
                },
                equipment: {
                    contracted: 10000,
                    completed: 50,
                    earned: 4000,
                    previously_paid: 4000,
                    varience: 1000,
                    balance: 5000
                },
                total : {
                    contracted: 10000,
                    completed: 50,
                    earned: 4000,
                    previously_paid: 4000,
                    varience: 1000,
                    balance: 5000
                },
                summary : {
                    duration: 20,
                    retainage: 10,
                    scheduled_completion: 'Aug 26, 2015',
                    estimated_completion: 'Aug 26, 2015',
                    varience: 5
                }
            }
        ];

        $scope.countryList = [
            {id: 1, name: "Canada"},
            {id: 2, name: "United States"},
        ];
        $scope.stateList = [
            {id: 1, name: "New York"},
            {id: 2, name: "Los Angeles"},
        ]
    }]
);
