app.controller('ActionItemsCtrl',
    ['$scope', '$state', '$stateParams', '$uibModal', function($scope, $state, $stateParams, $uibModal) {

        // Action Items Main
        $scope.items = [];
        $scope.pieOptions = {
            type: 'pie',
            height: '50px',
            offset: -90,
            sliceColors: ['#79c485', '#eeeeee'],
            disableTooltips: true
        };
        $scope.gai = {
            state: "action-items.general-action-items",
            title: "General Action Items",
            total: 28,
            green: 6,
            orange: 12,
            red: 8,
            completed: {
                total: 35,
                done: 7
            },
            assignedMe: {
                green: {
                    total: 3,
                    done: 1
                },
                orange: {
                    total: 5,
                    done: 1,
                },
                red: {
                    total: 2,
                    done: 0.5
                }
            },
            listRequiredByMe: [
                    {flag: 'red', title: 'Confirm Progress on Fireplace', due_date: '8/16/2015', responsible: {name: 'Bob Jones', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Fireplace Install'].join(", "), status: ['In Process', 0]},
                    {flag: 'red', title: 'Need Stairs Ready for Floor Lights', due_date: '8/17/2015', responsible: {name: 'Bob Jones', company: ''},initiator: {name: 'Mary Beroset', company: ''}, sow: ['Stairway Floor Lighting'].join(", "), status: ['In Process', 0.3]},
                    {flag: 'yellow', title: 'Decision on Ventilation ', due_date: '8/18/2015', responsible: {name: 'Bob Jones', company: ''},initiator: {name: 'Dave Musgrove', company: ''}, sow: [''].join(", "), status: ['In Process', 0]},
                    {flag: 'yellow', title: 'Confirm Completion of Dry-In', due_date: '8/18/2015', responsible: {name: 'Bob Jones', company: ''},initiator: {name: 'Jeff Price', company: ''}, sow: ['Roof Dry-In'].join(", "), status: ['In Process', 0.25]},
                    {flag: 'yellow', title: 'Contact Inspector to Set Up 4-Way', due_date: '8/18/2015', responsible: {name: 'Bob Jones', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['-'].join(", "), status: ['In Process', 0]},
                    {flag: 'yellow', title: 'Inspect Fireplace Framing', due_date: '8/19/2015', responsible: {name: 'Bob Jones', company: ''},initiator: {name: 'John Steel', company: ''}, sow: ['Fireplace Install'].join(", "), status: ['In Process', 0.5]},
                    {flag: 'yellow', title: 'Initiate Bid Process for Drywall', due_date: '8/19/2015', responsible: {name: 'Bob Jones', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Drywall'].join(", "), status: ['In Process', 0]},
                    {flag: 'green', title: 'Ready for Facia Install', due_date: '8/27/2015', responsible: {name: 'Bob Jones', company: ''},initiator: {name: 'Dave Gebo', company: ''}, sow: ['Roof Dry-In'].join(", "), status: ['In Process', 0.8]},
                    {flag: 'green', title: 'Contact Plumber for Install', due_date: '9/3/2015', responsible: {name: 'Bob Jones', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Plumbing Rough-In'].join(", "), status: ['In Process', 0.1]},
                    {flag: 'green', title: 'Clean Job Site', due_date: '-', responsible: {name: 'Bob Jones', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['-'].join(", "), status: ['In Process', 0]}
            ],

            listRequiredByOthers: [
                {flag: 'red', title: 'Submit Invoice for Additional Lumber', due_date: '8/14/2015', responsible: {name: 'Dave Gebo', company: ''},initiator: {name: 'Jeff Price', company: ''}, sow: ['Roof Dry-In'].join(', '), status: ['In Process', 0.2]},
                {flag: 'red', title: 'Discuss Ventilation Options', due_date: '8/16/2015', responsible: {name: 'Dave Musgrove', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Fireplace Install'].join(', '), status: ['In Process', 0]},
                {flag: 'red', title: 'Complete Fireplace Framing', due_date: '8/17/2015', responsible: {name: 'John Steel', company: ''},initiator: {name: 'John Steel', company: ''}, sow: ['Fireplace Install'].join(', '), status: ['In Process', 0.8]},
                {flag: 'red', title: 'Close Garage Roof', due_date: '8/17/2015', responsible: {name: 'Dave Gebo', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: [''].join(', '), status: ['In Process', 0.95]},
                {flag: 'red', title: 'Finish Closing in Roof', due_date: '8/17/2015', responsible: {name: 'Mike Hunter', company: ''},initiator: {name: 'Dave Gebo', company: ''}, sow: [''].join(', '), status: ['In Process', 0.45]},
                {flag: 'red', title: 'Roof Dry-In', due_date: '8/17/2015', responsible: {name: 'Dave Gebo', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Roof Dry-In'].join(', '), status: ['In Process', 0]},
                {flag: 'yellow', title: 'Electrical Overview', due_date: '8/18/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Mary Beroset', company: ''}, sow: ['Main Floor Overhead Lighting'].join(', '), status: ['In Process', 0.3]},
                {flag: 'yellow', title: 'Install Fireplace ', due_date: '8/18/2015', responsible: {name: 'Dave Musgrove', company: ''},initiator: {name: 'Dave  Musgrove', company: ''}, sow: ['Fireplace Install'].join(', '), status: ['In Process', 0]},
                {flag: 'yellow', title: 'Walk-Through w/Deisgner', due_date: '8/18/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Mary Beroset', company: ''}, sow: ['Stairway Floor Lighting'].join(', '), status: ['In Process', 0.25]},
                {flag: 'yellow', title: 'Complete Revisions from Walk-Through', due_date: '8/18/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Mike Riley', company: ''}, sow: ['Main Floor Overhead Lighting'].join(', '), status: ['In Process', 0]},
                {flag: 'yellow', title: 'Complete Fireplace Install', due_date: '8/19/2015', responsible: {name: 'Dase Musgrove', company: ''},initiator: {name: 'Dave Musgrove', company: ''}, sow: ['-'].join(', '), status: ['In Process', 0.5]},
                {flag: 'yellow', title: 'Final Walk-Through with GC', due_date: '8/19/2015', responsible: {name: 'Dave Gebo', company: ''},initiator: {name: 'Dave Gebo', company: ''}, sow: ['Roof Dry-In'].join(', '), status: ['In Process', 0]},
                {flag: 'yellow', title: 'Product Review', due_date: '8/20/2015', responsible: {name: 'Dave Musgrove', company: ''},initiator: {name: 'Christian Peters', company: ''}, sow: ['Fireplace Install'].join(', '), status: ['In Process', 0.8]},
                {flag: 'green', title: 'Identify Electrical Requirements w/Designer', due_date: '8/22/2015', responsible: {name: 'Mary Beroset', company: ''},initiator: {name: 'Mike Riley', company: ''}, sow: ['Stairway Floor Lighting'].join(', '), status: ['In Process', 0.1]},
                {flag: 'green', title: 'Verify Additional Needs', due_date: '8/27/2015', responsible: {name: 'Dan Bonker', company: ''},initiator: {name: 'Jeff Price', company: ''}, sow: ['Frame 2nd Story'].join(', '), status: ['In Process', 0]},
                {flag: 'green', title: 'Follow Up on Fireplace Install', due_date: '9/1/2015', responsible: {name: 'Christian Peters', company: ''},initiator: {name: 'Dave Musgrove', company: ''}, sow: ['Fireplace Install'].join(', '), status: ['In Process', 0]}
            ],
            listDrafts: [
                {flag: 'draft', title: 'Samples of Door Frames Onsite', due_date: '8/22/2015', responsible: {name: 'Mary Beroset', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Door Frames'].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Bring Copy of Instruction Manual', due_date: '8/29/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Fireplace Install'].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Verify Completion of Garage Insulation', due_date: '9/7/2015 ', responsible: {name: 'Mike Bearnson', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Insulation '].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Walk-Through ', due_date: '9/12/2015', responsible: {name: 'Jim White', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Window Case'].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Discuss Schedule for September', due_date: '9/12/2015', responsible: {name: 'Earnie Rutland', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Base '].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Follow Up on Code', due_date: '-', responsible: {name: '-', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Fire Sprinker Rough In'].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Reminder to Input Bid', due_date: '', responsible: {name: 'Brad Harrison', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Drywall'].join(', '), status: ['Draft', '-']},
                {flag: 'draft', title: 'Required Primer', due_date: '-', responsible: {name: 'Mark Stevens', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Prime'].join(', '), status: ['Draft', '-']}
            ],
            listCompleted: [
                {flag: 'completed', title: 'Follow Up on Steel Support', due_date: '7/21/2015', responsible: {name: 'Bob Jones', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Set Steel'].join(', '), status: ['Completed', 1]},
                {flag: 'completed', title: 'Need to Install Sewer Pump', due_date: '7/14/2015', responsible: {name: 'Christine Spendlove', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Rough Plumbing'].join(', '), status: ['Completed', 1]},
                {flag: 'completed', title: 'Complete Rough Electical', due_date: '7/9/2015', responsible: {name: 'Mike Riley', company: ''},initiator: {name: 'Mike Riley', company: ''}, sow: ['Rough Electrical'].join(', '), status: ['Completed', 1]},
                {flag: 'completed', title: 'What is Rough Mechanical ', due_date: '7/1/2015', responsible: {name: 'Bob Jones', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Rough Mechanical'].join(', '), status: ['Completed', 1]},
                {flag: 'completed', title: 'Site Prep', due_date: '6/30/2015', responsible: {name: 'Dale Guerra', company: ''},initiator: {name: 'Rebekah Brown', company: ''}, sow: ['Pour Foundation'].join(', '), status: ['Completed', 1]},
                {flag: 'completed', title: 'Verify Setup is Secure', due_date: '6/12/2015', responsible: {name: 'Adam Simpson', company: ''},initiator: {name: 'Dale Guerra', company: ''}, sow: ['Form Foundation Walls'].join(', '), status: ['Completed', 1]},
                {flag: 'completed', title: 'Measure Twice, Cut Once', due_date: '6/9/2015', responsible: {name: 'Adam Simpson', company: ''},initiator: {name: 'Dale Guerra', company: ''}, sow: ['Form Footings'].join(', '), status: ['Completed', 1]},
                {flag: 'canceled', title: 'Where is the Snow', due_date: '7/16/2015', responsible: {name: 'Torben Moench', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['Snow Removal'].join(', '), status: ['Canceled', '-']},
                {flag: 'canceled', title: 'Interview Potential Admin', due_date: '7/5/2015', responsible: {name: 'Bob Jones', company: ''},initiator: {name: 'Bob Jones', company: ''}, sow: ['-'].join(', '), status: ['Canceled', '-']},
                {flag: 'canceled', title: 'What is a Submittal', due_date: '6/26/2015', responsible: {name: 'Josh Kimball', company: ''},initiator: {name: 'Steven Phillips', company: ''}, sow: ['Submittals'].join(', '), status: ['Canceled', '-']}
            ]
        };

        var rfi = {
            title: "RFI",
            total: 36,
            green: 15,
            orange: 13,
            red: 8,
            completed: {
                total: 66,
                done: 30
            },
            assignedMe: {
                green: {
                    total: 7,
                    done: 4
                },
                orange: {
                    total: 9,
                    done: 5,
                },
                red: {
                    total: 3,
                    done: 1
                }
            }
        };

        var changeOrder = {
            title: "Change Order",
            total: 19,
            green: 8,
            orange: 5,
            red: 4,
            completed: {
                total: 31,
                done: 12
            },
            assignedMe: {
                green: {
                    total: 7,
                    done: 4
                },
                orange: {
                    total: 2,
                    done: 0.5,
                },
                red: {
                    total: 3,
                    done: 1
                }
            }
        };

        var punchList = {
            title: "Punch List",
            total: 5,
            green: 3,
            orange: 1,
            red: 1,
            completed: {
                total: 5,
                done: 0
            },
            assignedMe: {
                green: {
                    total: 1,
                    done: 0.2
                },
                orange: {
                    total: 1,
                    done: 0.5,
                },
                red: {
                    total: 1,
                    done: 0.7
                }
            }
        };

        $scope.inspections = {
            pieOptions: {
                type: 'pie',
                height: '120px',
                offset: -90,
                sliceColors: ['#fdae46', '#3aabd5', '#79c485'],
                disableTooltips: true
            },
            state: "action-items.inspections",
            title: "Inspection",
            total: 7,
            green: 6,
            orange: 1,
            red: 0,
            completed: {
                total: 8,
                done: 1
            },
            overview: {
                completed: 59,
                pending: 36,
                upcoming: 41,
                total: 136
            },
            assignedMe: {
                green: {
                    total: 2,
                    done: 0.4
                },
                orange: {
                    total: 1,
                    done: 0.3,
                },
                red: {
                    total: 0,
                    done: 0
                }
            },
            pendingList: [
                {
                    flag: 'red',
                    name: "Main Inspection",
                    type: "Inspection Type",
                    inspector: {
                        name: "Bob Jones",
                        company: "ABC Inc"
                    },
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    status: "scheduled",
                    documents: 2,
                    date_completion: "May 23, 2015 / Jun 12 2015",
                    order_by_date: "Aug 23, 2015",
                    next_inspection: "Aug 23, 2015",
                    date_completed: "Aug 23, 2015"
                },
                {
                    flag: 'orange',
                    name: "First Floor",
                    type: "Inspection Type",
                    inspector: {
                        name: "Bob Jones",
                        company: "ABC Inc"
                    },
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    status: "Needs to be ordered",
                    documents: 2,
                    date_completion: "May 23, 2015 / Jun 12 2015",
                    order_by_date: "Aug 23, 2015",
                    next_inspection: "Aug 23, 2015",
                    date_completed: "Aug 23, 2015"
                },
                {
                    flag: 'orange',
                    name: "Lobby",
                    type: "Inspection Type",
                    inspector: {
                        name: "Bob Jones",
                        company: "ABC Inc"
                    },
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    status: "Ready for Reinspection",
                    documents: 2,
                    date_completion: "May 23, 2015 / Jun 12 2015",
                    order_by_date: "Aug 23, 2015",
                    next_inspection: "Aug 23, 2015",
                    date_completed: "Aug 23, 2015"
                },
                {
                    flag: 'orange',
                    name: "Plumbing",
                    type: "Inspection Type",
                    inspector: {
                        name: "Bob Jones",
                        company: "ABC Inc"
                    },
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    status: "Inspection Complete",
                    documents: 2,
                    date_completion: "May 23, 2015 / Jun 12 2015",
                    order_by_date: "Aug 23, 2015",
                    next_inspection: "Aug 23, 2015",
                    date_completed: "Aug 23, 2015"
                }
            ],
            upcomingList: [
                {
                    flag: 'orange',
                    name: "Structure Inspection",
                    type: "Inspection Type",
                    inspector: {
                        name: "Bob Jones",
                        company: "ABC Inc"
                    },
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    status: "Scheduled",
                    documents: 2,
                    date_completion: "May 23, 2015 / Jun 12 2015",
                    order_by_date: "Aug 23, 2015",
                    next_inspection: "Aug 23, 2015",
                    date_completed: "Aug 23, 2015"
                },
                {
                    flag: 'green',
                    name: "Work",
                    type: "Inspection Type",
                    inspector: {
                        name: "Bob Jones",
                        company: "ABC Inc"
                    },
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    status: "Ready for Reinspection",
                    documents: 2,
                    date_completion: "May 23, 2015 / Jun 12 2015",
                    order_by_date: "Aug 23, 2015",
                    next_inspection: "Aug 23, 2015",
                    date_completed: "Aug 23, 2015"
                },
                {
                    flag: 'green',
                    name: "Power",
                    type: "Inspection Type",
                    inspector: {
                        name: "Bob Jones",
                        company: "ABC Inc"
                    },
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    status: "Ready for Reinspection",
                    documents: 2,
                    date_completion: "May 23, 2015 / Jun 12 2015",
                    order_by_date: "Aug 23, 2015",
                    next_inspection: "Aug 23, 2015",
                    date_completed: "Aug 23, 2015"
                }
            ],
            completedList: [
                {
                    flag: 'completed',
                    name: "Heat and Cooling",
                    type: "Inspection Type",
                    inspector: {
                        name: "Bob Jones",
                        company: "ABC Inc"
                    },
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    status: "Inspection Complete",
                    documents: 2,
                    date_completion: "May 23, 2015 / Jun 12 2015",
                    order_by_date: "Aug 23, 2015",
                    next_inspection: "Aug 23, 2015",
                    date_completed: "Aug 23, 2015"
                },
                {
                    flag: 'completed',
                    name: "Air Ducts",
                    type: "Inspection Type",
                    inspector: {
                        name: "Bob Jones",
                        company: "ABC Inc"
                    },
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    status: "Inspection Complete",
                    documents: 2,
                    date_completion: "May 23, 2015 / Jun 12 2015",
                    order_by_date: "Aug 23, 2015",
                    next_inspection: "Aug 23, 2015",
                    date_completed: "Aug 23, 2015"
                },
                {
                    flag: 'completed',
                    name: "Workers",
                    type: "Inspection Type",
                    inspector: {
                        name: "Bob Jones",
                        company: "ABC Inc"
                    },
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    status: "Inspection Complete",
                    documents: 2,
                    date_completion: "May 23, 2015 / Jun 12 2015",
                    order_by_date: "Aug 23, 2015",
                    next_inspection: "Aug 23, 2015",
                    date_completed: "Aug 23, 2015"
                }
            ],
            draftsList: [
                {
                    flag: 'edit',
                    name: "Heat and Cooling",
                    type: "Inspection Type",
                    inspector: {
                        name: "Bob Jones",
                        company: "ABC Inc"
                    },
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    status: "Inspection Complete",
                    documents: 2,
                    date_completion: "May 23, 2015 / Jun 12 2015",
                    order_by_date: "Aug 23, 2015",
                    next_inspection: "Aug 23, 2015",
                    date_completed: "Aug 23, 2015"
                },
                {
                    flag: 'edit',
                    name: "Air Ducts",
                    type: "Inspection Type",
                    inspector: {
                        name: "Bob Jones",
                        company: "ABC Inc"
                    },
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    status: "Inspection Complete",
                    documents: 2,
                    date_completion: "May 23, 2015 / Jun 12 2015",
                    order_by_date: "Aug 23, 2015",
                    next_inspection: "Aug 23, 2015",
                    date_completed: "Aug 23, 2015"
                },
                {
                    flag: 'edit',
                    name: "Workers",
                    type: "Inspection Type",
                    inspector: {
                        name: "Bob Jones",
                        company: "ABC Inc"
                    },
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    status: "Inspection Complete",
                    documents: 2,
                    date_completion: "May 23, 2015 / Jun 12 2015",
                    order_by_date: "Aug 23, 2015",
                    next_inspection: "Aug 23, 2015",
                    date_completed: "Aug 23, 2015"
                }
            ]
        };


        $scope.round = function(val) {
            return Math.round(val);
        };

        $scope.goDetails = function(state) {
            $state.go(state);
        }

        $scope.items.push($scope.gai);
        $scope.items.push(rfi);
        $scope.items.push(changeOrder);
        $scope.items.push(punchList);
        $scope.items.push($scope.inspections);

        // Inspection Table Gear Button
        $('body').on('shown.bs.dropdown', '.gear-dropdown', function () {
            var offsetRight = $(this).parentsUntil('.inspection-table').last().offset().left +
                              $(this).parentsUntil('.inspection-table').last().width() -
                              $(this).find('a.dropdown-toggle').offset().left -
                              $(this).find('a.dropdown-toggle').width();
            var offsetTop = $(this).find('a.dropdown-toggle').offset().top - $(this).parentsUntil('.inspection-table').last().offset().top

            $(this).find('ul.dropdown-menu').css('top', offsetTop + 10);
            $(this).find('ul.dropdown-menu').css('right', offsetRight + 10);
        });

        // General Action Items


        // Inspections

        // Action Main GAI New Modal
        $scope.showGaiNewModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/action-items/gai-new-modal.html',
                controller: 'GAINewModalCtrl',
                windowClass: 'gai-modal'
            });

            modalInstance.result.then(function(res) {

            }, function() {

            });
        }

        // New Change Oder Modal
        $scope.showChangeOrderNewModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/action-items/change-order-new-modal.html',
                controller: 'ChangeOrderNewModalCtrl',
                windowClass: 'change-order-modal'
            });

            modalInstance.result.then(function(res) {

            }, function() {

            });
        }

    }]);
