# The hashing solution in javascript
Arrays in Javascript are implemented as hash tables with its indices as keys. Using the inbuilt methods provided in Javascript
to search for the complement of each value in the array is an O(N) - time complexity operation (O(N)*O(1). Given that converting
the given array into a hash table will require at least a loop (O(N) time), we can use a hash table to solve the problem with a O(N) time complexity solution 
(O(N) + O(N)). 

The downside to this solution is that it uses up extra space for the new hash table resulting in a less efficient space complexity (O(N)).
