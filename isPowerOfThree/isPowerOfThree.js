var isPowerOfThree = function(n) {
  let num = String(Math.log(n) / Math.log(3)).split('');
  num.splice(num.length - 1, num.length);
  num = Number(num.join(''));
  if (num % 1 === 0) {
    return true;
  }
  return false;
};