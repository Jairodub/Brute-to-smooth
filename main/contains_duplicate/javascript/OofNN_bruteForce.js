var containsDuplicate = function(nums) {
	for(i in nums){
      for (j in nums){
        if(i != j &&nums[i] == nums[j]) return true;
      }
    }
   return false;  
};
