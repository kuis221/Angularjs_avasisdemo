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
            description: 'Title 1',
            start_date: moment().startOf('day').add(3, 'd'),
            end_date: moment().startOf('day').add(6, 'd'),
            days_of_period: 3,
            schedule_type: "primary",
            completion_percentage: 80
        },
        {
            description: 'Title 1',
            start_date: moment().startOf('day').add(10, 'd'),
            end_date: moment().startOf('day').add(16, 'd'),
            days_of_period: 6,
            schedule_type: "danger",
            completion_percentage: 20
        },
        {
            description: 'Title 1',
            start_date: moment().startOf('day').add(-10, 'd'),
            end_date: moment().startOf('day').add(-3, 'd'),
            days_of_period: 8,
            schedule_type: "primary",
            completion_percentage: 80
        },
        {
            description: 'Title 1',
            start_date: moment().startOf('day').add(3, 'd'),
            end_date: moment().startOf('day').add(4, 'd'),
            days_of_period: 2,
            schedule_type: "info",
            completion_percentage: 80
        },
        {
            description: 'Title 1',
            start_date: moment().startOf('day').add(1, 'd'),
            end_date: moment().startOf('day').add(3, 'd'),
            schedule_type: "warning",
            days_of_period: 3,
            completion_percentage: 80
        },
        {
            description: 'Title 1',
            start_date: moment().startOf('day').add(16, 'd'),
            end_date: moment().startOf('day').add(19, 'd'),
            days_of_period: 4,
            schedule_type: "primary",
            completion_percentage: 80
        },
        {
            description: 'Title 1',
            start_date: moment().startOf('day').add(8, 'd'),
            end_date: moment().startOf('day').add(10, 'd'),
            days_of_period: 3,
            schedule_type: "success",
            completion_percentage: 80
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
                return offset + ' WEEKS OUT';
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
                var schedulesInRange = _.filter($scope.schedules, function(e) {
                    return e.start_date.isBetween($scope.startDate, $scope.endDate) || e.end_date.isBetween($scope.startDate, $scope.endDate);
                });
                
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