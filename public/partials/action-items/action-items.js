app.controller('ActionItemsCtrl',
    ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {

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
            total: 419,
            green: 171,
            orange: 155,
            red: 92,
            completed: 140,
            assignedMe: {
                green: {
                    total: 61,
                    done: 40
                },
                orange: {
                    total: 49,
                    done: 20,
                },
                red: {
                    total: 33,
                    done: 26
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
            total: 19,
            green: 4,
            orange: 7,
            red: 8,
            completed: 10,
            assignedMe: {
                green: {
                    total: 5,
                    done: 4
                },
                orange: {
                    total: 2,
                    done: 0.5,
                },
                red: {
                    total: 1,
                    done: 0.1
                }
            }
        };

        var changeOrder = {
            title: "Change Order",
            total: 419,
            green: 171,
            orange: 155,
            red: 92,
            completed: 140,
            assignedMe: {
                green: {
                    total: 61,
                    done: 40
                },
                orange: {
                    total: 49,
                    done: 20,
                },
                red: {
                    total: 33,
                    done: 26
                }
            }
        };

        var punchList = {
            title: "Punch List",
            total: 19,
            green: 4,
            orange: 7,
            red: 8,
            completed: 10,
            assignedMe: {
                green: {
                    total: 5,
                    done: 4
                },
                orange: {
                    total: 2,
                    done: 0.5,
                },
                red: {
                    total: 1,
                    done: 0.1
                }
            }
        };

        var inspections = {
            state: '',
            title: "Inspections",
            total: 19,
            green: 4,
            orange: 7,
            red: 8,
            completed: 10,
            assignedMe: {
                green: {
                    total: 5,
                    done: 4
                },
                orange: {
                    total: 2,
                    done: 0.5,
                },
                red: {
                    total: 1,
                    done: 0.1
                }
            }
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
        $scope.items.push(inspections);


        // General Action Items


        // Inspections
    }]);
