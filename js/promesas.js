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

// BACKEND
const saludar = new Promise((resolve, reject) => {
  setTimeout(() => {
    let frutas = ["manzana", "zanahoria", "pera"];

    const mayusculas = frutas.map((fruta) => {
      return fruta.toUpperCase();
    });

    if (mayusculas.length > 0) {
      resolve(mayusculas);
    } else {
      reject("No se encontraron resultados");
    }
  }, 4000);
});

// FRONTEND
saludar
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });
