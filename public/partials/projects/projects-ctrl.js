/**
 * Created by Darcy on 12/2/2015.
 */
'use strict'

app.controller('ProjectsCtrl', function($scope, $state, $stateParams) {
    $scope.schedule_completed = 0;
    $scope.project_completed = 0;
    $scope.doughnutOptions = {};
    $scope.doughnutData = [];

    $scope.init_overview_page = function() {
        $scope.schedule_completed = 32;
        $scope.project_completed = 60;

        /**
         * Data for Doughnut chart
         */
        $scope.doughnutData = [
            {
                value: 300,
                color:"#a3e1d4",
                highlight: "#1ab394",
                label: "App"
            },
            {
                value: 50,
                color: "#dedede",
                highlight: "#1ab394",
                label: "Software"
            },
            {
                value: 100,
                color: "#A4CEE8",
                highlight: "#1ab394",
                label: "Laptop"
            }
        ];

        /**
         * Options for Doughnut chart
         */
        $scope.doughnutOptions = {
            segmentShowStroke : true,
            segmentStrokeColor : "#fff",
            segmentStrokeWidth : 2,
            percentageInnerCutout : 45, // This is 0 for Pie charts
            animationSteps : 100,
            animationEasing : "easeOutBounce",
            animateRotate : true,
            animateScale : false
        };
    }
});
