function anagram(string1, string2) {
  // var first = string1.split('').sort().join('').trim();
  // var second = string2.split('').sort().join('').trim();

  // if(first === second) {
  //   return true;
  // } else {
  //   return false;
  // }

  // SECOND WAY TO THIS WITHOUT ITERATION (MAKING A FUNCTION INSTEAD)
  let first = string1;
  let second = string2;

  let sort = (word) => {
    return word.split('').sort().join('').trim();
  };

  return sort(first) === sort(second);

  // const firstWordLetter = {};
  // const secondWordLetter = {};
  //
  // // start with 2 empty has maps
  // for(let letter of string1) {
  //   const l = firstWordLetter[letter];
  //   firstWordLetter[letter] = l ? l + 1 : 1;
  // }
  //
  // for(let letter of string2) {
  //   const l = secondWordLetter[letter];
  //   secondWordLetter[letter] = l ? l + 1 : 1;
  // }
  //
  // for(let letter of Object.keys(firstWordLetter)) {
  //   if(Object.keys(firstWordLetter).length !== Object.keys(secondWordLetter).length) {
  //     return false;
  //   }
  // }
  //
  // return true;
}

module.exports = anagram;
