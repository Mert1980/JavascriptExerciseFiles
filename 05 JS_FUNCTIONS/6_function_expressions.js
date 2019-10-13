var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };

  function helloCat(callbackFunc) {
    return "Hello " + callbackFunc(3);
  }

  helloCat(catSays);
  console.log(helloCat(catSays));

  //catSays function is called in helloCat function//