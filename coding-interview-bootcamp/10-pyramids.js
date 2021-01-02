// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)   n=1 row=1
//       '#'
//   pyramid(2)   n=2 row=2
//       ' # '    c0r0  c1r0* c2r0
//       '###'    c0r1* c1r1* c2r1*

//   pyramid(3)   n=3 row=5 middle= 2
//       '--#--'  c0r0 c1r0 c2r0* c3r0 c4r0
//       '-###-' middle=2 row=1 col=0 -  middle-row > col     middle+row > col 
//                        row=1 col=1 #  middle-row === col middle+row > col
//                        row=1 col=2 #  middle-row > col   middle+row > col
//                        row=1 col=3 #  middle-row > col   middle+row === col
//                        row=1 col=4 -  middle-row > col   middle+row < col
//       '#####'


function pyramid(n) {

}