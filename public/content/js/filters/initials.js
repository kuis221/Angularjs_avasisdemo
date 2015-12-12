app.filter('initials', function () {       
    return function(name){
        var initials = _.startCase(name).replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g);
        return initials.join('');
    };
});