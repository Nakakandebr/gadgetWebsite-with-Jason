function fetchProducts() {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((collection) => {
        const returnedProduct = collection.products.slice(3, 9);
        getProductCards(returnedProduct);
      });
  }

function getProductCards(collection) {
    const productContainer = document.getElementById("products");
    for (const product of collection) {
      const specificProduct = document.createElement("div");
      specificProduct.classList.add("product-card");
      specificProduct.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.name}" />
        <h2>${product.title}</h2>
        <div class='productPrice'>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      `;
      productContainer.appendChild(specificProduct);
    }
  }
  
  fetchProducts();