let promesa1 = new Promise(resolve => setTimeout(() => resolve("Promesa 1 completada"), 1000));
let promesa2 = new Promise(resolve => setTimeout(() => resolve("Promesa 2 completada"), 2000));
let promesa3 = new Promise(resolve => setTimeout(() => resolve("Promesa 3 completada"), 3000));

// Usar Promise.all() para esperar que todas se resuelvan
Promise.all([promesa1, promesa2, promesa3])
  .then(resultados => {
    console.log(" Todas las promesas se han completado:");
    console.log(resultados); // Muestra un array con los resultados de cada promesa
  })
  .catch(error => console.error("Ocurrió un error:", error));