// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'CLR'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{ 
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })


let string = "";
let memory = 0; // Variable to store the memory value

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerHTML;

    if (buttonText === '=') {
      try {
        string = eval(string);
      } catch (error) {
        string = "Error";
      }
      document.querySelector('input').value = string;
    } else if (buttonText === 'CLR') {
      string = "";
      document.querySelector('input').value = string;
    } else if (buttonText === 'M+') {
      memory += parseFloat(document.querySelector('input').value) || 0;
    } else if (buttonText === 'M-') {
      memory -= parseFloat(document.querySelector('input').value) || 0;
    } else if (buttonText === 'MC') {
      memory = 0;
    } else if (buttonText === 'MR') {
      string = memory.toString();
      document.querySelector('input').value = string;
    } else {
      string += buttonText;
      document.querySelector('input').value = string;
    }
  });
});

//chk working of btns
// buttons.forEach(button => {
//   button.addEventListener('click', function(event) {
//     // Using .target to identify the clicked button
//     console.log('Button clicked:', event.target);
//     alert('You clicked: ' + event.target.innerHTML);
//   });
// });


/*
=== (Strict Equality)
Compares both the value and the type of the operands.
Returns true only if both the value and type are the same.

== (Loose Equality)
Compares only the value of the operands, and performs type coercion if necessary.
Returns true if the values are equal, even if the types are different.

console.log(5 === "5"); // false (different types)
console.log(5 == "5"); // true (values are the same after type coercion)

In JavaScript, eval() is a function that allows you to execute a string of
 JavaScript code. It takes a string as its argument
 and evaluates it as if it were JavaScript code written directly in your script
let x = 10;
let y = 20;
let result = eval("x + y"); 
console.log(result); // Output: 30
*/
