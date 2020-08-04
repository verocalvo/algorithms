// linear time twoSum

var twoSum = function(nums, target) {
  let seen = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (seen[nums[i]]) {
      return [Number(seen[nums[i]]), i];
    }
    if (!seen[target - nums[i]]) {
      seen[target - nums[i]] = `${i}`;
    }
  }
};