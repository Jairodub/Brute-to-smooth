var maxSubArray = function(nums) {
    let maxSum, currentSum, localMax;
    for(let i = 0; i < nums.length-1 ; i++){
        if(i == 0) maxSum = localMax = nums[i];
      	localMax = max(nums[i], nums[i]+localMax);
    	maxSum=max(maxSum , localMax);
    }
     return maxSum;
}
function max(a,b){ 
  if (a<b) return b;
  return a
}
