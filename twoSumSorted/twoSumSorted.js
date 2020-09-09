var twoSum = function(numbers, target) {
  let storage = {};
  for (let i = 0; i < numbers.length; i++) {
    if (storage[`${numbers[i]}`]) {
      return [storage[`${numbers[i]}`], i + 1];
    }
    if (storage[`${target - numbers[i]}`] === undefined) {
      storage[`${target - numbers[i]}`] = i + 1;
    }
  }
};