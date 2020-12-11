/****************************Reverse Words in a String III**************************
 * 
 * Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 * 
 * Example 1:
 * 
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 * Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/

let reverseWords = (s) => {
  let reversed = [];
  s = s.split(' ');
  s.forEach((word) => {
    let flippedWord = [];
    word = word.split('');
    while (word.length > 0) {
      flippedWord.unshift(word.splice(0, 1));
    }
    reversed.push(flippedWord.join(''));
  });
  return reversed.join(' ');
}

reverseWords("Let's take LeetCode contest");