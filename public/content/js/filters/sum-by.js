app.filter('sumBy', function() {
    return function(data, key) {
        if (typeof(data) === 'undefined' || typeof(key) === 'undefined') {
            return 0;
        }

        var sum = _.sum(data, function(e){ return e[key]; });
        return sum;
    };
});