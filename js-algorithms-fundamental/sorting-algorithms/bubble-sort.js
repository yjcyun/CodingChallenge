// Compare two items at a time and sort them.

function sort(arr) {
  const resultArr = [...arr];

  for (let outer = 0; outer < resultArr.length; outer++) {
    let outerEl = resultArr[outer];

    for (let inner = outer + 1; inner < resultArr.length; inner++) {
      let innerEl = resultArr[inner];
      if (outerEl > innerEl) {
        resultArr[outer] = innerEl;
        resultArr[inner] = outerEl;

        outerEl = resultArr[outer];
        innerEl = resultArr[inner];
      }
    }
  }
  return resultArr;
}

const sortedArray = sort([5, 10, -3, -10, 1, 100, 99]);
console.log(sortedArray);

/* 
Best case:
if we have sorted item, we only initialize the loop once => n(1)

Worst case:
time compexity: O(n^2)
if you have nested loop, you got quadratic time
*/