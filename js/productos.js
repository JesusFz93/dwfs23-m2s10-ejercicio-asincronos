const cuerpo_productos = document.getElementById("cuerpo_productos");

const mostrarProductos = async () => {
  const respuesta = await fetch("https://fakestoreapi.com/products");
  const products = await respuesta.json();
  //   console.log(products);

  cuerpo_productos.innerHTML = "";

  products.forEach((product) => {
    cuerpo_productos.innerHTML += `
        <div class="col">
            <div class="card h-100">
            <img
                src="${product.image}"
                class="card-img-top"
                alt=${product.title}
            />
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">
                ${product.description}
                </p>
            </div>
            </div>
        </div>
    `;
  });
};

window.addEventListener("load", mostrarProductos);
