/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim();
  var ans = 0;
  var start = Number(['+', '-'].indexOf(str[0]) >= 0);
  for (var i = start; i < str.length; i++) {
    if ('0' > str[i] || str[i] > '9') break;
    ans = ans * 10 + Number(str[i] - '0');
  }

  if (str[0] === '-')
    return Math.max(-ans, -0x80000000);
  return Math.min(ans, 0x7FFFFFFF);
};

var myAtoi2 = function(str) {
  return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
};

console.log(myAtoi3("   -42"));
console.log(myAtoi3("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi3("-91283472332"));
