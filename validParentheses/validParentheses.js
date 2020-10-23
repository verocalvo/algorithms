/*
* Valid Parentheses
* 
* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
* 
* An input string is valid if:
* 
* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.
*  
* 
* Example 1:
* 
* Input: s = "()"
* Output: true
*
* Example 2:
* 
* Input: s = "()[]{}"
* Output: true
*
* Example 3:
* 
* Input: s = "(]"
* Output: false
*
* Example 4:
* 
* Input: s = "([)]"
* Output: false
*
* Example 5:
* 
* Input: s = "{[]}"
* Output: true
*  
* 
* Constraints:
* 
* 1 <= s.length <= 104
* s consists of parentheses only '()[]{}'.
*/

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