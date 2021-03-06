/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // TODO: return true if n is prime, false otherwise
  if (n === 2) {
    return true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/* 
 * A function that generates a list of all prime numbers
 * in a user-specified range (inclusive).
 */

var primeSieve = function (start, end) {
  let result = [];
  while (start <= end) {
    if (primeTester(start)) {
      result.push(start);
    }
    start++;
  }
  return result;
};

console.log(primeSieve(5, 184));
