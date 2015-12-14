app.controller('ScheduleDetailCtrl',
    ['$scope', '$stateParams', function($scope, $stateParams) {
        $scope.sowData = [
            {
                value: 65,
                color: "#79c485",
                text: "65%",
                font: '18px AvenirNextLTPro-Regular'
            },
        ];

        $scope.slider = {
            min: 21,
            max: 80,
            options: {
                floor: 0,
                ceil: 100,
                onChange: function() {
                    console.log('helo');
                }
            }
        };
        // define schedules to search by params[:id]
        $scope.schedules = [{
            id: _.uniqueId(),
            description: "Test schedule 12/4/2015 - 12/13/2015",
            start_date: moment('2015-12-4'),
            end_date: moment('2015-12-13'),
            schedule_type: "primary",
            completion_percentage: 80
        },
        {
            id: _.uniqueId(),
            description: "Test schedule 11/29/2015 - 12/13/2015",
            start_date: moment('2015-11-29'),
            end_date: moment('2015-12-13'),
            schedule_type: "danger",
            completion_percentage: 80
        },
        {
            id: _.uniqueId(),
            description: "Test schedule 12/7/2015 - 12/14/2015",
            start_date: moment('2015-12-7'),
            end_date: moment('2015-12-14'),
            schedule_type: "info",
            completion_percentage: 80
        },
        {
            id: _.uniqueId(),
            description: "Test schedule 11/8/2015 - 11/14/2015",
            start_date: moment('2015-11-8'),
            end_date: moment('2015-11-14'),
            schedule_type: "success",
            completion_percentage: 80
        },
        {
            id: _.uniqueId(),
            description: "Christmas holiday 12/24/2015 - 12/30/2015",
            start_date: moment('2015-12-24'),
            end_date: moment('2015-12-30'),
            schedule_type: "success",
            completion_percentage: 80
        }];
        _.each($scope.schedules, function(e) {
            e.days_of_period = e.end_date.diff(e.start_date, 'd') + 1;
        })

        $scope.schedule = _.find($scope.schedule, function(e){ return e.id == $stateParams.id; });
    }]);