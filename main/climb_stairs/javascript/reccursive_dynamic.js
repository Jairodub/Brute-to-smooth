function climbStairsMain(n){
  let temp={};
  return climbStairs(0,n);
  function climbStairs(strt, n){
  	if(strt>n){
      return 0;
    }
    	if(strt==n){
      return 1;
    }
    if(temp.strt){
      return (temp[strt]);
    }else{
      temp[strt]= climbStairs(strt+1, n)+ climbStairs(strt+2, n)
    }
    return temp[strt];
  }  
}
