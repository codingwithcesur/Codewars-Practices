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

// Convert number to reversed array of digits.
// My solution and best practice
function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

// Binary to Number
// My solution
function binaryArrayToNumber1(arr) {
  let result = 0;
  let counter = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 1) {
      result += counter;
    }
    counter *= 2;
  }
  return result;
}
// Best practice
const binaryArrayToNumber = (arr) => parseInt(arr.join(""), 2);

// Shortest word in a string
// My solution and best practice
function findShort(s) {
  let arr = s.split(" ");
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < result.length) {
      result = arr[i];
    }
  }
  return result.length;
}
// Make negative
// My solution and best practice
function makeNegative(num) {
  if (num <= 0) {
    return num;
  } else {
    return -num;
  }
}
// Smallest integer in array
// My solution and best practice
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// break camelCase
// My solution
function breakcamelCase1(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result += " ";
    }
    result += string.substring(i, i + 1);
  }
  return result;
}
// Best practice
function breakcamelCase(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return string.join("");
}

// Two sum
// My solution
function twoSum1(numbers, target) {
  result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let u = 0; u < numbers.length; u++) {
      if (numbers[i] + numbers[u] === target && i !== u) {
        result = [i, u];
      }
    }
  }
  return result;
}
// Best practice
function twoSum(numbers, target) {
  result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let u = 0; u < numbers.length; u++) {
      if (numbers[i] + numbers[u] === target && i !== u) {
        result = [i, u];
      }
    }
  }
  return result;
}

// Sort the odd
// My solution
function sortArray1(array) {
  let result = [];
  let odd = [];
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odd.push(array[i]);
    }
  }
  odd.sort((a, b) => a - b);
  console.log(odd);
  for (let u = 0; u < array.length; u++) {
    if (array[u] % 2 === 0) {
      result[u] = array[u];
    }
  }
  for (let j = 0; j < array.length; j++) {
    if (result[j] === undefined) {
      result[j] = odd[counter];
      counter++;
    }
  }
  return result;
}
// Best practice
function sortArray(array) {
  var odds = [];
  //loop, if it's odd, push to odds array
  for (var i = 0; i < array.length; ++i) {
    if (array[i] % 2 !== 0) {
      odds.push(array[i]);
    }
  }
  //sort odds from smallest to largest
  odds.sort(function (a, b) {
    return a - b;
  });

  //loop through array, replace any odd values with sorted odd values
  for (var j = 0; j < array.length; ++j) {
    if (array[j] % 2 !== 0) {
      array[j] = odds.shift();
    }
  }

  return array;
}

// Roman numerals decoder
// My solution and best practice
function romanNum(roman) {
  result = 0;
  const romanNums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < roman.length; i++) {
    if (romanNums[roman[i]] < romanNums[roman[i + 1]]) {
      result -= romanNums[roman[i]];
    } else {
      result += romanNums[roman[i]];
    }
  }
  return result;
}

// Your order, please
// My solution and best practice
function order(words) {
  let result = [];
  let arr = words.split(" ");
  for (let i = 0; i < arr.length; i++) {
    result[arr[i].match(/\d+/g) - 1] = arr[i];
  }
  return result.join(" ");
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
