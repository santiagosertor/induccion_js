// Objeto base
let usuario = { nombre: "", edad: 0, email: "" };

// Proxy con validaciones manuales
let proxyUsuario = new Proxy(usuario, {
  set(obj, prop, valor) {
    valor = valor.trim(); // Quitar espacios en blanco al inicio y al final

    // Validar edad (debe ser un número)
    if (prop === "edad") {
      let esNumero = true;
      for (let i = 0; i < valor.length; i++) {
        if (valor[i] < "0" || valor[i] > "9") {
          esNumero = false;
          break;
        }
      }
      if (!esNumero) {
        console.error(`Error: "${prop}" debe ser un número.`);
        return false;
      }
    }

    // Validar nombre (solo letras, sin números ni símbolos)
    if (prop === "nombre") {
      let esLetra = true;
      for (let i = 0; i < valor.length; i++) {
        let letra = valor[i];
        if (!(letra >= "A" && letra <= "Z") && !(letra >= "a" && letra <= "z")) {
          esLetra = false;
          break;
        }
      }
      if (!esLetra) {
        console.error(`Error: "${prop}" solo puede contener letras.`);
        return false;
      }
    }

    // Validar email (debe contener "@")
    let tieneArroba = false;
    if (prop === "email") {
      for (let i = 0; i < valor.length; i++) {
        if (valor[i] === "@") {
          tieneArroba = true;
          break;
        }
      }
      if (!tieneArroba) {
        console.error(`Error: "${prop}" debe ser un correo válido.`);
        return false;
      }
    }

    obj[prop] = valor; // Asignar si pasa la validación
    return true;
  }
});

// **Pruebas**
proxyUsuario.nombre = "Juan";  //  Correcto
proxyUsuario.nombre = "Juan123";  // Error: "nombre" solo puede contener letras.

proxyUsuario.edad = "25";  // Correcto
proxyUsuario.edad = "abc"; // Error: "edad" debe ser un número.

proxyUsuario.email = "test@mail.com"; // Correcto
proxyUsuario.email = "testmail.com";  // Error: "email" debe ser un correo válido.
