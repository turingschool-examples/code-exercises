module.exports = (reverseString) => {

      // BUILT IN METHODS
    // return reverseString
    // .split('')
    // .reverse()
    // .join('');

      // big O notation O(n) would scale in a linear fashion
      // object allocation is the most expensive things for run time?

      //REVERSE FOR LOOP
    let result = '';

    for (let i = reverseString.length -1; i >= 0; i--) {
      result += reverseString[i];
    }
    return result;

      // much more proformate
      // can concat to a string with +=
      // for loop is going to be faster than forEach()
};
