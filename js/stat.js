'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;

var SMALL_GAP = 10;
var GAP = 35;
var COL_GAP = 50;

var MAX_COL_HEIGHT = 150;
var COL_WIDTH = 40;

var FONT_SIZE = 16;
var FONT_FAMILY = 'PT Mono';



var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = FONT_SIZE + 'px ' + FONT_FAMILY;
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_SIZE);


  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var currentColHeight = (MAX_COL_HEIGHT * times[i]) / maxTime;
    var currentTime = Math.round(times[i]);
    var xPos = CLOUD_X + COL_WIDTH + (COL_WIDTH + COL_GAP) * i;
    var yPos = 90 + MAX_COL_HEIGHT - currentColHeight;
    var randomColor = 'hsl(240,' + Math.round(Math.random() * 100) + '%, 50%)'

    ctx.fillText(currentTime, xPos, yPos);
    if (players[i]  == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randomColor;
    }
    ctx.fillRect(xPos, yPos + SMALL_GAP , COL_WIDTH, currentColHeight);
    ctx.fillStyle = '#000000';
    ctx.fillText(players[i], xPos, yPos + SMALL_GAP + currentColHeight + FONT_SIZE);
  }

};
