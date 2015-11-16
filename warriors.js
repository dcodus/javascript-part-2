// One line code

Warrior.prototype = {
    fight: function(){return this.name + ' rushes to the arena with a ' + this.weapon},
    faceoff: function(opponent){
        if(opponent.power > this.power){
            return opponent.name + " brutally killed " + this.name + " with his awesome " + opponent.weapon + '!';
        } else if (opponent.power < this.power){
            return this.name + " sent " + opponent.name + "'s ass back to the ancient times with his mighty " + this.weapon + "!";
        } else {
            return "They fought well! " + this.name + " and " + opponent.name + " were equal!"
        }
    }
}

function Warrior(name, gender){
    var weapons = ["wooden sword", "bronze sword", "spear", "mace", "shield", "saber", "stick"];
   if(typeof name === 'string'){
    this.name = name;
   }
    if(gender === 'M' || gender === 'F'){
    this.gender = gender;
    }
    this.level = 1;
    this.weapon = weapons[Math.floor(Math.random() * weapons.length)];
    this.power = Math.floor(Math.random() * 100 + 1)
}

var war1 = new Warrior("Maximus", "M");
var war2 = new Warrior("Brutus", "M");
var war3 = new Warrior("Kickassus", "M");
var war4 = new Warrior("Bigballsus", "M");

console.log(war1.faceoff(war2));
console.log(war2.faceoff(war1));