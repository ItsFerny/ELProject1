class Car {
  constructor(name, efficiency) {
  this.name = name;
  this.efficiency = efficiency;
  this.fuel = 100;
  this.speed = 0;
  this.position = 0;

  }
accelerate() {
  this.fuel -= this.efficiency;
  this.speed += 1;
  }

move() {
  this.position += this.speed;
              }

stop() {
  this.speed = 0;
 }
}

class RaceSim {
  constructor(cars) {
    this.cars = cars;
  }

  simulateRound() {
    for(var i = 0; i < this.cars.length; i++) {
      var c = this.cars[i];
      if(c.fuel > 0) {
        c.accelerate();
        c.move();
      } else {
      c.stop();
      }
    }
  }

  checkAllOut() { //checks if anyone has fuel
    var allOut = true;
    for (var i = 0; i < this.cars.length; i++) {
      var c = this.cars[i];
      if(c.fuel > 0) {
        allOut = false;
      }
    }
    return allOut;
  }

  simulate() {
while(!this.checkAllOut()) {
  this.simulateRound();
}
for(var i = 0; i < this.cars.length; i++) {
  console.log(this.cars[i]);
}
}
}

var car1 = new Car("GottaGoFast", 3);
var car2 = new Car("SlowNSteady", 1);
var car3 = new Car("EnviroDestroyo", 8);

var carArray = [car1, car2, car3];
var race = new RaceSim(carArray);

race.simulate();
