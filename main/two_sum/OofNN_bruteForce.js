var twoSum = function(arr, target){
	for (i in arr){
      for(j in arr){
        if(arr[i]+arr[j] === target) return [i,j];
      }
    }
}
