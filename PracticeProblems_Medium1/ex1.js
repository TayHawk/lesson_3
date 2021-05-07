/*
For this practice problem, 
write a program that outputs
The Flintstones Rock! 10 times, 
with each line indented 1 space 
to the right of the line above it. 
The output should start out like this:
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...
*/

let msg = 'The Flintstones Rock!';

for(let i = 1; i < 11; i++) {
    console.log(msg.padStart(msg.length + i , ' ' ));
}