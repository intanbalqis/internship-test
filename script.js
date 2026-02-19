const elektronik = document.getElementById("elektronik");
const fashion = document.getElementById("fashion");
const aksesoris = document.getElementById("aksesoris");

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {

    data.forEach(product => {

      const card = `
        <div class="col-md-3 mb-4">
          <div class="card h-100 shadow-sm">
            <img src="${product.image}" class="card-img-top p-3">
            <div class="card-body">
              <h6 class="card-title">${product.title}</h6>
              <p class="text-success fw-bold">$${product.price}</p>
            </div>
          </div>
        </div>
      `;

      // FILTER KATEGORI
      if (product.category === "electronics") {
        elektronik.innerHTML += card;

      } else if (
        product.category === "men's clothing" ||
        product.category === "women's clothing"
      ) {
        fashion.innerHTML += card;

      } else {
        aksesoris.innerHTML += card;
      }

    });

  });
