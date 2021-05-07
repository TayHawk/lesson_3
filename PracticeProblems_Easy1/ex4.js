//Using the following string, 
//create a new string that contains all lowercase letters
//except for the first character, which should be capitalized.

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let capWord = munstersDescription.slice(0,1).toUpperCase();
let lower = munstersDescription.slice(1).toLowerCase();

console.log(capWord+lower);