// const despide = () => {
//   console.log("adios");
// };

// const saluda = (despide) => {
//   setTimeout(() => {
//     console.log("Hola");
//     despide();
//   }, 2000);
// };

// saluda(despide);

const nombre = (name, nombreMayusculas) => {
  console.log(name);
  nombreMayusculas(name);
};

const nombreMayusculas = (name) => {
  console.log("Hola " + name.toUpperCase());
};

nombre("Jesus", nombreMayusculas);

// const array = [1, 2, 3];

// const imprimeArreglo = (numero) => {
//   console.log(numero);
// };

// array.forEach(imprimeArreglo);

// const funcion1 = (funcion2) => {
//   console.log("funcion1");
//   funcion2();
// };

// const funcion2 = () => {
//   console.log("funcion2");
// };

// funcion1(funcion2);
