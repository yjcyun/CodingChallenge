// Binary search doens't work on unordered lists
// Find median and compare it to the element you're trying to find
// Is it the element you're looking for? If not, take the half in which must be inside

function findElement(sortedArr, element) {
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (element === sortedArr[middleIndex]) {
      return middleIndex;
    }

    if (sortedArr[middleIndex] < element) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
}
const arr = [1, 5, 9, 13, 99, 100];

console.log(findElement(arr, 99));