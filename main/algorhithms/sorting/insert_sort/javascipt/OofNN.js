function insertSort(arr){
  for(let i=0; i<arr.length; i++){
    if(arr[i]<arr[0]){
      arr.unshift(arr.splice(i,1)[0]);
    }
    for(let j=1; j<i; j++){
      if(arr[j-1]<=arr[i]&& arr[i]<arr[j]){
         arr.splice(j,0,arr.splice(i,1)[0])
      }
    }
    
  }
}
