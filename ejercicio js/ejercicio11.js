function intPromise(numero) {
    return new Promise(function(resolve,rej) { //hacemos una promesa con una funcion de resolver
      resolve(numero); // resolve el parametro asignado en la funcion que es numero
    })
  }
  
  let data=intPromise("promesa resulta").then(function(resultado) { // ponemos los datos dela funcion en el que va mostrar el mensaje
      console.log(result); // imprime "la proimesa resulta";
      return resultado; //returna el resultado de la funcion then
  });                   