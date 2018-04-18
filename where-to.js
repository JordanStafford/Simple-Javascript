//  code must be between script tags
<script>
document.getElementById("demo").innerHTML = "My First Javascript";
</script>

// java script in Head
<html>

<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed";
}
</script>
</head>


//  java script in the body
<html>
<body>

<h1> a web page </h1>
<p id="demo"> a Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed";
}
</script>

</body>
</html>

//  scripts can be placed in external files
<script src="myScript.js"></script>

// adding several script files
<script src="myscript1.js"></script>
<script src="myscript2.js"></script>

// script located on a web page
<script src="https://www.w3schools.com/js/myScript1.js"></script>

// script located in a specifc folder
<script src="/js/myScript1.js"></script>

  
