// 1) Linear search
function linearSearch(arr, element, comparatorFn) {
  let index = 0;
  for (let item of arr) {
    if (typeof element === 'object' && element !== null && comparatorFn(element, item)) {
      return index;
    }
    if (item === element) {
      return index;
    }
    index++
  }
}
// Space complexity: O(1) 
// No new "permanent" values are created during the iteration

// 2) Binary search
function binarySearch(sortedArr, element) {
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
// Space complexity: O(1)
// No new "permanent" values are created during the iteration