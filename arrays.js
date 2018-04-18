// simple array
var cars = ["bmw", "audi"]

// accessing via index number
var name = cars[0]

// modifying elements via index
cars[0] = "Ferrari"

// access the full array
document.getElementById('demo').innerHTML = cars;

// arrasy are like objects
var person = {firstName:"Jordan", lastName:"Stafford", age:46};

// array elements can be objects
myArray[0] = Date.now
myArray[1] = myFunction;

// array properties
fruits.length;


// looping through an array
var fruits, text, fLen, i;
fruits = ["Bannana", "Orange", "Apple", "Mango"];
fLen = fruits.length
text = "<ul>";

for (i = 0; i < fLen; i++) {
  text += "<ul>" + fruits[i] + "</ul>";
}

// adding new elements
fruits.push("grape")
