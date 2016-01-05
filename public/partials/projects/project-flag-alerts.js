/**
* Created by Anton on 12/12/2015
*/

app.controller('ProjectFlagAlertsCtrl',
	['$scope', '$state', '$uibModal', '$timeout', '$stateParams', function($scope, $state, $uibModal, $timeout, $stateParams){

		//Flag Alerts
		$scope.pieOptions = {
            type: 'pie',
            height: '50px',
            offset: -90,
            sliceColors: ['#79c485', '#eeeeee'],
            disableTooltips: true
        };
        // available bucket value are "team-member" and "flag-status"
        $scope.bucket = ($stateParams.bucket != null ? $stateParams.bucket : "team-member");
        // available filters value are "type", "member" and "range"
        $scope.filter = ($stateParams.filter != null ? $stateParams.filter : "type");

        $scope.startDate = new Date(2015, 7, 23);
        $scope.endDate = new Date(2015, 11, 23);
        $scope.isShowStartDatePicker = false;
        $scope.isShowEndDatePicker = false;

		$scope.flagAlerts = {
			total: 419,
			green: 171,
			orange: 155,
			red: 92,
			completed: 140,
			assignedMe: {
                green: {
                    total: 61,
                    done: 0
                },
                orange: {
                    total: 49,
                    done: 0,
                },
                red: {
                    total: 33,
                    done: 0
                }
            },
		};

        $timeout(function(){
            $scope.flagAlerts.assignedMe.green.done = 40;
            $scope.flagAlerts.assignedMe.orange.done = 21;
            $scope.flagAlerts.assignedMe.red.done = 28;
        }, 500);

        $scope.highPriority = [
            {
                month: 'Aug',
                day: 23,
                ticket: 'SOW#908',
                category: 'Task',
                title: 'Measure and Mark the Wall',
                name: 'Bob Jones',
                avatar: "assets/img/1.png"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'RFI#145',
                category: 'RFI',
                title: 'Measure and Mark the Wall',
                name: 'Eric Hoffman',
                avatar: "assets/img/2.png"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'BID#725',
                category: 'Payment Application',
                title: 'Measure and Mark the Wall',
                name: 'David Hunter',
                avatar: "assets/img/3.png"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'SOW#908',
                category: 'Task',
                title: 'Measure and Mark the Wall',
                name: 'Sam Kovac',
                avatar: "assets/img/4.png"
            },
            {
                month: 'Aug',
                day: 23,
                ticket: 'RFI#145',
                category: 'RFI',
                title: 'Measure and Mark the Wall',
                name: 'Mike Meyer',
                avatar: "assets/img/1.png"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'BID#725',
                category: 'Payment Application',
                title: 'Measure and Mark the Wall',
                name: 'Eric Hoffman',
                avatar: "assets/img/2.png"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'BID#725',
                category: 'Payment Application',
                title: 'Measure and Mark the Wall',
                name: 'Bob Jones',
                avatar: "assets/img/3.png"
            }
        ];
        $scope.mediumPriority = [
            {
                month: 'Aug',
                day: 23,
                ticket: 'SOW#908',
                category: 'Task',
                title: 'Measure and Mark the Wall',
                name: 'Bob Jones',
                avatar: "assets/img/1.png"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'RFI#145',
                category: 'RFI',
                title: 'Measure and Mark the Wall',
                name: 'Eric Hoffman',
                avatar: "assets/img/2.png"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'BID#725',
                category: 'Payment Application',
                title: 'Measure and Mark the Wall',
                name: 'David Hunter',
                avatar: "assets/img/3.png"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'SOW#908',
                category: 'Task',
                title: 'Measure and Mark the Wall',
                name: 'Sam Kovac',
                avatar: "assets/img/4.png"
            },
            {
                month: 'Aug',
                day: 23,
                ticket: 'RFI#145',
                category: 'RFI',
                title: 'Measure and Mark the Wall',
                name: 'Mike Meyer',
                avatar: "assets/img/1.png"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'BID#725',
                category: 'Payment Application',
                title: 'Measure and Mark the Wall',
                name: 'Eric Hoffman',
                avatar: "assets/img/2.png"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'BID#725',
                category: 'Payment Application',
                title: 'Measure and Mark the Wall',
                name: 'Bob Jones',
                avatar: "assets/img/3.png"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'RFI#145',
                category: 'RFI',
                title: 'Measure and Mark the Wall',
                name: 'Eric Hoffman',
                avatar: "assets/img/4.png"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'BID#725',
                category: 'Payment Application',
                title: 'Measure and Mark the Wall',
                name: 'David Hunter',
                avatar: "assets/img/1.png"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'SOW#908',
                category: 'Task',
                title: 'Measure and Mark the Wall',
                name: 'Sam Kovac',
                avatar: "assets/img/2.png"
            }
        ];
        $scope.lowPriority = [
            {
                month: 'Aug',
                day: 23,
                ticket: 'SOW#908',
                category: 'Task',
                title: 'Measure and Mark the Wall',
                name: 'Bob Jones',
                avatar: "assets/img/1.png"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'RFI#145',
                category: 'RFI',
                title: 'Measure and Mark the Wall',
                name: 'Eric Hoffman',
                avatar: "assets/img/2.png"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'BID#725',
                category: 'Payment Application',
                title: 'Measure and Mark the Wall',
                name: 'David Hunter',
                avatar: "assets/img/3.png"
            }
        ];

		$scope.round = function(val) {
            return Math.round(val);
        };

	}]);
