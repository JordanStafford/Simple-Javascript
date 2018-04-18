// can use single or double quotes

// length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var sln = txt.length

// finding a string in a string
var str = "locate where 'locate' occurs";
var pos = str.indexOf("locate");

var pos = str.search("locate");

// slice method
var res = str.slice(7, 13);

// replacing string content
var n = str.replace("Microsoft", "Sage")
