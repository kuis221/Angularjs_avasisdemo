app.directive('ngRaphaelArc', ['$compile', '$parse', '$q', '$timeout', function ($compile, $parse, $q, $timeout) {

    var arcFn = function (value, R) {
        var xloc = 100, yloc = 100, total = 100;
        var alpha = 360 / total * value,
            a = (90 - alpha) * Math.PI / 180,
            x = xloc + R * Math.cos(a),
            y = yloc - R * Math.sin(a),
            path;
        if (total == value) {
            path = [
                ["M", xloc, yloc - R],
                ["A", R, R, 0, 1, 1, xloc - 0.01, yloc - R]
            ];
        } else {
            path = [
                ["M", xloc, yloc - R],
                ["A", R, R, 0, +(alpha > 180), 1, x, y]
            ];
        }
        return {
            path: path
        };
    };

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var t = $(element[0]);

            var config = scope.$eval(attrs.ngRaphaelArc);

            var r = Raphael(element[0], config.size, config.size);

            r.setViewBox(0, 0, config.size, config.size, true);

            r.customAttributes.arc = arcFn;

            var st = r.set();

            var textY = 90;
            var textCenterY = 100;

            _.each(config.arcs, function (arc, idx) {
                var rad = arc.radius,
                    value = arc.percent,
                    speed = 250;

                var z = r.path().attr({arc: [0, rad], stroke: arc.color, 'stroke-width': arc.width});

                z.animate({
                    arc: [value, rad]
                }, 1500, "bounce");

                var title = r.text(100, textY + idx * 25, '%').attr({
                    font: '23px Arial',
                    fill: arc.color
                });

                title.attr({text: value + "%"});

                st.push(title);

                z
                    .mouseover(function () {
                        this.animate({'stroke-width': arc.width + 10, opacity: 1}, 1000);

                        title.animate({y: textCenterY}, speed, '>');

                        _.each(st, function (el) {
                            if (el != title) {
                                el.animate({opacity: 0}, speed, '>');
                            }
                        });
                    })
                    .mouseout(function () {
                        this.stop().animate({'stroke-width': arc.width, opacity: 1}, speed * 4, 'elastic');

                        title.animate({y: textY + idx * 20}, speed, '>');

                        _.each(st, function (el) {
                            if (el != title) {
                                el.animate({opacity: 1}, speed, '>');
                            }
                        });
                    });

            });

            st.toFront();
        }
    };
}]);

app.directive('sparkline', [function(){
    return {
        restrict: 'A',
        scope: {
            sparkData: '=',
            sparkOptions: '=',
        },
        link: function (scope, element, attrs) {
            scope.$watch(scope.sparkData, function () {
                render();
            });
            scope.$watch(scope.sparkOptions, function(){
                render();
            });
            var render = function () {
                $(element).sparkline(scope.sparkData, scope.sparkOptions);
            };
        }
    }
}]);

/**
 * sideNavigation - Directive for run metsiMenu on sidebar navigation
 */
app.directive('sideNavigation', ['$timeout', function($timeout){
    return {
        restrict: 'A',
        link: function(scope, element) {
            // Call the metsiMenu plugin and plug it to sidebar navigation
            $timeout(function(){
                element.metisMenu();
            });
        }
    };
}]);

/**
 * minimalizaSidebar - Directive for minimalize sidebar
*/
app.directive('minimalizaSidebar', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        template: '<a class="navbar-minimalize minimalize-styl-2 btn" href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
        controller: function ($scope, $element) {
            $scope.minimalize = function () {
                $("body").toggleClass("mini-navbar");
                if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
                    // Hide menu in order to smoothly turn on when maximize menu
                    $('#side-menu').hide();
                    // For smoothly turn on menu
                    setTimeout(
                        function () {
                            $('#side-menu').fadeIn(500);
                        }, 100);
                } else if ($('body').hasClass('fixed-sidebar')){
                    $('#side-menu').hide();
                    setTimeout(
                        function () {
                            $('#side-menu').fadeIn(500);
                        }, 300);
                } else {
                    // Remove all inline style from jquery fadeIn function to reset menu state
                    $('#side-menu').removeAttr('style');
                }
            }
        }
    };
}]);

/**
 * fullScroll - Directive for slimScroll with 100%
 */
app.directive('fullScroll', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            $timeout(function(){
                element.slimscroll({
                    height: '100%',
                    railOpacity: 0.9
                });

            });
        }
    };
}])

/**
 * slimScroll - Directive for slimScroll with custom height
 */
app.directive('slimScroll', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        scope: {
            boxHeight: '@'
        },
        link: function(scope, element) {
            $timeout(function(){
                element.slimscroll({
                    height: scope.boxHeight,
                    railOpacity: 0.9
                });

            });
        }
    };
}]);
