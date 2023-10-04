// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
  const nonStringArr = [];
  const stringNumArr = [];

  let calcSum = function (arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  };

  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      nonStringArr.push(x[i]);
    } else {
      stringNumArr.push(parseInt(x[i]));
    }
  }

  let sumInteger = calcSum(nonStringArr);
  let sumNonInteger = calcSum(stringNumArr);
  return sumInteger - sumNonInteger;
}
