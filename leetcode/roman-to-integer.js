/* 
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
*/

function romanToInt(str) {
  const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let val = 0;

  // Peaked at the answer. TODO: REVIEW AGAIN
  for (let i = 0; i < str.length; i++) {//i=0 str[i]=I
    if (roman[str[i]] < roman[str[i + 1]]) { //roman[I]=1
      val -= roman[str[i]];
    } else {
      val += roman[str[i]];
    }
  }
  return val;
}