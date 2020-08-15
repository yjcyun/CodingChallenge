/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
*/

function palindromeNumber(int) {
  const reversed = int.toString().split('').reverse().join('');
  return (int.toString() === reversed);
}

palindromeNumber(-121)