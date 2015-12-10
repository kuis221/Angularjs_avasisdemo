app.filter('accounting', ["$filter", function ($filter) {       
    return function(amount, currencySymbol){
        var currency = $filter('currency');         

        if(amount < 0){
            amount = -amount;
            if (!_.isUndefined(currencySymbol))
                amount = currencySymbol + amount;
            return "(" + amount + ")";
        }
        if (!_.isUndefined(currencySymbol))
            amount = currencySymbol + amount;
        return amount;
    };
}]);