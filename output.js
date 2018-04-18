// using inner html
// the id method allows access to a html element
// tbhe id attribute defines the htnml element
<html>
<body>

<h1> web page </h1>
<p> web Paragraph </p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</body>
</html>

// for testing purposes document.write is often used
<html>
<body>
<h1> web page </h1>
<p> web Paragraph </p>
<script>
document.write(5 + 6);
</script>

</body>
</html>

// using window alert to display box to the user
<html>
<body>
<h1> web page </h1>
<p> Paragraph </p>

<script>
window.alert( 5 + 6);
</script>

</body>
</html>

// for debugginh user console.log to display data
<html>
<body>

<script>
console.log(5 + 6);
</script>
</body>
</html>
