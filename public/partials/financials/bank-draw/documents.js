app.controller('BankDrawDocumentsCtrl',
    ['$scope', '$state', function ($scope, $state) {
        $scope.$parent.setCurrentStep($state.current.name);

        $scope.documents = [
            {name: 'Synergy Construction - Payment Application', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: '-', company_name: 'Synergy Construction'},
            {name: 'Synergy Construction - Invoice', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: '-', company_name: 'Synergy Construction'},
            {name: 'Waste Disposal - Invoice', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: '-', company_name: 'Waste Disposal'},
            {name: 'Summit County - Invoice', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: '-', company_name: 'Summit County'},
            {name: 'Ace Rentals - Invoice', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: '-', company_name: 'Ace Rentals'},
            {name: 'L&L Steel Erection - Payment Application', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: 'Steel Beams', company_name: 'L&L Steel Erection '},
            {name: 'L&L Steel Erection - Invoice', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: 'Steel Beams', company_name: 'L&L Steel Erection '},
            {name: 'L&L Steel Erection - Photo', document_type: 'jpg', project_name: 'Wilmington 47', scope_of_work: 'Steel Beams', company_name: 'L&L Steel Erection '},
            {name: 'Mountain Cabinetry, Inc - Payment Application', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: 'Cabinetry', company_name: 'Mountain Cabinetry, Inc'},
            {name: 'Mountain Cabinetry, Inc - Invoice', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: 'Cabinetry', company_name: 'Mountain Cabinetry, Inc'},
            {name: 'Mountain Cabinetry, Inc - Photo', document_type: 'jpg', project_name: 'Wilmington 47', scope_of_work: 'Cabinetry', company_name: 'Mountain Cabinetry, Inc'},
            {name: 'On Top Roofing - Payment Application', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: 'Roof', company_name: 'On Top Roofing'},
            {name: 'On Top Roofing - Invoice', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: 'Roof', company_name: 'On Top Roofing'},
            {name: 'On Top Roofing - Photo', document_type: 'jpg', project_name: 'Wilmington 47', scope_of_work: 'Roof', company_name: 'On Top Roofing'},
            {name: 'Old Mill Woodworking - Payment Application', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: 'Windows', company_name: 'Old Mill Woodworking'},
            {name: 'Old Mill Woodworking - Invoice', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: 'Windows', company_name: 'Old Mill Woodworking'},
            {name: 'Old Mill Woodworking - Photo', document_type: 'jpg', project_name: 'Wilmington 47', scope_of_work: 'Windows', company_name: 'Old Mill Woodworking'},
            {name: 'Spendlove Plumbing - Payment Application', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: 'Plumbing', company_name: 'Spendlove Plumbing'},
            {name: 'Spendlove Plumbing - Invoice', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: 'Plumbing', company_name: 'Spendlove Plumbing'},
            {name: 'Spendlove Plumbing - Photo', document_type: 'jpg', project_name: 'Wilmington 47', scope_of_work: 'Plumbing', company_name: 'Spendlove Plumbing'},
            {name: 'Premier Heating & Air, Inc. - Payment Application', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: 'Rough HVAC', company_name: 'Premier Heating & Air, Inc.'},
            {name: 'Premier Heating & Air, Inc. - Invoice', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: 'Rough HVAC', company_name: 'Premier Heating & Air, Inc.'},
            {name: 'Premier Heating & Air, Inc. - Photo', document_type: 'jpg', project_name: 'Wilmington 47', scope_of_work: 'Rough HVAC', company_name: 'Premier Heating & Air, Inc.'},
            {name: 'American First Insurance - Invoice', document_type: 'pdf', project_name: 'Wilmington 47', scope_of_work: '-', company_name: 'American First Insurance'}
        ]
    }]);
