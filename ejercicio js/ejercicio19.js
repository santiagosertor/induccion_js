// Crear tres Promises, algunas resueltas y otras rechazadas
let promesa1 = new Promise(resolve => setTimeout(() => resolve("Promesa 1 completada"), 1000));
let promesa2 = new Promise((_, reject) => setTimeout(() => reject("Promesa 2 falló"), 2000));
let promesa3 = new Promise(resolve => setTimeout(() => resolve("Promesa 3 completada"), 3000));

// Usar Promise.allSettled() para manejar todas las promesas sin importar si fallan o se completan
Promise.allSettled([promesa1, promesa2, promesa3])
  .then(resultados => {
    console.log(" Estado de todas las promesas:");
    console.log(resultados); // Muestra el estado de cada promesa
  });