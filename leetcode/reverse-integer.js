/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
*/

function reverseInteger(int) {
  const intArr = int.toString().split('').reverse().join('');
  const reversed = parseInt(intArr) * Math.sign(int);

  if (reversed >= 2147483647 || reversed < -2147483647) {
    return 0;
  } else {
    return reversed;
  }
}

reverseInteger(-321)