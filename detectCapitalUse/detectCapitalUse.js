var detectCapitalUse = function(word) {
  // all letters are caps
  // no letters are caps
  // first letter is caps
  let regex = /^([A-Z])?([a-z]+)$|^([A-Z]+)$/gm;
  // return boolean
  return regex.test(word);
};
  