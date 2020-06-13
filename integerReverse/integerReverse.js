/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  let result = 0;
  while (number > 0) {
    result = (result * 10) + (number % 10);
    number = Math.floor(number / 10);
  }
  return result;
}

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