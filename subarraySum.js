/**Subarray with Given Sum
 https://www.geeksforgeeks.org/find-subarray-with-given-sum/
 Examples: 

 Input: arr[] = { 15, 2, 4, 8, 9, 5, 10, 23}, sum = 23
 Output: 2 5
 Explanation: Sum of elements between indices 2 and 5 is 2 + 4 + 8 + 9 = 23

 Input: arr[] = {1, 4, 0, 0, 3, 10, 5}, sum = 7
 Output: 2 5
 Explanation: Sum of elements between indices 1 and 4 is 4 + 0 + 0 + 3 = 7

 Input: arr[] = {1, 4}, sum = 0
 Output: -1
 Explanation: There is no subarray with 0 sum
 */

function subarraySum(arr, sum){
  let currentSum = arr[0]; //1
  let i = 0;
  let j = 0;
  while(j < arr.length){
    if(currentSum === sum){ 
      return [i + 1, j + 1]
    } else if(currentSum > sum){
      currentSum -= arr[i];
      i++
    } else {
      j++
      currentSum += arr[j];
    }
  }
  return -1
}

//arr = [1, 4, 0, 0, 3, 10, 5], sum = 7
//let arr = [15, 2, 4, 8, 9, 5, 10, 23];
//let sum = 23
let arr = [1, 4];
let sum = 0

console.log(subarraySum(arr, sum))

