var a = 50;
var b = 100;

var add = function(a, b) {
  // return a + b;
  var result = a;
  for (var i = 0; i < b; i+=1) {
  result +=1;
}
return result;
}

var subtract = function(a, b){
  return a - b;
}

var multiply = function(a, b) {
  return a * b; // * = shift + 8
}

var divide = function(a, b) {
  return a / b;
}


class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
      }


add(x) {
  return this.a + this.b + x;
}
}

var c = new Calculator(50, 100);
console.log(c.add(50));
