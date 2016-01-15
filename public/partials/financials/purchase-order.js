app.controller('PurchaseOrderCtrl' ,
    ['$scope', '$state', '$stateParams', '$timeout', function ($scope, $state, $stateParams, $timeout) {
        $scope.$parent.setCurrentTab($state.current.name);
        $scope.sowData = [
            {
                value: 60,
                color: "#79c485",
                text: "60%",
                font: '18px AvenirNextLTPro-Regular'
            }
        ];

        /**
         * Data for Doughnut chart
         */
        $scope.mineData = [
            {
                value: 11,
                color: "#79c485"
            },
            {
                value: 8,
                color: "#f8ac59"
            }
        ];

        /**
         * Options for Doughnut chart
         */
        $scope.mineOptions = {
            segmentShowStroke : false,
            percentageInnerCutout : 70, // This is 0 for Pie charts
            animationSteps : 100,
            animationEasing : "easeOutBounce",
            animateRotate : true,
            animateScale : false,
            showTooltips: false

        };

        $scope.applies = {
            listRequiredByMe: [
                {flag: 'red', title: 'Windows', type: "Wilmington 47", due_date: '7/18/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Martin Doors', company: ''}, sow: ['Windows'].join(", "), amount: 48972.82, status: ['pending approval', 0]}
            ],
            listRequiredByOthers: [
                {flag: 'green', title: 'Skylights', type: "Wilmington 47", due_date: '2/15/2015', responsible: {name: 'Beth Wiseman', company: ''},initiator: {name: 'Martin Doors', company: ''}, sow: ['Interia Windows'].join(', '), amount: 26000.00, status: ['approved awaiting payment', 0.2]},
                {flag: 'green', title: 'Inside Lights', type: "Wilmington 47",due_date: '6/30/2015', responsible: {name: 'Beth Wiseman', company: ''},initiator: {name: 'Canyon River Electric', company: ''}, sow: ['Inside Lighting  '].join(', '), amount: 22500.08, status: ['approved awaiting payment', 0]},
                {flag: 'green', title: 'Inside Lights', type: "Wilmington 47",due_date: '6/30/2015', responsible: {name: 'Beth Wiseman', company: ''},initiator: {name: 'Canyon River Electric', company: ''}, sow: ['Exterior Lighting  '].join(', '), amount: 4500.87, status: ['approved awaiting payment', 0]}
            ],
            listDrafts: [
            ],
            listCompleted: [
                {flag: 'completed', title: 'Metal Handrails', type: "Wilmington 47", due_date: '5/12/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Ornamental Metal', company: ''}, sow: ['Stairs'].join(', '), amount: 1800.00, status: ['Final', 1]},
                {flag: 'completed', title: 'Planer Rental', type: "Wilmington 47", due_date: '2/18/2015', responsible: {name: 'Dan Bonker', company: ''},initiator: {name: 'Ace Rental', company: ''}, sow: ['Framing'].join(', '), amount: 2128.12, status: ['Final', 1]},
                {flag: 'completed', title: 'Interia Doors', type: "Wilmington 47", due_date: '5/18/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Martin Doors', company: ''}, sow: ['Interia Doors'].join(', '), amount: 87533, status: ['Final', 1]},
                {flag: 'completed', title: 'Tile Boards', type: "Wilmington 47", due_date: '5/18/2015', responsible: {name: 'Bruce Wayne', company: ''},initiator: {name: 'Home Builders Supply', company: ''}, sow: ['Kitchen Tile'].join(', '), amount: 13000.00, status: ['Final', 1]},
                {flag: 'completed', title: 'Fireplaces', type: "Wilmington 47", due_date: '3/18/2015', responsible: {name: 'Dave Musgrove', company: ''},initiator: {name: 'Premier Heating & Air', company: ''}, sow: ['Living Room Fireplace','Master Bedroom Fireplace'].join(', '), amount: 22513.57, status: ['Final', 1]},
                {flag: 'completed', title: 'Toilets', type: "Wilmington 47", due_date: '5/18/2015', responsible: {name: 'Christian Peters', company: ''},initiator: {name: 'MyTy Appliance Specialists', company: ''}, sow: ['Toilets'].join(', '), amount: 8000.00, status: ['Final', 1]}
            ]
        };

    }]);
