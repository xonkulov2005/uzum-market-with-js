import { fetData } from "./fetchData.js";
import { showProduct } from "./updateUI.js";

const querySelector = window.location.search;
const id = new URLSearchParams(queryString).get("id");

fetData("https://dummyjson.com/product/" + id)
  .then((product) => {
    console.log(product);
  })
  .catch((error) => {
    console.log(error);
  });
