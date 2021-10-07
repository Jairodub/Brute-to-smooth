var moveZeroes = function(nums){
  	if (nums.length>0){
     	for (let i =0; i<nums.length-1; i++){
          if(nums[i] == 0){
           	console.log(nums[i]);
            for(let j = i+1; j<nums.length; j++){
              if(nums[j] != 0){
                nums[i] = nums[j];
                nums[j]=0;
                break;
                }    
             }
          }
        }
    }
}
