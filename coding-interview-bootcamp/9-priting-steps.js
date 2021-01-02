// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#---'
//        c0r0* c1r0 c2r0 c3r0
//       '##--'
//        c0r1* c1r1* c2r1 c3r1
//       '###-'
//        c0r2* c1r2* c2r2* c3r2
//       '####'

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stairs = '';
    for (let col = 0; col < n; col++) {
      if (row >= col) {
        stairs += '#';
      } else {
        stairs += ' ';
      }
    }
    console.log(stairs);
  }
}