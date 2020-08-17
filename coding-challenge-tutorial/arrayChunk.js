// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[1]]    [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

chunk([1, 2, 3, 4], 2)

// solution 1 // 

function chunk(arr, target) {
  // create an empty arr to hold chunked array 'chunked'
  let chunked = [];
  // for each el in the unchunked arr
  for (let el of arr) { //[[],[]]
    // retrieve the last el in chunked
    const lastEl = chunked[chunked.length - 1];
    // if the !last el || .length===target 
    if (!lastEl || lastEl.length === target) {
      // push a new chunk into chunked with current el
      chunked.push([el])
    }
    // else add current el into the chunk
    else {
      lastEl.push(el)
    }
  }
  return chunked
}

// Solution 2 //
function chunk(arr, target) { // [[],[]]
  // create empty chunked arr
  let chunked = [];
  // create 'index' start at 0
  let index = 0;
  // while index is less than arr.length
  while (index < arr.length) {
    // push a slice of length 'target' from 'array'' into 'chunked'
    chunked.push([arr.slice(index, index+target)]);
    // add 'target' to 'index'
    index += target;
  }

  return chunked
}

chunk([1, 2, 3, 4], 2)
