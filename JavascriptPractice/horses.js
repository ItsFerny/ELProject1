class Horse {
  constructor(name, boost) {
    this.name = name
    this.boost = boost
    this.speed = 0;
    this.position = 1;

  }
  accelerate() {
    this.speed += this.boost;
  }

  move() {
    this.position += this.speed;
    }

    stop() {
      this.speed = 0;
    }
}

class RaceSim {
  constructor(horses) {
    this.horses = horses;
  }

  simulateRound() {
    for(var i = 0; i < this.horses.length; i++) {
      var c = this.horses[i];
      if(c.position < 10) {
        c.accelerate();
        c.move();
        console.log(c.name + " moved to: " + c.position);
      }
      else {
        c.stop();
        console.log(c.name + " reached the finish line");
      }
      }
      }

    checkAllOut() {
      var allOut = true;
      for (var i = 0; i < this.horses.length; i++) {
        var c = this.horses[i];
        if(c.position < 10) {
          allOut = false;
        }
      }
      return allOut;
    }
      simulate() {
        while(!this.checkAllOut()) {
          this.simulateRound();
        }
        for(var i = 0; i < this.horses.length; i++) {
          console.log(this.horses[i]);
        }
      }
    }

    var horse1 = new Horse("Cinco", 2);
    var horse2 = new Horse("Epona", 1);

    var horseArray = [horse1, horse2];
    var race = new RaceSim(horseArray);

  race.simulate();
