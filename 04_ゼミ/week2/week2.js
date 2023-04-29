const countText = document.getElementById("countText")
const countButton = document.getElementById("countButton")
let count = 0

const dengenText = document.getElementById("dengenText")
const dengenButton = document.getElementById("dengenButton")
let dengen = false

countButton.onclick = function(){
    if (dengen) {
        count++
        countText.textContent = count
    }
}

// dengenButton.onclick = function(){
//     if (dengen) {
//         dengen = true
//         dengenText.textContent = "オン"
//     } else{
//         dengen = false
//         dengenText.textContent = "オフ"
//     }
// }

dengenButton.onclick = function(){
    dengen = !dengen
    dengenText.textContent = dengen ? "オン" : "オフ"
    count=0
}