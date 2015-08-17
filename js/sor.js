/**
* ラプラス方程式(SOR法)
* 温度分布
*/
(function ($) {
  'use strict';

  $.fn.sor = function (options) {
    var i, x, y, sum, dif, old, ne,
      map = [];

    options = $.extend({
      num: 10,  // 100 * 100
    }, options);

    for (x = 0; x < options.num; x++) {
      map[x] = [];
      for (y = 0; y < options.num; y++) {
        map[x][y] = 0;
      }
    }

    for (x = 0; x < options.num; x++) {
      map[x][0] = 0;
      map[x][options.num - 1] = 100 / (options.num - 1) * x;
    }
    for (y = 0; y < options.num; y++) {
      map[0][y] = 0;
      map[options.num - 1][y] = 100 / (options.num - 1) * y;
    }

    for (i = 0; i < 1000; i++) {
      sum = 0.0;
      for (x = 1; x < options.num - 1; x++) {
        for (y = 1; y < options.num - 1; y++) {
          old = map[x][y];
          ne = (map[x - 1][y] + map[x + 1][y] + map[x][y - 1] + map[x][y + 1]) / 4;
          dif = (ne - old) * 1.7;
          map[x][y] += dif;
          sum += dif;
        }
      }
      if (sum < 0.0001) {
        break;
      }
    }

    $.fn.getMap = function () {
      return map;
    };

    $.fn.len = function () {
      return options.num;
    };

    return this;
  };
})(jQuery);