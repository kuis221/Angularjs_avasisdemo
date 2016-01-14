app.controller('BankDrawShowCtrl',
    ['$scope', function ($scope) {
        $scope.currentStep = 'summary';
        $scope.steps = [{
            state: 'summary',
            name: 'Summary of Draw Submitted'
        },
        {
            state: 'payment-application',
            name: 'Payment Applications & Invoice'
        },
        {
            state: 'compliance',
            name: 'Compliance'
        },
        {
            state: 'payment-details',
            name: 'Payment Details'
        },
        {
            state: 'draw-details',
            name: 'Draw Details'
        }];

        $scope.percentChartData = [
            {
                value: 75,
                color: "#3aabd5",
                text: ''
            },
            {
                value: 50,
                color: "#79c485",
                text: ''
            }
        ];

        $scope.comments = [
            {
                avatar: 'bruce.jpg',
                author: 'Bruce Wayne',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'jeff.jpg',
                author: 'Jeff Price',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'peters.jpg',
                author: 'Christian Peters',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'jane.jpg',
                author: 'Jane Smith',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'dan.jpg',
                author: 'Dan Bonker',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'bruce.jpg',
                author: 'Bruce Wayne',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'jeff.jpg',
                author: 'Jeff Price',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'peters.jpg',
                author: 'Christian Peters',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'jane.jpg',
                author: 'Jane Smith',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }, {
                avatar: 'dan.jpg',
                author: 'Dan Bonker',
                date: 'May 20, 2015 - 3:40pm',
                desc: 'This is a comment.  I appologize for the delayed response. My team and I have been slammed trying to complete the Roof Dry-In proccess by the set deadline.'
            }
        ];

        $scope.goStep = function(step) {
            $scope.currentStep = step;
        }
        getStepIndex = function(step) {
            return _.findIndex($scope.steps, function(e) { return step == e.state; });
        }

        $scope.$watch('currentStep', function(newVal, oldVal) {
            var index = getStepIndex($scope.currentStep);

            // reset states
            _.each($scope.steps, function(e) {
                e.active = false;
                e.clickable = false;
            })

            // set current state as active
            $scope.steps[index].active = true;

            // set past stats as clickable
            for (var i = 0; i <= index; i++) {
                $scope.steps[i].clickable = true;
            }
        });

        $scope.compliances = [
            {contact: 'Bruce Wayne', avatar: 'assets/img/bruce-wayne.png', company_name: 'Synergy Construction', contract_type: 'General Contractor', project_name: 'Wilmington 47', phone_number: '801-580-5683', credit_date: '08/01/2015', insurance_date: '01/31/2016', license_date: '06/15/2018', judgement_date: '08/01/2015', background_check_date: '08/01/2015', status: 'Complaint'},
            {contact: 'John Steel', avatar: 'assets/img/users/john.jpg', company_name: 'L&L Steel Erection', contract_type: 'Subcontractor', project_name: 'Wilmington 47', phone_number: '861-518-1636', credit_date: '08/01/2015', insurance_date: '06/15/2015', license_date: '01/31/2018', judgement_date: '08/01/2015', background_check_date: '08/01/2015', status: 'Non Complaint'},
            {contact: 'Skylar Widdison', avatar: 'assets/img/users/mary.jpg', company_name: 'Mountain Cabinetry, Inc', contract_type: 'Subcontractor', project_name: 'Wilmington 47', phone_number: '835-671-8262', credit_date: '08/01/2015', insurance_date: '01/31/2016', license_date: '03/05/2016', judgement_date: '08/01/2015', background_check_date: '08/01/2015', status: 'Complaint'},
            {contact: 'Dave Gebo', avatar: 'assets/img/users/dave_gebo.jpg', company_name: 'On Top Roofing', contract_type: 'Subcontractor', project_name: 'Wilmington 47', phone_number: '835-513-6185', credit_date: '08/01/2015', insurance_date: '03/05/2016', license_date: '09/30/2016', judgement_date: '08/01/2015', background_check_date: '08/01/2015', status: 'Complaint'},
            {contact: "Bart O'Driscoll", avatar: 'assets/img/users/dan.jpg', company_name: 'Old Mill Woodworking', contract_type: 'Subcontractor', project_name: 'Wilmington 47', phone_number: '861-358-8818', credit_date: '08/01/2015', insurance_date: '09/30/2016', license_date: '03/05/2016', judgement_date: '08/01/2015', background_check_date: '08/01/2015', status: 'Complaint'},
            {contact: 'Christine Spendlove', avatar: 'assets/img/users/mike.jpg', company_name: 'Spendlove Plumbing', contract_type: 'Subcontractor', project_name: 'Wilmington 47', phone_number: '861-288-2371', credit_date: '08/01/2015', insurance_date: '02/15/2016', license_date: '01/31/2019', judgement_date: '08/01/2015', background_check_date: '08/01/2015', status: 'Complaint'},
            {contact: 'Dave Musgrove', avatar: 'assets/img/users/dave.jpg', company_name: 'Premier Heating & Air, Inc.', contract_type: 'Subcontractor', project_name: 'Wilmington 47', phone_number: '861-569-6688', credit_date: '08/01/2015', insurance_date: '01/31/2016', license_date: '02/15/2016', judgement_date: '08/01/2015', background_check_date: '08/01/2015', status: 'Complaint'}
        ];

        $scope.convertDate = function(dt) {
            return moment(dt).format('MMM DD, YYYY');
        }
    }]);
