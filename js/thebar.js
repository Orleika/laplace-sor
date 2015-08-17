$(function () {
  var canvas = $('#the-bar');
  if (!canvas || !canvas[0].getContext) {
    return false;
  }
  var i, r = 4, hue,
    ctx = canvas[0].getContext('2d'),
    map = [],
    width = r * 2 * 101,
    height = r * 2;

  for (i = 0; i <= 100; i++) {
    map[i] = i;
  }

  canvas.attr({'width': width + r + 'px', 'height': height + r + 'px'});
  for (i = 0; i <= 100; i++) {
    ctx.beginPath();
    hue = 270 - 270 / 100 * map[i];
    ctx.fillStyle = $().hsv2rgb({h: hue, s: 180, v: 250}).getRGB();
    ctx.arc(i * r * 2 + r, r, r, 0, Math.PI * 2, false);
    ctx.fill();
  }

});