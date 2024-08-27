///Please find the smallest k numbers (in value) out of n numbers. For example, if given an array

// with eight numbers {4, 5, 1, 6, 2, 7, 3, 8}, please return the least four numbers 1, 2, 3, and 4.
//(arr, 4)
//return [] 

function smallestKNum(arr, k){
  arr.sort() // [1,2,3,4,5,6,7,8]
  var newarr1 = [];
  for(var j = 1 ; j < arr.length; j++){
    if(arr[j - 1] != arr[j]){
      newarr1.push(arr[j - 1])
    }
  }
  
  
  var newArr = [];
  if(k > newarr1.length){
    k = newarr1.length;
  }
  
  for(var i = 0; i < k; i++ ){
    newArr.push(newarr1[i])
  }

  return newArr
}

console.log(smallestKNum([1, , 7, 3, 4, 8, 4, 5, ], 10))
