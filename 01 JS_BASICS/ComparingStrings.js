var name="Yes"=="yes"; //false
var name="Y"!="y"; //true
// console.log(name);

var name1="green"=="blue";
var name2="green"=="green"; //true
var name3="green"=="Green";
var name4="Green"=="green";
var name5="green">"blue";   //true
var name6="green">"green";
var name7="green">"Green";  //true
var name8="Green">"green";
console.log(name1,name2,name3,name4,name5,name6,name7,name8);
/*ASCII, stands for American Standard Code for Information Interchange. 
It's a 7-bit character code where every single bit represents a unique
character. When checking if a string is "greater than" or "less than" another
 string, JavaScript compares individual characters using a numerical value. 
 Each character is assigned a numerical value that essentially corresponds to 
 the character's location in an ASCII table: http://www.ascii-code.com */