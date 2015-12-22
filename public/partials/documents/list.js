app.controller('DocumentsCtrl',
    ['$scope', '$uibModal', function($scope, $uibModal) {
        $scope.documents = [{
            id: 1,
            title: 'General Documents',
            children: [
              {
                id: 11,
                title: 'RFI',
                has_files: true, 
                children: [
                  {
                    id: 111,
                    title: 'Arthur Contruction RFI',
                    project: 'Wilmington 47',
                    is_file: true,
                    scope_of_work: 'Dry Wall',
                    team_members: [{
                        name: 'Brad Harrison',
                        job_title: 'Sub Contractor'
                    }],
                    access: 'Bruce Wayne'
                  },
                  {
                    id: 112,
                    title: 'Landscape Grade',
                    project: 'Wilmington 47',
                    is_file: true,
                    scope_of_work: 'Landscaping',
                    team_members: [{
                        name: 'Torben Moench',
                        job_title: 'Contractor'
                    }],
                    access: 'Bruce Wayne, Jane Smith'
                  }
                ]
              },
              {
                id: 12,
                title: 'Change Order',
                children: []
              },
              {
                id: 12,
                title: 'Inspections',
                children: []
              },
              {
                id: 12,
                title: 'Punch List',
                children: []
              }
            ]
          }, {
            id: 2,
            title: 'Action Items',
            children: [
              {
                id: 11,
                title: 'RFI',
                has_files: true,
                children: [
                  {
                    id: 111,
                    title: 'Arthur Contruction RFI',
                    project: 'Wilmington 47',
                    is_file: true,
                    scope_of_work: 'Dry Wall',
                    team_members: [{
                        name: 'Brad Harrison',
                        job_title: 'Sub Contractor'
                    }],
                    access: 'Bruce Wayne'
                  },
                  {
                    id: 112,
                    title: 'Landscape Grade',
                    project: 'Wilmington 47',
                    is_file: true,
                    scope_of_work: 'Landscaping',
                    team_members: [{
                        name: 'Torben Moench',
                        job_title: 'Contractor'
                    }],
                    access: 'Bruce Wayne, Jane Smith'
                  }
                ]
              },
              {
                id: 12,
                title: 'Change Order',
                children: []
              },
              {
                id: 12,
                title: 'Inspections',
                children: []
              },
              {
                id: 12,
                title: 'Punch List',
                children: []
              }
            ]
          }, {
            id: 3,
            title: 'Compliance Documents',
            children: []
          }, {
            id: 3,
            title: 'Financials Documents',
            children: []
          }, {
            id: 3,
            title: 'Bids',
            children: []
          }, {
            id: 3,
            title: 'Owner Selections',
            children: []
          }, {
            id: 3,
            title: 'Reports',
            children: []
          }];
        $scope.options = [
            {
                id: 1,
                name: "General Documents"
            }, {
                id: 2,
                name: "RFI"
            }, {
                id: 3,
                name: "Change Order"
            }, {
                id: 4,
                name: "Inspections"
            }, {
                id: 5,
                name: "Punch List"
            }
        ];

        $scope.selectedItem = angular.copy($scope.options[0]);
        $scope.selectedDocuments = [];

        $scope.isDocumentSelected = function() {
            return $scope.selectedDocuments.length > 0
        }

        $scope.selectDocument = function(document) {
            var index = $scope.selectedDocuments.indexOf(document.id)
            if (index >= 0) {
                $scope.selectedDocuments.splice(index, 1);
            } else {
                $scope.selectedDocuments.push(document.id);
            }
        }

        $scope.showUploadModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/documents/upload-modal.html',
                controller: 'UploadDocumentModalCtrl',
            });

            modalInstance.result.then(function (res) {
            }, function () {

            });
        }

        $scope.showDetailModal = function(doc) {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/documents/detail-modal.html',
                controller: 'DocumentDetailModalCtrl',
                windowClass: 'comment-modal',
                resolve: {
                    selectedDoc: function() {
                        return doc;
                    }
                },
                backdrop: 'static'
            });

            modalInstance.result.then(function (res) {
            }, function () {

            });
        }
    }]);