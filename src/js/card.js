import "./dark-mode.js";

const plusBtns = document.querySelectorAll(".score-btn-plus");
const minusBtns = document.querySelectorAll(".score-btn-minus");
const scores = document.querySelectorAll(".score");

plusBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let currentScore = parseInt(scores[index].textContent);
    scores[index].textContent = currentScore + 1;
  });
});

minusBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let currentScore = parseInt(scores[index].textContent);
    if (currentScore > 0) {
      scores[index].textContent = currentScore - 1;
    }
  });
});
