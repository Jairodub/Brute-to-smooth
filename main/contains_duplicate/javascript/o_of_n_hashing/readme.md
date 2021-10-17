# The hashing solution to the contains duplicate problem in JavaScript
***The contains duplicate problem***<br>
*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.*

**The approach**<br>
Arrays in JavaScript are implemented as hash tables with their indices as keys. Using the inbuilt methods provided in JavaScript
to search for the duplicate of each value in the given array is an O(N)-time-complexity operation `(O(N)*O(1)`. Given that converting
the given array into a hash table will require at least a loop *(O(N) time)*, we can use a hash table to solve the problem with a O(N)-time-complexity solution 
`(O(N) + O(N))`. 

The downside to this solution is that it uses up extra space for the new hash table resulting in less efficient space complexity (O(N)).
