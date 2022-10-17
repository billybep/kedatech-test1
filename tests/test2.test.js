const { manualSortAtoZ, manualSortZtoA } = require('../test2')

const arrTest = [
  9, 8, 3,
  1, 7, 5,
  4, 2, 6,
]

// Testcase test 2
describe('Function sort smallest to largest  ', () => {
  describe('Test input function argument with correct type', () => { 
    test('Input Number should run the fn without error', () => {
      expect(manualSortAtoZ(arrTest)).not.toBeNull()
      expect(manualSortAtoZ(arrTest)).toBeDefined()
      expect(manualSortAtoZ(arrTest)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
  
    test('Test input function argument with wrong data type', () => {
      expect(manualSortAtoZ([])).toMatch(/Wrong data type/)
      expect(manualSortAtoZ({})).toMatch(/Wrong data type/)
      expect(manualSortAtoZ('STRING')).toMatch(/Wrong data type/)
      expect(manualSortAtoZ(998877)).toMatch(/Wrong data type/)
    })
  })
})

describe('Function sort largest to smallest  ', () => {
  describe('Test input function argument with correct type', () => { 
    test('Input Number should run the fn without error', () => {
      expect(manualSortZtoA(arrTest)).not.toBeNull()
      expect(manualSortZtoA(arrTest)).toBeDefined()
      expect(manualSortZtoA(arrTest)).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1])
    })
  
    test('Test input function argument with wrong data type', () => {
      expect(manualSortZtoA([])).toMatch(/Wrong data type/)
      expect(manualSortZtoA({})).toMatch(/Wrong data type/)
      expect(manualSortZtoA('STRING')).toMatch(/Wrong data type/)
      expect(manualSortZtoA(998877)).toMatch(/Wrong data type/)
    })
  })
})
