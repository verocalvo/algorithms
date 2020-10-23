/*
Palindrome Number

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Follow up: Could you solve it without converting the integer to a string?

 

Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false
 

Constraints:

-231 <= x <= 231 - 1
*/

// var isPalindrome = (x) => {
//   x = x.toString();
//   while (x.length > 1) {
//     if (x[0] === x[x.length - 1]) {
//       x = x.slice(1, x.length - 1);
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

/*
********** More memory intensive / Takes longer ***********
var isPalindrome = function(x) {
  let split = undefined;
  if (typeof x !== 'number') {
    split = x;  
  } else if (typeof x === 'number') {
    split = x.toString();
  }
  if (split.length < 2) {
    return true;
  }
  if (split[0] === split[split.length - 1]) {
    split = split.slice(1, split.length - 1);
    return isPalindrome(split);
  }
  return false;
};
*/

/*
********** Also more memory intensive / Takes longer ***********
*/
var isPalindrome = (x) => {
  let reverse = JSON.stringify(x).split('').reverse().join('');
  if (JSON.stringify(x) === reverse) {
    return true;  
  }
  return false;
}