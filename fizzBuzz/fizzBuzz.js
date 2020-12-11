/* **************************************************************************
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
******************************************************************************* */

var fizzBuzz = function(n) {
  let count = 1;
  let result = [];
  while (count <= n) {
    if (count % 3 === 0 && count % 5 === 0) {
      result.push('FizzBuzz');
      count += 1;
    } else if (count % 3 === 0) {
      result.push('Fizz');
      count += 1;
    } else if (count % 5 === 0) {
      result.push('Buzz');
      count += 1;
    } else {
      result.push(`${count}`);
      count += 1;
    }     
  }
  return result;
};

console.log(fizzBuzz(100));