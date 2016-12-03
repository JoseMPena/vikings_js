var Viking = require('./viking.js');
var Saxon = require('./saxon.js');

var vikings = setVikings();

function thePit () {
  var viking1, viking2;
  do {
    viking1 = vikings[randomize(4, 0)]
    viking2 = vikings[randomize(4, 0)]
  } while (viking1.eql(viking2))

  while(viking1.health > 1 && viking2.health > 1){
    for(var i = 1; i <= 5; i++){
      console.log("Turno #" + i);

    }
  }
}

function setVikings () {
  var vikings = [];
  vikings.push(new Viking("Ragnhild", 40, 50));
  vikings.push(new Viking("Ingrid", 50, 50));
  vikings.push(new Viking("Astrid", 55, 80));
  vikings.push(new Viking("Eirik", 45, 90));
  vikings.push(new Viking("Olav", 99, 99));
  return vikings;
}

function setSaxons () {
  var vikings = [];
  for(var i = 0; i < 5; i++){
    saxons.push(new Saxon(randomize(50, 1), randomize(55, 1)));
  }
  return saxons;
}

function randomize (max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
};
