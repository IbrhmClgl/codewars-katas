// Change every letter in a given string to the next letter in the alphabet. The function takes a single parameter s (string).

// Notes:

// Spaces and special characters should remain the same.
// Capital letters should transfer in the same way but remain capitilized.
// Examples
// "Hello"               -->  "Ifmmp"
// "What is your name?"  -->  "Xibu jt zpvs obnf?"
// "zoo"                 -->  "app"
// "zzZAaa"              -->  "aaABbb"

function nextLetter(str) {
  const arr = [];
  let convertArrToChar = [];
  for (let i = 0; i < str.length; i++) {
    // arr.push(str.charCodeAt(i));
    if (str.charCodeAt(i) < 65) {
      arr.push(str.charCodeAt(i));
    }
    if (str.charCodeAt(i) === 90) {
      arr.push(str.charCodeAt(i) - 25);
    }
    if (str.charCodeAt(i) === 122) {
      arr.push(str.charCodeAt(i) - 25);
    }
    if (
      str.charCodeAt(i) !== 90 &&
      str.charCodeAt(i) !== 122 &&
      str.charCodeAt(i) > 64
    ) {
      arr.push(str.charCodeAt(i) + 1);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    convertArrToChar.push(String.fromCharCode(arr[i]));
  }
  return convertArrToChar.join("");
}

nextLetter("My Name Is Zoo");
