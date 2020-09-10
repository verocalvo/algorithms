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