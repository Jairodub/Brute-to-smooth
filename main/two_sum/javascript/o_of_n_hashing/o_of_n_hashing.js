var twoSum = function(nums, target){
	for (let i =0; i<nums.length; i++){
      		complimentIndex = nums.indexOf(target-nums[i]);
      		if (i != complimentIndex && complimentIndex!= -1) return [i, complimentIndex]
    	}
}
