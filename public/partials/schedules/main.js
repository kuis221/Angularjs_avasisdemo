'use strict';

app.controller('SchedulesCtrl',
    ['$scope', '$uibModal', function($scope, $uibModal) {
        $scope.pieOptions = {
            type: 'pie',
            height: '80px',
            offset: -90,
            sliceColors: ['#3aabd5', '#f1f1f1', '#f6b875'],
            disableTooltips: true
        };
        $scope.calendarScope = 'week';
        $scope.today = moment().startOf('day');
        $scope.weekTitles = [];
        $scope.daysInRange = [];
        $scope.offset = 0;
        $scope.schedules = [{

        }];

        function getWeekTitle(offset) {
            offset = $scope.offset + offset;
            if (offset == 0)
                return 'THIS WEEK';
            else if (offset == 1)
                return 'NEXT WEEK';
            else if (offset == -1)
                return 'PREV WEEK';
            else if (offset < 0)
                return -offset + ' WEEKS AGO';
            else
                return offset + ' WEEKS OUT'
        }
        function resetOffsetRange() {
            if ($scope.calendarScope == 'day') {
                $scope.startDate = moment().startOf('day').add($scope.offset * 3, 'd');
                $scope.endDate = moment().startOf('day').add($scope.offset * 3 + 2, 'd');
            }
            else if ($scope.calendarScope == 'week') {
                $scope.startDate = moment().startOf('week').add($scope.offset, 'w');
                $scope.endDate = moment().startOf('week').add($scope.offset + 2, 'w').endOf('week');

                $scope.weekTitles = [];
                _.each([0, 1, 2], function(i){ $scope.weekTitles.push(getWeekTitle(i)); });
                
                $scope.daysInRange = [];
                var startDate;
                for (var i = 0; i < 20; i ++) {
                    startDate = angular.copy($scope.startDate);
                    $scope.daysInRange.push(startDate.add(i, 'd').format('ddd, MMM DD'));
                }
            }
        }

        $scope.plusOffset = function() {
            $scope.offset = $scope.offset + 3;
            resetOffsetRange();
        }
        $scope.minusOffset = function() {
            $scope.offset = $scope.offset - 3;
            resetOffsetRange();
        }
        $scope.getOffsetDate = function(offset) {
            var offseDate = $scope.startDate.add(offset, 'd').format('ddd, MMM DD')
            return offseDate;
        }
        $scope.changeCalendarScope = function(scope) {
            $scope.calendarScope = scope;
            $scope.offset = 0;
            resetOffsetRange();
        }
        resetOffsetRange();
    }]
);