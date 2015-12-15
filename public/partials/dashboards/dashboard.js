app.controller('DashboardCtrl',
    ['$scope', '$stateParams', '$timeout', function ($scope, $stateParams, $timeout) {

        $scope.flagProjectList = [
            {
                name: 'Project name goes here',
                alert_count: 314,
                red_value: 78,
                red_percent: '25%',
                orange_value: 78,
                orange_percent: '25%',
                green_value: 78,
                green_percent: '25%'
            },
            {
                name: 'Project name goes here',
                alert_count: 314,
                red_value: 78,
                red_percent: '25%',
                orange_value: 78,
                orange_percent: '25%',
                green_value: 78,
                green_percent: '25%'
            },
            {
                name: 'Project name goes here',
                alert_count: 314,
                red_value: 78,
                red_percent: '25%',
                orange_value: 78,
                orange_percent: '25%',
                green_value: 78,
                green_percent: '25%'
            },
            {
                name: 'Project name goes here',
                alert_count: 314,
                red_value: 78,
                red_percent: '25%',
                orange_value: 78,
                orange_percent: '25%',
                green_value: 78,
                green_percent: '25%'
            }
        ];

        $scope.todayItemList = [
            {
                number: 'RFI #145',
                name: 'Praking Lots A, B, C need lot survey in order to something',
                project: 'Project Name Goes Here'
            },
            {
                number: 'RFI #145',
                name: 'Kitchen Cabinets',
                project: 'Project Name Goes Here'
            },
            {
                number: 'RFI #145',
                name: 'Zoning permit for South Entrance',
                project: 'Project Name Goes Here'
            },
            {
                number: 'RFI #145',
                name: 'Main Floor Cooling',
                project: 'Project Name Goes Here'
            },
            {
                number: 'RFI #145',
                name: 'Main Floor Heating',
                project: 'Project Name Goes Here'
            },
            {
                number: 'RFI #145',
                name: 'Zoning permit for South Entrance',
                project: 'Project Name Goes Here'
            },
            {
                number: 'RFI #145',
                name: 'Main Floor Cooling',
                project: 'Project Name Goes Here'
            },
            {
                number: 'RFI #145',
                name: 'Praking Lots A, B, C need lot survey in order to something',
                project: 'Project Name Goes Here'
            },
            {
                number: 'RFI #145',
                name: 'Praking Lots A, B, C need lot survey in order to something',
                project: 'Project Name Goes Here'
            },
            {
                number: 'RFI #145',
                name: 'Praking Lots A, B, C need lot survey in order to something',
                project: 'Project Name Goes Here'
            }
        ];

        $scope.projectList = [
            {
                name: 'Project Name Goes Here',
                address: '1796 Prospector AvenuePark City, Utah 84605',
                role: 'General Contractor',
                flag: {
                    alert_count: 314,
                    red_value: 78,
                    red_percent: '25%',
                    orange_value: 78,
                    orange_percent: '25%',
                    green_value: 78,
                    green_percent: '25%'
                },
                user_list: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        title: 'Zoning permit for South Entrance',
                        assignee: 'Eric Hoffman, Joe Sloan, Clark Anderson, Michael Kovac',
                        status: 'SUSPENDED',
                        progress: 32
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        title: 'Risus Consectetur Fusce',
                        assignee: 'Davud Hunter, Clark Anderson, Michael Kovac',
                        status: 'IN PROGRESS',
                        progress: 89
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        title: 'Ornare Etiam',
                        assignee: 'Eric Hoffman, Clark Anderson, Michael Kovac',
                        status: 'COMPLETED',
                        progress: 100
                    },
                    {
                        photo: 'assets/img/avasisteam/john.jpg',
                        title: 'Zoning permit for South Entrance',
                        assignee: 'Eric Hoffman, Joe Sloan, Clark Anderson, Michael Kovac',
                        status: 'SUSPENDED',
                        progress: 32
                    },
                    {
                        photo: 'assets/img/avasisteam/gebo.jpg',
                        title: 'Zoning permit for South Entrance',
                        assignee: 'Eric Hoffman, Joe Sloan, Clark Anderson, Michael Kovac',
                        status: 'SUSPENDED',
                        progress: 32
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
                estimated_date: 'Apr 20, 2016',
                original_date: 'Nov 12, 2014',
                funds_distributed: 325000,
                estimated_cost: 10000000,
                items_completed: 30,
                itemList: [
                    {
                        number: 'RFI #145',
                        name: 'Praking Lots A, B, C need lot survey in order to something',
                        project: 'Eric Hoffman'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Kitchen Cabinets',
                        project: 'Darren Summers'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Zoning permit for South Entrance',
                        project: 'Mike Dustin'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Main Floor Cooling',
                        project: 'Eric Hoffman'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Main Floor Heating',
                        project: 'Mike Dustin'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Zoning permit for South Entrance',
                        project: 'Darren Summers'
                    }
                ],
                member_count: 78,
                memberList: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        name: 'Jim Stevens',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        name: 'Eric Hoffman',
                        role: 'Contractor',
                        chat: 'chat',
                        email: 'email',
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        name: 'Jil Graves',
                        role: 'Sub-Contractor',
                        phone: 'chat'
                    },
                    {
                        photo: 'assets/img/avasisteam/john.jpg',
                        name: 'Jim Stevens',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    },
                    {
                        photo: 'assets/img/avasisteam/gebo.jpg',
                        name: 'Eric Hoffman',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        phone: 'phone'
                    }
                ]
            },
            {
                name: 'Project Name Goes Here',
                address: '1796 Prospector AvenuePark City, Utah 84605',
                role: 'OD',
                flag: {
                    alert_count: 314,
                    red_value: 78,
                    red_percent: '25%',
                    orange_value: 78,
                    orange_percent: '25%',
                    green_value: 78,
                    green_percent: '25%'
                },
                user_list: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        title: 'Zoning permit for South Entrance',
                        assignee: 'Eric Hoffman, Joe Sloan, Clark Anderson, Michael Kovac',
                        status: 'SUSPENDED',
                        progress: 32
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        title: 'Risus Consectetur Fusce',
                        assignee: 'Davud Hunter, Clark Anderson, Michael Kovac',
                        status: 'IN PROGRESS',
                        progress: 89
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        title: 'Ornare Etiam',
                        assignee: 'Eric Hoffman, Clark Anderson, Michael Kovac',
                        status: 'COMPLETED',
                        progress: 100
                    },
                    {
                        photo: 'assets/img/avasisteam/john.jpg',
                        title: 'Zoning permit for South Entrance',
                        assignee: 'Eric Hoffman, Joe Sloan, Clark Anderson, Michael Kovac',
                        status: 'SUSPENDED',
                        progress: 32
                    },
                    {
                        photo: 'assets/img/avasisteam/gebo.jpg',
                        title: 'Zoning permit for South Entrance',
                        assignee: 'Eric Hoffman, Joe Sloan, Clark Anderson, Michael Kovac',
                        status: 'SUSPENDED',
                        progress: 32
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
                estimated_date: 'Apr 20, 2016',
                original_date: 'Nov 12, 2014',
                funds_distributed: 325000,
                estimated_cost: 10000000,
                items_completed: 30,
                itemList: [
                    {
                        number: 'RFI #145',
                        name: 'Praking Lots A, B, C need lot survey in order to something',
                        project: 'Eric Hoffman'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Kitchen Cabinets',
                        project: 'Darren Summers'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Zoning permit for South Entrance',
                        project: 'Mike Dustin'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Main Floor Cooling',
                        project: 'Eric Hoffman'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Main Floor Heating',
                        project: 'Mike Dustin'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Zoning permit for South Entrance',
                        project: 'Darren Summers'
                    }
                ],
                member_count: 78,
                memberList: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        name: 'Jim Stevens',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        name: 'Eric Hoffman',
                        role: 'Contractor',
                        chat: 'chat',
                        email: 'email',
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        name: 'Jil Graves',
                        role: 'Sub-Contractor',
                        phone: 'chat'
                    },
                    {
                        photo: 'assets/img/avasisteam/john.jpg',
                        name: 'Jim Stevens',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    },
                    {
                        photo: 'assets/img/avasisteam/gebo.jpg',
                        name: 'Eric Hoffman',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        phone: 'phone'
                    }
                ]
            },
            {
                name: 'Project Name Goes Here',
                address: '1796 Prospector AvenuePark City, Utah 84605',
                role: 'SubContractor',
                flag: {
                    alert_count: 314,
                    red_value: 78,
                    red_percent: '25%',
                    orange_value: 78,
                    orange_percent: '25%',
                    green_value: 78,
                    green_percent: '25%'
                },
                user_list: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        title: 'Zoning permit for South Entrance',
                        assignee: 'Eric Hoffman, Joe Sloan, Clark Anderson, Michael Kovac',
                        status: 'SUSPENDED',
                        progress: 32
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        title: 'Risus Consectetur Fusce',
                        assignee: 'Davud Hunter, Clark Anderson, Michael Kovac',
                        status: 'IN PROGRESS',
                        progress: 89
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        title: 'Ornare Etiam',
                        assignee: 'Eric Hoffman, Clark Anderson, Michael Kovac',
                        status: 'COMPLETED',
                        progress: 100
                    },
                    {
                        photo: 'assets/img/avasisteam/john.jpg',
                        title: 'Zoning permit for South Entrance',
                        assignee: 'Eric Hoffman, Joe Sloan, Clark Anderson, Michael Kovac',
                        status: 'SUSPENDED',
                        progress: 32
                    },
                    {
                        photo: 'assets/img/avasisteam/gebo.jpg',
                        title: 'Zoning permit for South Entrance',
                        assignee: 'Eric Hoffman, Joe Sloan, Clark Anderson, Michael Kovac',
                        status: 'SUSPENDED',
                        progress: 32
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
                estimated_date: 'Apr 20, 2016',
                original_date: 'Nov 12, 2014',
                funds_distributed: 325000,
                estimated_cost: 10000000,
                items_completed: 30,
                itemList: [
                    {
                        number: 'RFI #145',
                        name: 'Praking Lots A, B, C need lot survey in order to something',
                        project: 'Eric Hoffman'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Kitchen Cabinets',
                        project: 'Darren Summers'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Zoning permit for South Entrance',
                        project: 'Mike Dustin'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Main Floor Cooling',
                        project: 'Eric Hoffman'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Main Floor Heating',
                        project: 'Mike Dustin'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Zoning permit for South Entrance',
                        project: 'Darren Summers'
                    }
                ],
                member_count: 78,
                memberList: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        name: 'Jim Stevens',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        name: 'Eric Hoffman',
                        role: 'Contractor',
                        chat: 'chat',
                        email: 'email',
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        name: 'Jil Graves',
                        role: 'Sub-Contractor',
                        phone: 'chat'
                    },
                    {
                        photo: 'assets/img/avasisteam/john.jpg',
                        name: 'Jim Stevens',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    },
                    {
                        photo: 'assets/img/avasisteam/gebo.jpg',
                        name: 'Eric Hoffman',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        phone: 'phone'
                    }
                ]
            },
            {
                name: 'Project Name Goes Here',
                address: '1796 Prospector AvenuePark City, Utah 84605',
                role: 'Banker',
                flag: {
                    alert_count: 314,
                    red_value: 78,
                    red_percent: '25%',
                    orange_value: 78,
                    orange_percent: '25%',
                    green_value: 78,
                    green_percent: '25%'
                },
                user_list: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        title: 'Zoning permit for South Entrance',
                        assignee: 'Eric Hoffman, Joe Sloan, Clark Anderson, Michael Kovac',
                        status: 'SUSPENDED',
                        progress: 32
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        title: 'Risus Consectetur Fusce',
                        assignee: 'Davud Hunter, Clark Anderson, Michael Kovac',
                        status: 'IN PROGRESS',
                        progress: 89
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        title: 'Ornare Etiam',
                        assignee: 'Eric Hoffman, Clark Anderson, Michael Kovac',
                        status: 'COMPLETED',
                        progress: 100
                    },
                    {
                        photo: 'assets/img/avasisteam/john.jpg',
                        title: 'Zoning permit for South Entrance',
                        assignee: 'Eric Hoffman, Joe Sloan, Clark Anderson, Michael Kovac',
                        status: 'SUSPENDED',
                        progress: 32
                    },
                    {
                        photo: 'assets/img/avasisteam/gebo.jpg',
                        title: 'Zoning permit for South Entrance',
                        assignee: 'Eric Hoffman, Joe Sloan, Clark Anderson, Michael Kovac',
                        status: 'SUSPENDED',
                        progress: 32
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
                estimated_date: 'Apr 20, 2016',
                original_date: 'Nov 12, 2014',
                funds_distributed: 325000,
                estimated_cost: 10000000,
                items_completed: 30,
                itemList: [
                    {
                        number: 'RFI #145',
                        name: 'Praking Lots A, B, C need lot survey in order to something',
                        project: 'Eric Hoffman'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Kitchen Cabinets',
                        project: 'Darren Summers'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Zoning permit for South Entrance',
                        project: 'Mike Dustin'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Main Floor Cooling',
                        project: 'Eric Hoffman'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Main Floor Heating',
                        project: 'Mike Dustin'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Zoning permit for South Entrance',
                        project: 'Darren Summers'
                    }
                ],
                member_count: 78,
                memberList: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        name: 'Jim Stevens',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        name: 'Eric Hoffman',
                        role: 'Contractor',
                        chat: 'chat',
                        email: 'email',
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        name: 'Jil Graves',
                        role: 'Sub-Contractor',
                        phone: 'chat'
                    },
                    {
                        photo: 'assets/img/avasisteam/john.jpg',
                        name: 'Jim Stevens',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    },
                    {
                        photo: 'assets/img/avasisteam/gebo.jpg',
                        name: 'Eric Hoffman',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        phone: 'phone'
                    }
                ]
            },
            {
                name: 'Project Name Goes Here',
                address: '1796 Prospector AvenuePark City, Utah 84605',
                role: 'General',
                flag: {
                    alert_count: 314,
                    red_value: 78,
                    red_percent: '25%',
                    orange_value: 78,
                    orange_percent: '25%',
                    green_value: 78,
                    green_percent: '25%'
                },
                user_list: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        title: 'Zoning permit for South Entrance',
                        assignee: 'Eric Hoffman, Joe Sloan, Clark Anderson, Michael Kovac',
                        status: 'SUSPENDED',
                        progress: 32
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        title: 'Risus Consectetur Fusce',
                        assignee: 'Davud Hunter, Clark Anderson, Michael Kovac',
                        status: 'IN PROGRESS',
                        progress: 89
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        title: 'Ornare Etiam',
                        assignee: 'Eric Hoffman, Clark Anderson, Michael Kovac',
                        status: 'COMPLETED',
                        progress: 100
                    },
                    {
                        photo: 'assets/img/avasisteam/john.jpg',
                        title: 'Zoning permit for South Entrance',
                        assignee: 'Eric Hoffman, Joe Sloan, Clark Anderson, Michael Kovac',
                        status: 'SUSPENDED',
                        progress: 32
                    },
                    {
                        photo: 'assets/img/avasisteam/gebo.jpg',
                        title: 'Zoning permit for South Entrance',
                        assignee: 'Eric Hoffman, Joe Sloan, Clark Anderson, Michael Kovac',
                        status: 'SUSPENDED',
                        progress: 32
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
                estimated_date: 'Apr 20, 2016',
                original_date: 'Nov 12, 2014',
                funds_distributed: 325000,
                estimated_cost: 10000000,
                items_completed: 30,
                itemList: [
                    {
                        number: 'RFI #145',
                        name: 'Praking Lots A, B, C need lot survey in order to something',
                        project: 'Eric Hoffman'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Kitchen Cabinets',
                        project: 'Darren Summers'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Zoning permit for South Entrance',
                        project: 'Mike Dustin'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Main Floor Cooling',
                        project: 'Eric Hoffman'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Main Floor Heating',
                        project: 'Mike Dustin'
                    },
                    {
                        number: 'RFI #145',
                        name: 'Zoning permit for South Entrance',
                        project: 'Darren Summers'
                    }
                ],
                member_count: 78,
                memberList: [
                    {
                        photo: 'assets/img/avasisteam/dave.jpg',
                        name: 'Jim Stevens',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    },
                    {
                        photo: 'assets/img/avasisteam/mike.jpg',
                        name: 'Eric Hoffman',
                        role: 'Contractor',
                        chat: 'chat',
                        email: 'email',
                    },
                    {
                        photo: 'assets/img/avasisteam/mary.jpg',
                        name: 'Jil Graves',
                        role: 'Sub-Contractor',
                        phone: 'chat'
                    },
                    {
                        photo: 'assets/img/avasisteam/john.jpg',
                        name: 'Jim Stevens',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        email: 'email',
                        phone: 'phone'
                    },
                    {
                        photo: 'assets/img/avasisteam/gebo.jpg',
                        name: 'Eric Hoffman',
                        role: 'Sub-Contractor',
                        chat: 'chat',
                        phone: 'phone'
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
