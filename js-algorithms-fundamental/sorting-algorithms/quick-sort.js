// Use recursion to sort elements. Use pivot elements to split array into smaller chunks - elements bigger, smaller, and equl than the pivot element. Repeat the process for all chunks and concat the sorted chunks
// first pivot element and create three new arrays: smaller, equal, large elements array

function sort(arr) {
  const copiedArray = [...arr];
  console.log('function starting');
  console.log(arr);

  if (copiedArray.length <= 1) { //[5]
    console.log('only one item - returning');
    console.log(copiedArray);
    return copiedArray;
  }

  const smallerArray = [];
  const biggerArray = [];
  const pivotElement = copiedArray.shift(); //[-3]
  const centerArray = [pivotElement];

  while (copiedArray.length) {
    const currentElement = copiedArray.shift();
    if (currentElement === pivotElement) {
      centerArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallerArray.push(currentElement);
    } else {
      biggerArray.push(currentElement);
    }
  }

  console.log('after while');
  console.log(smallerArray);
  console.log(centerArray);
  console.log(biggerArray)
  const smallerElementsSortedArray = sort(smallerArray);
  const biggerElementsSortedArray = sort(biggerArray);
  return smallerElementsSortedArray.concat(centerArray, biggerElementsSortedArray);
}

//const sortedArray = sort([-3, 10, 1, 100, -10, 22, 15]);
const sortedArray = sort([-3, 10, -3, -15]);
console.log(sortedArray);

/*
Best case:
items are sorted randomly
O(n * log n)

Worse case:
items are already sorted
O(n^2)

Average case:
O(n * log n)
*/

//