app.controller('SOWModalCtrl',
  ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    $scope.create = function() {
      $uibModalInstance.close();
    };

    $scope.users = [];
    $scope.predecessors = [1];
    $scope.successors = [1];
    
    $scope.isMoreOptionsHidden = true;

    $scope.toggleMoreOptions = function() {
      $scope.isMoreOptionsHidden = !$scope.isMoreOptionsHidden;
    };


  }]);