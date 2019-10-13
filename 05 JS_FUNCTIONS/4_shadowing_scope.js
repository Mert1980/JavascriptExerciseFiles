const bookTitle="simyaci";
console.log(bookTitle);

function displayBookName(){
    const bookTitle="konak";
    console.log(bookTitle);
}

displayBookName();
console.log(bookTitle);

//scope example-1
var x = 1;
function addTwo() {
  x = x + 2;
}
addTwo();
x = x + 1;
console.log(x); //returns 4

// scope example-2
var x = 1;

function addTwo() {
  var x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);//returns 2

//NOTES

// If an identifier is declared in global scope, it's available everywhere.
// If an identifier is declared in function scope, it's available in the function it was declared in (even in functions declared inside the function).
// When trying to access an identifier, the JavaScript Engine will first look in the current function. If it doesn't find anything, it will continue to the next outer function to see if it can find the identifier there. It will keep doing this until it reaches the global scope.
// Global identifiers are a bad idea. They can lead to bad variable names, conflicting variable names, and messy code.
