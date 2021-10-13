var rotate = function(nums, k) {
  let numsTemp=[];
  if(nums.length===0)return nums;
  if(k/nums.length>1){
		k=(k/nums.length - Math.floor(k/nums.length))*nums.length;
    k=Math.round(k);
	}
  for(let i = nums.length-k; i<nums.length; i++){
    numsTemp.push(nums[i]);
  }
  for(let i = 0; i<nums.length-k; i++){
  	numsTemp.push(nums[i]);
  }
  return numsTemp;
};
