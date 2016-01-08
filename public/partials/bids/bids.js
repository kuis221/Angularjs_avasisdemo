app.controller('BidsCtrl', ['$scope', '$uibModal', function($scope, $uibModal){
    $scope.showBidsCompareModal = function(){
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/bids/bids-modal.html',
            controller: 'BidsCompareModalCtrl',
            windowClass: 'bids-award-modal'
        });
        modalInstance.result.then(function(){
      }, function () {
      });
    };

    $scope.showSubcontractorModal = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/bids/bids-subcontractor-modal.html',
            controller: 'BidsSubcontractorModalCtrl',
            windowClass: 'bids-subcontractor-modal'
        });
    };

    $scope.showSowWorkModal = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/bids/scope-of-work-modal.html',
            controller: 'SOWModalCtrl',
            windowClass: 'scope-of-work-modal'
        });
    };

    /** 
    * Dropzone config
    */
    $scope.dropzoneConfig = {
        url: '/upload',
        parallelUploads: 2,
        maxFileSize: 30,
        acceptedFiles: "image/*,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/xml",
        clickable: '.btn-file-input',
        previewTemplate: $('.upload-preview').html(),
        previewsContainer: '#upload-files-container',
        accept: function(file) {
            var thumbnail = $(file.previewElement).find('span.preview img');
            switch (file.type) {
                case 'application/pdf':
                    thumbnail.attr('src', "assets/img/documents/icons/pdf_file.png");
                    $(file.previewElement).find('span.preview').addClass('not-image');
                    break;
                case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                    thumbnail.attr('src', "assets/img/documents/icons/text_file.png");
                    $(file.previewElement).find('span.preview').addClass('not-image');
                    break;
            }
        }
    };

    $scope.dropzoneEventHandlers = {
        addedfile: function(file) {
        },
        thumbnail: function(file, dataUrl) {
        },
    };

    $scope.sow = [
      {
        id: 1,
        name: 'Master bedroom cabinetry'
      }, {
        id: 2,
        name: 'Carpet'
      }, {
        id: 3,
        name: 'Main floor plumbing'
      }
    ];

    $scope.projects = [
      {
        id: 1,
        name: 'Wilmington 47'
      }, {
        id: 2,
        name: 'Anderson Bileos 53'
      }
    ];

    $scope.selectProject = function(p) {
      $scope.project = p.name;
    };

    $scope.opened = false;

    $scope.toggle = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.opened = !$scope.opened;
    }

}]);

app.controller('BidsSubcontractorModalCtrl',
    ['$scope', '$state', '$uibModalInstance', function($scope, $state, $uibModalInstance) {

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };

        $scope.distribute = function() {
            $uibModalInstance.dismiss('cancel');
            $state.go('bids.main');
        };

        $scope.contractors = [1, 2, 3, 4];
        
        $scope.add = function() {
            $scope.contractors.push(_.uniqueId());
        };
    }]);


app.controller('BidsAwardCtrl', ['$scope', '$uibModal', '$uibModalInstance', function($scope, $uibModal, $uibModalInstance){
  $scope.bid = 'Ridiculus Ornare Venenatis';
  $scope.project = 'Building Pool';
  $scope.price = '123456700';

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  }

    $scope.acceptBid = function() {
        $uibModalInstance.close();
        $uibModal.open({
            templateUrl: 'partials/bids/modals/award-final.html',
            controller: 'BidsAwardFinalCtrl',
            windowClass: 'bids-award-small-modal'
        });
    }

    $scope.declineBid = function() {
      $uibModalInstance.close();
      $uibModal.open({
            templateUrl: 'partials/bids/modals/decline-bid.html',
            controller: 'BidsDeclineCtrl',
            windowClass: 'bids-award-small-modal'
        });
    }
}]);


app.controller('BidsDeclineCtrl', ['$scope', '$uibModal', '$uibModalInstance', function($scope, $uibModal, $uibModalInstance){
  $scope.contractor = 'General Contractor Name';
  $scope.bid = 'Bid Name Goes Here';

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  }

  $scope.submit = function() {
    $uibModalInstance.close();
  }
}]);


app.controller('BidsAwardFinalCtrl', ['$scope', '$uibModal', '$uibModalInstance', function($scope, $uibModal, $uibModalInstance){
  $scope.bid = 'Ridiculus Ornare Venenatis';
  $scope.project = 'Building Pool';
  $scope.price = '123456700';
  $scope.requireMore = false;
  $scope.responsible = [
    {
      id: 1,
      name: 'Bob Jones'
    },
    {
      id: 2,
      name: 'Sit Bibendum'
    },
    {
      id: 3,
      name: 'Frusce Risus'
    }
  ];
  $scope.dueDate = 'Aug 23, 2015';
  $scope.requireMaterial = false;
  $scope.username = 'Eric Hoffman';
  $scope.signatureDate = 'Aug 23, 2015';

  $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.submit = function() {
        $uibModalInstance.close();
    }
}]);

