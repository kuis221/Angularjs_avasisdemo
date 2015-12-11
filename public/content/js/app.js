var app = angular.module('avasis',
    [
        'ui.router',
        'ngTable',
        'ngAnimate',
        'ui.bootstrap',
        'nvd3',
        'angles',
        'ngDropzone',
        'ui.tree',
        'jkuri.slimscroll'
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
    $urlRouterProvider.otherwise("/projects/main");

    return $stateProvider
        // .state('dashboards', {
        //     url: '/',
        //     templateUrl: "partials/dashboards/dashboards.html",
        //     controller: "DashboardsCtrl"
        // })
        .state('financials', {
            url: '/financials',
            abstract: true,
            controller: "FinancialsCtrl",
            templateUrl: 'partials/financials/financials.html',
        })
        .state('financials.main', {
            url: '/main',
            templateUrl: "partials/financials/main.html",
            controller: "FinancialsMainCtrl"
        })
        .state('financials.budget', {
            url: '/budget',
            templateUrl: "partials/financials/budget.html",
            controller: "FinancialsBudgetCtrl"
        })
        .state('financials.bankdraw', {
            url: '/bankdraw-main',
            templateUrl: "partials/financials/bankdraw.html",
            controller: "FinancialsBankdrawCtrl"
        })
        .state('bankdraw', {
            url: '/financials/bankdraw',
            abstract: true,
            controller: "BankDrawCtrl",
            templateUrl: 'partials/financials/bank-draw/main.html',
            data: {
                isHeaderHidden: true
            }
        })
        .state('bankdraw.payment-application', {
            url: '/payment-application',
            templateUrl: "partials/financials/bank-draw/payment-application.html",
            controller: "BankDrawPaymentApplicationCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('bankdraw.draw-details', {
            url: '/draw-details',
            templateUrl: "partials/financials/bank-draw/draw-details.html",
            controller: "BankDrawDrawDetailsCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('bankdraw.compliance', {
            url: '/compliance',
            templateUrl: "partials/financials/bank-draw/compliance.html",
            controller: "BankDrawComplianceCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('bankdraw.documents', {
            url: '/documents',
            templateUrl: "partials/financials/bank-draw/documents.html",
            controller: "BankDrawDocumentsCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('bankdraw.payment-details', {
            url: '/payment-details',
            templateUrl: "partials/financials/bank-draw/payment-details.html",
            controller: "BankDrawPaymentDetailsCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('bankdraw.finalize', {
            url: '/finalize',
            templateUrl: "partials/financials/bank-draw/finalize.html",
            controller: "BankDrawFinalizeCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('team-members', {
            url: '/team-members',
            abstract: true,
            template: '<ui-view></ui-view>'
        })
        .state('team-members.empty', {
            url: '/empty',
            templateUrl: 'partials/team-members/team-members-empty.html',
            controller: 'TeamMembersCtrl'
        })
        .state('team-members.list', {
            url: '/list',
            templateUrl: 'partials/team-members/team-members-list.html',
            controller: 'TeamMembersCtrl'
        })
        .state('team-members.risk', {
            url: '/risk',
            templateUrl: 'partials/team-members/risk.html',
            controller: 'RiskCtrl',
            data: {
                isHeaderHidden: true
            }
        })
        .state('action-items', {
            url: '/action-items',
            abstract: true,
            template: "<ui-view></ui-view>"
        })
        .state('action-items.main', {
            url: '/main',
            templateUrl: "partials/action-items/action-items.html",
            controller: "ActionItemsCtrl"
        })
        .state('action-items.general-action-items', {
            url: '/general-action-items',
            templateUrl: "partials/action-items/general-action-items.html",
            controller: "ActionItemsCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('action-items.inspections', {
            url: '/inspections',
            templateUrl: "partials/action-items/inspections.html",
            controller: "ActionItemsCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('projects', {
            url: '/projects',
            abstract: true,
            template: '<ui-view></ui-view>'
        })
        .state('projects.main', {
            url: '/main',
            templateUrl: 'partials/projects/projects-overview.html',
            controller: 'ProjectsCtrl'
        })
        .state('documents', {
            url: '/documents',
            abstract: true,
            template: '<ui-view></ui-view>'
        })
        .state('documents.main', {
            url: '/main',
            templateUrl: 'partials/documents/list.html',
            controller: 'DocumentsCtrl'
        })
        .state('bids', {
            url: '/bids',
            templateUrl: 'partials/bids/bids.html',
            controller: 'BidsCtrl'
        })
<<<<<<< HEAD
        .state('procurement', {
            url: '/procurements',
            abstract: true,
            template: '<ui-view></ui-view>'
        })
        .state('procurement.main', {
            url: '/main',
            templateUrl: 'partials/procurement/list.html',
            controller: 'ProcurementsCtrl'
=======
        .state('payment-application', {
            url: '/financials/payment-application',
            abstract: true,
            template: '<ui-view></ui-view>'
        })
        .state('payment-application.initiate', {
            url: '/initiate',
            templateUrl: "partials/financials/payment-application/payment-initiate.html",
            controller: "FinancialsPaymentInitiateCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('payment-application.finalize', {
            url: '/finalize',
            templateUrl: "partials/financials/payment-application/payment-finalize.html",
            controller: "FinancialsPaymentFinalizeCtrl",
            data: {
                isHeaderHidden: true
            }
>>>>>>> dc0a3aff89669099600adf174e570b260cc1a7b0
        })
        .state('photos', {
            url: '/photos',
            templateUrl: 'partials/photos/photos.html',
            controller: 'PhotosCtrl'
        })
        .state('sample', {
            url: '/sample',
            templateUrl: 'partials/sample/sample.html',
            controller: 'SampleCtrl'
        });

}]);

app.run (["$rootScope", function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(e, to) {
        if (!_.isUndefined(to.data)) {
            $rootScope.isHeaderHidden = to.data.isHeaderHidden;
        } else {
            $rootScope.isHeaderHidden = false;
        }
    });
}]);
