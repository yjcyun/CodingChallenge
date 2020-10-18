//[1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...]

// Return the nth element of the Fibonacci sequence

// Solution 1 - O(n)
function fibonacci(n) {
  let result = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result[n];
}

// Recursion - not a good solution
function fib(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}