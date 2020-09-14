var toLowerCase = function(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 91) {
      result += String.fromCharCode(str.charCodeAt(i) + 32);
    } else {
      result += str[i];
    }
  }
  return result;
};