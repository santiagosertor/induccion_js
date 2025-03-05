let errorneo = new Promise(function(resolver,reject){
    setTimeout(() => reject(new Error("Error:promesa rechazada")),2000);
});

Promise.catch(alert)