var isValid = function(s) {
  let stack = [];
  let storage = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      let removed = stack.pop();
      if (s[i] !== storage[removed]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};