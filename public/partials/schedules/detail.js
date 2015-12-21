app.controller('ScheduleDetailCtrl',
    ['$scope', '$stateParams', '$uibModal', function($scope, $stateParams, $uibModal) {
        $scope.sowData = [
            {
                value: 60,
                color: "#79c485",
                text: "60%",
                font: '18px AvenirNextLTPro-Regular'
            },
        ];

        $scope.fundData = [
            {
                value: 40,
                color: "#3aabd5",
                text: "40%",
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
                }
            }
        };
        // define schedules to search by params[:id]
        $scope.schedules = [];
        $scope.schedule = _.find($scope.schedules, function(e){ return e.id == $stateParams.id; });

        $scope.showHistory = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/schedules/details/schedule-history-modal.html',
                size: 'xl'
            });
        }
        $scope.addProcess = function() {
            var modalInstance = $uibModal.open({
                controller: 'AddProcessModalCtrl',
                templateUrl: 'partials/schedules/details/add-process-modal.html',
                size: 'lg'
            });
        }
        $scope.addSuccessor = function() {
            var modalInstance = $uibModal.open({
                controller: 'AddSuccessorModalCtrl',
                templateUrl: 'partials/schedules/details/add-successor-modal.html',
                resolve: {
                    title: function() {
                        return 'Add Successor'
                    }
                },
                size: 'lg'
            });
        }
        $scope.addPredecessor = function() {
            var modalInstance = $uibModal.open({
                controller: 'AddSuccessorModalCtrl',
                templateUrl: 'partials/schedules/details/add-successor-modal.html',
                resolve: {
                    title: function() {
                        return 'Add Predecessor'
                    }
                },
                size: 'lg'
            });
        }
    }]);