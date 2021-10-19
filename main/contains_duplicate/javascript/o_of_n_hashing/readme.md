# The hashing solution to the contains duplicate problem in JavaScript
***The contains duplicate problem***<br>
*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.*

**Solution**
```
var containsDuplicate = function(nums, target){
    let myMap = new Map();
    for(let i =0; i<nums.length; i++){
        if(myMap.get(nums[i] != undefined)) return true;
        myMap.set(nums[i],i);
    };
    return false;
};
```
**The approach**<br>
Using the inbuilt hash table JavaScript type Map, we can convert the array into a hash table with the array's values as keys and its indices as values. Before each value is added, we first search the hash table to determine if the value already exists and return true if it does. This is a single O(N) time complexity loop (O(N)*O(1).

The downside to this solution is that it uses up extra space for the new hash table resulting in less efficient space complexity (O(N)).

