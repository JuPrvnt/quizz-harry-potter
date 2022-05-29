const form = document.querySelector(".quizz-hp-form");
let resultsTable = [];
const responses = ["c", "a", "b"];
const emojis = ["🧙🏻‍♂️", "🔮", "🪄", "👻", "💀"];
const resultTitle = document.querySelector(".quizz-hp-results h3");
const resultText = document.querySelector(".quizz-hp-score");
const resultHelp = document.querySelector(".quizz-hp-help");
const allQuestions = document.querySelectorAll(".quizz-hp-block");
let checkTable = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(document.querySelector('input[name="q1"]:checked').value);

  for (i = 1; i < 4; i++) {
    resultsTable.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }
  // console.log(resultsTable);
  checkFunc(resultsTable);
  resultsTable = [];
});

function checkFunc(resTable) {
  for (let a = 0; a < 3; a++) {
    if (resTable[a] === responses[a]) {
      checkTable.push(true);
    } else {
      checkTable.push(false);
    }
  }
  console.log(checkTable);
  checkTable = [];
}
