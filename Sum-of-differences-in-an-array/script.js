// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
  let newArr = [];
  let sum = 0;
  let descendOrder = arr.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < descendOrder.length - 1; i++) {
    newArr.push(descendOrder[i] - descendOrder[i + 1]);
  }
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  return sum;
}
