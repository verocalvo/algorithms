/**************************** Keyboard Row ***********************************************
* 
* Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
*  
* Example:
* 
* Input: ["Hello", "Alaska", "Dad", "Peace"]
* Output: ["Alaska", "Dad"]
*  
* 
* Note:
* 
* You may use one character in the keyboard more than once.
* You may assume the input string will only contain letters of alphabet.
* 
*/

var findWords = function(words) {
  let result = [];
  // create list of key rows
  let rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  // current row variable equal to the current rows index defaulting to the first row
  let current = 0;
  // iterate over words list
  for (let i = 0; i < words.length; i += 1) {
    let currentWord = words[i];
    // iterate over current word
    while (!rows[current].includes(currentWord[0].toLowerCase())) {
      current += 1
    }
    for (let j = 0; j < currentWord.length; j += 1) {
      if (j === currentWord.length - 1 && rows[current].includes(currentWord[j].toLowerCase())) {
        result.push(currentWord);
        break;
      }
      if (!rows[current].includes(currentWord[j].toLowerCase())) {
        break;
      }
    }
    current = 0;
  }
  return result;
};

// input will be a list of strings
// output will be a list of strings

findWords(["Hello", "Alaska", "Dad", "Peace"]);