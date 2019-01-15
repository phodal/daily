/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

/*
P   A   H   N
A P L S I I G
Y   I   R

P     I    N
A   L S  I G     // 4 - 3 / 4 - 1 反转
Y A   H R
P     I
 */
var convert = function (s, numRows) {
  var len = s.length;
  var results = '';
  var distance = numRows * 2 - 2;

  for (var i = 0; i < s.length; i = i + distance) {
    results = results + s.charAt(i)
  }

  for (var i = 1; i < numRows - 1; i++) {
    var tempDis = 2 * i;
    for (var j = i; j < s.length; j = j + tempDis) {
      results += s.charAt(j);
      tempDis = distance - tempDis;
    }
  }

  for (let i = numRows - 1; i < s.length; i = i + distance) {
    results = results + s.charAt(i);
  }

  return results;
};

console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));
