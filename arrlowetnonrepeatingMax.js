function arry23(arr, num){
  var arr3 = [];
  arr.sort();
  for(var i = 0; i< arr.length; i++){
    if(arr[i] == num){
      console.log(arr[i])
      console.log(i)
      arr3.push(i);
    }
  }

  if(arr.length != 0){
     return arr3;
  } else {
    return []
  }
}

//console.log(arry23([1,2,5,2,3,0], 5))


function arrlowetnonrepeatingMin(arr){
  var obj = {};
  var newArr2 = [];
  for(var i = 0 ; i < arr.length; i++){
    if(arr[i] in obj){
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  var newArr = []
  for(var j = 0 ; j < arr.length; j++){
    if(obj[arr[j]] == 1){
       newArr.push(arr[j])
    }
  }

  // arr.sort();
  // var count = 1;
  //   console.log(arr)
  //  for(var i = 1 ; i < arr.length; i++){
  //   if(arr[i - 1] == arr[i]){
  //    // console.log(count)
  //     count++
  //   } else {
  //     if(count > 1){
  //       count = 1;
  //       continue        
  //     } else {
  //       newArr2.push(arr[i])
  //     }
  //   }
  // }

  // console.log(newArr2)

  
  var min = newArr[0];
  for(var j = 0 ; j < newArr.length; j++){
    if(min > newArr[j]){
      min = newArr[j]
    }
  }

  return min
}





console.log(arrlowetnonrepeatingMin([3,2,8,3,4,5,2]))



// function arrlowetnonrepeatingMax(arr){
//   var obj = {};
//   var min = 0;
//   for(var i = 0 ; i < arr.length; i++){
//     if(arr[i] in obj){
//       obj[arr[i]] += 1;
//     } else {
//       obj[arr[i]] = 1;
//       min = arr[i];
//     }
//   }

//   for(var j = 0 ; j < arr.length; j++){
//     if(obj[arr[j]] == 1){
//        if(min > arr[j]){
//          min = arr[j]
//        }
     
//     }
//   }

//   return min
// }



// console.log(arrlowetnonrepeatingMax([3,2,8,3,4,5,2]))
