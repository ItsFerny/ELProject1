window.onload = function() {
  showImages();
}

var page = 0;
var images = [
  "img/csgo1.jpg",
  "img/danghees.jpg",
  "img/ffxv1.jpg",
  "img/hearth1.png",
  "img/injustice1.jpg",
  "img/league1.jpg",
  "img/magikarp.jpg",
  "img/ow1.png",
  "img/pubg1.jpg",
  "img/pubg2.jpg",
  "img/pubg3.jpg",
  "img/pubg4.jpg",
  "img/pubg5.jpg",
  "img/rivals1.jpg",
  "img/smash1.jpg",
  "img/tf2.jpg",
  "img/the100.jpg",
  "img/uncharted1.jpg",
  "img/xcom1.jpg",
  "img/xcom2.jpg",
];

var pageBack = function() {
  if(page > 0) {
    page -=1;
  }
}

var pageForward = function() {
  if(page < (images.length / 8)) {
    page +=1;
  }
}

var showImages = function() {
  var element = document.getElementById("images");
  for(var i = 0; i <images.length; i++) {
    var path = images[i];
    var img = document.createElement("img");
    img.src = path;
    img.className = "thumbnail"
    element.appendChild(img);
  }
}

var removeImages = function() {
var element = document.getElementById("images");
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
