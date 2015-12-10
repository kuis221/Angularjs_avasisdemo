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
                {
                    flag: 'red',
                    title: "Measure and Mark the Wall",
                    sTitle: "Secure Ledger Board",
                    due_date: "May 23, 2015",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    sow: ["Hang the Wall Cabinets", "Install Base Cabinets", "Measure base cabinets"].join(", "),
                    status: ["in process", 24]
                },
                {
                    flag: 'red',
                    title: "Aenean Lacinia bibendum nulla",
                    sTitle: "Aenean lacinia bibendum nulla sed",
                    due_date: "Jun 14, 2015",
                    responsible: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    sow: ["Fermentum Egetstas"].join(", "),
                    status: ["pending", 80]
                },
                {
                    flag: 'red',
                    title: "Measure and Mark the Wall",
                    sTitle: "Secure Ledger Board",
                    due_date: "May 23, 2015",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    sow: ["Hang the Wall Cabinets", "Install Base Cabinets", "Measure base cabinets"].join(", "),
                    status: ["draft", 24]
                },
                {
                    flag: 'orange',
                    title: "Aenean Lacinia bibendum nulla",
                    sTitle: "Aenean lacinia bibendum nulla sed",
                    due_date: "Jun 14, 2015",
                    responsible: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    sow: ["Fermentum Egetstas"].join(", "),
                    status: ["in process", 80]
                },
                {
                    flag: 'orange',
                    title: "Measure and Mark the Wall",
                    sTitle: "Secure Ledger Board",
                    due_date: "May 23, 2015",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    sow: ["Hang the Wall Cabinets", "Install Base Cabinets", "Measure base cabinets"].join(", "),
                    status: ["in process", 24]
                },
                {
                    flag: 'orange',
                    title: "Aenean Lacinia bibendum nulla",
                    sTitle: "Aenean lacinia bibendum nulla sed",
                    due_date: "Jun 14, 2015",
                    responsible: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    sow: ["Fermentum Egetstas"].join(", "),
                    status: ["in process", 80]
                },
                {
                    flag: 'green',
                    title: "Measure and Mark the Wall",
                    sTitle: "Secure Ledger Board",
                    due_date: "May 23, 2015",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    sow: ["Hang the Wall Cabinets", "Install Base Cabinets", "Measure base cabinets"].join(", "),
                    status: ["in process", 24]
                },
            ],

            listRequiredByOthers: [
                {
                    flag: 'red',
                    title: "Measure and Mark the Wall",
                    sTitle: "Secure Ledger Board",
                    due_date: "May 23, 2015",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    sow: ["Hang the Wall Cabinets", "Install Base Cabinets", "Measure base cabinets"].join(", "),
                    status: ["in process", 24]
                },
                {
                    flag: 'red',
                    title: "Aenean Lacinia bibendum nulla",
                    sTitle: "Aenean lacinia bibendum nulla sed",
                    due_date: "Jun 14, 2015",
                    responsible: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    sow: ["Fermentum Egetstas"].join(", "),
                    status: ["pending", 80]
                },
                {
                    flag: 'red',
                    title: "Measure and Mark the Wall",
                    sTitle: "Secure Ledger Board",
                    due_date: "May 23, 2015",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    sow: ["Hang the Wall Cabinets", "Install Base Cabinets", "Measure base cabinets"].join(", "),
                    status: ["draft", 24]
                },
                {
                    flag: 'orange',
                    title: "Aenean Lacinia bibendum nulla",
                    sTitle: "Aenean lacinia bibendum nulla sed",
                    due_date: "Jun 14, 2015",
                    responsible: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    sow: ["Fermentum Egetstas"].join(", "),
                    status: ["in process", 80]
                }
            ],
            listDrafts: [
                {
                    flag: 'edit',
                    title: "Measure and Mark the Wall",
                    sTitle: "Secure Ledger Board",
                    due_date: "May 23, 2015",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    sow: ["Hang the Wall Cabinets", "Install Base Cabinets", "Measure base cabinets"].join(", "),
                    status: ["draft", 24]
                },
                {
                    flag: 'edit',
                    title: "Aenean Lacinia bibendum nulla",
                    sTitle: "Aenean lacinia bibendum nulla sed",
                    due_date: "Jun 14, 2015",
                    responsible: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    sow: ["Fermentum Egetstas"].join(", "),
                    status: ["draft", 80]
                },
                {
                    flag: 'edit',
                    title: "Measure and Mark the Wall",
                    sTitle: "Secure Ledger Board",
                    due_date: "May 23, 2015",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    sow: ["Hang the Wall Cabinets", "Install Base Cabinets", "Measure base cabinets"].join(", "),
                    status: ["draft", 24]
                },
                {
                    flag: 'edit',
                    title: "Aenean Lacinia bibendum nulla",
                    sTitle: "Aenean lacinia bibendum nulla sed",
                    due_date: "Jun 14, 2015",
                    responsible: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    sow: ["Fermentum Egetstas"].join(", "),
                    status: ["draft", 80]
                }
            ],
            listCompleted: [
                {
                    flag: 'completed',
                    title: "Measure and Mark the Wall",
                    sTitle: "Secure Ledger Board",
                    due_date: "May 23, 2015",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    sow: ["Hang the Wall Cabinets", "Install Base Cabinets", "Measure base cabinets"].join(", "),
                    status: ["in process", 24]
                },
                {
                    flag: 'completed',
                    title: "Aenean Lacinia bibendum nulla",
                    sTitle: "Aenean lacinia bibendum nulla sed",
                    due_date: "Jun 14, 2015",
                    responsible: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    sow: ["Fermentum Egetstas"].join(", "),
                    status: ["pending", 80]
                },
                {
                    flag: 'completed',
                    title: "Measure and Mark the Wall",
                    sTitle: "Secure Ledger Board",
                    due_date: "May 23, 2015",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    sow: ["Hang the Wall Cabinets", "Install Base Cabinets", "Measure base cabinets"].join(", "),
                    status: ["in process", 24]
                },
                {
                    flag: 'failed',
                    title: "Aenean Lacinia bibendum nulla",
                    sTitle: "Aenean lacinia bibendum nulla sed",
                    due_date: "Jun 14, 2015",
                    responsible: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    initiator: {
                        name: "Jim Stevens",
                        company: "ABC Inc."
                    },
                    sow: ["Fermentum Egetstas"].join(", "),
                    status: ["pending", 80]
                }
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
