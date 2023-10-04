// My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

// "dolphin" -> "The Dolphin"

// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

// "alaska" -> "Alaskalaska"

// Complete the function that takes a noun as a string, and returns her preferred band name written as a string.

function bandNameGenerator(str) {
  const toArr = str.toLowerCase().split("");
  const lastElement = toArr.length - 1;

  if (toArr[0] === toArr[lastElement]) {
    const cloneStr = structuredClone(toArr);
    cloneStr.shift();
    const removeFirstLetterAndMakeUpperCase1 = toArr.shift().toUpperCase();
    toArr.unshift(removeFirstLetterAndMakeUpperCase1);
    const combineStr = toArr.join("") + cloneStr.join("");
    return combineStr;
  } else {
    const removeFirstLetterAndMakeUpperCase = toArr.shift().toUpperCase();
    toArr.unshift(removeFirstLetterAndMakeUpperCase);
    return "The " + toArr.join("");
  }
}
