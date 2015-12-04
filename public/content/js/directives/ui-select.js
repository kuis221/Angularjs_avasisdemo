app.directive('uiSelect', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            options: '=',
            ngSelect: '&',
            selectedItem: '='
        },
        templateUrl: 'content/js/directives/ui-select.html',
        link: function (scope, element, attrs) {
            scope.selectVal = function (item) {
                scope.selectedItem = angular.copy(item);

                scope.ngSelect({
                    selectedVal: item.id
                });
            };
            scope.selectVal(scope.selectedItem);
        }
    };
});