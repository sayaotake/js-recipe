const imageElement = document.getElementById("dog-image")
const button = document.getElementById("button")



button.onclick = function(){
// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breed/affenpinscher/images/random")
  .then((res) => {
    return res.json() // 結果を json として読み込んで、次の then に渡す
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })
}