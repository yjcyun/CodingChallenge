// 1) Factorial (loop)

function fact(number) { // 1
  let result = 1; // 1
  for (i = 2; i <= number; i++) { //not permanently saved as i changes
    result = result * i;
  }

  return result;
}

// Space complexity: O(1)


// 2) Factorial (recursive)
function factRecursive(number) {
  if (number === 1) { // temporary space memory
    return 1;
  }
  return number * factRecursive(number - 1);
  // A new value is created for every nested function call(the parameter received)
}

// Space complexity: O(n)