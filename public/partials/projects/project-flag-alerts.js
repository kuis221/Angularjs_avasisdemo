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
                ticket: 'TSK#1247',
                category: 'Task',
                title: 'Confirm Progress on Fireplace',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'TSK#1234',
                category: 'Task',
                title: 'Need Stairs Ready for Floor Lights',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'RFI#1244',
                category: 'RFI',
                title: 'Garage Cemement Finish',
                name: 'Jane Smith',
                avatar: "assets/img/avasisteam/jane.jpg"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'RFI#1222',
                category: 'RFI',
                title: 'Exposed Roof Section',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Aug',
                day: 23,
                ticket: 'SOW#1008',
                category: 'Scope of Work',
                title: 'Rough Electrical',
                name: 'Mike Riley',
                avatar: "assets/img/avasisteam/mike.jpg"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'PRO#1005',
                category: 'Procurement',
                title: 'Owner to Select Kitchen Cabinets',
                name: 'Jane Smith',
                avatar: "assets/img/avasisteam/jane.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'SOW#1012',
                category: 'Scope of Work',
                title: 'Framing',
                name: 'Dan Bonker',
                avatar: "assets/img/avasisteam/dan.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'TSK#1249',
                category: 'Task',
                title: 'Close Garage Roof',
                name: 'Mike Hunter',
                avatar: "assets/img/avasisteam/mike.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'TSK#1252',
                category: 'Task',
                title: 'Finish Cosing in Roof',
                name: 'Dave Gebo',
                avatar: "assets/img/avasisteam/gebo.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'TSK#1435',
                category: 'Task',
                title: 'Submit Invoice for Additional Lumber',
                name: 'Dave Gebo',
                avatar: "assets/img/avasisteam/gebo.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'TSK#1534',
                category: 'Task',
                title: 'Discuss Ventilation Options',
                name: 'Dave Musgrove',
                avatar: "assets/img/avasisteam/dave.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'PRO#1008',
                category: 'Procurement',
                title: 'Main Floor Fireplace',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'PRO#1018',
                category: 'Procurement',
                title: 'Air Ducts',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'PRO#1210',
                category: 'Procurement',
                title: 'Piping',
                name: 'Beth Wiseman',
                avatar: "assets/img/avasisteam/beth.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'PRO#1150',
                category: 'Procurement',
                title: 'Interior Doors',
                name: 'Jane Smith',
                avatar: "assets/img/avasisteam/jane.jpg"
            }
        ];
        $scope.mediumPriority = [
            {
                month: 'Aug',
                day: 23,
                ticket: 'TSK#1322',
                category: 'Task',
                title: 'Decision on Ventilation',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'TSK#1123',
                category: 'Task',
                title: 'Electrical Overview',
                name: 'Mike Riley',
                avatar: "assets/img/avasisteam/mike.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'TSK#1776',
                category: 'Task',
                title: 'Confirm Completion of Dry-In',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'TSK#1987',
                category: 'Task',
                title: 'Contact Inspector to Set Up 4-Way',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Aug',
                day: 23,
                ticket: 'TSK#1787',
                category: 'Task',
                title: 'Install Fireplace',
                name: 'Dave Musgrove',
                avatar: "assets/img/avasisteam/dave.jpg"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'TSK#2112',
                category: 'Task',
                title: 'Walk-Through w/Designer',
                name: 'Mike Riley',
                avatar: "assets/img/avasisteam/mike.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'TSK#1334',
                category: 'Task',
                title: 'Complete Revisions from Walk-Through',
                name: 'Mike Riley',
                avatar: "assets/img/avasisteam/mike.jpg"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'TSK#1664',
                category: 'Task',
                title: 'Complete Fireplace Install',
                name: 'Dave Musgrove',
                avatar: "assets/img/avasisteam/dave.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'PRO#1032',
                category: 'Procurement',
                title: 'Excavation Backhoe',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'PRO#1028',
                category: 'Procurement',
                title: 'Decorative Base Boards',
                name: 'Earnie Rutlan',
                avatar: "assets/img/avasisteam/iris.jpg"
            }
        ];
        $scope.lowPriority = [
            {
                month: 'Aug',
                day: 23,
                ticket: 'SOW#1019',
                category: 'Scope of Work',
                title: 'Roof Dry-In',
                name: 'Dave Gebo',
                avatar: "assets/img/avasisteam/dave.jpg"
            },
            {
                month: 'Jun',
                day: 14,
                ticket: 'SOW#1023',
                category: 'Scope of Work',
                title: 'Rough HAVC',
                name: 'Dave Musgrove',
                avatar: "assets/img/avasisteam/dave.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'RFI#1187',
                category: 'RFI',
                title: 'Hardwood Floor',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'RFI#1301',
                category: 'RFI',
                title: 'Door Hings',
                name: 'Jim White',
                avatar: "assets/img/avasisteam/jim.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'SOW#1024',
                category: 'Scope of Work',
                title: 'Plumbing',
                name: 'Christine Spendlove',
                avatar: "assets/img/user_3.png"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'TSK#1767',
                category: 'Task',
                title: 'Ready for Facia Install',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'TSK#1444',
                category: 'Task',
                title: 'Contact Plumber for Install',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'RFI#1098',
                category: 'RFI',
                title: 'Insulation Question',
                name: 'Mike Bearnson',
                avatar: "assets/img/avasisteam/mike.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'RFI#1315',
                category: 'RFI',
                title: 'Fire Sprinkler Materials',
                name: 'Beth Wiseman',
                avatar: "assets/img/avasisteam/beth.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'TSK#1992',
                category: 'Task',
                title: 'Clean Job Site',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'TSK#1929',
                category: 'Task',
                title: 'Identify Electrical Requirements w/Designer',
                name: 'Mary Beroset',
                avatar: "assets/img/avasisteam/mary.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'TSK#1229',
                category: 'Task',
                title: 'Verify Additional Needs',
                name: 'Dan Bonker',
                avatar: "assets/img/avasisteam/dan.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'TSK#2113',
                category: 'Task',
                title: 'Follow Up on Fireplace Install',
                name: 'Christine Peters',
                avatar: "assets/img/avasisteam/peters.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'PRO#1034',
                category: 'Procurement',
                title: 'Interior Door Hardware',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'PRO#1067',
                category: 'Procurement',
                title: 'Kitchen Cabinets',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'PRO#1209',
                category: 'Procurement',
                title: 'Paint Primer',
                name: 'Bruce Wayne',
                avatar: "assets/img/avasisteam/bruce.jpg"
            },
            {
                month: 'Dec',
                day: 6,
                ticket: 'PRO#1254',
                category: 'Procurement',
                title: 'Drywall',
                name: 'Beth Wiseman',
                avatar: "assets/img/avasisteam/beth.jpg"
            }
        ];

		$scope.round = function(val) {
            return Math.round(val);
        };

	}]);
