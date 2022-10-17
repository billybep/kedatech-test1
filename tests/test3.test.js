const palindromeChecker = require('../test3')

const word1 = 'Radar'

describe('Test input function argument with correct type', () => { 
  test('Input String should run the fn without error', () => {
    expect(palindromeChecker(word1)).not.toBeNull()
    expect(palindromeChecker(word1)).toBeDefined()
    expect(palindromeChecker(word1)).toBeTruthy()
  })

  test('Test input function argument with wrong data type', () => {
    expect(palindromeChecker([])).toMatch(/Wrong Data Type/)
    expect(palindromeChecker({})).toMatch(/Wrong Data Type/)
    expect(palindromeChecker(998877)).toMatch(/Wrong Data Type/)
  })
})
