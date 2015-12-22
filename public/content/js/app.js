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
        'jkuri.slimscroll',
        'ui.utils.masks',
        'rzModule',
        'slick'
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
        .state('dashboard', {
            url: '/',
            templateUrl: "partials/dashboards/dashboard.html",
            controller: "DashboardCtrl",
            data: {
                pageName: 'My Dashboard'
            }
        })
        .state('financials', {
            url: '/financials',
            abstract: true,
            controller: "FinancialsCtrl",
            templateUrl: 'partials/financials/financials.html',
            data: {
                pageName: 'Financials'
            }
        })
        .state('financials.main', {
            url: '/main',
            templateUrl: "partials/financials/main.html",
            controller: "FinancialsMainCtrl",
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
        .state('financials.loan', {
            url: '/construction?initialize',
            templateUrl: "partials/financials/loan.html",
            controller: "LoanCtrl"
        })
        .state('financials.pay-apply', {
            url: '/payment-apply',
            templateUrl: "partials/financials/pay-apply.html",
            controller: "PayApplyCtrl"
        })
        .state('bankdraw', {
            url: '/financials/bankdraw',
            abstract: true,
            controller: "BankDrawCtrl",
            templateUrl: 'partials/financials/bank-draw/main.html',
            data: {
                isHeaderHidden: true,
                pageName: 'New Bank Draw Request'
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
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Team members'
            }
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
                isHeaderHidden: true,
                pageName: 'Risk Management'
            }
        })
        .state('action-items', {
            url: '/action-items',
            abstract: true,
            template: "<ui-view></ui-view>",
            data: {
                pageName: 'Action Items'
            }
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
                isHeaderHidden: true,
                pageName: 'General Action Items'
            }
        })
        .state('action-items.change-order-new', {
            url: '/change-order-new',
            templateUrl: "partials/action-items/change-order/new.html",
            controller: "ChangeOrderCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'New Change Order'
            }
        })
        .state('action-items.inspections', {
            url: '/inspections',
            templateUrl: "partials/action-items/inspections.html",
            controller: "ActionItemsCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Inspections'
            }
        })
        .state('action-items.inspections-new', {
            url: '/inspections/new',
            templateUrl: "partials/action-items/inspections/new.html",
            controller: "ActionItemsCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Add New Inspection'
            }
        })
        .state('action-items.inspections-popup', {
            url: '/inspections-popup',
            templateUrl: "partials/action-items/inspections/main-popup.html",
            controller: "InspectionsMainPopupCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Inspections'
            }
        })
        .state('projects', {
            url: '/projects',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Projects'
            }
        })
        .state('projects.main', {
            url: '/main',
            templateUrl: 'partials/projects/projects-overview.html',
            controller: 'ProjectsCtrl',
            data: {
                pageName: 'Project Overview'
            }
        })
        .state('projects.flag_alerts', {
            url: '/flag-alerts?bucket&filter',
            templateUrl: 'partials/projects/project-flag-alerts.html',
            controller: 'ProjectFlagAlertsCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Flag Alerts'
            }
        })
        .state('projects.start', {
            url: '/start',
            templateUrl: 'partials/projects/project-start.html',
            controller: 'ProjectStartCtrl',
            data: {
                pageName: 'Project Start'
            }
        })
        .state('documents', {
            url: '/documents',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Documents'
            }
        })
        .state('documents.main', {
            url: '/main',
            templateUrl: 'partials/documents/list.html',
            controller: 'DocumentsCtrl'
        })
        .state('bids', {
            url: '/bids',
            abstract: true,
            template: '<ui-view></ui-view>',
            controller: 'BidsCtrl',
            data: {
                pageName: 'Bids'
            }
        })
        .state('bids.main', {
            url: '/main',
            templateUrl: 'partials/bids/bids.html',
            controller: 'BidsMainCtrl'
        })
        .state('bids.compare', {
            url: '/compare',
            templateUrl: 'partials/bids/bids-compare.html',
            controller: 'BidsCompareCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Bids Compare'
            }
        })
        .state('bids.package', {
            url: '/package',
            templateUrl: 'partials/bids/bids-package.html',
            controller: 'BidsPackageCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Bid Package'
            }
        })
       .state('comm', {
            url: '/communication',
            abstract: true,
            template: '<ui-view></ui-view>',
            controller: 'CommCtrl',
            data: {
                pageName: 'Team Communication'
            }
        })
        .state('comm.main', {
            url: '/main',
            templateUrl: 'partials/comm/comm-main.html',
            controller: 'CommMainCtrl',
            data: {
                pageName: 'Team Communication'
            }
        })
       .state('comm.new', {
            url: '/new',
            templateUrl: 'partials/comm/comm-new.html',
            controller: 'CommNewCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Compose New Message'
            }
        })
        .state('procurement', {
            url: '/procurements',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Procurement'
            }
        })
        .state('procurement.main', {
            url: '/main',
            templateUrl: 'partials/procurement/list.html',
            controller: 'ProcurementsCtrl'
        })
        .state('procurement.create', {
            url:'/create',
            templateUrl: 'partials/procurement/create.html',
            controller: 'ProcurementCreateCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Create New Procurement'
            },
            abstract: true,
        })
        .state('procurement.create.step1', {
            url:'/step1',
            templateUrl: 'partials/procurement/steps/step1.html',
        })
        .state('procurement.create.step2', {
            url:'/step2',
            templateUrl: 'partials/procurement/steps/step2.html',
        })
        .state('procurement.create.step3', {
            url:'/step3',
            templateUrl: 'partials/procurement/steps/step3.html',
        })
        .state('procurement.create.step4', {
            url:'/step4',
            templateUrl: 'partials/procurement/steps/step4.html',
        })
        .state('payment-application', {
            url: '/financials/payment-application',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Create New Pay Application'
            }
        })
        .state('payment-application.initiate', {
            url: '/initiate',
            templateUrl: "partials/financials/payment-application/payment-initiate.html",
            controller: "FinancialsPaymentInitiateCtrl",
            data: {
                isHeaderHidden: true,
            }
        })
        .state('pay-application', {
            url: '/financials/pay-application',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Create New Pay Application'
            }
        })
        .state('pay-application.preview', {
            url: '/preview',
            templateUrl: 'partials/financials/pay-application/preview.html',
            controller: 'PayPreviewCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Pay Application'
            }
        })
        .state('payment-application.finalize', {
            url: '/finalize',
            templateUrl: "partials/financials/payment-application/payment-finalize.html",
            controller: "FinancialsPaymentFinalizeCtrl",
            data: {
                isHeaderHidden: true
            }
        })
        .state('payment-application.quick-pay', {
            url: '/quick-pay',
            templateUrl: "partials/financials/payment-application/quick-pay.html",
            controller: "QuickPayCtrl",
            data: {
                isHeaderHidden: true,
                pageName: 'Quick Pay'
            }
        })
        .state('photos', {
            url: '/photos',
            templateUrl: 'partials/photos/photos.html',
            controller: 'PhotosCtrl',
            data: {
                pageName: 'Your Project Photos'
            }
        })
        .state('schedules', {
            url: '/schedules',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Schedules'
            }
        })
        .state('schedules.main', {
            url: '/main',
            templateUrl: 'partials/schedules/main.html',
            controller: 'SchedulesCtrl'
        })
        .state('schedules.detail', {
            url: '/:id',
            templateUrl: 'partials/schedules/detail.html',
            controller: 'ScheduleDetailCtrl',
            data: {
                isHeaderHidden: true,
                pageName: 'Schedule Detail'
            }
        })
        .state('baseline-schedule', {
            url: '/baseline-schedule',
            abstract: true,
            template: '<ui-view></ui-view>',
            data: {
                pageName: 'Baseline Schedule'
            }
        })
        .state('baseline-schedule.list', {
            url: '/list',
            templateUrl: 'partials/schedules/baseline/list.html',
            controller: 'BaselineScheduleCtrl'
        })
        .state('sample', {
            url: '/sample',
            templateUrl: 'partials/sample/sample.html',
            controller: 'SampleCtrl',
            data: {
                pageName: 'Sample'
            }
        });

}]);

app.run (["$rootScope", function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(e, to) {
        if (!_.isUndefined(to.data)) {
            $rootScope.isHeaderHidden = to.data.isHeaderHidden;
        } else {
            $rootScope.isHeaderHidden = false;
        }

        $rootScope.pageName = to.data.pageName;
    });
}]);
