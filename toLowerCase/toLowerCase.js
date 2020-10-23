/*
* To Lower Case
* Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
* 
* 
* Example 1:
* 
* Input: "Hello"
* Output: "hello"
* Example 2:
* 
* Input: "here"
* Output: "here"
* Example 3:
* 
* Input: "LOVELY"
* Output: "lovely"* 
*/

var toLowerCase = function(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 91) {
      result += String.fromCharCode(str.charCodeAt(i) + 32);
    } else {
      result += str[i];
    }
  }
  return result;
};