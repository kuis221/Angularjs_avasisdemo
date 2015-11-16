var app = angular.module('avasis',
    [
        'ui.router',
        'ngTable'
    ]);

app.controller('AppCtrl', [
    '$scope', function ($scope) {

    }
]);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);

app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    return $stateProvider
        .state('dashboards', {
            url: '/',
            templateUrl: "partials/dashboards/dashboards.html",
            controller: "DashboardsCtrl"
        })
        .state('financials', {
            url: '/financials',
            abstract: true,
            template: '<ui-view></ui-view>'
        })
        .state('financials.main', {
            url: '/main',
            templateUrl: "partials/financials/financials.html",
            controller: "FinancialsCtrl"
        })
        .state('financials.bankdraw', {
            url: '/bankdraw',
            abstract: true,
            template: '<ui-view></ui-view>'
        })
        .state('financials.bankdraw.main', {
            url: '/main',
            templateUrl: "partials/financials/bank-draw/main.html",
            controller: "BankDrawCtrl"
        })
        .state('team-members', {
            url: '/team-members',
            templateUrl: "partials/team-members/team-members.html",
            controller: "TeamMembersCtrl"
        })
}]);
