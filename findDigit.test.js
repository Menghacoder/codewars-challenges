const {findDigit} = require('./findDigit')
describe("this function is to return the nth digit of num (counting from right to left).",()=>{
    test("findDigit",()=>{
        expect(findDigit(4315,0)).toBe(-1)
        expect(findDigit(315,4)).toBe(0)
        expect(findDigit(5673,4)).toBe(5)
        expect(findDigit(9892,2)).toBe(9)
        expect(findDigit(7830,2)).toBe(3)
        expect(findDigit(-2825,3)).toBe(8);
        expect(findDigit(24,-8)).toBe(-1);
        expect(findDigit(-456,4)).toBe(0);

        
    })
})