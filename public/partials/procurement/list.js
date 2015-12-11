app.controller('ProcurementsCtrl',
    ['$scope', '$state', '$stateParams', '$uibModal', function($scope, $state, $stateParams, $uibModal) {

        // Procurement Main
        $scope.action_list = {
            state: "procurement.main",
            listRequiredByMe: [
                {
                    flag: 'red',
                    title: "Lorem Dapibus Vestibulum",
                    sTitle: "Design",
                    status: "not yet ordered",
                    responsible: {
                        name: "Eric Hoffman",
                        company: "ABC Inc."
                    },
                    date_required: "May 23, 2015",
                    date_ordered: "May 23, 2015",
                    scope: {
                        name: "Bibendum Ridiculus Fermentum",
                        ready: true
                    },
                    supplier: {
                        name: "Bob Jones",
                        file: "document.xls",
                        email: "bob@jones.com",
                        phone: "415 123 3456"
                    }
                },
                {
                    flag: 'red',
                    title: "Cras Consectetur",
                    sTitle: "Material",
                    status: "Back Ordered",
                    responsible: {
                        name: "David Hunter",
                        company: "ABC Inc."
                    },
                    date_required: "Dec 6, 2015",
                    date_ordered: "Jan 12, 2016",
                    scope: {
                        name: "Ultricies Adipiscing Purus",
                        ready: true
                    },
                    supplier: {
                    }
                },
                {
                    flag: 'orange',
                    title: "Cursus Nullam Parturient",
                    sTitle: "Equipment",
                    status: "Awaiting Approval",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    date_required: "May 23, 2015",
                    date_ordered: "May 23, 2015",
                    scope: {
                        name: "Sollicitudin",
                        ready: true
                    },
                    supplier: {
                        name: "Sloan Urry",
                        file: "document.xls",
                        phone: "415 123 3456"
                    }
                },
                {
                    flag: 'orange',
                    title: "Ullamcorper Consectetur",
                    sTitle: "Design",
                    status: "completed",
                    responsible: {
                        name: "David Hunter",
                        company: "ABC Inc."
                    },
                    date_required: "Dec 6, 2015",
                    date_ordered: "Jan 12, 2016",
                    scope: {
                        name: "Vulputate Risus",
                        ready: true
                    },
                    supplier: {
                        name: "Taylor Hyde",
                        file: "document.xls",
                        email: "bob@jones.com"
                    }
                },
                {
                    flag: 'orange',
                    title: "Cursus Nullam Parturient",
                    sTitle: "Equipment",
                    status: "cancelled",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    date_required: "May 23, 2015",
                    date_ordered: "May 23, 2015",
                    scope: {
                        name: "Sollicitudin",
                        ready: true
                    },
                    supplier: {
                        name: "Kimball Frank",
                        phone: "415 213 3456"
                    }
                },
                {
                    flag: 'green',
                    title: "Ullamcorper Consectetur",
                    sTitle: "Design",
                    status: "draft",
                    responsible: {
                        name: "David Hunter",
                        company: "ABC Inc."
                    },
                    date_required: "Dec 6, 2015",
                    date_ordered: "Jan 12, 2016",
                    scope: {
                        name: "Vulputate Risus",
                        ready: true
                    },
                    supplier: {
                        name: "David Hunter",
                        file: "document.xls",
                    }
                },
            ],

            listRequiredByOthers: [
                {
                    flag: 'red',
                    title: "Lorem Dapibus Vestibulum",
                    sTitle: "Design",
                    status: "not yet ordered",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    date_required: "May 23, 2015",
                    date_ordered: "May 23, 2015",
                    scope: {
                        name: "Bibendum Ridiculus Fermentum",
                        ready: true
                    },
                    supplier: {
                        name: "Bob Jones",
                        file: "document.xls",
                        email: "bob@jones.com",
                        phone: "415 123 3456"
                    }
                },
                {
                    flag: 'green',
                    title: "Cras Consectetur",
                    sTitle: "Material",
                    status: "Back Ordered",
                    responsible: {
                        name: "David Hunter",
                        company: "ABC Inc."
                    },
                    date_required: "Dec 6, 2015",
                    date_ordered: "Jan 12, 2016",
                    scope: {
                        name: "Ultricies Adipiscing Purus",
                        ready: true
                    },
                    supplier: {
                    }
                },
                {
                    flag: 'green',
                    title: "Cursus Nullam Parturient",
                    sTitle: "Equipment",
                    status: "Awaiting Approval",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    date_required: "May 23, 2015",
                    date_ordered: "May 23, 2015",
                    scope: {
                        name: "Sollicitudin",
                        ready: true
                    },
                    supplier: {
                        name: "Sloan Urry",
                        file: "document.xls",
                        phone: "415 123 3456"
                    }
                }
            ],
            listDrafts: [
                {
                    flag: 'edit',
                    title: "Lorem Dapibus Vestibulum",
                    sTitle: "Design",
                    status: "completed",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    date_required: "May 23, 2015",
                    date_ordered: "May 23, 2015",
                    scope: {
                        name: "Bibendum Ridiculus Fermentum",
                        ready: true
                    },
                    supplier: {
                        name: "Bob Jones",
                        file: "document.xls",
                        email: "bob@jones.com",
                        phone: "415 123 3456"
                    }
                },
                {
                    flag: 'edit',
                    title: "Cras Consectetur",
                    sTitle: "Material",
                    status: "completed",
                    responsible: {
                        name: "David Hunter",
                        company: "ABC Inc."
                    },
                    date_required: "Dec 6, 2015",
                    date_ordered: "Jan 12, 2016",
                    scope: {
                        name: "Ultricies Adipiscing Purus",
                        ready: true
                    },
                    supplier: {
                    }
                },
                {
                    flag: 'edit',
                    title: "Cursus Nullam Parturient",
                    sTitle: "Equipment",
                    status: "completed",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    date_required: "May 23, 2015",
                    date_ordered: "May 23, 2015",
                    scope: {
                        name: "Sollicitudin",
                        ready: true
                    },
                    supplier: {
                        name: "Sloan Urry",
                        file: "document.xls",
                        phone: "415 123 3456"
                    }
                },
                {
                    flag: 'edit',
                    title: "Ullamcorper Consectetur",
                    sTitle: "Design",
                    status: "cancelled",
                    responsible: {
                        name: "David Hunter",
                        company: "ABC Inc."
                    },
                    date_required: "Dec 6, 2015",
                    date_ordered: "Jan 12, 2016",
                    scope: {
                        name: "Vulputate Risus",
                        ready: true
                    },
                    supplier: {
                        name: "Taylor Hyde",
                        file: "document.xls",
                        email: "bob@jones.com"
                    }
                }
            ],
            listCompleted: [
                {
                    flag: 'completed',
                    title: "Lorem Dapibus Vestibulum",
                    sTitle: "Design",
                    status: "completed",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    date_required: "May 23, 2015",
                    date_ordered: "May 23, 2015",
                    scope: {
                        name: "Bibendum Ridiculus Fermentum",
                        ready: true
                    },
                    supplier: {
                        name: "Bob Jones",
                        file: "document.xls",
                        email: "bob@jones.com",
                        phone: "415 123 3456"
                    }
                },
                {
                    flag: 'completed',
                    title: "Cras Consectetur",
                    sTitle: "Material",
                    status: "completed",
                    responsible: {
                        name: "David Hunter",
                        company: "ABC Inc."
                    },
                    date_required: "Dec 6, 2015",
                    date_ordered: "Jan 12, 2016",
                    scope: {
                        name: "Ultricies Adipiscing Purus",
                        ready: true
                    },
                    supplier: {
                    }
                },
                {
                    flag: 'completed',
                    title: "Cursus Nullam Parturient",
                    sTitle: "Equipment",
                    status: "completed",
                    responsible: {
                        name: "Bob Jones",
                        company: "ABC Inc."
                    },
                    date_required: "May 23, 2015",
                    date_ordered: "May 23, 2015",
                    scope: {
                        name: "Sollicitudin",
                        ready: true
                    },
                    supplier: {
                        name: "Sloan Urry",
                        file: "document.xls",
                        phone: "415 123 3456"
                    }
                },
                {
                    flag: 'failed',
                    title: "Ullamcorper Consectetur",
                    sTitle: "Design",
                    status: "cancelled",
                    responsible: {
                        name: "David Hunter",
                        company: "ABC Inc."
                    },
                    date_required: "Dec 6, 2015",
                    date_ordered: "Jan 12, 2016",
                    scope: {
                        name: "Vulputate Risus",
                        ready: true
                    },
                    supplier: {
                        name: "Taylor Hyde",
                        file: "document.xls",
                        email: "bob@jones.com"
                    }
                }
            ]
        };
    }]);
