app.filter('accounting', ["$filter", function ($filter) {       
    return function(amount, currencySymbol){
        var currency = $filter('currency');         

        if(amount < 0){
            return "(" + (-amount) + ")";
        }

        return amount;
    };
}]);