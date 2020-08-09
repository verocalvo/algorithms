var isHappy = function(n) {
  let split = n.toString().split('');
  let sum = 0;
  split.forEach((element) => {
    sum += element * element;  
  })
  if (sum !== 1) {
    isHappy(sum);
  }
  return true;
};