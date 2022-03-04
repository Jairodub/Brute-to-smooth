function radixSort(arr){
   let maxValue= Math.max(...arr);
    let keyLength=findLength(maxValue);
    let res = [];
    res.push(arr);
   for (let i=0; i<keyLength; i++){
     arr=countSort(arr, i);
     // console.log (arr);
   }
  return arr
}
function findLength(num){
    if(num<1)return 0
    let count=1;
    while(num%10 != num){
        num=num/10;
        count++;
    }
    return count;
}
function countSort(arr, digit){
    let keys=[0]
    let result=[]
    //find the number of occurances of the key in that decimal place 
    for(let i=0; i<arr.length; i++){
        let key = getKey(arr[i], digit)
        if(keys[key]!=undefined){
            keys[key]=keys[key]+1;
        }else
          keys[key]=1;
    }
    //make keys array cummulative
  for(let i=1; i<keys.length; i++){
    if(keys[i]==null)keys[i]=0
    keys[i]=keys[i]+keys[i-1];
  }
  //place arr items in order in the result array starting with the last item
  for(let i=arr.length-1; i>=0; i--){
    let key = getKey(arr[i], digit);
    keys[key]--;

    result[keys[key]]=arr[i];
  }
  return result;
}
function getKey(num, digit){
   return Math.floor(num/(10**digit))%10;
}
