const form = document.querySelector(".quizz-hp-form");
let resultsTable = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(document.querySelector('input[name="q1"]:checked').value);

  for (i = 1; i < 4; i++) {
    resultsTable.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }
  console.log(resultsTable);
  resultsTable = [];
});
