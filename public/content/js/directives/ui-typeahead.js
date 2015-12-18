app.directive('uiTypeahead', ['$filter', '$compile', function ($filter, $compile) {
    return {
        restrict: 'E',
        scope: {
            options: '=',
            ngSelect: '&',
            selectedItem: '=',
        },
        templateUrl: 'content/js/directives/ui-typeahead.html',
        link: function (scope, element, attrs) {
            scope.query = {name: ''};
            scope.isOpened = false;
            scope.selectVal = function(item, evt) {

                scope.selectedItem = angular.copy(item);
                scope.query.name = item.name;
                scope.ngSelect({
                    selectedVal: item.id
                });
                evt.preventDefault();
                evt.stopPropagation();
                scope.isOpened = !scope.isOpened;
            };

            if (scope.selectedItem)
                scope.selectVal(scope.selectedItem, null);

            scope.$watch('query.name', function(n) {
                scope.filtered = $filter('filter')(scope.options, {name: scope.query.name});
                scope.isOpened = scope.filtered.length != 0 && scope.query.name != '';
            });
        }
    };
}]);
