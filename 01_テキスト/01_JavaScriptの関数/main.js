// 練習問題 １
// eslint-disable-next-line no-unused-vars
const plus1 = function (x) {
  return x + 1
}
// 関数名:plus1
// 引数:x
// 返り値:x + 1

// 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...
// eslint-disable-next-line no-unused-vars
const f1 = function (n) {
  	return 3 * n + 1
  }

// f2: 1, 10, 100, 1000, 10000, ...
// eslint-disable-next-line no-unused-vars
const f2 = function (n) {
  return 10 ** n
}
// f3: 2, 14, 107, 1010, 10013, ...
// eslint-disable-next-line no-unused-vars
const f3 = function (n){
  return  f1(n) + f2(n)
}

// 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply を作成して正しく動くかテストしてください。
// eslint-disable-next-line no-unused-vars
const multiply = function (x, y){
  return x * y
}

// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound を作成して正しく動くかテストしてください。
// eslint-disable-next-line no-unused-vars
const plusRound = function(x, y){
  return Math.round(x + y)
}

const niceButton = document.getElementById("nice-button");

niceButton.onclick = function () {
console.log("こんにちは");
};

