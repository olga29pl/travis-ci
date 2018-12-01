describe("function squareNumbers", () =>{ 
    const squareNumbers = (arr) => {
        const newArr = arr.filter(el => Math.sqrt(el)%2 === 0);
       return newArr.length;
    }
    it("should return the amount of numbers,which is square of even number", () => { 
       expect(squareNumbers([1, 2, 3, 4])).toEqual(1); 
    }); 
 
 });