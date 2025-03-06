import { fetchData } from "./fetchData.js";
import { showProduct } from "./updateUI.js";
import "./dark-mode.js";

const queryString = window.location.search;
const id = new URLSearchParams(queryString).get("id");

fetchData(`https://dummyjson.com/product/${id}`)
  .then((product) => {
    console.log(product);
    displayProduct(product);
  })
  .catch((error) => {
    console.log(error);
  });

function displayProduct(product) {
  document.title = product.title;
  const container = document.createElement("div");
  container.className = "main-container py-8";

  container.innerHTML = `
  <div class="grid gap-8 md:grid-cols-2 alert alert-info alert-outline">
    <div class="carousel rounded-box">
      ${product.images
        .map(
          (img) => `
          <div class="carousel-item w-full">
            <img src="${img}" class=" object-cover" alt="${product.title}" />
          </div>
        `,
        )
        .join("")}
    </div>

    <div class="space-y-4">
      <h1 class="text-4xl font-bold">${product.title}</h1>
      <div class="badge badge-secondary">${product.brand}</div>
      <p class="text-2xl">$${product.price}</p>
      <p class="text-lg">${product.description}</p>
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-star text-yellow-400"></i>
        <span>${product.rating}/5</span>
      </div>
      <button class="btn btn-primary">
        <i class="fa-solid fa-cart-plus"></i>
        Savatga qo'shish
      </button>
    </div>
  </div>
`;
  document.body.appendChild(container);
}
