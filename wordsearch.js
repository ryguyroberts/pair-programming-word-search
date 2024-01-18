const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    // If word found forward OR backwards return true
    if (l.includes(word)) return true;
    if (reverseString(l).includes(word)) return true;

  }
  const swap = verticalSwapper(letters);
  const verticalJoin = swap.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    // If word found forward OR backwards return true
    if (l.includes(word)) return true;
    if (reverseString(l).includes(word)) return true;

  }
  return false;
};

module.exports = wordSearch;

// Function to do the logic of vertical to horizontal swap
const verticalSwapper = (array) => {
  let swappedArray = [];
  for (const keyArray in array) {
    for (const keyValue in array[keyArray]) {
      if (!swappedArray[keyValue]) {
        swappedArray[keyValue] = [];
      }
      swappedArray[keyValue][keyArray] = array[keyArray][keyValue];
    }
  }
  return swappedArray;
};

// Function to reverse the current string Stretch
const reverseString = (string) => {
  let reverseArray = string.split("");
  return reverseArray.reverse().join("");
};
