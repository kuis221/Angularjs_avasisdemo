app.controller('BankDrawComplianceCtrl',
    ['$scope', '$state', function ($scope, $state) {
        $scope.$parent.setCurrentStep($state.current.name);

        $scope.compliances = [
            {contact: 'Bob Jones', company_name: 'Synergy Construction', contract_type: 'General Contractor', project_name: 'Wilmington 47', phone_number: '801-580-5683', credit_date: '08/01/2015', insurance_date: '01/31/2016', license_date: '06/15/2018', judgement_date: '08/01/2015', background_check_date: '08/01/2015', status: 'Complaint'},
            {contact: 'John Steel', company_name: 'L&L Steel Erection', contract_type: 'Subcontractor', project_name: 'Wilmington 47', phone_number: '861-518-1636', credit_date: '08/01/2015', insurance_date: '06/15/2015', license_date: '01/31/2018', judgement_date: '08/01/2015', background_check_date: '08/01/2015', status: 'Non Complaint'},
            {contact: 'Skylar Widdison', company_name: 'Mountain Cabinetry, Inc', contract_type: 'Subcontractor', project_name: 'Wilmington 47', phone_number: '835-671-8262', credit_date: '08/01/2015', insurance_date: '01/31/2016', license_date: '03/05/2016', judgement_date: '08/01/2015', background_check_date: '08/01/2015', status: 'Complaint'},
            {contact: 'Dave Gebo', company_name: 'On Top Roofing', contract_type: 'Subcontractor', project_name: 'Wilmington 47', phone_number: '835-513-6185', credit_date: '08/01/2015', insurance_date: '03/05/2016', license_date: '09/30/2016', judgement_date: '08/01/2015', background_check_date: '08/01/2015', status: 'Complaint'},
            {contact: "Bart O'Driscoll", company_name: 'Old Mill Woodworking', contract_type: 'Subcontractor', project_name: 'Wilmington 47', phone_number: '861-358-8818', credit_date: '08/01/2015', insurance_date: '09/30/2016', license_date: '03/05/2016', judgement_date: '08/01/2015', background_check_date: '08/01/2015', status: 'Complaint'},
            {contact: 'Christine Spendlove', company_name: 'Spendlove Plumbing', contract_type: 'Subcontractor', project_name: 'Wilmington 47', phone_number: '861-288-2371', credit_date: '08/01/2015', insurance_date: '02/15/2016', license_date: '01/31/2019', judgement_date: '08/01/2015', background_check_date: '08/01/2015', status: 'Complaint'},
            {contact: 'Dave Musgrove', company_name: 'Premier Heating & Air, Inc.', contract_type: 'Subcontractor', project_name: 'Wilmington 47', phone_number: '861-569-6688', credit_date: '08/01/2015', insurance_date: '01/31/2016', license_date: '02/15/2016', judgement_date: '08/01/2015', background_check_date: '08/01/2015', status: 'Complaint'}
        ];

        $scope.convertDate = function(dt) {
            return moment(dt).format('MMM DD, YYYY');
        }
    }]);
