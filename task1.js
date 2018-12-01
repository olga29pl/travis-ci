const countNumbers = (arr) => {
  const newArr = arr.filter(el => el % 3 === 0 && el % 5 !== 0);
  return newArr.length;
};
module.exports.countNumbers = countNumbers;
