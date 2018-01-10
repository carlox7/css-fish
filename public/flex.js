'use strict';

let myDiv = $('#my-div');
console.log(myDiv);
myDiv.html('<img src="https://i.imgur.com/90Mmdcm.png">');

let myDivImg = $('#my-div img');

myDivImg.hover(function() {
  this.src = 'http://i.imgur.com/nTj3Fxx.gif';
}, function() {
  this.src = 'http://i.imgur.com/90Mmdcm.png';
});

myDivImg.mousedown(function(){
  this.src = 'http://i.imgur.com/Rfj0a80.png';
});

myDivImg.mousedown(function(){
  $('.hadouken').remove();
});

myDivImg.mousedown(function(){
  $('#my-div').append( '<img class="hadouken" src="http://i.imgur.com/oTyQRvX.gif">');
});

myDivImg.mousedown(function(){
  $('.hadouken').animate( {
    'margin-left': '600px'
  }, 1000, 'swing', function(){
    this.remove();
  });
});

myDivImg.mouseup(function(){
  this.src = 'http://i.imgur.com/90Mmdcm.png';
});

