app.controller('DashboardCtrl',
    ['$scope', '$stateParams', '$timeout', function ($scope, $stateParams, $timeout) {

        $scope.flagProjectList = [
            {
                name: 'Wilmington 47',
                alert_count: 27,
                red_value: 10,
                red_percent: 10*100/27,
                orange_value: 5,
                orange_percent: 5*100/27,
                green_value: 12,
                green_percent: 12*100/27
            },
            {
                name: 'Wilmington 48',
                alert_count: 22,
                red_value: 3,
                red_percent: 3*100/22,
                orange_value: 4,
                orange_percent: 4*100/22,
                green_value: 15,
                green_percent: 15*100/22
            },
            {
                name: 'Wilmington 45',
                alert_count: 16,
                red_value: 5,
                red_percent: 5*100/16,
                orange_value: 2,
                orange_percent: 2*100/16,
                green_value: 9,
                green_percent: 9*100/16
            },
            {
                name: 'Wilmington 46',
                alert_count: 11,
                red_value: 2,
                red_percent: 2/11,
                orange_value: 3,
                orange_percent: 3/11,
                green_value: 6,
                green_percent: 6/11
            }
        ];

        $scope.todayItemList = [
            {
                number: 'RFI#1244',
                name: 'Garage Cement Finish',
                project: 'Wilmington 45'
            },
            {
                number: 'BID#1833',
                name: 'Structural Metal Framing',
                project: 'Wilmington 45'
            },
            {
                number: 'PRO#1017',
                name: 'Foundation Concrete',
                project: 'Wilmington 45'
            },
            {
                number: 'CO#2339',
                name: 'Additional Storage',
                project: 'Wilmington 45'
            },
            {
                number: 'TSK#1405',
                name: 'Complete Rough Electical',
                project: 'Wilmington 45'
            },
            {
                number: 'RFI#1272',
                name: 'Roofline Materials',
                project: 'Wilmington 46'
            },
            {
                number: 'RFI#1012',
                name: 'Vinyl Siding',
                project: 'Wilmington 46'
            },
            {
                number: 'BID#1031',
                name: 'Hardwood Flooring',
                project: ''
            },
            {
                number: 'SOW#1092',
                name: 'Roof Dry-In',
                project: 'Wilmington 47'
            },
            {
                number: 'PRO#1012',
                name: 'Owner to Select Kitchen Cabinets',
                project: 'Wilmington 47'
            },
            {
                number: 'TSK#1982',
                name: 'Submit Invoice for Additional Lumber',
                project: 'Wilmington 47'
            }
            ,
            {
                number: 'TSK#1029',
                name: 'Discuss Ventilation Options',
                project: 'Wilmington 47'
            },
            {
                number: 'TSK#1123',
                name: 'Complete Fireplace Framing',
                project: 'Wilmington 47'
            },
            {
                number: 'TSK#1184',
                name: 'Close Garage Roof',
                project: 'Wilmington 47'
            },
            {
                number: 'TSK#1201',
                name: 'Finish Closing in Roof',
                project: 'Wilmington 47'
            },
            {
                number: 'TSK#1392',
                name: 'Roof Dry-In Discussion',
                project: 'Wilmington 47'
            },
            {
                number: 'RFI#1923',
                name: 'Roofline Modification',
                project: 'Wilmington 47'
            },
            {
                number: 'SOW#1009',
                name: 'Framing',
                project: 'Wilmington 48'
            },
            {
                number: 'RFI#1926',
                name: 'Radiant Flooring in Kitchen',
                project: 'Wilmington 48'
            },
            {
                number: 'TSK#1014',
                name: 'Follow Up on Steel Support',
                project: 'Wilmington 48'
            }
        ];

        $scope.projectList = [
            {
                name: 'Wilmington 45',
                address1: '45 Wilmington Ave',
                address2: 'Arlington, VA 90125',
                role: 'General Contractor',
                flag: {
                    alert_count: 16,
                    red_value: 5,
                    red_percent: 5*100/16,
                    orange_value: 2,
                    orange_percent: 2*100/16,
                    green_value: 9,
                    green_percent: 9*100/16
                },
                user_list: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        title: 'Structural Support',
                        assignee: 'John Steel',
                        status: 'In Process',
                        progress: 95
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        title: 'Garage Slab',
                        assignee: 'Dale Guerra',
                        status: ' ',
                        progress: 0
                    },
                    {
                        photo: 'assets/img/avasisteam/john.jpg',
                        title: 'Foundation',
                        assignee: 'Adam Simpson',
                        status: 'Completed',
                        progress: 100
                    }
                ],
                chart_data: [
                    {
                        value: 32,
                        color: "#79c485",
                        text: ""
                    },
                    {
                        value: 64,
                        color: "#3aabd5",
                        text: ""
                    }
                ],
                estimated_date: 'May 1,2016',
                original_date: 'May 1,2016',
                funds_distributed: 400795,
                estimated_cost: 2500000,
                items_completed: 30,
                itemList: [
                    {
                        number: 'RFI#1244',
                        name: 'Garage Cement Finish',
                        project: ''
                    },
                    {
                        number: 'BID#1833',
                        name: 'Structural Metal Framing',
                        project: ''
                    },
                    {
                        number: 'PRO#1017',
                        name: 'Garage Concrete Slab',
                        project: ''
                    },
                    {
                        number: 'CO#2339',
                        name: 'Additional Storage',
                        project: ''
                    },
                    {
                        number: 'TSK#1405',
                        name: 'Complete Rough Electical',
                        project: ''
                    }
                ],
                member_count: 5,
                memberList: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        name: 'Iris Kennedy',
                        role: 'Banker',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        name: 'Bruce Wayne',
                        role: 'General Contractor',
                        chat: 'chat',
                        email: 'email',
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        name: 'Christine Spendlove',
                        role: 'Sub Contractor',
                        phone: 'chat'
                    },
                    {
                        photo: 'assets/img/avasisteam/john.jpg',
                        name: 'Dave Gebo',
                        role: 'Sub Contractor',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    },
                    {
                        photo: 'assets/img/avasisteam/gebo.jpg',
                        name: 'John Steel',
                        role: 'Sub Contractor',
                        chat: 'chat',
                        phone: 'phone'
                    }
                ]
            },
            {
                name: 'Wilmington 46',
                address1: '46 Wilmington Ave',
                address2: 'Arlington, VA 90125',
                role: 'General Contractor',
                flag: {
                    alert_count: 11,
                    red_value: 2,
                    red_percent: 2*100/11,
                    orange_value: 3,
                    orange_percent: 3*100/11,
                    green_value: 6,
                    green_percent: 6*100/11
                },
                user_list: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        title: 'Exterior Finish',
                        assignee: 'Dave Gebo',
                        status: 'In Progress',
                        progress: 75
                    }
                ],
                chart_data: [
                    {
                        value: 32,
                        color: "#79c485",
                        text: ""
                    },
                    {
                        value: 64,
                        color: "#3aabd5",
                        text: ""
                    }
                ],
                estimated_date: 'Jan. 15, 2016',
                original_date: 'Dec. 1, 2015',
                funds_distributed: 1773200,
                estimated_cost: 2640899,
                items_completed: 30,
                itemList: [
                    {
                        number: 'RFI#1272',
                        name: 'Roofline Materials',
                        project: ''
                    },
                    {
                        number: 'RFI#1012',
                        name: 'Vinyl Siding',
                        project: ''
                    }
                ],
                member_count: 3,
                memberList: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        name: 'Alicia Pinot',
                        role: 'Banker',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        name: 'Bruce Wayne',
                        role: 'General Contractor',
                        chat: 'chat',
                        email: 'email',
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        name: 'Beth Wiseman',
                        role: 'Office Administrator',
                        phone: 'chat'
                    }
                ]
            },
            {
                name: 'Wilmington 47',
                address1: '47 Wilmington Ave',
                address2: 'Arlington, VA 90125',
                role: 'General Contractor',
                flag: {
                    alert_count: 27,
                    red_value: 10,
                    red_percent: 10*100/27,
                    orange_value: 5,
                    orange_percent: 5*100/27,
                    green_value: 12,
                    green_percent: 12*100/27
                },
                user_list: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        title: 'Roof Dry-In',
                        assignee: 'Gave Gebo',
                        status: 'In Progress',
                        progress: 60
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        title: 'Rough HAVC',
                        assignee: 'Dave Musgrove',
                        status: 'Suspended',
                        progress: 40
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        title: 'Rough Electrical',
                        assignee: 'Mike Riley',
                        status: 'In Progress',
                        progress: 90
                    }
                ],
                chart_data: [
                    {
                        value: 32,
                        color: "#79c485",
                        text: ""
                    },
                    {
                        value: 64,
                        color: "#3aabd5",
                        text: ""
                    }
                ],
                estimated_date: 'Dec. 28, 2015',
                original_date: 'Nov. 14, 2015',
                funds_distributed: 903348,
                estimated_cost: 2788284 ,
                items_completed: 30,
                itemList: [
                    {
                        number: 'BID#1031',
                        name: 'Hardwood Flooring',
                        project: ''
                    },
                    {
                        number: 'SOW#1092',
                        name: 'Roof Dry-In',
                        project: ''
                    },
                    {
                        number: 'PRO#1012',
                        name: 'Main Floor Fireplace',
                        project: ''
                    },
                    {
                        number: 'TSK#1982',
                        name: 'Submit Invoice for Additional Lumber',
                        project: ''
                    },
                    {
                        number: 'TSK#1029',
                        name: 'Discuss Ventilation Options',
                        project: ''
                    },
                    {
                        number: 'TSK#',
                        name: 'Complete Fireplace Framing',
                        project: ''
                    },
                    {
                        number: 'TSK#',
                        name: 'Close Garage Roof',
                        project: ''
                    },
                    {
                        number: 'TSK#',
                        name: 'Finish Closing in Roof',
                        project: ''
                    },
                    {
                        number: 'TSK#',
                        name: 'Roof Dry-In',
                        project: ''
                    },
                    {
                        number: 'RFI#1923',
                        name: 'Roofline Modification',
                        project: ''
                    }
                ],
                member_count: 78,
                memberList: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        name: 'Jane Smith',
                        role: 'Owner',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        name: 'Iris Kennedy',
                        role: 'Banker',
                        chat: 'chat',
                        email: 'email',
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        name: 'Bruce Wayne',
                        role: 'General Contractor',
                        phone: 'chat'
                    },
                    {
                        photo: 'assets/img/avasisteam/john.jpg',
                        name: 'Beth Wiseman',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    }
                ]
            },
            {
                name: 'Wilmington 48',
                address1: '48 Wilmington Ave',
                address2: 'Arlington, VA 90125',
                role: 'General Contractor',
                flag: {
                    alert_count: 22,
                    red_value: 3,
                    red_percent: 3*100/22,
                    orange_value: 4,
                    orange_percent: 4*100/22,
                    green_value: 15,
                    green_percent: 15*100/22
                },
                user_list: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        title: 'Plumbing ',
                        assignee: 'Christine Spendlove',
                        status: 'In Progress',
                        progress: 20
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        title: 'Framing',
                        assignee: 'Dan Bonker',
                        status: 'Completed',
                        progress: 100
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        title: 'Landscaping',
                        assignee: 'Torben Moench',
                        status: 'In Progress',
                        progress: 5
                    }
                ],
                chart_data: [
                    {
                        value: 32,
                        color: "#79c485",
                        text: ""
                    },
                    {
                        value: 64,
                        color: "#3aabd5",
                        text: ""
                    }
                ],
                estimated_date: 'Oct. 21, 2015',
                original_date: 'Oct. 30, 2015',
                funds_distributed: 2241457,
                estimated_cost: 2487873,
                items_completed: 30,
                itemList: [
                    {
                        number: 'SOW#1009',
                        name: 'Framing',
                        project: ''
                    },
                    {
                        number: 'RFI#1926',
                        name: 'Radiant Flooring in Kitchen',
                        project: ''
                    },
                    {
                        number: 'RFI #145',
                        name: 'Zoning permit for South Entrance',
                        project: 'Mike Dustin'
                    },
                    {
                        number: 'TSK#1014',
                        name: 'Follow Up on Steel Support',
                        project: ''
                    }
                ],
                member_count: 3,
                memberList: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        name: 'Iris Kennedy',
                        role: 'Banker',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        name: 'Dave Gebo ',
                        role: 'Sub Contractor',
                        chat: 'chat',
                        email: 'email',
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        name: 'Dan Bonker',
                        role: 'Sub Contractor',
                        phone: 'chat'
                    }
                ]
            }
        ];

        $scope.slickSetting = [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            }
        ];

        $timeout(function() {
            $scope.itemsCompleted = 33;
        }, 500);
        $scope.oneAtATime = false;
    }]
);
