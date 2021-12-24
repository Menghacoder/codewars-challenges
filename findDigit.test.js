const {
    findDigit,
    inAscOrder,
    getMiddle,
    removeEveryOther,
    initializeNames
} = require('./findDigit')
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
describe("this function is return true if the numbers in the array are in ascending order.", ()=>{
    test("inAscOrder",()=>{
        expect(inAscOrder([])).toBe(0);
        expect(inAscOrder([1])).toBe(0);
        expect(inAscOrder([1,2])).toBe(true);
        expect(inAscOrder([2,1])).toBe(false);
        expect(inAscOrder([1,2,4,7,11])).toBe(true);
        expect(inAscOrder([1,2,2,7,6])).toBe(false);
    })
})
describe("this function is to return the middle character/s of the word.",()=>{
    test ("getMiddle",()=>{
        expect(getMiddle("")).toBe("");
        expect(getMiddle("aa")).toBe("");
        expect(getMiddle("aba")).toBe("b");
        expect(getMiddle("abcAabc")).toBe("A");
        expect(getMiddle("1239321")).toBe("9");
        expect(getMiddle("ftbrrftb")).toBe("rr");
        expect(getMiddle("menghacoderismenghacoder")).toBe("is");


    })
})

describe("function is to remove every second element from the array",()=>{
    test("removeEveryOther",()=>{
        expect(removeEveryOther([])).toBe(0)
        expect(removeEveryOther(["Hello"])).toBe(0)
        expect(removeEveryOther(["Hello","world"])).toEqual(["Hello"])
        expect(removeEveryOther(["One","Two","Three","Four","Five","Six"])).toEqual(["One","Three","Five"])
    })
})
describe.only("this function is to initialize the middle names (if there is any).",()=>{
    test("Initialize Names", ()=>{    
        expect(initializeNames('Dimitri')).toEqual('Dimitri')
        expect(initializeNames('Jack Ryan')).toEqual('Jack Ryan')
        expect(initializeNames('Lois Mary Lane')).toEqual('Lois M. Lane')
        expect(initializeNames('Lois Mary Lane')).toEqual('Lois M. Lane')
        expect(initializeNames('Alice Betty Catherine Davis')).toEqual('Alice B. C. Davis')


    })
})


