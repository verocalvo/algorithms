/************************ Max Consecutive Ones ********************************
*
* Given a binary array, find the maximum number of consecutive 1s in this array.
* 
* Example 1:
* Input: [1,1,0,1,1,1]
* Output: 3
* Explanation: The first two digits or the last three digits are consecutive 1s.
*    The maximum number of consecutive 1s is 3.
* Note:
*
* The input array will only contain 0 and 1.
* The length of input array is a positive integer and will not exceed 10,000
*/

const findMaxConsecutiveOnes = function(nums) {
  // counter to count each consecutive 1 with a default value of 0
  let counter = 0;
  // max variable to keep track of the largest count of 1s
  let max = 0;
  // iterate through the input array
  for (let i = 0; i < nums.length; i += 1) {
    // if the current character is a 1
    if (nums[i]) {
      // increment counter
      counter += 1; 
      // if the counter value is greater than the max value
      if (counter > max) {
        // max equals counter
        max = counter
      }
      // else if the current character is a zero
    } else {
      // reset the counter
      counter = 0;
    }
  }
  // return the max
  return max;  
};