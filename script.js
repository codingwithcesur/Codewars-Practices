// Reverse a string
function reverseStr(str) {
  return str.split("").reverse().join("");
}

// Number to string
function numberToString(num) {
  return num.toString();
}

// function with two arguments that will return an array of the first n multiples of x.Assume both the given number and the number of times to count will be positive numbers greater than 0.
function countBy(x, n) {
  let z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

// Given a year, return the century it is in.
function century(year) {
  return Math.ceil(year / 100);
}
// Summation of every number from 1 to num. Assuming the number will always be a positive integer greater than 0.

var summation = function (num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};
