const shapeArea = n => {
  let area = 0;
  for (let i = 1; i <= n; i++) {
    area += 4 * (i-1);
  }
  return area + 1;
}

// n 1 1
// n 2 (n-1)*4 +1  =5
// n 3 (n-1)*4 +(n-2)*4 + 1  =   = 13
// n 4 (n-1)*4 +(n-2)*4 +(n-3)*4 + 1        =25
// n 4  4(n-1)