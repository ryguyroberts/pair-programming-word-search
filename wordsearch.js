const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
        // include a check to see if backwards
    }
    // Flip this table similiar to matrix values on it's head
    const swap = verticalSwapper(letters);
    const verticalJoin = swap.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
        // include a check to see if backwards
    }
    return false;


}

module.exports = wordSearch

// Additional Function




// One to do the logic of vertical to horizontal swap
const verticalSwapper = (array) => {
  let swappedArray = [];
  for (const keyArray in array) {
    for (const keyValue in array[keyArray]) {
      if(!swappedArray[keyValue]) {
        swappedArray[keyValue] = [];
      }
      swappedArray[keyValue][keyArray] = array[keyArray][keyValue];
    }
  }
  return swappedArray;
}

// const words = [
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ];

// console.log(verticalSwapper(words));

// One to reverse the current string Stretch

