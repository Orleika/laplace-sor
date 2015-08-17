/**
* HSV，RGB相互変換
*/
(function ($) {
  'use strict';

  $.fn.hsv2rgb = function (options) {
    var hi, f, p, q, t,
      rgb = {
        r: 0,
        g: 0,
        b: 0
      },
      getRGB = function () {
        hi = Math.floor(options.h / 60.0) % 6;
        f = (options.h / 60.0) - Math.floor(options.h / 60.0);
        p = Math.round(options.v * (1.0 - (options.s / 255.0)));
        q = Math.round(options.v * (1.0 - (options.s / 255.0) * f));
        t = Math.round(options.v * (1.0 - (options.s / 255.0) * (1.0 - f)));
        switch (hi) {
        case 0:
          rgb.r = options.v;
          rgb.g = t;
          rgb.b = p;
          break;
        case 1:
          rgb.r = q;
          rgb.g = options.v;
          rgb.b = p;
          break;
        case 2:
          rgb.r = p;
          rgb.g = options.v;
          rgb.b = t;
          break;
        case 3:
          rgb.r = p;
          rgb.g = q;
          rgb.b = options.v;
          break;
        case 4:
          rgb.r = t;
          rgb.g = p;
          rgb.b = options.v;
          break;
        case 5:
          rgb.r = options.v;
          rgb.g = p;
          rgb.b = q;
          break;
        default:
          break;
        }
      };

    options = $.extend({
      h: 0,
      s: 0,
      v: 0
    }, options);

    getRGB();
    $.fn.getRGB = function () {
      return 'rgb(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ')';
    };

    return this;
  };
})(jQuery);
