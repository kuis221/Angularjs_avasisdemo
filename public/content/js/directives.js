app.directive('ngRaphaelArc', ['$compile', '$parse', '$q', '$timeout', function ($compile, $parse, $q, $timeout) {
    var arcFn = function (value, color, rad) {
        var v = 3.6 * value,
            alpha = v == 360 ? 359.99 : v,
            startDegree = 90,
            a = (startDegree - alpha) * Math.PI / 180,
            b = startDegree * Math.PI / 180,
            sx = 100 + rad * Math.cos(b),
            sy = 100 - rad * Math.sin(b),
            x = 100 + rad * Math.cos(a),
            y = 100 - rad * Math.sin(a),
            path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
        return {path: path, stroke: color}
    };

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var t = $(element[0]);

            var config = scope.$eval(attrs.ngRaphaelArc);

            var r = Raphael(element[0], config.size, config.size);

            r.setViewBox(0, 0, config.size, config.size, true);

            r.circle(40, 40, 5).attr({stroke: 'none', fill: '#FFF'});

            r.customAttributes.arc = arcFn;

            var st = r.set();

            var textY = 90;
            var textCenterY = 100;

            _.each(config.arcs, function (arc, idx) {
                var rad = arc.radius,
                    value = arc.percent,
                    speed = 250;

                var z = r.path().attr({arc: [value, arc.color, rad + 20], 'stroke-width': arc.width});

                var title = r.text(100, textY + idx * 25, '%').attr({
                    font: '23px Arial',
                    fill: arc.color
                });

                title.attr({text: value + "%"});

                st.push(title);

                z
                    .mouseover(function () {
                        this.animate({'stroke-width': arc.width + 10, opacity: 1}, 1000, 'elastic');

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