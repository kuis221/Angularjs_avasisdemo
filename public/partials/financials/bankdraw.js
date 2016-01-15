app.controller('FinancialsBankdrawCtrl',
    ['$scope', '$state','$timeout', function($scope, $state, $timeout) {

        $scope.$parent.setCurrentTab($state.current.name);

        $scope.bankdraws = [
            {
                submission_date: 'Feb 15, 2015',
                draw_project: {
                    name: 'Wilmington 47 Draw #1',
                    type: ''
                },
                submitted_by: 'Beth Wiseman',
                bank_draw_amount: {
                    name: 'World Bank',
                    value: 12613.97
                },
                status: 'Approved - Payment Complete',
                documents: 1,
                pay_applications: 1

            },
            {
                submission_date: 'Mar 9, 2015',
                draw_project: {
                    name: 'Wilmington 47 Draw #2',
                    type: ''
                },
                submitted_by: 'Beth Wiseman',
                bank_draw_amount: {
                    name: 'World Bank',
                    value: 131560.45
                },
                status: 'Approved - Payment Complete',
                documents: 1,
                pay_applications: 19

            },
            {
                submission_date: 'Apr 1, 2015',
                draw_project: {
                    name: 'Wilmington 47 Draw #3',
                    type: ''
                },
                submitted_by: 'Beth Wiseman',
                bank_draw_amount: {
                    name: 'World Bank',
                    value: 142741.60
                },
                status: 'Approved - Payment Complete',
                documents: 1,
                pay_applications: 20

            },
            {
                submission_date: 'May 15, 2015',
                draw_project: {
                    name: 'Wilmington 47 Draw #4',
                    type: ''
                },
                submitted_by: 'Beth Wiseman',
                bank_draw_amount: {
                    name: 'World Bank',
                    value: 269400.35
                },
                status: 'Approved - Payment Complete',
                documents: 1,
                pay_applications: 30

            },
            {
                submission_date: 'Jun 15, 2015',
                draw_project: {
                    name: 'Wilmington 47 Draw #5',
                    type: ''
                },
                submitted_by: 'Beth Wiseman',
                bank_draw_amount: {
                    name: 'World Bank',
                    value: 135233.49
                },
                status: 'Approved - Payment Complete',
                documents: 1,
                pay_applications: 35

            },
            {
                submission_date: 'Jul 10, 2015',
                draw_project: {
                    name: 'Wilmington 47 Draw #6',
                    type: ''
                },
                submitted_by: 'Beth Wiseman',
                bank_draw_amount: {
                    name: 'World Bank',
                    value: 211797.50
                },
                status: 'Approved - Payment Complete',
                documents: 1,
                pay_applications: 27

            },
            {
                submission_date: 'Aug 17, 2015',
                draw_project: {
                    name: 'Wilmington 47 Draw #7',
                    type: ''
                },
                submitted_by: 'Beth Wiseman',
                bank_draw_amount: {
                    name: 'World Bank',
                    value: 181266.84
                },
                status: 'Pending Approval',
                documents: 3,
                pay_applications: 11

            }
        ];
    }]);
