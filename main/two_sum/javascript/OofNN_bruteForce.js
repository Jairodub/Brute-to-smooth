var twoSum = function(nums, target){
	for (i in nums){
      for(j in nums){
        if(nums[i]+nums[j] === target) return [i,j];
      }
    }
}
