app.controller('BankDrawShowCtrl',
    ['$scope', '$filter', function ($scope, $filter) {
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

        $scope.statusOptions = [{
            id: 'approved',
            name: 'Approve'
        },
        {
            id: 'rejected',
            name: 'Reject'
        }];

        $scope.paymentApplications = [
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

        $scope.numberToCurrency = function(val) {
            if (val == null)
                return '-';
            else
                return $filter('currency')(val);
        }

        $scope.drawDetails = [
            {description: "Plans", scheduled_value: 1000.00, reallocations: 1272.85, updated_budget: 2272.85, disbursed_to_date: 2272.85, this_draw: null, percentage_of_drawn: 1.00, balance_to_complete: 0.00},
            {description: "Engineering", scheduled_value: 800.00, reallocations: 57.50, updated_budget: 857.50, disbursed_to_date: 857.50, this_draw: null, percentage_of_drawn: 1.00, balance_to_complete: 0.00},
            {description: "Project Manager", scheduled_value: 30000.00, reallocations: null, updated_budget: 30000.00, disbursed_to_date: 15000.00, this_draw: 2500.00, percentage_of_drawn: 0.58, balance_to_complete: 12500.00},
            {description: "Superintendent", scheduled_value: 60000.00, reallocations: null, updated_budget: 60000.00, disbursed_to_date: 30000.00, this_draw: 5000.00, percentage_of_drawn: 0.58, balance_to_complete: 25000.00},
            {description: "General Labor", scheduled_value: 10000.00, reallocations: null, updated_budget: 10000.00, disbursed_to_date: 4000.00, this_draw: 1000.00, percentage_of_drawn: 0.50, balance_to_complete: 5000.00},
            {description: "Waste Disposal", scheduled_value: 8500.00, reallocations: null, updated_budget: 8500.00, disbursed_to_date: 459.91, this_draw: 615.90, percentage_of_drawn: 0.13, balance_to_complete: 7424.19},
            {description: "Temp Sanitary Facility", scheduled_value: 2000.00, reallocations: null, updated_budget: 2000.00, disbursed_to_date: 1135.82, this_draw: 603.65, percentage_of_drawn: 0.87, balance_to_complete: 260.53},
            {description: "TempOffice", scheduled_value: 2000.00, reallocations: null, updated_budget: 2000.00, disbursed_to_date: 1635.55, this_draw: 516.00, percentage_of_drawn: 1.08, balance_to_complete: -151.55},
            {description: "Temp Heat", scheduled_value: 3500.00, reallocations: null, updated_budget: 3500.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 3500.00},
            {description: "Temp Water", scheduled_value: 1000.00, reallocations: null, updated_budget: 1000.00, disbursed_to_date: null, this_draw: 213.64, percentage_of_drawn: 0.21, balance_to_complete: 786.36},
            {description: "Temp Power", scheduled_value: 2000.00, reallocations: null, updated_budget: 2000.00, disbursed_to_date: 64.92, this_draw: null, percentage_of_drawn: 0.03, balance_to_complete: 1935.08},
            {description: "Rental Equipment", scheduled_value: 8500.00, reallocations: null, updated_budget: 8500.00, disbursed_to_date: 8510.23, this_draw: null, percentage_of_drawn: 1.00, balance_to_complete: -10.23},
            {description: "Cold Weather Protection", scheduled_value: 10000.00, reallocations: null, updated_budget: 10000.00, disbursed_to_date: 687.02, this_draw: null, percentage_of_drawn: 0.07, balance_to_complete: 9312.98},
            {description: "Survey / Layout", scheduled_value: 2500.00, reallocations: null, updated_budget: 2500.00, disbursed_to_date: 1320.49, this_draw: null, percentage_of_drawn: 0.53, balance_to_complete: 1179.51},
            {description: "Testing", scheduled_value: 1000.00, reallocations: null, updated_budget: 1000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 1000.00},
            {description: "Small tools", scheduled_value: 1500.00, reallocations: null, updated_budget: 1500.00, disbursed_to_date: null, this_draw: 853.75, percentage_of_drawn: 0.57, balance_to_complete: 646.25},
            {description: "Snow Removal", scheduled_value: 5000.00, reallocations: null, updated_budget: 5000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 5000.00},
            {description: "Final Construction Clean Up", scheduled_value: 10000.00, reallocations: null, updated_budget: 10000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 10000.00},
            {description: "Crane", scheduled_value: 6500.00, reallocations: null, updated_budget: 6500.00, disbursed_to_date: 1492.48, this_draw: 1134.35, percentage_of_drawn: 0.40, balance_to_complete: 3873.17},
            {description: "Material Handling", scheduled_value: 8000.00, reallocations: null, updated_budget: 8000.00, disbursed_to_date: 178.16, this_draw: 99.58, percentage_of_drawn: 0.03, balance_to_complete: 7722.26},
            {description: "Project Materials", scheduled_value: 10000.00, reallocations: null, updated_budget: 10000.00, disbursed_to_date: 278.25, this_draw: 412.62, percentage_of_drawn: 0.07, balance_to_complete: 9309.13},
            {description: "LOD Fence", scheduled_value: 1500.00, reallocations: null, updated_budget: 1500.00, disbursed_to_date: 1500.00, this_draw: null, percentage_of_drawn: 1.00, balance_to_complete: 0.00},
            {description: "Excavation", scheduled_value: 55000.00, reallocations: null, updated_budget: 55000.00, disbursed_to_date: 55000.00, this_draw: null, percentage_of_drawn: 1.00, balance_to_complete: 0.00},
            {description: "Engineered Fill", scheduled_value: 5000.00, reallocations: 10000.00, updated_budget: 15000.00, disbursed_to_date: 13137.00, this_draw: null, percentage_of_drawn: 0.88, balance_to_complete: 1863.00},
            {description: "Import", scheduled_value: 5000.00, reallocations: null, updated_budget: 5000.00, disbursed_to_date: 3197.44, this_draw: null, percentage_of_drawn: 0.64, balance_to_complete: 1802.56},
            {description: "Export", scheduled_value: 10000.00, reallocations: null, updated_budget: 10000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 10000.00},
            {description: "Rock Walls", scheduled_value: 25000.00, reallocations: null, updated_budget: 25000.00, disbursed_to_date: 4462.50, this_draw: null, percentage_of_drawn: 0.18, balance_to_complete: 20537.50},
            {description: "Sewer Vault / Pump", scheduled_value: 17500.00, reallocations: null, updated_budget: 17500.00, disbursed_to_date: 17500.00, this_draw: null, percentage_of_drawn: 1.00, balance_to_complete: 0.00},
            {description: "Landscaping", scheduled_value: 30000.00, reallocations: null, updated_budget: 30000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 30000.00},
            {description: "Footings & Foundation", scheduled_value: 150000.00, reallocations: null, updated_budget: 150000.00, disbursed_to_date: 144165.00, this_draw: null, percentage_of_drawn: 0.96, balance_to_complete: 5835.00},
            {description: "Concrete Flatwork", scheduled_value: 42500.00, reallocations: null, updated_budget: 42500.00, disbursed_to_date: 13642.50, this_draw: null, percentage_of_drawn: 0.32, balance_to_complete: 28857.50},
            {description: "Concrete Pumping", scheduled_value: 5000.00, reallocations: null, updated_budget: 5000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 5000.00},
            {description: "Exterior Stone Veneer", scheduled_value: 165000.00, reallocations: -10000.00, updated_budget: 155000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 155000.00},
            {description: "Structural Steel", scheduled_value: 55000.00, reallocations: null, updated_budget: 55000.00, disbursed_to_date: 52328.99, this_draw: 2139.01, percentage_of_drawn: 0.99, balance_to_complete: 532.00},
            {description: "Decorative Metals", scheduled_value: 5000.00, reallocations: null, updated_budget: 5000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 5000.00},
            {description: "Steel Stairs", scheduled_value: 24000.00, reallocations: -9000.00, updated_budget: 15000.00, disbursed_to_date: 1800.00, this_draw: null, percentage_of_drawn: 0.12, balance_to_complete: 13200.00},
            {description: "Rough Framing Labor", scheduled_value: 96000.00, reallocations: null, updated_budget: 96000.00, disbursed_to_date: 94165.00, this_draw: null, percentage_of_drawn: 0.98, balance_to_complete: 1835.00},
            {description: "Rough Framing Material", scheduled_value: 125000.00, reallocations: null, updated_budget: 125000.00, disbursed_to_date: 125000.00, this_draw: null, percentage_of_drawn: 1.00, balance_to_complete: 0.00},
            {description: "Deck Surface Material", scheduled_value: 20000.00, reallocations: null, updated_budget: 20000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 20000.00},
            {description: "Finish Carpentry", scheduled_value: 35000.00, reallocations: null, updated_budget: 35000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 35000.00},
            {description: "Finish Material", scheduled_value: 15000.00, reallocations: null, updated_budget: 15000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 15000.00},
            {description: "Cabinetry", scheduled_value: 85000.00, reallocations: null, updated_budget: 85000.00, disbursed_to_date: null, this_draw: 44543.50, percentage_of_drawn: 0.52, balance_to_complete: 40456.50},
            {description: "Timber Material", scheduled_value: 12000.00, reallocations: null, updated_budget: 12000.00, disbursed_to_date: 1728.46, this_draw: null, percentage_of_drawn: 0.14, balance_to_complete: 10271.54},
            {description: "Timber Labor", scheduled_value: 5000.00, reallocations: null, updated_budget: 5000.00, disbursed_to_date: 400.00, this_draw: null, percentage_of_drawn: 0.08, balance_to_complete: 4600.00},
            {description: "Wood Valances for Blinds", scheduled_value: 9500.00, reallocations: null, updated_budget: 9500.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 9500.00},
            {description: "Damp-proofing", scheduled_value: 15000.00, reallocations: null, updated_budget: 15000.00, disbursed_to_date: 8040.00, this_draw: null, percentage_of_drawn: 0.54, balance_to_complete: 6960.00},
            {description: "Insulation", scheduled_value: 22000.00, reallocations: null, updated_budget: 22000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 22000.00},
            {description: "Siding Labor", scheduled_value: 30000.00, reallocations: null, updated_budget: 30000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 30000.00},
            {description: "Siding Material", scheduled_value: 40000.00, reallocations: null, updated_budget: 40000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 40000.00},
            {description: "Roofing", scheduled_value: 67500.00, reallocations: null, updated_budget: 67500.00, disbursed_to_date: null, this_draw: 35000.00, percentage_of_drawn: 0.52, balance_to_complete: 32500.00},
            {description: "Gutters & Downspouts", scheduled_value: 3000.00, reallocations: null, updated_budget: 3000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 3000.00},
            {description: "Heat Tape", scheduled_value: 2500.00, reallocations: null, updated_budget: 2500.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 2500.00},
            {description: "Chimney Caps", scheduled_value: 7000.00, reallocations: null, updated_budget: 7000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 7000.00},
            {description: "Entry Door", scheduled_value: 13600.00, reallocations: null, updated_budget: 13600.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 13600.00},
            {description: "Entry door Hardware", scheduled_value: 3000.00, reallocations: null, updated_budget: 3000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 3000.00},
            {description: "Exterior Door Hardware  ", scheduled_value: 3000.00, reallocations: null, updated_budget: 3000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 3000.00},
            {description: "Exterior Door Hardware Install", scheduled_value: 500.00, reallocations: null, updated_budget: 500.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 500.00},
            {description: "Overhead Doors", scheduled_value: 13000.00, reallocations: null, updated_budget: 13000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 13000.00},
            {description: "Windows & Exterior doors", scheduled_value: 65000.00, reallocations: null, updated_budget: 65000.00, disbursed_to_date: 26000.00, this_draw: 35985.00, percentage_of_drawn: 0.95, balance_to_complete: 3015.00},
            {description: "Window & Door Installation", scheduled_value: 10000.00, reallocations: null, updated_budget: 10000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 10000.00},
            {description: "Interior Doors", scheduled_value: 20000.00, reallocations: null, updated_budget: 20000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 20000.00},
            {description: "Interior Door Hardware", scheduled_value: 8500.00, reallocations: null, updated_budget: 8500.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 8500.00},
            {description: "Mirrors", scheduled_value: 4000.00, reallocations: null, updated_budget: 4000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 4000.00},
            {description: "Shower Enclosures", scheduled_value: 22500.00, reallocations: null, updated_budget: 22500.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 22500.00},
            {description: "Drywall", scheduled_value: 55000.00, reallocations: null, updated_budget: 55000.00, disbursed_to_date: 13000.00, this_draw: null, percentage_of_drawn: 0.24, balance_to_complete: 42000.00},
            {description: "Tile / Stone", scheduled_value: 14000.00, reallocations: null, updated_budget: 14000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 14000.00},
            {description: "Tile / Stone Labor", scheduled_value: 17500.00, reallocations: null, updated_budget: 17500.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 17500.00},
            {description: "Tile / Stone Flooring", scheduled_value: 25000.00, reallocations: null, updated_budget: 25000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 25000.00},
            {description: "Tile / Stone Flooring Labor", scheduled_value: 30000.00, reallocations: null, updated_budget: 30000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 30000.00},
            {description: "Wood Flooring", scheduled_value: 30000.00, reallocations: null, updated_budget: 30000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 30000.00},
            {description: "Wood Flooring Labor", scheduled_value: 15000.00, reallocations: null, updated_budget: 15000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 15000.00},
            {description: "Wood Stairs", scheduled_value: 40000.00, reallocations: null, updated_budget: 40000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 40000.00},
            {description: "Carpet", scheduled_value: 25000.00, reallocations: null, updated_budget: 25000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 25000.00},
            {description: "Epoxy Floors", scheduled_value: 5500.00, reallocations: null, updated_budget: 5500.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 5500.00},
            {description: "Interior Paint & Stain", scheduled_value: 75000.00, reallocations: null, updated_budget: 75000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 75000.00},
            {description: "Exterior Paint & Stain", scheduled_value: 5000.00, reallocations: null, updated_budget: 5000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 5000.00},
            {description: "Interior Railings", scheduled_value: 18000.00, reallocations: null, updated_budget: 18000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 18000.00},
            {description: "Exterior Railings", scheduled_value: 17000.00, reallocations: null, updated_budget: 17000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 17000.00},
            {description: "Counter Tops", scheduled_value: 50000.00, reallocations: -5000.00, updated_budget: 45000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 45000.00},
            {description: "Closet Organizers", scheduled_value: 20000.00, reallocations: null, updated_budget: 20000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 20000.00},
            {description: "Toilet & Bath Hardware", scheduled_value: 2500.00, reallocations: null, updated_budget: 2500.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 2500.00},
            {description: "Gas Fireplaces", scheduled_value: 28000.00, reallocations: null, updated_budget: 28000.00, disbursed_to_date: 22512.60, this_draw: null, percentage_of_drawn: 0.80, balance_to_complete: 5487.40},
            {description: "Appliances", scheduled_value: 45000.00, reallocations: null, updated_budget: 45000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 45000.00},
            {description: "Appliances Installation", scheduled_value: 3500.00, reallocations: null, updated_budget: 3500.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 3500.00},
            {description: "Central Vecuum", scheduled_value: 8000.00, reallocations: -8000.00, updated_budget: 0.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 0.00},
            {description: "Blinds, Shades & Shutters", scheduled_value: 50000.00, reallocations: -13990.00, updated_budget: 36010.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 36010.00},
            {description: "Live Roof", scheduled_value: 20000.00, reallocations: -5000.00, updated_budget: 15000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 15000.00},
            {description: "Plumbing Labor", scheduled_value: 55000.00, reallocations: null, updated_budget: 55000.00, disbursed_to_date: 8000.00, this_draw: 8000.00, percentage_of_drawn: 0.29, balance_to_complete: 39000.00},
            {description: "Plumbing Fixtures", scheduled_value: 35000.00, reallocations: null, updated_budget: 35000.00, disbursed_to_date: null, this_draw: 6568.73, percentage_of_drawn: 0.19, balance_to_complete: 28431.27},
            {description: "RO Water System", scheduled_value: 4000.00, reallocations: null, updated_budget: 4000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 4000.00},
            {description: "Roof Drains", scheduled_value: 12000.00, reallocations: null, updated_budget: 12000.00, disbursed_to_date: 10000.00, this_draw: null, percentage_of_drawn: 0.83, balance_to_complete: 2000.00},
            {description: "Fire Protection", scheduled_value: 25000.00, reallocations: -5000.00, updated_budget: 20000.00, disbursed_to_date: 13336.58, this_draw: 4445.53, percentage_of_drawn: 0.89, balance_to_complete: 2217.89},
            {description: "Radiant Heating", scheduled_value: 45000.00, reallocations: null, updated_budget: 45000.00, disbursed_to_date: null, this_draw: 4000.00, percentage_of_drawn: 0.09, balance_to_complete: 41000.00},
            {description: "HVAC", scheduled_value: 85000.00, reallocations: -10000.00, updated_budget: 75000.00, disbursed_to_date: 51030.00, this_draw: 14580.00, percentage_of_drawn: 0.87, balance_to_complete: 9390.00},
            {description: "Electrical", scheduled_value: 70000.00, reallocations: null, updated_budget: 70000.00, disbursed_to_date: 500.00, this_draw: null, percentage_of_drawn: 0.01, balance_to_complete: 69500.00},
            {description: "Light Fixture Package", scheduled_value: 25000.00, reallocations: null, updated_budget: 25000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 25000.00},
            {description: "Security System", scheduled_value: 2500.00, reallocations: null, updated_budget: 2500.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 2500.00},
            {description: "Audio Video", scheduled_value: 70000.00, reallocations: -40000.00, updated_budget: 30000.00, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 30000.00},
            {description: "Insurance", scheduled_value: 6500.00, reallocations: null, updated_budget: 6500.00, disbursed_to_date: 4147.07, this_draw: 1197.00, percentage_of_drawn: 0.82, balance_to_complete: 1155.93},
            {description: "Consulting Fee", scheduled_value: 15000.00, reallocations: null, updated_budget: 15000.00, disbursed_to_date: 14875.00, this_draw: null, percentage_of_drawn: 0.99, balance_to_complete: 125.00},
            {description: "Permits & Fees", scheduled_value: null, reallocations: 29166.38, updated_budget: 29166.38, disbursed_to_date: 29166.38, this_draw: null, percentage_of_drawn: 1.00, balance_to_complete: 0.00},
            {description: "Architecture", scheduled_value: null, reallocations: 50000.00, updated_budget: 50000.00, disbursed_to_date: 34145.93, this_draw: null, percentage_of_drawn: 0.68, balance_to_complete: 15854.07},
            {description: "Builder Fee ", scheduled_value: 182413.00, reallocations: 0.00, updated_budget: 182413.00, disbursed_to_date: 52674.04, this_draw: 11858.58, percentage_of_drawn: 0.35, balance_to_complete: 117880.38},
            {description: "Additional Soft Costs", scheduled_value: null, reallocations: 20000.00, updated_budget: 20000.00, disbursed_to_date: 20000.00, this_draw: null, percentage_of_drawn: 1.00, balance_to_complete: 0.00},
            {description: "Contingency", scheduled_value: 97196.00, reallocations: -4506.73, updated_budget: 92689.27, disbursed_to_date: null, this_draw: null, percentage_of_drawn: 0.00, balance_to_complete: 92689.27}
        ];

        $scope.paymentDetails = [
            {contact: 'Bruce Wayne', avatar: 'assets/img/bruce-wayne.png', company_name: 'Synergy Construction', phone_number: '801-580-5683', role: 'General Contractor', project_name: 'Wilmington 47', approved_amount: 20358, split_payment: 'No', requested_amount: 20358, company_name: 'Synergy Construction', payment_form: 'Check', varience: 0, invoice: 'PO #1023'},
            {contact: 'John Steel', avatar: 'assets/img/users/john.jpg', company_name: 'L&L Steel Erection ', phone_number: '861-518-1636', role: 'Subcontractor', project_name: 'Wilmington 47', approved_amount: 2139.01, split_payment: 'No', requested_amount: 2139.01, company_name: 'Steel Supplier Inc', payment_form: 'Check', varience: 0, description: 'Check written directly to Supplier until Insurance is corrected.', invoice: 'PO #1023'},
            {contact: 'Skylar Widdison', company_name: 'Mountain Cabinetry, Inc', phone_number: '835-671-8262', role: 'Subcontractor', project_name: 'Wilmington 47', approved_amount: 44543.5, split_payment: 'No', requested_amount: 44543.5, company_name: 'Mountain Cabinetry, Inc', payment_form: 'Check', varience: 0, invoice: 'PO #1023'},
            {contact: 'Dave Gebo', avatar: 'assets/img/users/dave_gebo.jpg', company_name: 'On Top Roofing', phone_number: '835-513-6185', role: 'Subcontractor', project_name: 'Wilmington 47', approved_amount: 35000, split_payment: 'No', requested_amount: 35000, company_name: 'On Top Roofing', payment_form: 'Check', varience: 0, invoice: 'PO #1023'},
            {contact: "Bart O'Driscoll", company_name: 'Old Mill Woodworking', phone_number: '861-358-8818', role: 'Subcontractor', project_name: 'Wilmington 47', approved_amount: 35985, split_payment: 'No', requested_amount: 35985, company_name: 'Old Mill Woodworking', payment_form: 'Check', varience: 0, invoice: 'PO #1023'},
            {contact: 'Christine Spendlove', company_name: 'Spendlove Plumbing', phone_number: '861-288-2371', role: 'Subcontractor', project_name: 'Wilmington 47', approved_amount: 23014.84, split_payment: 'No', requested_amount: 23014.84, company_name: 'Spendlove Plumbing', payment_form: 'Check', varience: 0, invoice: 'PO #1023'},
            {contact: 'Dave Musgrove', avatar: 'assets/img/users/dave.jpg', company_name: 'Premier Heating & Air, Inc.', phone_number: '861-569-6688', role: 'Subcontractor', project_name: 'Wilmington 47', approved_amount: 14580, split_payment: 'No', requested_amount: 14580, company_name: 'Premier Heating & Air, Inc.', payment_form: 'Check', varience: 0, invoice: 'PO #1023'},
            {contact: 'Waste Disposal', company_name: '356-345-5948', phone_number: '', role: null, project_name: 'Wilmington 47', approved_amount: 1219.55, split_payment: 'No', requested_amount: 1219.55, company_name: '356-345-5948', payment_form: 'Check', varience: 0, invoice: 'PO #1023'},
            {contact: 'Summit County', company_name: '801-455-8394', phone_number: '', role: null, project_name: 'Wilmington 47', approved_amount: 729.64, split_payment: 'No', requested_amount: 729.64, company_name: '801-455-8394', payment_form: 'Check', varience: 0, invoice: 'PO #1023'},
            {contact: 'Ace Rentals', company_name: '385-394-9455', phone_number: '', role: null, project_name: 'Wilmington 47', approved_amount: 2500.3, split_payment: 'No', requested_amount: 2500.3, company_name: '385-394-9455', payment_form: 'Check', varience: 0, invoice: 'PO #1023'},
            {contact: 'American First Insurance', company_name: '801-234-7584', phone_number: '', role: null, project_name: 'Wilmington 47', approved_amount: 1197, split_payment: 'No', requested_amount: 1197, company_name: '801-234-7584', payment_form: 'Check', varience: 0, invoice: 'PO #1023'},
        ];
        $scope.total_requested_payment_amount = _.sum($scope.paymentDetails, function(e){ return e.requested_amount; });

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
