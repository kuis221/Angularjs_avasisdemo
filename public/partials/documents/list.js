app.controller('DocumentsCtrl',
    ['$scope', '$uibModal', function($scope, $uibModal) {
        $scope.documents = [{
            'id': 1,
            'title': 'General Documents',
            'children': [
              {
                'id': 11,
                'title': 'RFI',
                'has_files': 'true', 
                'children': [
                  {
                    'id': 111,
                    'title': 'FirePlace Concrete',
                    'project': 'Enclave 14',
                    'scope_of_work': 'Hange the Wall Cabinets, Install Base Cabinets, Measure Base Cabinets',
                    'team_members': [{
                        'name': 'Bob Jones',
                        'job_title': 'Sub Contractor'
                    }],
                    'access': 'Andrew K., Bryan Lloyd'
                  },
                  {
                    'id': 112,
                    'title': 'Inceptos Sit Condimentum',
                    'project': 'Prus Egestas',
                    'scope_of_work': 'Estimate the hours how much we need',
                    'team_members': [{
                        'name': 'Bryan Lloyd',
                        'job_title': 'Contractor'
                    }],
                    'access': 'Joana, Eric'
                  }
                ]
              },
              {
                'id': 12,
                'title': 'Change Order',
                'children': []
              },
              {
                'id': 12,
                'title': 'Inspections',
                'children': []
              },
              {
                'id': 12,
                'title': 'Punch List',
                'children': []
              }
            ]
          }, {
            'id': 2,
            'title': 'Action Items',
            'children': [
              {
                'id': 11,
                'title': 'RFI',
                'has_files': 'true',
                'children': [
                  {
                    'id': 111,
                    'title': 'FirePlace Concrete',
                    'project': 'Enclave 14',
                    'scope_of_work': 'Hange the Wall Cabinets, Install Base Cabinets, Measure Base Cabinets',
                    'team_members': [{
                        'name': 'Bob Jones',
                        'job_title': 'Sub Contractor'
                    }],
                    'access': 'Andrew K., Bryan Lloyd'
                  }
                ]
              },
              {
                'id': 12,
                'title': 'Change Order',
                'children': []
              },
              {
                'id': 12,
                'title': 'Inspections',
                'children': []
              },
              {
                'id': 12,
                'title': 'Punch List',
                'children': []
              }
            ]
          }, {
            'id': 3,
            'title': 'Compliance Documents',
            'children': []
          }, {
            'id': 3,
            'title': 'Financials Documents',
            'children': []
          }, {
            'id': 3,
            'title': 'Bids',
            'children': []
          }, {
            'id': 3,
            'title': 'Owner Selections',
            'children': []
          }, {
            'id': 3,
            'title': 'Reports',
            'children': []
          }];

        $scope.showUploadModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/documents/upload-modal.html',
                controller: 'UploadDocumentModalCtrl',
            });

            modalInstance.result.then(function (res) {
                console.log('Document uploaded')
            }, function () {

            });
        }
    }]);