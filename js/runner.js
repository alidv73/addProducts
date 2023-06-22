const form = document.querySelector("#form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const products = document.querySelector("#products");
const addFile = document.querySelector(".file");
const addProduct = (e) => {
  e.preventDefault();
  if (title.value == "" || price.value == "") {
    alert("اطاعات محصول را وارد کنید");
    return;
  }
  const productItem = document.createElement("li");
  const productInfo = document.createTextNode(` title is :${title.value} price is : ${price.value} Rial `);
  products.appendChild(productItem);

  productItem.appendChild(productInfo);
  title.value = "";
  price.value = "";
};

form.addEventListener("submit", addProduct);
