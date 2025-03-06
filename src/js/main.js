import "./dark-mode.js";
import { fetchData } from "./fetchData.js";
import { showCards } from "./updateUI.js";

fetchData("https://dummyjson.com/products?limit=40")
  .then((data) => {
    showCards(data);
  })
  .catch((error) => {
    console.log(error);
  });
