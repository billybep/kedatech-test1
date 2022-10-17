/**
 * 3. Buatlah fungsi dengan input string jika string tersebut dibalik
 * dan tetap sama dengan string yang diinputkan maka return true jika tidak return false
 */

const palindromeChecker = (word) => {

  if (typeof word !== 'string') return 'Wrong Data Type'

  // convert to array
  const arrayWords = word.split('')

  // Reverse the array
  const reverseWords = arrayWords.reverse()

  // Convert to string
  const result = reverseWords.join('')

  // Check palindrome
  if (word.toLowerCase() === result.toLowerCase()) return true;
  return false;
}

// .......... Execute Fn ..........
console.log(palindromeChecker('Radar')) // Expect true
console.log(palindromeChecker('Salah')) // Expect false
console.log(palindromeChecker(12)) // Expect "Wrong Data Type"
console.log(palindromeChecker({})) // Expect "Wrong Data Type"
console.log(palindromeChecker([])) // Expect "Wrong Data Type"

module.exports = palindromeChecker
