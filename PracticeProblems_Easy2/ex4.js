//Starting with the string:
let famousWords = "seven years ago...";
//show two different ways to put the expected "Four score and " in front of it.
let targetWord =  "Four score and ";
 let concatfamourWords = targetWord + famousWords;
 console.log(concatfamourWords);
 
 let arrayWord = famousWords.split(' ');
 arrayWord.unshift('Four', 'score', 'and');
 console.log(arrayWord.join(' '));
