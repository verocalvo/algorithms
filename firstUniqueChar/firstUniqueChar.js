const store = (string) => {
  let storage = {};
  for (let i = 0; i < string.length; i += 1) {
    if (storage[string[i]] === undefined) {
      storage[string[i]] = 1;
    } else {
      storage[string[i]] += 1
    }
  }
  return storage;
}

var firstUniqChar = function(s) {
  let counted = store(s);
  for (let i = 0; i < s.length; i += 1) {
    if (counted[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};