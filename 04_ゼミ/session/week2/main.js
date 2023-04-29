const memoInput = document.getElementById('memo-input')
const addButton = document.getElementById("add-button")
const container = document.getElementById("memo-container")



addButton.onclick = function(){
    // カードを作成する
    const todo = createTodo(memoInput.value)
    container.append(todo)

    // 入力欄を空にする
    memoInput.value = ""
}

const createTodo = function(text) {
    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text
    container.append(todo)

    const deleteButton = document.createElement("button")
    deleteButton.className = "delete"
    deleteButton.textContent = "削除" 

    deleteButton.onclick = function() {
        // カードを削除する
        todo.remove()
    }
    todo.append(deleteButton)
    
    return todo
}
