app.filter('accounting', ["$filter", function ($filter) {
    return function(amount, currencySymbol){
        var currency = $filter('currency');
        var symbol = '$';

        if (!_.isUndefined(currencySymbol))
            symbol = currencySymbol;

        if(amount < 0){
            amount = -amount;
            return "(" + currency(amount, symbol, 2) + ")";

        }

        amount = currency(amount, symbol, 2);
        return amount;
    };
}]);
