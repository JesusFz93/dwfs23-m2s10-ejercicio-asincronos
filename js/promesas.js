// BACKEND
const resolver = new Promise((resolve, reject) => {
  setTimeout(() => {
    let correcto = true;

    if (correcto) {
      resolve("Promesa resuelta");
    } else {
      reject("Promesa rechazada");
    }
  }, 2000);
});

// FRONTEND
resolver
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Esto se ejecuta siempre");
  });
