// Write a function `contains(str1, str2)` that accepts two strings as arguments. The function should
// return a boolean indicating whether or not `str2` is contained within `str1`. The function should
// ignore any differences in capitalization.

let contains = function (str1, str2) {
let lowerCasestr1 = str1.toLowerCase();
let lowerCasestr2 = str2.toLowerCase();

return lowerCasestr1.indexOf(lowerCasestr2) > -1;
};

console.log(contains("caterpillar", "pill")); // true
console.log(contains("lion's share", "on")); // true
console.log(contains("SORRY", "or")); // true
console.log(contains("tangent", "gem")); // false
console.log(contains("clock", "ok")); // false