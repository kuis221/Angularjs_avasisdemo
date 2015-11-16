var display = '';
var o = {
    init: function () {
        this.diagram();
        //$("#diagram").find("tspan").html(display);
    },
    random: function (l, u) {
        return Math.floor((Math.random() * (u - l + 1)) + l);
    },
    diagram: function () {

        $('.get').find('.arc').each(function (i) {
            var t = $(this);
            display += t.find('.percent').val() + "%\n";
        });

        var r = Raphael('diagram', 178, 178),
			rad = 10,
			defaultText = '%',
			speed = 250;

        r.circle(40, 40, 5).attr({ stroke: 'none', fill: '#FFF' });

        var title = r.text(100, 100, defaultText).attr({
            font: '14px Arial',
            fill: '#000'
        }).toFront();

        title.attr({ text: display });

        r.customAttributes.arc = function (value, color, rad) {
            var v = 3.6 * value,
				alpha = v == 360 ? 359.99 : v,
				random = o.random(91, 240),
				a = (random - alpha) * Math.PI / 180,
				b = random * Math.PI / 180,
				sx = 100 + rad * Math.cos(b),
				sy = 100 - rad * Math.sin(b),
				x = 100 + rad * Math.cos(a),
				y = 100 - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
            return { path: path, stroke: color }
        }

        $('.get').find('.arc').each(function (i) {
            var t = $(this),
				color = t.find('.color').val(),
				value = t.find('.percent').val(),
				text = t.find('.text').text();

            rad += 20;
            var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': t.find('.width').val() });

            z.mouseover(function () {
                this.animate({ 'stroke-width': 10, opacity: .75 }, 1000, 'elastic');
                if (Raphael.type != 'VML') //solves IE problem
                    this.toFront();
                title.stop().animate({ opacity: 0 }, speed, '>', function () {
                    this.attr({ text: text + '\n' + value + '%' }).animate({ opacity: 1 }, speed, '<');
                });
            }).mouseout(function () {
                this.stop().animate({ 'stroke-width': 15, opacity: 1 }, speed * 4, 'elastic');
                title.stop().animate({ opacity: 0 }, speed, '>', function () {
                    title.attr({ text: display.replace("$", "\n") }).animate({ opacity: 1 }, speed, '<');
                });
            });
        });

    }
}
$(function () { o.init(); });
