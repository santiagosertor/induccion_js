// Realizamos una llamada al archivo JSON local usando fetch()
fetch("ejercicio16.json") 
  .then(response => {
    // Verificamos si la respuesta es correcta (código 200)
    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo JSON"); // En caso de error, lanzamos una excepción
    }
    return response.json(); // Convertimos la respuesta en un objeto JavaScript (array de datos)
  })
  .then(data => {
    // Filtramos los datos para obtener solo los nombres que comiencen con "A"
    let filtrados = data.filter(persona => persona.nombre.startsWith("A"));

    // Mostramos los resultados filtrados en la consola
    console.log("Personas con nombre que empieza con 'A':", filtrados);
  })
  .catch(error => {
    // Capturamos y mostramos cualquier error que ocurra durante la solicitud
    console.error("Error al cargar JSON:", error);
  });
