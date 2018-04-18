// two types local and global

// each function creates a new scope

// variables delcared in a function become local to that function
function myFunction() {
  var carName = "BMW"
}

// variable delcared outside of a function becomes global

// if a value is assinged to a variable that is not delcared it will become gloabl regardless
function myFunction() {
  var carName = "BMW"
}
