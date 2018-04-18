// sorting alphabetically
fruits.sort();

// reversing the array
fruits.reverse();

// sorting accesnding
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b){return a - b});

// sort descending
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b){return b - a});

// the compare function
function myFunction1() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}


// sorting in a random order
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});

// highest number in an array
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

// lowest number in an array
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}
