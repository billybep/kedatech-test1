/**
 * 2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil
 * dengan manual tanpa fungsi bawaan javascript,
 */

const array1 = [
  9, 8, 3,
  1, 7, 5,
  4, 2, 6,
]

// Smallest to Largest
const manualSortAtoZ = (arr) => {
  // If input !== Array || Empty array -> show error message
  const errorMsg = 'Wrong data type'
  if (!Array.isArray(arr) || !arr.length) return errorMsg;

  for ( let i=0 ; i<arr.length-1 ; i++ ) {
    // set initial minimum value
    let minimumNum = i
    for ( let j=i+1 ; j<arr.length ; j++ ) {
      // compare with initial value
      if ( arr[j] < arr[minimumNum] ) {
        minimumNum = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[minimumNum]
    arr[minimumNum] = temp
  }
  return arr
}

// Largest to Smallest
const manualSortZtoA = (arr) => {
  // If input !== Array || Empty array -> show error message
  const errorMsg = 'Wrong data type'
  if (!Array.isArray(arr) || !arr.length) return errorMsg;

  for ( let i=0 ; i<arr.length-1 ; i++ ) {
    // set initial minimum value
    let maximumNum = i
    for ( let j=i+1 ; j<arr.length ; j++ ) {
      // compare with initial value
      if ( arr[j] > arr[maximumNum] ) {
        maximumNum = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[maximumNum]
    arr[maximumNum] = temp
  }
  return arr
}

// .......... Execute Fn ..........
console.log(manualSortAtoZ(array1));  // expect [1, 2, 3, ... , 8, 9]
console.log(manualSortZtoA(array1));  // expect [9, 8, 7, ... , 2, 1]

module.exports = {
  manualSortAtoZ,
  manualSortZtoA
}