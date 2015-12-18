app.filter('dateRangeFilter', function () {       
    return function(items, field, min, max){
        filtered = _.filter(items, function(item) {
            return moment(item[field]) >= moment(min) && moment(item[field]) <= moment(max);
        });
        return filtered;
    };
});