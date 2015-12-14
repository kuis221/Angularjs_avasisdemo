app.directive('uiArcChart', function ($compile, $sce) {
    return {
        restrict: 'A',
        scope: {
            rectWidth: '@', // chart rect width
            rectHeight: '@', // chart rect height
            radius: '@', // empty space radius of arc center
            penWidth: '@', // arc width
            chartData: '='
        },
        link: function (scope, elem, attr) {
            var width = parseInt(attr.rectWidth),
                height = parseInt(attr.rectHeight),
                rad = parseInt(attr.radius);
                pen_width = _.isUndefined(attr.penWidth) ? 10 : parseInt(attr.penWidth);
            var r = Raphael(elem[0], width, height),
    			defaultText = '',
                param = {stroke: "#eee", "stroke-width": pen_width};
    			speed = 250;

            var title = r.text(width / 2, height / 2, defaultText).toFront();

            var display = '';
            _.forEach(scope.chartData, function (item, key) {
                var t = item.text;
                display += t + "\n";
            });

            title.attr({ text: display });

            r.customAttributes.arc = function (value, color, rad) {
                var v = 3.6 * value,
    				alpha = v == 360 ? 359.99 : v,
    				a = (90 - alpha) * Math.PI / 180,
    				b = 90 * Math.PI / 180,
    				sx = width / 2 + rad * Math.cos(b),
    				sy = height / 2  - rad * Math.sin(b),
    				x = width / 2 + rad * Math.cos(a),
    				y = height / 2 - rad * Math.sin(a),
    				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
                return { path: path }
            }

            _.forEach(scope.chartData, function (item, key) {
    			var color = item.color;
    			var value = item.value;

                rad += pen_width;
                var font = item.font ? item.font : '14px AvenirNextLTPro-Demi';
                title.attr({
                    font: font,
                    fill: item.color
                })
                var z = r.path().attr(param).attr({arc: [0, color, rad]});

                z.animate({arc: [value, color, rad], 'stroke': color}, 1000, ">");
            });
        }
    };
});
