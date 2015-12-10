app.controller('BankDrawPaymentApplicationCtrl',
    ['$scope', '$state', function ($scope, $state) {
        $scope.$parent.setCurrentStep($state.current.name);
        $scope.isCheckedAll = false;

        $scope.payment_applications = [
            {company_name: 'Synergy Construction', date: '8/5/2015', checked: true, project_name: 'Wilmington 47', amount: 20358, contact: 'Bob Jones', scheduled_at: '-', estimated_at: '-', cost: null, completed: null, sow: '-'},
            {company_name: 'Waste Disposal Inc', date: '8/6/2015', project_name: 'Wilmington 47', amount: 1219.55, contact: '-', scheduled_at: '-', estimated_at: '-', cost: null, completed: null, sow: '-'},
            {company_name: 'Summit County', date: '8/10/2015', project_name: 'Wilmington 47', amount: 729.64, contact: '-', scheduled_at: '-', estimated_at: '-', cost: null, completed: null, sow: '-'},
            {company_name: 'Ace Rentals', date: '7/29/2015', project_name: 'Wilmington 47', amount: 2500.3, contact: '-', scheduled_at: '-', estimated_at: '-', cost: null, completed: null, sow: '-'},
            {company_name: 'L&L Steel Erection', date: '7/29/2015', project_name: 'Wilmington 47', amount: 2139.01, contact: 'John Steel', scheduled_at: '9/18/2015', estimated_at: '9/18/2015', cost: 55000, completed: 5, sow: 'Steel Beems'},
            {company_name: 'Mountain Cabinetry, Inc', date: '7/29/2015', project_name: 'Wilmington 47', amount: 44543.5, contact: 'Skylar Widdison', scheduled_at: '11/1/2015', estimated_at: '11/1/2015', cost: 85000, completed: 0, sow: 'Cabinetry'},
            {company_name: 'On Top Roofing', date: '8/1/2015', project_name: 'Wilmington 47', amount: 35000, contact: 'Dave Gebo', scheduled_at: '9/12/2015', estimated_at: '9/12/2015', cost: 67500, completed: 70, sow: 'Roof'},
            {company_name: 'Old Mill Woodworking', date: '8/3/2015', project_name: 'Wilmington 47', amount: 35985, contact: "Bart O'Driscoll", scheduled_at: '9/23/2015', estimated_at: '9/23/2015', cost: 65000, completed: 15, sow: 'Windows'},
            {company_name: 'Spendlove Plumbing', date: '8/9/2015', project_name: 'Wilmington 47', amount: 23014.84, contact: 'Christine Spendlove', scheduled_at: '9/1/2015', estimated_at: '9/1/2015', cost: 90000, completed: 30, sow: 'Plumbing'},
            {company_name: 'Premier Heating & Air, Inc.', date: '8/2/2015', project_name: 'Wilmington 47', amount: 14580, contact: 'Dave Musgrove', scheduled_at: '8/25/2015', estimated_at: '8/25/2015', cost: 75000, completed: 4, sow: 'Rough HVAC'},
            {company_name: 'American First Insurance', date: '7/29/2015', project_name: 'Wilmington 47', amount: 1197, contact: '-', scheduled_at: '-', estimated_at: '-', cost: null, completed: null, sow: '-'}
        ];
        $scope.checkAll = function() {
            _.each($scope.payment_applications, function(e) { e.checked = $scope.isCheckedAll; });
        }

        $scope.checkedTotal = function() {
            checkedApplications = _.filter($scope.payment_applications, function(e) { return e.checked == true });
            return _.sum(checkedApplications, function(e) { return e.amount; });
        }
        $scope.numberToPercentage = function(val) {
            if (val == null)
                return '-';
            else
                return val + '%';
        }
    }]);
