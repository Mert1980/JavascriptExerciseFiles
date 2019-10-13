/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num){
    var message="!";
    for (var x=1;x<=num;x++) {
        message="ha"+ message ;
    }
    return message;
 };

/* finish the function expression */

console.log(laugh(5));

// Returns: hahahahaha!