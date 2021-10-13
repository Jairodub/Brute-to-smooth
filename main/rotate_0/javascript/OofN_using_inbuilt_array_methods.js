var rotate = function(nums, k) {
  if(nums.length===0)return nums
  if(k/nums.length>1){
		k=(k/nums.length - Math.floor(k/nums.length))*nums.length
    k=Math.round(k)
	}
  let arr1=nums.slice(0,nums.length-k);
  let arr2=nums.slice(nums.length-k); 
  nums.splice(0, nums.length, ...arr2, ...arr1);
  nums.concat(arr2);
  return nums;
};
