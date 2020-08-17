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
//   c0r0* c1r0 c2r0 
//   c0r1* c1r1* c2r1
//   c0r3* c1r3* c2r3*

function steps(n) { //3
  for (let row = 0; row < n; row++) { // row=0
    let steps='';
    for (let col = 0; col < n; col++) {// col=0
      if (row >= col) {
        steps+='#';
      } else {
        steps+=' '
      }
    }
    console.log(steps);
  }
}
steps(3);