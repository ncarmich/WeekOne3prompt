var prompterName = prompt("Hey what is your name?");
var prompterFrom = prompt("Where are you from?");
var prompterMajor= prompt("What is your Major?");

var greeting = "Hello my name is " +prompterName;
var where = "I am from " +prompterFrom;
var major = "My Major is " +prompterMajor;

document.querySelector(".words").innerHTML = greeting;
document.querySelector(".words1").innerHTML = where;
document.querySelector(".words2").innerHTML = major;
