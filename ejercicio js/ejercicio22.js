// Objeto original
let persona = { nombre: "Juan", edad: 30 };

// Proxy con interceptores para lectura y escritura
let proxyPersona = new Proxy(persona, {
  get(obj, prop) {
    return prop in obj ? obj[prop] : "Propiedad no encontrada";
  },
  set(obj, prop, valor) {
    if (prop === "edad" && typeof valor !== "number") {
      console.error("La edad debe ser un número.");
      return false;
    }
    obj[prop] = valor;
    return true;
  }
});

// Usando el Proxy
console.log(proxyPersona.nombre); // "Juan"
console.log(proxyPersona.apellido); // "Propiedad no encontrada"
proxyPersona.edad = 35; // Se actualiza correctamente
proxyPersona.edad = "treinta"; // La edad debe ser un número.
