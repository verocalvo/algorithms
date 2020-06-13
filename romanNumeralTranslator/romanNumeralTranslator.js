
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function (romanNumeral) {
  if (typeof romanNumeral !== 'string') {
    return null;
  }
  let result = 0;
  if (romanNumeral.length === 0) {
    return result;
  }
  let subtract = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    let currentChar = romanNumeral[i];
    let nextChar = romanNumeral[i + 1];
    // if current is 1
    if (DIGIT_VALUES[currentChar] === 1) {
      // if next is 5 or 10
      if (DIGIT_VALUES[nextChar] === 5 || DIGIT_VALUES[nextChar] === 10) {
        // subtract 2
        subtract += 2;
      }
    }
    // if current is 10
    if (DIGIT_VALUES[currentChar] === 10) {
      // if next is 100
      if (DIGIT_VALUES[nextChar] === 100) {
        // subtract 20
        subtract += 20;
      }
    }
    // if current is 100
    if (DIGIT_VALUES[currentChar] === 100) {
      // if next is 1000
      if (DIGIT_VALUES[nextChar] === 1000) {
        // subtract 200
        subtract += 200;
      }
    }
    result += DIGIT_VALUES[currentChar];
  }
  return result -= subtract;
};

console.log(translateRomanNumeral('MCMLIV'));
console.log(translateRomanNumeral('MCMXC'));
console.log(translateRomanNumeral('MMVIII'));
console.log(translateRomanNumeral('MDCCCCX'));
console.log(translateRomanNumeral('MCMX'));
console.log(translateRomanNumeral('XV'));