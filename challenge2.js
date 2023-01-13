// Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.
// Overall goal: To print all of the words in lowercase letters.
// Pseudocode: 1. write an array of strings with uppercase and lowercase letters
//             2. for statement to look at each string in the array
//             3. print each element of the array with the array method .toLowerCase 

var words = ["TenNis", "hoRsE", "sHeLf", "hELP"]

for (var i = 0; i < words.length; i++) {
    console.log(words[i].toLowerCase());
}