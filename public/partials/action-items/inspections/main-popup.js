app.controller('InspectionsMainPopupCtrl',
    ['$scope', '$stateParams', '$uibModal', function ($scope, $stateParams, $uibModal) {

        $scope.inspectionProgress = 25;
        $scope.leadList = [
            { id: 1, name: 'Bruce Wayne'},
            { id: 2, name: 'Mike Riley'},
            { id: 3, name: 'Mary Beroset'},
            { id: 3, name: 'Dabe Gebo'}
        ];

        $scope.outstandingItems = [
            {
                status: 'red',
                title: 'Rough Framing',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: 'Framing',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            },
            {
                status: 'red',
                title: 'Rough Masonry',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: '',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            },
            {
                status: 'red',
                title: 'Structure Dry-In',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: 'Dry-In',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            },
            {
                status: 'red',
                title: 'Doors & Windows Installed',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: 'Dry-In',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            },
            {
                status: 'red',
                title: 'Fireplaces',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: 'Fire Place',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            },
            {
                status: 'red',
                title: 'Rough Flashing',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: 'Roofing',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            },
            {
                status: 'red',
                title: 'Shingles',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: 'Roofing',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            },
            {
                status: 'red',
                title: 'Exit Doors',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: 'Dry-In',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            },
            {
                status: 'red',
                title: 'Sleeping Room Exits',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: 'Dry-In',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            },
            {
                status: 'red',
                title: 'Stairs',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: '',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            },
            {
                status: 'red',
                title: 'Stair Landings',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: '',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            },
            {
                status: 'red',
                title: 'Structure Members',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: '',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            },
            {
                status: 'red',
                title: 'Load Bearing Members',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: 'Framing',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            },
            {
                status: 'red',
                title: 'Framing Members',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: 'Framing',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            },
            {
                status: 'red',
                title: 'Attic Areas',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: '',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            },
            {
                status: 'red',
                title: 'Fire Blocking',
                titleStatus: '',
                dueDate: 'Aug 25, 2015',
                responsible: {
                    name: 'Mike Montgomery',
                    phone: '415-123-3456'
                },
                scope: '',
                location: '-',
                approveName: 'Bruce Wayne',
                approveDate: 'Aug 25, 2015'
            }
        ];

        $scope.completedItems = [
            // {
            //     status: 'red',
            //     title: 'Lorem Dapibus Vestibulum',
            //     titleStatus: 'Plumbing',
            //     dueDate: 'May 23, 2015',
            //     responsible: {
            //         name: 'Bob Jones',
            //         phone: '415-123-3456'
            //     },
            //     scope: 'Pellentesque',
            //     location: 'kitchen',
            //     approveName: 'Gaody Bishop',
            //     approveDate: 'Aug 23, 2015'
            // },
            // {
            //     status: 'orange',
            //     title: 'Lorem Dapibus Vestibulum',
            //     titleStatus: 'Plumbing',
            //     dueDate: 'May 23, 2015',
            //     responsible: {
            //         name: 'Bob Jones',
            //         phone: '415-123-3456'
            //     },
            //     scope: 'Pellentesque',
            //     location: 'kitchen',
            //     approveName: 'Gaody Bishop',
            //     approveDate: 'Aug 23, 2015'
            // },
            // {
            //     status: 'green',
            //     title: 'Lorem Dapibus Vestibulum',
            //     titleStatus: 'Plumbing',
            //     dueDate: 'May 23, 2015',
            //     responsible: {
            //         name: 'Bob Jones',
            //         phone: '415-123-3456'
            //     },
            //     scope: 'Pellentesque',
            //     location: 'kitchen',
            //     approveName: 'Gaody Bishop',
            //     approveDate: 'Aug 23, 2015'
            // }
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
