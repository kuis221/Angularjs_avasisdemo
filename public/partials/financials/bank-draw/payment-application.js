app.controller('BankDrawPaymentApplicationCtrl',
    ['$scope', '$state', '$filter', function ($scope, $state, $filter) {
        $scope.$parent.setCurrentStep($state.current.name);
        $scope.isCheckedAll = false;
        $scope.dateRange = {
            min: moment('07/01/2015').toDate(),
            max: moment('09/01/2015').toDate()
        };

        $scope.payment_applications = [
            {company_name: 'Synergy Construction', date: '08/05/2015', checked: true, project_name: 'Wilmington 47', amount: 20358, contact: 'Bruce Wayne', scheduled_at: '-', estimated_at: '-', cost: null, completed: null, sow: '-', phone_number: '801-580-5683'},
            {company_name: 'Waste Disposal Inc', date: '08/06/2015', project_name: 'Wilmington 47', amount: 1219.55, contact: '-', scheduled_at: '-', estimated_at: '-', cost: null, completed: null, sow: '-', phone_number: '435-986-3452'},
            {company_name: 'Summit County', date: '08/10/2015', project_name: 'Wilmington 47', amount: 729.64, contact: '-', scheduled_at: '-', estimated_at: '-', cost: null, completed: null, sow: '-', phone_number: '385-987-4326'},
            {company_name: 'Ace Rentals', date: '07/29/2015', project_name: 'Wilmington 47', amount: 2500.3, contact: '-', scheduled_at: '-', estimated_at: '-', cost: null, completed: null, sow: '-', phone_number: '873-087-2345'},
            {company_name: 'L&L Steel Erection', date: '07/29/2015', project_name: 'Wilmington 47', amount: 2139.01, contact: 'John Steel', scheduled_at: '9/18/2015', estimated_at: '9/18/2015', cost: 55000, completed: 5, sow: 'Steel Beems', phone_number: '861-518-1636'},
            {company_name: 'Mountain Cabinetry, Inc', date: '07/29/2015', project_name: 'Wilmington 47', amount: 44543.5, contact: 'Skylar Widdison', scheduled_at: '11/1/2015', estimated_at: '11/1/2015', cost: 85000, completed: 0, sow: 'Cabinetry', phone_number: '835-671-8262'},
            {company_name: 'On Top Roofing', date: '08/01/2015', project_name: 'Wilmington 47', amount: 35000, contact: 'Dave Gebo', scheduled_at: '9/12/2015', estimated_at: '9/12/2015', cost: 67500, completed: 70, sow: 'Roof', phone_number: '835-513-6185'},
            {company_name: 'Old Mill Woodworking', date: '08/03/2015', project_name: 'Wilmington 47', amount: 35985, contact: "Bart O'Driscoll", scheduled_at: '9/23/2015', estimated_at: '9/23/2015', cost: 65000, completed: 15, sow: 'Windows', phone_number: '861-358-8818'},
            {company_name: 'Spendlove Plumbing', date: '08/09/2015', project_name: 'Wilmington 47', amount: 23014.84, contact: 'Christine Spendlove', scheduled_at: '9/1/2015', estimated_at: '9/1/2015', cost: 90000, completed: 30, sow: 'Plumbing', phone_number: '861-288-2371'},
            {company_name: 'Premier Heating & Air, Inc.', date: '08/02/2015', project_name: 'Wilmington 47', amount: 14580, contact: 'Dave Musgrove', scheduled_at: '8/25/2015', estimated_at: '8/25/2015', cost: 75000, completed: 4, sow: 'Rough HVAC', phone_number: '861-569-6688'},
            {company_name: 'American First Insurance', date: '07/29/2015', project_name: 'Wilmington 47', amount: 1197, contact: '-', scheduled_at: '-', estimated_at: '-', cost: null, completed: null, sow: '-', phone_number: '801-234-7584'}
        ];
        var minAmount = _.min($scope.payment_applications, 'amount').amount;
        var maxAmount = _.max($scope.payment_applications, 'amount').amount;
        $scope.amountRange = {
            min: minAmount,
            max: maxAmount,
            options: {
                floor: minAmount,
                ceil: maxAmount,
                translate: function (value) {
                    return $filter('currency')(value, '$', 0);
                }
            }
        };

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
        $scope.numberToCurrency = function(val) {
            if (val == null)
                return '-';
            else
                return $filter('currency')(val);
        }
    }]);
