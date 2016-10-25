// output is like reduce()
const flatten = (array, output=[]) => {
  for(let e of array) {
    Array.isArray(e) ? flatten(e, output) : output.push(e);
  }
  return output;
};

module.exports = flatten;

// RECURSION
// function that calls itself. Great with dealing wiht tree structures.
// Continues to traverse down the tree
// Example: factorial 5! equivalent to 5*4*3*2*1=120
// function factorial(n){
//   if(n<=1) {
//     return 1;
//   }
//   return n*factorial(n-1);
// }
//
// factorial(5);
// 120
