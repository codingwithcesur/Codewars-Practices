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
