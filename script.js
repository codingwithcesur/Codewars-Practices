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
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
