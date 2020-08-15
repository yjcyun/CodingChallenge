/*
 find the area of a polygon for a given n.

 For n = 2, the output should be
shapeArea(n) = 5;
For n = 3, the output should be
shapeArea(n) = 13.

n=2
 *
***
 *
*/

function shapeArea(n) {
  let area = 1
  for (let i = 1; i <= n; i++) {
    area += (i - 1) * 4
    console.log(i);
  }
  return area;
}

shapeArea(2)