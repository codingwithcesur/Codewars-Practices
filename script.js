// Reverse a string
// My solution
function reverseStr1(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
// Best practice
function reverseStr(str) {
  return str.split("").reverse().join("");
}

// Number to string
// My solution and best practice
function numberToString(num) {
  return num.toString();
}

// function with two arguments that will return an array of the first n multiples of x.Assume both the given number and the number of times to count will be positive numbers greater than 0.
// My solution
function countBy(x, n) {
  var z = [];
  let start = 0;
  for (i = 0; i < n; i++) {
    z.push(start + x);
    start += x;
  }
  return z;
}
// Best practice
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
// My solution and best practice
var summation = function (num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};

// Sum all the numbers of a given array, except the highest and the lowest element. If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
// My solution and best practice
function sumArray(array) {
  if (array === null || array === undefined || array.length <= 1) {
    return 0;
  } else {
    let result = array.reduce((a, b) => a + b, 0);
    return (result -= Math.max(...array) + Math.min(...array));
  }
}

// Find Maximum and Minimum Values of a List.
// My solution
var min1 = function (list) {
  list.unshift(Math.min(...list));
  return list[0];
};

var max1 = function (list) {
  list.unshift(Math.max(...list));
  return list[0];
};
// Best practice
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// Given a non-negative integer, return a string with a murmur:
// My solution and best practice
var countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }
  return result;
};

// DNA to RNA Conversion
// My solution and best practice
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// You receive an array with your peers' test scores. Now calculate the average and compare your score! Return True if you're better, else False! Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
// My solution and best practice
function betterThanAverage(classPoints, yourPoints) {
  let classavr = yourPoints;
  classPoints.map((x) => (classavr += x));
  classavr /= classPoints.length + 1;
  return yourPoints > classavr ? true : false;
}
// Detect Pangram
// My solution
function isPangram1(string) {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  let result = 0;
  for (let i = 0; i < alphabet.length; i++) {
    if (string.toLowerCase().includes(alphabet[i])) {
      result += 1;
    }
  }
  if (result === 26) {
    return true;
  }
  return false;
}
// Best practice
function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.toLowerCase().includes(x));
}

// Is the integer a square number?
// My solution
function isSquare1(n) {
  if (Math.sqrt(n) === Math.floor(Math.sqrt(n))) {
    return true;
  }
  return false;
}
// Best practice
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
