import "./dark-mode.js";

const plusBtns = document.querySelectorAll(".score-btn-plus");
const minusBtns = document.querySelectorAll(".score-btn-minus");
const scores = document.querySelectorAll(".score");
const priceWithDiscounts = document.querySelectorAll(".price-with-discount");
const prices = document.querySelectorAll(".price");

plusBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let currentScore = parseInt(scores[index].textContent);
    let basePrice = parseFloat(prices[index].getAttribute("data-base"));
    let baseDiscountPrice = parseFloat(
      priceWithDiscounts[index].getAttribute("data-base"),
    );

    currentScore++;
    scores[index].textContent = currentScore;

    prices[index].textContent = `$${basePrice * currentScore}`;
    priceWithDiscounts[index].textContent =
      `$${baseDiscountPrice * currentScore}`;
  });
});

minusBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let currentScore = parseInt(scores[index].textContent);
    let basePrice = parseFloat(prices[index].getAttribute("data-base"));
    let baseDiscountPrice = parseFloat(
      priceWithDiscounts[index].getAttribute("data-base"),
    );

    if (currentScore > 0) {
      currentScore--;
      scores[index].textContent = currentScore;

      prices[index].textContent = `$${basePrice * currentScore}`;
      priceWithDiscounts[index].textContent =
        `$${baseDiscountPrice * currentScore}`;
    }
  });
});
