 // 引数 number を受け取る関数

// eslint-disable-next-line no-unused-vars
const genkiFunction = function(number) {
    // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
    for (let n = 1; n <= number; n++) {
      if (n % 3 === 0) {
        console.log(`${n}!!!!!!!`)
      } else {
        console.log(n)
      }
    }
  }