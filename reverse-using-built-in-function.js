// The intent of this file is to reverse
// the string using built in functions.
const reverse = (str) => {
  const splitString = str.split('');

  const reverseArray = splitString.reverse();

  const joinArray = reverseArray.join('');

  return joinArray;
};

module.exports = reverse;
