function LongestWord(sen) { 
  senArr = sen.split(/\W/);
  senArr.sort((a,b)=> b.split('').length - a.split('').length)
  return senArr[0]; 

}
