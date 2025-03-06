import "./dark-mode.js";

import { fetchData } from "./fetchData.js";
import { showCards } from "./updateUI.js";

fetchData("https://dummyjson.com/product")
  .then((data) => {
    showCards(data);
  })
  .catch((error) => {
    console.log(error);
  });
document.addEventListener("DOMContentLoaded", function () {
  const loaderWrapper = document.querySelector(".loader-wrapper");

  loaderWrapper.classList.remove("hidden");

  window.addEventListener("load", function () {
    setTimeout(() => {
      loaderWrapper.classList.add("hidden");
    }, 500);
  });
});
