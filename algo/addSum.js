/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = nums.length; j >= 0; j--) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    var result = target - nums[i];
    var index = nums.indexOf(result);
    if (index !== -1 && index !== i) {
      return [i, index]
    }
  }
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var exist = {};
  for (var i = 0; i < nums.length; i++) {
    if (exist[target - nums[i]] !== undefined) {
      return [exist[target - nums[i]], i];
    }
    exist[nums[i]] = i
  }
};

console.log(twoSum([3, 2, 4], 6));
