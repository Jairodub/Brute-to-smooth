var moveZeroes = function(nums){
  	if (nums.length>0){
      	let lastZeroIndex;
     	for (let i =0; i<nums.length; i++){  
          if(nums[i]===0 && lastZeroIndex === undefined) lastZeroIndex = i; 
          if (nums[i] != 0 && lastZeroIndex != undefined ){
            nums[lastZeroIndex] = nums[i];
            lastZeroIndex += 1;
            nums[i] = 0;
          }
        }
    }
}
