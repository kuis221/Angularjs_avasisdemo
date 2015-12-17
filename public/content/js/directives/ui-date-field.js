app.directive('uiDateField', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            date: '=ngModel',
            placeholder: "@"
        },
        templateUrl: 'content/js/directives/ui-date-field.html',
        link: function (scope, element, attrs) {
            if (_.isUndefined(scope.date))
                scope.date = new Date();
            scope.opened = false;
            scope.open = function() {
                scope.opened = true
            }
        }
    }
});