/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var array = s.split('');
  var start = 0, end = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j <= i && i + j < array.length; j++) {
      if (array[i - j] == array[i + j]) {
        if (2 * j > end - start) {
          start = i - j;
          end = i + j;
        } else continue;
      } else break;
    }
    if (i < array.length - 1 && array[i] == array [i + 1]) {
      if (end - start < 2) {
        start = i;
        end = i + 1;
      }
      for (let j = 1; j <= i && i + j + 1 < array.length; j++) {
        if (array[i - j] == array[i + j + 1]) {
          if (2 * j + 2 > end - start + 1) {
            start = i - j;
            end = i + j + 1;
          } else continue;
        } else break;
      }
    }
  }
  return s.substring(start, end + 1);
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var array = s.split('');
  var start = 0, end = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j <= i && i + j < array.length; j++) {
      if (array[i - j] == array[i + j]) {
        if (2 * j > end - start) {
          start = i - j;
          end = i + j;
        } else continue;
      } else break;
    }
    if (i < array.length - 1 && array[i] == array [i + 1]) {
      if (end - start < 2) {
        start = i;
        end = i + 1;
      }
      for (let j = 1; j <= i && i + j + 1 < array.length; j++) {
        if (array[i - j] == array[i + j + 1]) {
          if (2 * j + 2 > end - start + 1) {
            start = i - j;
            end = i + j + 1;
          } else continue;
        } else break;
      }
    }
  }
  return s.substring(start, end + 1);
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('abvdfaf'));
console.log(longestPalindrome('alfdsafklsafasf'));
