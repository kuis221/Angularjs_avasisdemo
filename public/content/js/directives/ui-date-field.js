app.directive('uiDateField', function ($compile, $timeout) {
    return {
        restrict: 'E',
        scope: {
            date: '=ngModel',
            placeholder: "@",
            minDate: '=',
            maxDate: '='
        },
        templateUrl: 'content/js/directives/ui-date-field.html',
        link: function (scope, element, attrs) {
            if (_.isUndefined(scope.date))
                scope.date = new Date();
            scope.opened = false;
            scope.open = function() {
                scope.opened = true
            }

            // since date-dropdown is not closed after date is selected, use a hack.
            scope.$watch('date', function() {
                $timeout(function(){
                    scope.opened = false;
                }, 10);
            });
        }
    }
});