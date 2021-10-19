var containsDuplicate = function(nums, target){
    let myMap = new Map();
    for(let i =0; i<nums.length; i++){
        if(myMap.get(nums[i] != undefined)) return true
        myMap.set(nums[i],i)
    }
    return false;
}
