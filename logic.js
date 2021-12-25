// Example 1:
// Input: nums = [2,7,11,15], target = 13
// Output: [0,2]
// Output: Because nums[0] + nums[2] == 13, we return [0, 2].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

function logic(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) return [i, j];
    }
  }
}

let nums = [2, 7, 11, 15];
let target = 13;
console.log(logic(nums, target));

let nums1 = [3, 2, 4];
let target1 = 6;
console.log(logic(nums1, target1));

let nums2 = [3, 3];
let target2 = 6;
console.log(logic(nums2, target2));
