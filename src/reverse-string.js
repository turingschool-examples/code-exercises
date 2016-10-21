module.exports = (string) => {
  // THIS EXAMPLE USES AN ARRAY
  // var reverseString = string.split('').reverse().join('');
  // return reverseString;

  // THIS EXAMPLE TAKES A STRING AND RETURNS A STRING, W/OUT AN ARRAY
  let result = '';
  // START AT THE END OF THE STRING LENGTH AND START FROM THE END
  for(let i=string.length-1; i>=0; i--) {
    result += string[i];
  }
  return result;
};
