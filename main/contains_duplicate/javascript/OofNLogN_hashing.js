var containsDuplicate = function(nums) {
	for(let i = 0; i < nums.length; i++){
    if (nums.includes(nums[i], i+1)) return true;
    }
  	return false;
};
