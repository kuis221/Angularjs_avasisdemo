/**
 * Created by Darcy on 12/2/2015.
 */
'use strict'

app.controller('ProjectsCtrl', function($scope, $state, $stateParams) {
    $scope.schedule_completed = 0;
    $scope.project_completed = 0;

    $scope.init_overview_page = function() {
        $scope.schedule_completed = 32;
        $scope.project_completed = 60;
    }
});
