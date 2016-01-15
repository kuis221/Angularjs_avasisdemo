app.controller('FinancialsBudgetCtrl',
    ['$scope', '$state', '$timeout', '$uibModal', function ($scope, $state, $timeout, $uibModal) {

        $scope.$parent.setCurrentTab($state.current.name);

        $scope.budgets = [{
            id: _.uniqueId(),
            name: 'General Requirements',
            division: 'DIVISION1',
            labor: 1000000,
            materials: 75000,
            equipment: 11750,
            misc: 2350,
            total: 131600,
            items: '',
            status: '',
            cpsf: 25.31,
            percent_of_project: 8,
            children: [{
                id: _.uniqueId(),
                name: '12345 - Brick',
                labor: 250000,
                materials: 15000,
                equipment: 6150,
                misc: 80350,
                total: 2331600,

                status: '',
                cpsf: 25.31,
                percent_of_project: 8,
                children: [{
                    id: _.uniqueId(),
                    name: 'Exterior Brick',
                    labor: 20000,
                    materials: 22000,
                    equipment: 450,
                    misc: 12350,
                    total: 5987,

                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8,
                    depth: 3,
                    children: [{
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'estimate',
                        status: ''
                    },
                    {
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'contract',
                        status: ''
                    },
                    {
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'purchase order',
                        status: ''
                    },{
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'change order',
                        status: ''
                    }]
                },
                {
                    id: _.uniqueId(),
                    name: 'Interior Brick',
                    labor: 20000,
                    materials: 22000,
                    equipment: 450,
                    misc: 12350,
                    total: 5987,

                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8,
                    depth: 3,
                    children: [{
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'estimate',
                        status: ''
                    },
                    {
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'contract',
                        status: ''
                    },
                    {
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'purchase order',
                        status: ''
                    },{
                        id: _.uniqueId(),
                        labor: 123,
                        materials: 456,
                        equipment: 450,
                        misc: 12350,
                        total: 5987,
                        items: 'change order',
                        status: ''
                    }]
                }]
            },
            {
                id: _.uniqueId(),
                name: '12345 - Brick',
                labor: 250000,
                materials: 15000,
                equipment: 6150,
                misc: 80350,
                total: 2331600,
                status: '',
                cpsf: 25.31,
                percent_of_project: 8,
                children: [{
                    id: _.uniqueId(),
                    name: 'Exterior Brick',
                    labor: 20000,
                    materials: 22000,
                    equipment: 450,
                    misc: 12350,
                    total: 5987,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                },
                {
                    id: _.uniqueId(),
                    name: 'Interior Brick',
                    labor: 50000,
                    materials: 7000,
                    equipment: 129,
                    misc: 12350,
                    total: 987654,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                }]
            }]
        },
        {
            id: _.uniqueId(),
            name: 'Site Construction',
            division: 'DIVISION2',
            labor: 1000000,
            materials: 75000,
            equipment: 11750,
            misc: 2350,
            total: 131600,
            items: '',
            status: '',
            cpsf: 25.31,
            percent_of_project: 8,
            children: [{
                id: _.uniqueId(),
                name: '12345 - Brick',
                labor: 250000,
                materials: 15000,
                equipment: 6150,
                misc: 80350,
                total: 2331600,
                status: '',
                cpsf: 25.31,
                percent_of_project: 8,
                children: [{
                    id: _.uniqueId(),
                    name: 'Exterior Brick',
                    labor: 20000,
                    materials: 22000,
                    equipment: 450,
                    misc: 12350,
                    total: 5987,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                },
                {
                    id: _.uniqueId(),
                    name: 'Interior Brick',
                    labor: 50000,
                    materials: 7000,
                    equipment: 129,
                    misc: 12350,
                    total: 987654,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                }]
            },
            {
                id: _.uniqueId(),
                name: '12345 - Brick',
                labor: 250000,
                materials: 15000,
                equipment: 6150,
                misc: 80350,
                total: 2331600,
                status: '',
                cpsf: 25.31,
                percent_of_project: 8,
                children: [{
                    id: _.uniqueId(),
                    name: 'Exterior Brick',
                    labor: 20000,
                    materials: 22000,
                    equipment: 450,
                    misc: 12350,
                    total: 5987,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                },
                {
                    id: _.uniqueId(),
                    name: 'Interior Brick',
                    labor: 50000,
                    materials: 7000,
                    equipment: 129,
                    misc: 12350,
                    total: 987654,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                }]
            }]
        },
        {
            id: _.uniqueId(),
            name: 'Concrete',
            division: 'DIVISION3',
            labor: 1000000,
            materials: 75000,
            equipment: 11750,
            misc: 2350,
            total: 131600,
            items: '',
            status: '',
            cpsf: 25.31,
            percent_of_project: 8,
            children: [{
                id: _.uniqueId(),
                name: '12345 - Brick',
                labor: 250000,
                materials: 15000,
                equipment: 6150,
                misc: 80350,
                total: 2331600,
                status: '',
                cpsf: 25.31,
                percent_of_project: 8,
                children: [{
                    id: _.uniqueId(),
                    name: 'Exterior Brick',
                    labor: 20000,
                    materials: 22000,
                    equipment: 450,
                    misc: 12350,
                    total: 5987,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                },
                {
                    id: _.uniqueId(),
                    name: 'Interior Brick',
                    labor: 50000,
                    materials: 7000,
                    equipment: 129,
                    misc: 12350,
                    total: 987654,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                }]
            },
            {
                id: _.uniqueId(),
                name: '12345 - Brick',
                labor: 250000,
                materials: 15000,
                equipment: 6150,
                misc: 80350,
                total: 2331600,
                status: '',
                cpsf: 25.31,
                percent_of_project: 8,
                children: [{
                    id: _.uniqueId(),
                    name: 'Exterior Brick',
                    labor: 20000,
                    materials: 22000,
                    equipment: 450,
                    misc: 12350,
                    total: 5987,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                },
                {
                    id: _.uniqueId(),
                    name: 'Interior Brick',
                    labor: 50000,
                    materials: 7000,
                    equipment: 129,
                    misc: 12350,
                    total: 987654,
                    status: '',
                    cpsf: 13.46,
                    percent_of_project: 8
                }]
            }]
        }];

        $scope.showBudgetAdditionModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'budget-addition-modal.html',
                controller: 'BudgetAdditionModalCtrl',
                windowClass: 'buget-addition-modal'
            });

            modalInstance.result.then(function(result) {

            }, function() {

            });
        };

    }]);

app.controller('BudgetAdditionModalCtrl',
    ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {

        $scope.divisions = [
            {id: _.uniqueId(), name: 'Lorem Ipsum - 03124'}
        ];

        $scope.costCodes = [
            {id: _.uniqueId(), name: '01234'}
        ];

        $scope.sows = [
            {id: _.uniqueId(), name: 'Purus Egestas Ligula'}
        ];

        $scope.$watchGroup(['labor', 'materials', 'equipment', 'misc'], function(n, o, scope) {
            $scope.total = _.sum(n);
        });

        $scope.labor = $scope.materials = $scope.equipment = $scope.misc = 1234456;


        $scope.ok = function() {
            $uibModalInstance.close();
        }

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        }
    }]);
