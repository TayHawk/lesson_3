//Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";
//Return a new string that swaps the case of all of the letters:
// -----> GOAL ----> `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

let cap1 = munstersDescription.slice(0,1).toLowerCase() 
        + munstersDescription.slice(1,3).toUpperCase();
        
let cap2 = munstersDescription.slice(4,5).toLowerCase() 
        + munstersDescription.slice(5,munstersDescription.length).toUpperCase();
        
let combinedStr = `${cap1} ${cap2}`;

console.log(combinedStr);