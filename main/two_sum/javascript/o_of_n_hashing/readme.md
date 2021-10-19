# The hashing solution to the two sum problem in JavaScript
***The two sum problem***<br>
*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.*

**Solution**<br>
```
var twoSum = function(nums, target){
    let myMap = new Map();
    for(let i =0; i<nums.length; i++){
        myMap.set(nums[i],i);
    }
    for (let i =0; i<nums.length; i++){
        complimentIndex = myMap.get(target-nums[i])
        if (complimentIndex != undefined&& i != complimentIndex) return [i, complimentIndex];
    }
}
```

**The approach**<br>
Using the inbuilt hash table JavaScript type Map, we can convert the array into a hash table with its values as keys and indices as values. This is a single O(N) loop.
We can then efficiently  search for the complement of each item (`comp = target-item`) with another O(N)-time-complexity loop `(O(N)*O(1)`. We end up arriving at the solution within a O(N)-time complexity `(O(N) + O(N))`. 

The downside to this solution is that it uses up extra space for the new hash table resulting in less efficient space complexity (O(N)).
