var maxSubArray = function(nums) {
    let maxSum, currentSum;
    for(let i = 0; i < nums.length-1 ; i++){
        if(i == 0) maxSum = nums[i];
        currentSum = nums[i]
        for(let j = i+1; j<nums.length-1; j++){
            currentSum += nums[j];
            if(currentSum > maxSum)maxSum = currentSum     
        }
    }
     return maxSum;
}
 
