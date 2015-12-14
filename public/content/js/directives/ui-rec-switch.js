app.directive('uiRecSwitch', function($compile) {
    return {
        restrict: 'E',
        scope: {
            model: '=ngModel'
        },
        templateUrl: 'content/js/directives/ui-rec-switch.html',
        link: function(scope, element, attrs) {
            scope.toggle = function() {
                scope.model = !scope.model;
                $(element).find('.onoffswitch-switch').toggleClass('change-border');
            };

            scope.id = _.uniqueId();

            if (scope.model) {
                $(element).find('input').attr('checked', 'checked');
                $(element).find('.onoffswitch-switch').toggleClass('change-border');
            }
        }
    };
});
