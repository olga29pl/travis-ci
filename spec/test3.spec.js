describe('function squareNumbers', () => {
  const pythagoreanTriple = (n) => {
    let arr = [];
    for (let a = 1; a < n; a += 1) {
      for (let b = 1; b < n; b += 1) {
        for (let c = 1; c < n; c += 1) {
          if (c === Math.sqrt(a * a + b * b) && a < b && b < c) {
            arr = [...arr, [a, b, c]];
          }
        }
      }
    }
    return arr;
  };
  it('should return the amount of numbers,which is square of even number', () => {
    expect(pythagoreanTriple(15)).toEqual([[3, 4, 5], [5, 12, 13], [6, 8, 10]]);
  });
});
