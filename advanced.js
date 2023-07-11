// Moving Zeros To The End
// My solution
function moveZeros1(arr) {
  let zerosArr = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      zerosArr.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return zerosArr.concat(result);
}
// Best practice
function moveZeros(arr) {
  var filtedList = arr.filter(function (num) {
    return num !== 0;
  });
  var zeroList = arr.filter(function (num) {
    return num === 0;
  });
  return filtedList.concat(zeroList);
}

// First non-repeating character
// My solution
function firstNonRepeatingLetter1(s) {
  let lowerS = s.toLowerCase();
  let result = "";
  for (let i = 0; i < lowerS.length; i++) {
    if (lowerS.indexOf(lowerS[i]) === lowerS.lastIndexOf(lowerS[i])) {
      result = s[i];
      break;
    }
  }
  if (result === undefined || s.length === 0) {
    return "";
  }
  return result;
}
// Best practice
function firstNonRepeatingLetter(s) {
  var t = s.toLowerCase();
  for (var x = 0; x < t.length; x++)
    if (t.indexOf(t[x]) === t.lastIndexOf(t[x])) return s[x];
  return "";
}
