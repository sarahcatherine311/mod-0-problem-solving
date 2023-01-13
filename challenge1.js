// Given an array of strings, return only the strings that have exactly 4 characters.
// Overall goal: To print only the words that have exactly 4 characters.
// Pseudocode: 1. write an array of strings with 4 letter words and words with more and less than 4 letters
//             2. for statement to look at each string in the array
//             3. conditional to check if each string has exactly 4 characters - .length === 4 
//             4. print the words that meet that condition

var words = ["hi", "bat", "cone", "horse", "home", "dog", "list", "tennis"];

for (var i = 0; i < words.length; i++) {
    if (words[i].length === 4) {
        console.log(words[i]);
    }
}