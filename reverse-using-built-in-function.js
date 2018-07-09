// The intent of this file is to reverse
// the string using built in functions.
const reverse = (str) => {
  const splitString = str.split('');
  const reverseArray = splitString.reverse();
  return reverseArray.join('');
};

module.exports = reverse;
