var moveZeroes = function(nums) {
    for (let i = nums.length; i >= 0; i -= 1) {
      if (nums[i] === 0) {
        nums.splice(i, 1);
        nums.push(0);
      }
    }
    return nums;
};