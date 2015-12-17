app.controller('ScheduleDetailCtrl',
    ['$scope', '$stateParams', '$uibModal', function($scope, $stateParams, $uibModal) {
        $scope.sowData = [
            {
                value: 65,
                color: "#79c485",
                text: "65%",
                font: '18px AvenirNextLTPro-Regular'
            },
        ];

        $scope.slider = {
            min: 10,
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
        $scope.schedules = 
        _.each($scope.schedules, function(e) {
            e.days_of_period = e.end_date.diff(e.start_date, 'd') + 1;
        })

        $scope.schedule = _.find($scope.schedule, function(e){ return e.id == $stateParams.id; });

        $scope.showHistory = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/schedules/details/schedule-history-modal.html',
                size: 'xl'
            });
        }
    }]);