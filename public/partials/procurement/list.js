app.controller('ProcurementsCtrl',
    ['$scope', '$state', '$stateParams', '$uibModal', function($scope, $state, $stateParams, $uibModal) {

        // Procurement Main
        $scope.action_list = {
            state: "procurement.main",
            listRequiredByMe: [
                {
                    flag: 'red',
                    title: "Main Floor Fireplace",
                    sTitle: "Design",
                    status: "Awaiting Approval",
                    responsible: {
                        name: "Bob Jones",
                    },
                    date_required: "8/17/2015",
                    date_ordered: "",
                    scope: {
                        name: "Fireplace Install",
                        ready: true
                    },
                    supplier: {
                    }
                },
                {
                    flag: 'red',
                    title: "Air Ducts",
                    sTitle: "Materials",
                    status: "Delivered",
                    responsible: {
                        name: "Bob Jones",
                    },
                    date_required: "8/17/2015",
                    date_ordered: "8/5/2015",
                    scope: {
                        name: "Rough HVAC",
                        ready: true
                    },
                    supplier: {
                        name: "Contractors HVAC Supply"
                    }
                },
                {
                    flag: 'orange',
                    title: "Excavation Backhoe",
                    sTitle: "Equipment",
                    status: "Ordered",
                    responsible: {
                        name: "Bob Jones",
                    },
                    date_required: "8/24/2015",
                    date_ordered: "8/17/2015",
                    scope: {
                        name: "Landscaping",
                        ready: true
                    },
                    supplier: {
                        name: "Arnold Machinery",
                    }
                },
                {
                    flag: 'green',
                    title: "Interior Door Hardware",
                    sTitle: "Design",
                    status: "Awaiting Selection",
                    responsible: {
                        name: "Bob Jones",
                    },
                    date_required: "8/25/2015",
                    date_ordered: "",
                    scope: {
                        name: "Door Hardware",
                        ready: true
                    },
                    supplier: {
                    }
                },
                {
                    flag: 'green',
                    title: "Kitchen Cabinets",
                    sTitle: "Design",
                    status: "Awaiting Approval",
                    responsible: {
                        name: "Bob Jones",
                    },
                    date_required: "9/1/2015",
                    date_ordered: "9/1/2015",
                    scope: {
                        name: "Kitchen Cabinets",
                        ready: true
                    },
                    supplier: {
                    }
                },
                {
                    flag: 'green',
                    title: "Paint Primer",
                    sTitle: "Materials",
                    status: "Awaiting Procurement",
                    responsible: {
                        name: "Bob Jones",
                    },
                    date_required: "9/6/2015",
                    date_ordered: "9/9/2015",
                    scope: {
                        name: "Prime",
                        ready: true
                    },
                    supplier: {
                        name: "Kenwood Paint Supply"
                    }
                },
            ],

            listRequiredByOthers: [
                {
                    flag: 'red',
                    title: "Piping",
                    sTitle: "Materials",
                    status: "Needs to be Ordered",
                    responsible: {
                        name: "Beth Wiseman",
                    },
                    date_required: "8/15/2015",
                    date_ordered: "8/15/2015",
                    scope: {
                        name: "Plumbing",
                        ready: true
                    },
                    supplier: {
                        name: "Standard Plumbing"
                    }
                },
                {
                    flag: 'red',
                    title: "Interior Doors",
                    sTitle: "Design",
                    status: "Awaiting Selection",
                    responsible: {
                        name: "Jane Smith",
                    },
                    date_required: "8/17/2015",
                    date_ordered: "",
                    scope: {
                        name: "Door Installation",
                        ready: true
                    },
                    supplier: {
                    }
                },
                {
                    flag: 'orange',
                    title: "Decorative Base Boards",
                    sTitle: "Design",
                    status: "Awaiting Approval",
                    responsible: {
                        name: "Earnie Rutland",
                    },
                    date_required: "8/19/2015",
                    date_ordered: "",
                    scope: {
                        name: "Base Board",
                        ready: true
                    },
                    supplier: {
                    }
                },
                {
                    flag: 'green',
                    title: "Drywall",
                    sTitle: "Materials",
                    status: "Awaiting Procurment",
                    responsible: {
                        name: "Beth Wiseman",
                    },
                    date_required: "8/23/2015",
                    date_ordered: "",
                    scope: {
                        name: "Drywall",
                        ready: true
                    },
                    supplier: {
                    }
                }
            ],
            listDrafts: [
                {
                    flag: 'edit',
                    title: "Kitchen Counter Top",
                    sTitle: "Design",
                    status: "draft",
                    responsible: {
                        name: "Jane Smith",
                    },
                    date_required: "9/2/2015",
                    date_ordered: "",
                    scope: {
                        name: "Counter Tops",
                        ready: true
                    },
                    supplier: {
                    }
                },
                {
                    flag: 'edit',
                    title: "Kitchen Tile",
                    sTitle: "Design",
                    status: "draft",
                    responsible: {
                        name: "Jane Smith",
                    },
                    date_required: "",
                    date_ordered: "",
                    scope: {
                        name: "Kitchen Flooring",
                        ready: true
                    },
                    supplier: {
                    }
                }
            ],
            listCompleted: [
                {
                    flag: 'completed',
                    title: "Wood Framing",
                    sTitle: "Materials",
                    status: "completed",
                    responsible: {
                        name: "Dan Bonker",
                    },
                    date_required: "8/12/2015",
                    date_ordered: "8/1/2015",
                    scope: {
                        name: "Framing",
                        ready: true
                    },
                    supplier: {
                        name: "Smokey Mountain Lumber"
                    }
                },
                {
                    flag: 'completed',
                    title: "Structural Steel",
                    sTitle: "Materials",
                    status: "completed",
                    responsible: {
                        name: "John Steel",
                    },
                    date_required: "8/7/2015",
                    date_ordered: "8/1/2015",
                    scope: {
                        name: "Steel Framing",
                        ready: true
                    },
                    supplier: {
                        name: "Metal Markets"
                    }
                },
                {
                    flag: 'completed',
                    title: "Crane",
                    sTitle: "Equipment",
                    status: "completed",
                    responsible: {
                        name: "Bob Jones",
                    },
                    date_required: "8/7/2015",
                    date_ordered: "8/1/2015",
                    scope: {
                        name: "Steel Framing",
                        ready: true
                    },
                    supplier: {
                        name: "ECC Crane Service"
                    }
                },
                {
                    flag: 'completed',
                    title: "Wood Framing",
                    sTitle: "Materials",
                    status: "completed",
                    responsible: {
                        name: "Dale Guerra",
                    },
                    date_required: "7/23/2015",
                    date_ordered: "7/9/2015",
                    scope: {
                        name: "Pour Foundation Walls",
                        ready: true
                    },
                    supplier: {
                        name: "McKinnley Concrete"
                    }
                },
                {
                    flag: 'completed',
                    title: "Additional Concrete Forms",
                    sTitle: "Equipment",
                    status: "completed",
                    responsible: {
                        name: "John Graber",
                    },
                    date_required: "7/23/2015",
                    date_ordered: "7/9/2015",
                    scope: {
                        name: "Pour Foundation Walls",
                        ready: true
                    },
                    supplier: {
                        name: "Mckinnley Concrete Rentals"
                    }
                }
            ]
        };
    }]);
