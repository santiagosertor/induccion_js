// Simula una función asincrónica que procesa un elemento con retraso
async function procesarElemento(elemento) {
    return new Promise(resolve => 
      setTimeout(() => {
        console.log(`Procesado: ${elemento}`);
        resolve(`Resultado de ${elemento}`);
      }, 1000) // Simula una espera de 1 segundo por elemento
    );
  }
  
  // Función asincrónica que procesa la lista en orden
  async function procesarLista(lista) {
    for (let elemento of lista) {
      await procesarElemento(elemento); // Espera que termine antes de continuar con el siguiente
    }
    console.log(" Todos los elementos han sido procesados.");
  }
  
  // Lista de elementos a procesar
  let elementos = [" Manzana", "Zanahoria", " Uva", "Sandía"];
  
  // Llamar a la función para procesar la lista
  procesarLista(elementos);
  