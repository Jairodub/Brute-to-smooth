var twoSum = function(nums, target){
    let myMap = new Map();
    for(let i =0; i<nums.length; i++){
        myMap.set(nums[i],i);
    }
    for (let i =0; i<nums.length; i++){
        complimentIndex = myMap.get(target-nums[i])
        if (complimentIndex != undefined&& i != complimentIndex && complimentIndex!= -1) return [i, complimentIndex];
    }
}
