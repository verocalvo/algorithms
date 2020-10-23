/*
* Power of Three
* 
* Given an integer, write a function to determine if it is a power of three.
* 
* Example 1:
* 
* Input: 27
* Output: true
* 
* Example 2:
* 
* Input: 0
* Output: false
* 
* Example 3:
* 
* Input: 9
* Output: true
* 
* Example 4:
* 
* Input: 45
* Output: false
* 
* Follow up:
* Could you do it without using any loop / recursion?
*/

var isPowerOfThree = function(n) {
  let num = String(Math.log(n) / Math.log(3)).split('');
  num.splice(num.length - 1, num.length);
  num = Number(num.join(''));
  if (num % 1 === 0) {
    return true;
  }
  return false;
};