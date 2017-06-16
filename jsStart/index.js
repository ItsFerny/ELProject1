
class Classone {
  constructor() {
        this.x = 1;
  }
f1(param1, param2) {
  return param1 + param2;
}
}
var c1 = new Classone();
var c2 = new Classone();

var a = c1.f1(100, 200);

c1.x = 2;
c2.x = 3;

console.log('c1', c1);
console.log('c2', c2);
