var a = 50;
var b = 100;

var add = function(a, b) {
  return a + b;
}

var subtract = function(a, b){
  return a - b;
}

console.log(add(a, b));
console.log(add(b, b));
console.log(subtract(a, b));
console.log(subtract(a, a));
