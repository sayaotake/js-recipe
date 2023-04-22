const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  taxt: "この星の名前は何でしょう？",
  image: "maruoka.png",
  choices: [
    {
      text: "姫路城",
      feedback:
        "残念！",
    },
    {
      text: "大阪城",
      feedback: "正解！",
    },
    {
      text: "首里城",
      feedback: "正解！！",
    },
    {
        text: "名古屋城",
        feedback: "間違いない！",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function() {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

const container = document.getElementById("choices-container")
const button0 = document.createElement("button")
const button1 = document.createElement("button")
const button2 = document.createElement("button")
const button3 = document.createElement("button")
button0.textContent = quiz.choices[0].text
button1.textContent = quiz.choices[1].text
button2.textContent = quiz.choices[2].text
button3.textContent = quiz.choices[3].text


container.append(button0)
container.append(button1)
container.append(button2)
container.append(button3)

// choiceNumber番目の選択肢を選択
const choose = function(choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

button0.onclick = function() {
  // 0 番目の選択肢を選択
  choose(0)
}
button1.onclick = function() {
  // 1 番目の選択肢を選択
  choose(1)
}
button2.onclick = function() {
  // 2 番目の選択肢を選択
  choose(2)
}
button3.onclick = function() {
    // 2 番目の選択肢を選択
    choose(3)
  }

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()