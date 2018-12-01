describe('function countNumbers', () => {
  const countNumbers = (arr) => {
    const newArr = arr.filter(el => el % 3 === 0 && el % 5 !== 0);
    return newArr.length;
  };
  it('should return the amount of numbers, which is divided by 3 and not divided by 5', () => {
    expect(countNumbers([1, 2, 3, 4])).toEqual(1);
  });
});
