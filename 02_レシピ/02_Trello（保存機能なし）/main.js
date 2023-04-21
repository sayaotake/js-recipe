const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

// 追加ボタンを押したときの処理を登録
addButton.onclick = function() {
  // カードを作成する
  const card = createCard(inputElement.value)
  container.append(card)

  // 入力欄を空にする
  inputElement.value = ""
}
// Enterキーを押したときの処理を登録
inputElement.onkeydown = function(e){
    if (e.key === 'Enter') {
        const card = createCard(inputElement.value)
        container.append(card)
    }
    inputElement.value = ""
}


// 共通の処理：テキストからカードを作成する
const createCard = function(text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function() {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}

const inputElement1 = document.getElementById("input-todo1")
const container1 = document.getElementById("cards-container1")
const addButton1 = document.getElementById("add-button1")

inputElement1.onkeydown = function(e){
    if (e.key === 'Enter') {
        const card1 = createCard(inputElement1.value)
        container1.append(card1)
    
    inputElement1.value = ""
    }
}

// 追加ボタンを押したときの処理を登録
addButton1.onclick = function() {
    // カードを作成する
    const card1 = createCard(inputElement1.value)
    container1.append(card1)
  
    // 入力欄を空にする
    inputElement1.value = ""
  }
  
  // 共通の処理：テキストからカードを作成する
  // eslint-disable-next-line no-unused-vars
  const createCard1 = function(text) {
    // カードの枠を作る
    const card1 = document.createElement("div")
    card1.className = "card"
  
    // テキストを表示する部分を作る
    const todo1 = document.createElement("div")
    todo1.className = "todo"
    todo1.textContent = text
    card1.append(todo1)
  
    // 削除ボタンを作る
    const deleteButton1 = document.createElement("div")
    deleteButton1.className = "delete"
  
    // 削除ボタンを押したときの処理を登録
    deleteButton1.onclick = function() {
      // カードを削除する
      card1.remove()
    }
    card1.append(deleteButton1)
  
    return card1
}