var isPowerOfTwo = function(n) {
  let total = 1;
  let bool = false;
  let recursion = () => {
    if (n === total) {
      bool = true;
      return;
    }
    if (n < total) {
      return;
    }
    total *= 2;
    recursion();
  }
  recursion();
  return bool;
};