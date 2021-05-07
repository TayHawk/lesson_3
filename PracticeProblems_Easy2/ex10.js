//Write two one-line expressions to count
//the number of lower-case t characters
//in each of the following strings:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let x = statement1.split('').filter(char => char === 't').length;
console.log(x);


let y = statement2.split('').filter(char => char === 't').length;
console.log(y);
