var twoSum = function(nums, target){
	for (let i =0; i<nums.length; i++){
      for (let i =0; i<nums.length; i++){
        if(i !=j && nums[i]+nums[j] === target) return [i,j];
      }
    }
}
