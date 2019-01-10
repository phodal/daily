/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var start = 0;
  var end = 0;
  var longest = 0;
  var result = {};
  for (var i = 0; i < s.length; i++) {
    if (result[s[end]] !== undefined) {
      start = Math.max(result[s[end]] + 1, start)
    }

    longest = Math.max(longest, end - start + 1);
    result[s[end]] = end++;
  }

  return longest;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('aab'));
console.log(lengthOfLongestSubstring('dvdf'));
