var currentImage = '';
var page = 0;
var imagePage = 0;
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

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var update = function() {
  removeImages();
  showImages();
}
var pageBack = function() {
  if(page > 0) {
    page -=1;
  }
  update();
}

var pageForward = function() {
  if(page < (images.length / 8)) {
    page +=1;
  }
  update();
}

var setImage = function(path) {
  for(var i = 0; i < images.length; i++) {
    if(path === images[i]) {
      imagePage = i;
    }
  }
  showSingleImage(path);
}

var pageNext = function() {
removeSingleImage();
imagePage +=1;
if(imagePage > images.length-1) {
  imagePage = 0;
}
showSingleImage(images[imagePage]);
}

var pageBack1 = function() {
  removeSingleImage();
  imagePage -=1;
  if(imagePage < 0) {
    imagePage = images.length-1;
  }
  showSingleImage(images[imagePage]);
  console.log(page);
}

var removeSingleImage = function() {
  var element = document.getElementById("image");
    while(element.firstChild) {
      element.removeChild(element.firstChild);
    }
}


var showSingleImage = function(path) {
  // Create img element
  // set path to the path
  var element = document.getElementById("image");
  var image = document.createElement("img");
  image.src = path;
  element.appendChild(image);
}

var showImages = function() {
  var element = document.getElementById("images");
  var start = page * 8;
  var end = start + 8;
  if(end >= images.length) {
    end = images.length - 1;
  }
  for(var i = start; i < end; i++) {
    var path = images[i];
    var a = document.createElement("a");
    a.href = "image.html?image=" + path;
    a.onclick = function() {
      currentImage = path;
    };
    var img = document.createElement("img");
    img.src = path;
    img.className = "thumbnail"

    a.appendChild(img);
    element.appendChild(a);
  }
}


var removeImages = function() {
var element = document.getElementById("images");
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
