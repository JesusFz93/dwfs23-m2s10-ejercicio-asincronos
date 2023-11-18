// BACKEND
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let correcto = true;

    if (correcto) {
      resolve("Promesa resuelta");
    } else {
      reject("Promesa rechazada");
    }
  }, 1000);
});

// FRONTEND con async - await
const resolver = async () => {
  try {
    const respuesta = await fetch("https://fakestoreapi.com/products");
    const datos = await respuesta.json();
    // const respuesta = await promesa;
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
};

resolver();

// FRONTEND con then - catch
// promesa
//   .then((resultado) => {
//     console.log(resultado);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
