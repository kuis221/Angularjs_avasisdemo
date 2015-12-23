/**
 * Created by Darcy on 12/2/2015.
 */
'use strict'

app.controller('ProjectsCtrl', function($scope, $state, $stateParams, $uibModal) {
    $scope.schedule_completed = 0;
    $scope.project_completed = 0;
    $scope.doughnutOptions = {};
    $scope.doughnutData = [];

    $scope.schedule_completed = [60, 40, 90, 20, 100];
    $scope.project_completed = 33;

    $scope.goComm = function () {
        $state.go('comm.main');
    };
    $scope.goDoc = function () {
        $state.go('documents.main');
    };

    // Action Main GAI New Modal
    $scope.showGaiNewModal = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'partials/action-items/gai-new-modal.html',
            controller: 'GAINewModalCtrl',
            windowClass: 'gai-modal'
        });

        modalInstance.result.then(function(res) {

        }, function() {

        });
    }

    /**
     * Data for Doughnut chart
     */
    $scope.mineData = [
        {
            value: 2,
            color:"#ed5565"
        },
        {
            value: 5,
            color: "#f8ac59"
        },
        {
            value: 12,
            color: "#79c485"
        }
    ];

    /**
     * Options for Doughnut chart
     */
    $scope.mineOptions = {
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 60, // This is 0 for Pie charts
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false
    };

    $scope.teamData = [
        {
            value: 23,
            color:"#ed5565"
        },
        {
            value: 32,
            color: "#f8ac59"
        },
        {
            value: 58,
            color: "#79c485"
        }
    ];

    /**
     * Options for Doughnut chart
     */
    $scope.teamOptions = {
        segmentShowStroke : true,
        segmentStrokeColor : "#fff",
        segmentStrokeWidth : 2,
        percentageInnerCutout : 60, // This is 0 for Pie charts
        animationSteps : 100,
        animationEasing : "easeOutBounce",
        animateRotate : true,
        animateScale : false,
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    };

    /**
    * Financial chart data
    */
    $scope.financialChartData = [
        {
            value: 32,
            color: "#79c485",
            text: "32%"
        },
        {
            value: 64,
            color: "#3aabd5",
            text: "64%"
        }
    ];

    $scope.teamMemberChartData = [
        {
            value: 13,
            color: "#3aabd5",
            text: "32%"
        },
        {
            value: 100,
            color: "#79c485",
            text: "100%"
        }
    ]
});
