const form = document.querySelector("#form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const products = document.querySelector("#products");
const inputPics = document.querySelector(".pics")
const addProduct = (e) => {
  e.preventDefault();
  if (title.value == "" || price.value == "") {
    alert("اطاعات محصول را وارد کنید");
    return;
  }

  const productItem = document.createElement("div");
  const images = document.createElement('img');
  
  const productInfo = document.createTextNode(
    ` title is : ${title.value} price is : ${price.value} Rial `
  );
  productItem.classList.add("card" ,"col-3")
  products.appendChild(productItem);
  productItem.appendChild(productInfo);
  productItem.appendChild(link)
  productItem.appendChild(images)
  images.src = `${inputPics.value}`
  title.value = "";
  price.value = "";
};

form.addEventListener("submit", addProduct);
