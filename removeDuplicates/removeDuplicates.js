var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};