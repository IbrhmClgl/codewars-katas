// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  if (arr.filter((e) => e > 0)) {
    let filteredArr = arr.filter((e) => e > 0);
    let sumArr = filteredArr.reduce((acc, curr) => acc + curr, 0);
    return sumArr;
  }
}
