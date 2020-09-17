var reverseString = function(s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i -= 1) {
    let last = s.pop();
    s.splice(count, 0, last);
    count += 1;
  }
  return s;
};