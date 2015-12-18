app.filter('rangeFilter', function () {       
    return function(items, field, min, max){
        var minValue = parseInt(min);
        var maxValue = parseInt(max);
        filtered = _.filter(items, function(item) {
            return item[field] >= minValue && item[field] <= maxValue;
        });
        return filtered;
    };
});