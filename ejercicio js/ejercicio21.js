// Función asincrónica para obtener datos desde un archivo JSON
async function obtenerDatos() {
    try {
      //  Hacer la solicitud al archivo JSON
      let response = await fetch("datos.json");
  
      //  Verificar si la respuesta es correcta (por ejemplo, si el archivo no existe o hay un problema de conexión)
      if (!response.ok) {
        throw new Error(`Error al cargar el archivo JSON: ${response.status} ${response.statusText}`);
      }
  
      //  Convertir la respuesta en JSON
      let datos = await response.json();
  
      //  Mostrar los datos en la consola
      console.log(" Datos obtenidos:", datos);
  
    } catch (error) {
      // Capturar errores y mostrar un mensaje en la consola
      console.error(" Ocurrió un error:", error.message);
    }
  }
  
  // Llamar a la función asincrónica
  obtenerDatos();
  