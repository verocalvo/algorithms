var isPowerOfFour = function(num) {
  if ((Math.log(num) / Math.log(4)) % 1 === 0) {
    return true;
  }
  return false;
};