// Realiza una llamada a un archivo JSON local y muestra los datos en la consola

// Utilizamos fetch() para obtener el archivo JSON
fetch("ejercicio15.json") 
  .then(response => {
    // Verificamos si la respuesta es correcta (status 200)
    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo JSON"); // En caso de error, lanzamos una excepción
    }
    return response.json(); // Convertimos la respuesta a formato JSON
  })
  .then(data => {
    console.log("Datos obtenidos:", data); // Mostramos los datos obtenidos en la consola
  })
  .catch(error => {
    console.error("Error al cargar JSON:", error); // Capturamos y mostramos errores en caso de fallo
  });