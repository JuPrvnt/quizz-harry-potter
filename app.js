const form = document.querySelector(".quizz-hp-form");
let resultsTable = [];
const responses = ["c", "a", "b", "a"];
const emojis = ["🧙🏻‍♂️", "🔮", "🪄", "👻", "💀"];
const resultTitle = document.querySelector(".quizz-hp-results h3");
const resultHelp = document.querySelector(".quizz-hp-help");
const resultScore = document.querySelector(".quizz-hp-score");
const allQuestions = document.querySelectorAll(".quizz-hp-block");
let checkTable = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(document.querySelector('input[name="q1"]:checked').value);

  for (i = 1; i < 5; i++) {
    resultsTable.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }
  // console.log(resultsTable);
  checkFunc(resultsTable);
  resultsTable = [];
});

function checkFunc(resTable) {
  for (let a = 0; a < 4; a++) {
    if (resTable[a] === responses[a]) {
      checkTable.push(true);
    } else {
      checkTable.push(false);
    }
  }
  // console.log(checkTable);
  displayResults(checkTable);
  colorsFunction(checkTable);
  checkTable = [];
}

function displayResults(tabToCheck) {
  const nbFalse = tabToCheck.filter((el) => el !== true).length;
  // console.log(nbFalse);

  switch (nbFalse) {
    case 0:
      resultTitle.innerText = `Bravo, tu es un vrai sorcier ${emojis[0]} !`;
      resultHelp.innerText = "";
      resultScore.innerText = "3/3";
      break;

    case 1:
      resultTitle.innerText = `Presque tout juste, tu es devin ? ${emojis[1]} !`;
      resultHelp.innerText = "Tu préfères avoir tout juste ?";
      resultScore.innerText = "2/3";
      break;

    case 2:
      resultTitle.innerText = `Un petit coup de baguette magique ?${emojis[2]} !`;
      resultHelp.innerText = "Peut-être que ça t'aidera...";
      resultScore.innerText = "1/3";
      break;

    case 3:
      resultTitle.innerText = `Aïe, tu as encore des choses à apprendre...${emojis[3]} !`;
      resultHelp.innerText = "Tu veux retenter ta chance ?";
      resultScore.innerText = "0/3";
      break;

    default:
      "Wops, une erreur est apparue comme par magie.";
  }
}

function colorsFunction(tabBoolean) {
  for (let c = 0; c < tabBoolean.length; c++) {
    if (tabBoolean[c] === true) {
      allQuestions[c].style.background = "lightgreen";
    } else {
      allQuestions[c].style.background = "#ffb8b8";
      allQuestions[c].classList.add("loose");

      setTimeout(() => {
        allQuestions[c].classList.remove("loose");
      }, 500);
    }
  }
}

allQuestions.forEach((item) => {
  item.addEventListener("click", () => {
    item.style.background = "white";
  });
});
