//To fix the code to properly handle error cases
function getName(name) {
    if (typeof name === 'undefined') {
      throw new Error('Name is undefined');
    }
    return name.trim();
  }
  

  function sayHello(name) {
    name = getName(name);
    console.log('Hello ' + name);
  }
  
  function sayGoodbye(name) {
    name = getName(name);
    console.log('Goodbye ' + name);
  }
  
  // To print hello or goodbye
  function printGreetings(names) {
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0);
      if (firstLetter.toLowerCase() === 'j') {
        sayGoodbye(names[i]);
      } else {
        sayHello(names[i]);
      }
    }
  }
  
  // Test the function with an array of names
  var names = ['John', 'Jane', 'Jim'];
  printGreetings(names);
  