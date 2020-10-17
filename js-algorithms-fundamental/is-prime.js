// Determine whether an input number is a prime number
// divisible by itself and 1

// Solution 1 - O(n)
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Solution 2 - O(sqrt(n))
function isPrime(n) {
  for (leti = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

/*
every none-prime number has a product that consists of two factors a & b that are neither 1 nor the number itself.
9 = 3* 3
At least one factor is smaller or equal to the square root of the number
sqrt(9) = 3 => 9 = 3*3
*/