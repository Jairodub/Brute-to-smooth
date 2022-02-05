function mergeSort(arr){
  if(arr.length===1) return arr 
  let left, right;
  let sides=split(arr);
  left=sides[0];
  right=sides[1];
  return merge(mergeSort(left), mergeSort(right))
}
function split(arr){
  if(arr.length%2===0){
    return[arr.slice(0,(arr.length/2)), arr.slice(arr.length/2, arr.length)];
  }else{
    return[arr.slice(0,((arr.length-1)/2)), arr.slice((arr.length-1)/2, arr.length)];
  }
}
function merge(arr1,arr2){
  let mergedArr=[];
  let totalLen=arr1.length+arr2.length;
 while(mergedArr.length<totalLen){
   if(arr1.length==0){
     mergedArr.push(arr2.splice(0,1)[0]);
    }else  if(arr2.length==0){
     mergedArr.push(arr1.splice(0,1)[0]);
    }
     else if(arr1[0]<arr2[0]){
     mergedArr.push(arr1.splice(0,1)[0]);
   }else {
     mergedArr.push(arr2.splice(0,1)[0])
   }
 }
   return mergedArr;
}
