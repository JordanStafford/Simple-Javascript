// simple for loop

var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}


// for in loop
var person = {fname:"Jordan", lname:"Stafford", age:18};

var text = ""
var x;
for (x in person) {
  text += person[x];
}
