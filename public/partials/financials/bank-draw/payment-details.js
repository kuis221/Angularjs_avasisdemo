app.controller('BankDrawPaymentDetailsCtrl',
    ['$scope', '$state', function ($scope, $state) {
        $scope.$parent.setCurrentStep($state.current.name);

        $scope.payment_details = [
            {contact: 'Bruce Wayne', avatar: 'assets/img/bruce-wayne.png', company_name: 'Synergy Construction', phone_number: '801-580-5683', role: 'General Contractor', project_name: 'Wilmington 47', payment_application: 20358, split_payment: 'No', payment_amount: 20358, company_name: 'Synergy Construction', payment_form: 'Check', varience: 0},
            {contact: 'John Steel', avatar: 'assets/img/users/john.jpg', company_name: 'L&L Steel Erection ', phone_number: '861-518-1636', role: 'Subcontractor', project_name: 'Wilmington 47', payment_application: 2139.01, split_payment: 'No', payment_amount: 2139.01, company_name: 'Steel Supplier Inc', payment_form: 'Check', varience: 0, description: 'Check written directly to Supplier until Insurance is corrected.'},
            {contact: 'Skylar Widdison', company_name: 'Mountain Cabinetry, Inc', phone_number: '835-671-8262', role: 'Subcontractor', project_name: 'Wilmington 47', payment_application: 44543.5, split_payment: 'No', payment_amount: 44543.5, company_name: 'Mountain Cabinetry, Inc', payment_form: 'Check', varience: 0},
            {contact: 'Dave Gebo', avatar: 'assets/img/users/dave_gebo.jpg', company_name: 'On Top Roofing', phone_number: '835-513-6185', role: 'Subcontractor', project_name: 'Wilmington 47', payment_application: 35000, split_payment: 'No', payment_amount: 35000, company_name: 'On Top Roofing', payment_form: 'Check', varience: 0},
            {contact: "Bart O'Driscoll", company_name: 'Old Mill Woodworking', phone_number: '861-358-8818', role: 'Subcontractor', project_name: 'Wilmington 47', payment_application: 35985, split_payment: 'No', payment_amount: 35985, company_name: 'Old Mill Woodworking', payment_form: 'Check', varience: 0},
            {contact: 'Christine Spendlove', company_name: 'Spendlove Plumbing', phone_number: '861-288-2371', role: 'Subcontractor', project_name: 'Wilmington 47', payment_application: 23014.84, split_payment: 'No', payment_amount: 23014.84, company_name: 'Spendlove Plumbing', payment_form: 'Check', varience: 0},
            {contact: 'Dave Musgrove', avatar: 'assets/img/users/dave.jpg', company_name: 'Premier Heating & Air, Inc.', phone_number: '861-569-6688', role: 'Subcontractor', project_name: 'Wilmington 47', payment_application: 14580, split_payment: 'No', payment_amount: 14580, company_name: 'Premier Heating & Air, Inc.', payment_form: 'Check', varience: 0},
            {contact: 'Waste Disposal', company_name: '356-345-5948', phone_number: '', role: '-', project_name: 'Wilmington 47', payment_application: 1219.55, split_payment: 'No', payment_amount: 1219.55, company_name: '356-345-5948', payment_form: 'Check', varience: 0},
            {contact: 'Summit County', company_name: '801-455-8394', phone_number: '', role: '-', project_name: 'Wilmington 47', payment_application: 729.64, split_payment: 'No', payment_amount: 729.64, company_name: '801-455-8394', payment_form: 'Check', varience: 0},
            {contact: 'Ace Rentals', company_name: '385-394-9455', phone_number: '', role: '-', project_name: 'Wilmington 47', payment_application: 2500.3, split_payment: 'No', payment_amount: 2500.3, company_name: '385-394-9455', payment_form: 'Check', varience: 0},
            {contact: 'American First Insurance', company_name: '801-234-7584', phone_number: '', role: '-', project_name: 'Wilmington 47', payment_application: 1197, split_payment: 'No', payment_amount: 1197, company_name: '801-234-7584', payment_form: 'Check', varience: 0},
        ];

        $scope.total_payment_application = _.sum($scope.payment_details, function(e){ return e.payment_application; });
        $scope.total_payment_amount = _.sum($scope.payment_details, function(e){ return e.payment_amount; });
        $scope.total_varience = _.sum($scope.payment_details, function(e){ return e.varience; });
    }]);
