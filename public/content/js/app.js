var app = angular.module('avasis',
    [
        'ui.router',
        'ngTable',
        'ngAnimate'
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
        .state('financials.bankdraw.payment-application', {
            url: '/payment-application',
            templateUrl: "partials/financials/bank-draw/payment-application.html",
            controller: "BankDrawCtrl"
        })
        .state('financials.bankdraw.draw-details', {
            url: '/draw-details',
            templateUrl: "partials/financials/bank-draw/draw-details.html",
            controller: "BankDrawCtrl"
        })
        .state('financials.bankdraw.compliance', {
            url: '/compliance',
            templateUrl: "partials/financials/bank-draw/compliance.html",
            controller: "BankDrawCtrl"
        })
        .state('financials.bankdraw.documents', {
            url: '/documents',
            templateUrl: "partials/financials/bank-draw/documents.html",
            controller: "BankDrawCtrl"
        })
        .state('financials.bankdraw.payment-details', {
            url: '/payment-details',
            templateUrl: "partials/financials/bank-draw/payment-details.html",
            controller: "BankDrawCtrl"
        })
        .state('financials.bankdraw.finalize', {
            url: '/finalize',
            templateUrl: "partials/financials/bank-draw/finalize.html",
            controller: "BankDrawCtrl"
        })
        .state('team-members', {
            url: '/team-members',
            templateUrl: "partials/team-members/team-members.html",
            controller: "TeamMembersCtrl"
        })
}]);