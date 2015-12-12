'use strict';

app.controller('SchedulesCtrl',
    ['$scope', '$uibModal', function($scope, $uibModal) {
        $scope.pieOptions = {
            type: 'pie',
            height: '100px',
            offset: -90,
            sliceColors: ['#3aabd5', '#f1f1f1', '#f6b875'],
            disableTooltips: true
        };
    }]
);