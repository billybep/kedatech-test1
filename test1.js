/**
 * 1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping,
 * dimana jika angka tersebut habis dibagi 3 cetak "fish"
 * jika habis dibagi 5 cetak "bash"
 * dan jika habis dibagi 15 cetak "fish bash",
 * cetak cukup salah satu dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.
 */

const fishBash = (num) => {
  let result = false

  // Jika input lebih kecil dari 0, End function return false
  if (num < 0) {
    console.log('Value should be greater than zero')
    return result;
  }

  // Jika Input === number, Process sesuai soal
  if (typeof num === 'number' && !Number.isNaN(num)) {

    // cek setiap perulangan
    for ( let i = 1 ; i <= num ; i++) {
      if (i % 15 === 0) console.log('fish bash')
      else if (i % 3 === 0) console.log('fish')
      else if (i % 5 === 0) console.log('bash')
      else console.log(i)
    }

    result = true;
  }
  
  // Input !== number -> show error message, end fn
  else {
    console.log('Value is NOT a number')
    result = false
  }

  return result
}

// .......... Execute Fn ..........
fishBash(15)
fishBash(NaN)
fishBash('STRING')
fishBash({})
fishBash([])
fishBash(-15)

module.exports = fishBash;
