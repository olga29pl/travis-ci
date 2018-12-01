const squareNumbers = (arr) => {
  const newArr = arr.filter(el => Math.sqrt(el) % 2 === 0);
  return newArr.length;
};
module.exports.squareNumbers = squareNumbers;
