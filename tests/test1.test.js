const fishBash = require('../test1')

// Testcase test 1
describe('Test input function argument with correct type', () => { 
  test('Input Number should run the fn without error', () => {
    expect(fishBash(15)).not.toBeNull()
    expect(fishBash(15)).toBeDefined()
  })

  test('Function should return true', () => {
    expect(fishBash(15)).toBeTruthy()
    expect(fishBash(15)).toBeDefined()
  })
})

describe('Test function input with wrong type', () => { 
  test('Input NaN should return false', () => {
    expect(fishBash(NaN)).toBeFalsy()
    expect(fishBash(NaN)).toBeDefined()
  })

  test('Input number less then zero, should return false', () => {
    expect(fishBash(-1)).toBeFalsy()
    expect(fishBash(-15)).toBeDefined()
  })

  test('Input type !== number should return false', () => {
    expect(fishBash('WRONG TYPE INPUT')).toBeFalsy()
    expect(fishBash('WRONG TYPE INPUT')).toBeDefined()
    expect(fishBash({})).toBeFalsy()
    expect(fishBash([])).toBeFalsy()
  })
})
