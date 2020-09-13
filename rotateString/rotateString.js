var rotateString = function(A, B) {
  let double = A + A;
  if (double.includes(B) && A.length === B.length) {
    return true;
  }
  return false;
};