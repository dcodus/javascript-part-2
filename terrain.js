/*
Write a piece of code that will use the Tile constructor to create a 20x20 map of Tiles. The map will be a 2D array (array inside array).
Output the map to the console in the following way:
For each tile, output the height of the tile as an "icon" for that tile
Go thru all the map again, randomly burning and freezing some tiles. Then, re-output the map in the same way again
*/

Tile.prototype = {
    freeze: function(){
        if(this.condition === "burning"){
            this.condition = "normal";
        } else if (this.condition === "normal"){
            this.condition = "frozen";
        } else if (this.condition === "frozen"){
            this.height++;
        }
    },
    burn: function(){
        if(this.condition === "frozen"){
            this.condition = "normal";
        } else if (this.condition === "normal"){
            this.condition = "burning";
        } else if (this.condition === "burning"){
            if(this.height > 0){
                this.height--;
            }
        }
    }
};
function Tile(x,y){
    var terrainTypes = ['grass', 'rocks', 'water'];
    var terrainCondition = ['burning', 'normal', 'frozen'];
    this.x = x;
    this.y = y;
    this.height = Math.floor(Math.random() * 3 + 1);
    this.type = terrainTypes[Math.floor(Math.random() * terrainTypes.length)];
    this.condition = terrainCondition[Math.floor(Math.random() * terrainCondition.length)];
}

var map = [];
for(var i = 0; i < 20; i++){
    //create a new array that will be pushed to map. This way we will have 20 arrays in the main
    //array
    var row = [];
    for(var y = 0; y < 20; y++){
        row.push(new Tile(i, y));
    }
    //Here we are pushing every row array to the main array.
    map.push(row);
}


map.forEach(function(arr){
    arr.forEach(function(tile){
        tile.burn();
    });
});

map.forEach(function(arr){
    //We are looping through each individual array.
  var line = [];
  //We loop through each tile
  arr.forEach(function(tile){
      //We push the height of each tile to the line array because we want to display 20 tiles per line.
    line.push(tile.height);
  });
  //We output the 20 tiles and we use join() to mutate the array into a string
  console.log(line.join(""));
});

















