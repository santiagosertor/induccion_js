// Función asincrónica para obtener y manipular datos JSON
async function obtenerDatos() {
    try {
      //  Hacer la solicitud al archivo JSON local
      let response = await fetch("ejercicio17.json");
  
      //  Verificar si la respuesta es correcta
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
  
      //  Convertir la respuesta en formato JSON
      let datos = await response.json();
  
      //  Manipular los datos: Filtrar personas mayores de 30 años
      let mayoresDe30 = datos.filter(persona => persona.edad > 30);
  
      //  Mostrar los resultados en la consola
      console.log("Personas mayores de 30 años:", mayoresDe30);
  
    } catch (error) {
      // Capturar y mostrar errores en caso de fallo
      console.error("Error:", error);
    }
  }
  
  // Llamar a la función asincrónica
  obtenerDatos();
  