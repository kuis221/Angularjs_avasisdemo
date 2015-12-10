app.controller('BankDrawPaymentApplicationCtrl',
    ['$scope', '$state', function ($scope, $state) {
        $scope.$parent.setCurrentStep($state.current.name);
        $scope.isCheckedAll = false;

        $scope.payment_applications = [
            {company_name: 'Synergy Construction', date: '8/5/2015', project_name: 'Wilmington 47', amount: 20358},
            {company_name: 'Waste Disposal Inc', date: '8/6/2015', project_name: 'Wilmington 47', amount: 1219.55},
            {company_name: 'Summit County', date: '8/10/2015', project_name: 'Wilmington 47', amount: 729.64},
            {company_name: 'Ace Rentals', date: '7/29/2015', project_name: 'Wilmington 47', amount: 2500.3},
            {company_name: 'L&L Steel Erection', date: '7/29/2015', project_name: 'Wilmington 47', amount: 2139.01},
            {company_name: 'Mountain Cabinetry, Inc', date: '7/29/2015', project_name: 'Wilmington 47', amount: 44543.5},
            {company_name: 'On Top Roofing', date: '8/1/2015', project_name: 'Wilmington 47', amount: 35000},
            {company_name: 'Old Mill Woodworking', date: '8/3/2015', project_name: 'Wilmington 47', amount: 35985},
            {company_name: 'Spendlove Plumbing', date: '8/9/2015', project_name: 'Wilmington 47', amount: 23014.84},
            {company_name: 'Premier Heating & Air, Inc.', date: '8/2/2015', project_name: 'Wilmington 47', amount: 14580},
            {company_name: 'American First Insurance', date: '7/29/2015', project_name: 'Wilmington 47', amount: 1197}
        ];
        $scope.checkAll = function() {
            _.each($scope.payment_applications, function(e) { e.checked = $scope.isCheckedAll; });
        }
    }]);
