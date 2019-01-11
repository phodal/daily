/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays1 = function (nums1, nums2) {
  var result;
  var nums = (nums1.concat(nums2)).sort((a, b) => a - b);

  if (nums.length % 2 === 1) {
    result = nums[(nums.length - 1) / 2];
  } else {
    result = (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2
  }

  return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var result;
  for (i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i])
  }

  nums1 = nums1.sort((a, b) => a - b);
  if (nums1.length % 2 === 1) {
    return nums1[(nums1.length - 1) / 2];
  } else {
    return (nums1[nums1.length / 2 - 1] + nums1[nums1.length / 2]) / 2
  }
};



console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([3], [-2, -1]));
console.log(findMedianSortedArrays([2], []));
console.log(findMedianSortedArrays([2, 3], [1]));
console.log(findMedianSortedArrays([10000], [10001]));
console.log(findMedianSortedArrays([1, 3], [2, 4]));
console.log(findMedianSortedArrays([1, 2, 2], [1, 2, 3]));
