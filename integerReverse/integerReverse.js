/* 
* 
* Integer Reverse
*
* Given a 32-bit signed integer, reverse digits of an integer.
*
* Note:
* Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*
*
*
* Example 1:
*
* Input: x = 123
* Output: 321
* Example 2:
*
* Input: x = -123
* Output: -321
* Example 3:
*
* Input: x = 120
* Output: 21
* Example 4:
*
* Input: x = 0
* Output: 0
*
*
* Constraints:
*
* -231 <= x <= 231 - 1
*/

/* Does not handle negative numbers or integer overflow*/

// function reverseInteger(number){
//   let result = 0;
//   while (number > 0) {
//     result = (result * 10) + (number % 10);
//     number = Math.floor(number / 10);
//   }
//   return result;
// }

/* Handles all cases */

const reverse = function(x) {
  let negative = false;
  let result = 0;
  if (x < 0) {
    x = Math.abs(x);
    negative = true;
  }
  while (x > 0) {
    result = (result * 10) + (x % 10);
    x = Math.floor(x / 10);
  }
  if (negative) {
    result = Number('-' + `${result}`);
  }
  if (Math.abs(result) > 2147483647){
    return 0;  
  }
  return result;   
};

console.log(reverseInteger(12));
// 21 ----- +9
console.log(reverseInteger(36));
// 63 ----- +27
console.log(reverseInteger(78));
// 87 ----- +9
console.log(reverseInteger(91));
// 19 ----- -72
console.log(reverseInteger(1746));
// 6471 --- +4725