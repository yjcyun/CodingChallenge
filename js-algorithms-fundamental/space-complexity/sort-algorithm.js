// 1) Bubble sort
function sort(arr) {
  const resultArr = [...arr];

  for (let outer = 0; outer < resultArr.length; outer++) {
    let outerEl = resultArr[outer];

    for (let inner = outer + 1; inner < resultArr.length; inner++) {
      let innerEl = resultArr[inner];
      if (outerEl > innerEl) { //temporary boolean
        resultArr[outer] = innerEl; // replace exisiting array
        resultArr[inner] = outerEl;

        outerEl = resultArr[outer];
        innerEl = resultArr[inner];
      }
    }
  }
  return resultArr;
}

// Space complexity: O(1)

// 2) Quick sort

function sort(arr) {
  const copiedArray = [...arr];

  if (copiedArray.length <= 1) { 
    return copiedArray;
  }

  const smallerArray = []; //constant
  const biggerArray = []; //constant
  const pivotElement = copiedArray.shift(); //[-3]
  const centerArray = [pivotElement];

  while (copiedArray.length) {
    const currentElement = copiedArray.shift(); // remove element
    if (currentElement === pivotElement) {
      centerArray.push(currentElement); //new element that survives the iteration. Grow with every iteration - no impact on space complexity because of shift()
    } else if (currentElement < pivotElement) {
      smallerArray.push(currentElement);
    } else {
      biggerArray.push(currentElement);
    }
  }
  const smallerElementsSortedArray = sort(smallerArray);// nested function calls with new values created
  const biggerElementsSortedArray = sort(biggerArray);

  return smallerElementsSortedArray.concat(centerArray, biggerElementsSortedArray);
}

// Space complexity: O(n) or O(log n) - recursion usually results in linear space complexity

// 3) Merge sort
function sort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  const leftSortedArray = sort(leftArray);
  const rightSortedArray = sort(rightArray);

  const mergedArr = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;
  while (leftArrIndex < leftSortedArray.length ||
    rightArrIndex < rightSortedArray.length) {
    if (leftArrIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]) {
      mergedArr.push(rightSortedArray[rightArrIndex]);
      rightArrIndex++;
    } else {
      mergedArr.push(leftSortedArray[leftArrIndex]);
      leftArrIndex++;
    }
  }
  return mergedArr;
}

// the longer the arr, the more it will split ... 
// Space complexity: O(n) - recursion results in linear(in general)