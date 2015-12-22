app.controller('PayPreviewCtrl',
    ['$scope', '$stateParams', function ($scope, $stateParams) {

        $scope.leadList = [
            { id: 1, name: 'Bob Jones'},
            { id: 2, name: 'Darcy Bertrand'},
            { id: 3, name: 'Bryan Lloyd'},
            { id: 3, name: 'Anrew Klein'}
        ];

        $scope.itemList = [
            {
                project: 'Project Name Goes Here',
                contract: 'Bob Jones',
                scope: 'Elit Ridiculus Commodo',
                contractedAmount: 123,
                completed: 13,
                earned: 123,
                previouslyPaid: 123,
                amountDue: 123,
                currentInvoice: 123,
                variance: 123,
                estimatedDuration: 'Aug 23 2015',
                retainage: 10,
                scheduledCompletion: 'Aug 23 2015',
                estimatedCompletion: 'Aug 23 2015',
                varianceTotal: '4 days'
            },
            {
                project: 'Project Name Goes Here',
                contract: 'Bob Jones',
                scope: 'Elit Ridiculus Commodo',
                contractedAmount: 123,
                completed: 13,
                earned: 123,
                previouslyPaid: 123,
                amountDue: 123,
                currentInvoice: 123,
                variance: 123,
                estimatedDuration: 'Aug 23 2015',
                retainage: 10,
                scheduledCompletion: 'Aug 23 2015',
                estimatedCompletion: 'Aug 23 2015',
                varianceTotal: '12 days'
            },
            {
                project: 'Project Name Goes Here',
                contract: 'Bob Jones',
                scope: 'Elit Ridiculus Commodo',
                contractedAmount: 123,
                completed: 13,
                earned: 123,
                previouslyPaid: 123,
                amountDue: 123,
                currentInvoice: 123,
                variance: 123,
                estimatedDuration: 'Aug 23 2015',
                retainage: 10,
                scheduledCompletion: 'Aug 23 2015',
                estimatedCompletion: 'Aug 23 2015',
                varianceTotal: '1 day'
            }
        ];

        $scope.countryList = [
            {id: 1, name: "Canada"},
            {id: 2, name: "United States"},
        ];

        $scope.stateList = [
            {id: 1, name: "New York"},
            {id: 2, name: "Los Angeles"},
        ];

        $scope.commentList = [
            {
                photo: 'assets/img/avasisteam/iris.jpg',
                name: 'Bob Jones',
                content: 'Concrete to be poured tomorrow as soon as crew shows up',
                date: 'June 23, 2015  2:45pm'
            },
            {
                photo: '',
                name: 'Eric Hoffman',
                content: 'Hi Judy!  I was thinking that we should get together on Tuesday and discuss the bid that came from Hoffman & Hoffman',
                date: 'June 23, 2015  2:45pm'
            },
            {
                photo: 'assets/img/avasisteam/iris.jpg',
                name: 'Judy Simmons',
                content: 'Concrete to be poured tomorrow as soon as crew shows up',
                date: 'June 23, 2015  2:45pm'
            },
            {
                photo: 'assets/img/avasisteam/bruce.jpg',
                name: 'Eric Hoffman',
                content: 'Hi Judy!  I was thinking that we should get together on Tuesday and discuss the bid that came from Hoffman & Hoffman',
                date: 'June 23, 2015  2:45pm'
            },
            {
                photo: '',
                name: 'Judy Simmons',
                content: 'Concrete to be poured tomorrow as soon as crew shows up',
                date: 'June 23, 2015  2:45pm'
            }
        ];

        $scope.getInitials = function(name) {
            var nameSegs = name.split(' ');
            return nameSegs[0].substr(0, 1) + nameSegs[1].substr(0, 1);
        }
    }]
);
