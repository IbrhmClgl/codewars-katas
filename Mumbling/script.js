// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let arrNew = [];
  let updateArr = [];
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    counter++;
    arrNew.push(s[i].repeat(counter).toLowerCase());
  }
  for (let i = 0; i < arrNew.length; i++) {
    updateArr.push(arrNew[i][0].toUpperCase() + arrNew[i].slice(1));
  }
  return updateArr.join("-");
}
