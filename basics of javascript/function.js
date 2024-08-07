//function declaration in js

function fun1(name) {
    console.log(name);
  }
  
 fun1("Alice");//function can't be executed without calling in js
  

//we can also define a function in js like below :

fun2((name) => //also called arrow function
{
    console.log(name);
  });
  
 fun2("Dave");

  

 var fun3 = function(name) {
    console.log(name);
  };
  
 fun3("Bob");


 //inline function 

 const fun4 = (name) => console.log(name);

fun4("Eve") // Outputs: Hello, Eve!


//Immediately Invoked Function 
(function() {
    console.log("This function runs immediately!");
  })();
  
