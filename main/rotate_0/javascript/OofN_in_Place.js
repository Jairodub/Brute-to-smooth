var rotate = function(nums, k) {
    let numsTemp=[];
    if(nums.length===1) return nums;
    if(k/nums.length>1){
        k=(k/nums.length - Math.floor(k/nums.length))*nums.length;
        k=Math.round(k);
   }
    for(let i = 0; i<nums.length; i++){
      if(i<k) {
        numsTemp.push(nums[i]);
        nums[i]=nums[nums.length+i-k];
      } 
      if(i>=k){
          numsTemp.push(nums[i]);
          nums[i]= numsTemp[i-k];
      }
    }
    return nums;
};
