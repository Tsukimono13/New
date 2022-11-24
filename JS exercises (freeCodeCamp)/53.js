function nextInLine(arr, item) {
    var queue = arr.push(item);
    var removeArr = arr.shift();
  
    return removeArr;
  }
  
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));