app.controller('ActionItemsCtrl',
    ['$scope', '$stateParams', function($scope, $stateParams) {
        $scope.items = [];
        $scope.pieOptions = {
            type: 'pie',
            height: '50px',
            offset: -90,
            sliceColors: ['#79c485', '#eeeeee'],
            disableTooltips: true
        };
        var gai = {
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
            }
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

        $scope.items.push(gai);
        $scope.items.push(rfi);
        $scope.items.push(changeOrder);
        $scope.items.push(punchList);
        $scope.items.push(inspections);
    }]);
