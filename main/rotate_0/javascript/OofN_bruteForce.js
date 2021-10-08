var rotate = function(nums, k) {
  let numsTemp=[];
  for(let i = nums.length-k; i<nums.length; i++){
    numsTemp.push(nums[i]);
  }
  for(let i = 0; i<nums.length-k; i++){
  	numsTemp.push(nums[i]);
  }
  return numsTemp;
};
