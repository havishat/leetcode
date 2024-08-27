// var s = 121;
// var str = s.toString();
// console.log(str)

function palNum(num){
 // var str = '' + num
   var str = num.toString();
    console.log(str)
  for(var i=0; i < str.length; i++){
      
    if(str[i] != str[str.length - i - 1]){
      return false
    }
  }
  return true
}

console.log(palNum(1938))
