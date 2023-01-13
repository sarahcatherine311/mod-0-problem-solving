// Given an array of strings, return only the words that begin with the letter "t".
// Overall goal: To print only the words that start with "t".
// Pseudocode: 1. write an array of strings with some words that start with "t" and some that do not
//             2. for statement to look at each string in the array
//             3. conditional to check if each string starts with "t"
//             4. print the words that meet that condition


var words = ["tennis", "shelf", "horse", "time", "ball", "hint", "telephone"]

for (i = 0; i < words.length; i++) {
    if (words[i].startsWith("t")) {
        console.log(words[i]);
    }
} 