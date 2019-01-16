/**
 * @param {number} x
 * @return {number}
 */
var reverse2 = function(x) {
  var results = [];
  var sresults = [];
  var x = x + '';
  for (var i = x.length; i >= 0; i--) {
    if (x[i] !== undefined) {
      results.push(x[i]);
    }
  }

  if (x[0] === '-') {
    results.unshift(0);
    results[0] = '-';
    results.pop();
  }

  for(var i = 0; i < results.length; i++) {
    sresults = sresults + results[i];
  }

  let num = parseInt(sresults);

  if(num + 1 > 2147483647 || num - 1 < -2147483648 ) {
    num = 0;
  }

  return num;
};

var reverse = function(x) {
  var res = 0;
  while (x) {
    res = res * 10 + x % 10;
    x = parseInt(x / 10);
  }

  if(res + 1 > 2147483647 || res - 1 < -2147483648 ) {
    res = 0;
  }

  return res;
}

console.log(reverse((123)));
console.log(reverse((-321)));
console.log(reverse((120)));
console.log(reverse((1534236469)));
