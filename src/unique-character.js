function uniqueCharacter(string) {
  let stringArray= string.toLowerCase().replace(/[\s\d]+/g, '').split('').sort();
  // let stringArray = [...string.toLowerCase().replace(/[\s\d]+/g, '').sort()];
  // spread is essentially doing the split('')
  for(var i=0; i<stringArray.length; i++) {
    if(stringArray[i] === stringArray[i+1]) {
      return false;
    } else return true;
  }
}

module.exports = uniqueCharacter;
