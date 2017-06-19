var a = 0;
var b = 0;
var operator = null;
var result = 0;

var setText = function(x) {
  var div = document.getElementById("textarea");
  var textNode = document.createTextNode(x);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  div.appendChild(textNode);
}

setText(65);

var numberButtonClick = function(x) {
  if(operator === null) {
    a = (a * 10) + x;
    setText(a);
  } else {
    b = (b * 10) + x;
  }
  console.log("a: " + a);
  console.log("b: " + b);
}

var division = function() {
  operator = "/"
}

var minus = function() {
  operator = "-"
}

var multiply = function() {
  operator = "*"
}

var addition = function() {
  operator = "+"
}

var equals = function() {
  if(operator === "+") {
    result = a + b;
  }
  if(operator === "-") {
    result = a - b;
  }
  if(operator === "*") {
    result = a * b;
  }
  if(operator === "/") {
    result = a / b;
  }

  a=0;
  b=0;
  operator=null;
  console.log("a: " +a);
  console.log("b: " +b);
  console.log("operator: " +operator);
  console.log("result: " +result);
}
