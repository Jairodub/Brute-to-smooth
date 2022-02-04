function fibonacci(value){
  if (value<1){
    return 0
  }else if(value<3) return 1
   else return fibonacci(value-2)+fibonacci(value-1); 
}
