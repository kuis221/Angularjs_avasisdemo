app.controller('InspectionsMainPopupCtrl',
    ['$scope', '$stateParams', '$uibModal', function ($scope, $stateParams, $uibModal) {

        $scope.inspectionProgress = 25;
        $scope.leadList = [
            { id: 1, name: 'Bob Jones'},
            { id: 2, name: 'Darcy Bertrand'},
            { id: 3, name: 'Bryan Lloyd'},
            { id: 3, name: 'Anrew Klein'}
        ];

        $scope.outstandingItems = [
            {
                status: 'red',
                title: 'Lorem Dapibus Vestibulum',
                titleStatus: 'Plumbing',
                dueDate: 'May 23, 2015',
                responsible: {
                    name: 'Bob Jones',
                    phone: '415-123-3456'
                },
                scope: 'Pellentesque',
                location: 'kitchen',
                approveName: 'Gaody Bishop',
                approveDate: 'Aug 23, 2015'
            },
            {
                status: 'orange',
                title: 'Lorem Dapibus Vestibulum',
                titleStatus: 'Plumbing',
                dueDate: 'May 23, 2015',
                responsible: {
                    name: 'Bob Jones',
                    phone: '415-123-3456'
                },
                scope: 'Pellentesque',
                location: 'kitchen',
                approveName: 'Gaody Bishop',
                approveDate: 'Aug 23, 2015'
            },
            {
                status: 'green',
                title: 'Lorem Dapibus Vestibulum',
                titleStatus: 'Plumbing',
                dueDate: 'May 23, 2015',
                responsible: {
                    name: 'Bob Jones',
                    phone: '415-123-3456'
                },
                scope: 'Pellentesque',
                location: 'kitchen',
                approveName: 'Gaody Bishop',
                approveDate: 'Aug 23, 2015'
            }
        ];

        $scope.completedItems = [
            {
                status: 'red',
                title: 'Lorem Dapibus Vestibulum',
                titleStatus: 'Plumbing',
                dueDate: 'May 23, 2015',
                responsible: {
                    name: 'Bob Jones',
                    phone: '415-123-3456'
                },
                scope: 'Pellentesque',
                location: 'kitchen',
                approveName: 'Gaody Bishop',
                approveDate: 'Aug 23, 2015'
            },
            {
                status: 'orange',
                title: 'Lorem Dapibus Vestibulum',
                titleStatus: 'Plumbing',
                dueDate: 'May 23, 2015',
                responsible: {
                    name: 'Bob Jones',
                    phone: '415-123-3456'
                },
                scope: 'Pellentesque',
                location: 'kitchen',
                approveName: 'Gaody Bishop',
                approveDate: 'Aug 23, 2015'
            },
            {
                status: 'green',
                title: 'Lorem Dapibus Vestibulum',
                titleStatus: 'Plumbing',
                dueDate: 'May 23, 2015',
                responsible: {
                    name: 'Bob Jones',
                    phone: '415-123-3456'
                },
                scope: 'Pellentesque',
                location: 'kitchen',
                approveName: 'Gaody Bishop',
                approveDate: 'Aug 23, 2015'
            }
        ];

        $scope.getFlagIcon = function(status) {
            var icon_name = '';
            switch (status) {
                case 'red':
                    icon_name = 'red_icon.png';
                    break;
                case 'green':
                    icon_name = 'flag_green.png';
                    break;
                case 'orange':
                    icon_name = 'yellow _icon.png';
                    break;
                default:
                    icon_name = 'red_icon.png';
                    break;
            }

            return icon_name;
        }

        $scope.showInspectionDetail = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/action-items/inspections/detail-modal.html',
                controller: 'InspectionDetailCtrl',
                windowClass: 'tm-modal-main'
            });

            modalInstance.result.then(function (res) {
            }, function () {

            });
        }
    }]
);
