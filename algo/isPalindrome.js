/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (!(x >= 0)) {
    return false;
  }

  var x = x + "";
  let length = x.length;
  var isOdd = length % 2;
  var center = isOdd ? length / 2 + 1: length / 2;

  for (var i = 0; i < length; i++) {
    if (x[i] !== x[length - i - 1] && i !== center) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(121));
console.log(isPalindrome(1321));
console.log(isPalindrome(13231));
