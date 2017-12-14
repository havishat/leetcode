var twoSum = function(nums, target) {
    
    for(var i = 0 ; i < nums.length; i++) {
      for(var j = i + 1; j < nums.length; j++) {
        if (nums[j] == target - nums[i]) {
              return [i,j]  
        }
      }
    }
     
  };
  
  console.log(twoSum([2, 7, 11, 15],9))