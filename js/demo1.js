$(function () {
  var canvas = $('#graph1');
  if (!canvas || !canvas[0].getContext) {
    return false;
  }
  var x, y, r = 4, hue,
    ctx = canvas[0].getContext('2d'),
    sor = $().sor(),
    map = sor.getMap(),
    len = sor.len(),
    width = r * 2 * len,
    height = r * 2 * len;

  canvas.attr({'width': width + r + 'px', 'height': height + r + 'px'});
  for (x = 0; x < len; x++) {
    for (y = 0; y < len; y++) {
      ctx.beginPath();
      hue = 270 - 270 / 100 * map[x][y];
      ctx.fillStyle = $().hsv2rgb({h: hue, s: 180, v: 250}).getRGB();
      ctx.arc(x * r * 2 + r * 2, height - y * r * 2, r, 0, Math.PI * 2, false);
      ctx.fill();
    }
  }

  var text = $('#text1'), buf = '';
  for (x = len - 1; x >= 0; x--) {
    for (y = 0; y < len; y++) {
      buf += Math.round(map[x][y]) + ' ';
    }
    buf += '\n';
  }
  text.html(buf);
});