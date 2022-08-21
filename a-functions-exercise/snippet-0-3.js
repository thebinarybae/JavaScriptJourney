// snippet 0-3
let average = function (num1, num2) {
    console.log("calculating...");
    return (num1 + num2) / 2;
};

console.log(average(5, 10)); // 7.5
console.log(average(20, 26)); // 23
console.log(average(50, 100) + 2); // 77

let a = 21 + 3; // 24
let b = 20; // 20
let n = average(a, b); // 22
console.log(average(n, 18)); // 20

// This code will print 
// calculating...
// 7.5
// calculating...
// 23
// calculating...
// 77
// calculating...
// calculating...
// 20