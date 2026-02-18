const productList = document.getElementById("product-list");

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    data.forEach(product => {
      const col = document.createElement("div");
      col.className = "col-md-3 mb-4";

      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${product.image}" class="card-img-top p-3">
          <div class="card-body">
            <h6 class="card-title">${product.title}</h6>
            <p class="text-success fw-bold">$${product.price}</p>
          </div>
        </div>
      `;

      productList.appendChild(col);
    });
  });
