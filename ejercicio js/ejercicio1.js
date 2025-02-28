
let desde=1;
let hasta =parseInt(prompt("ingresar el nuemro de hasta"))
const ImprimirNumeros=(desde,hasta)=>{
   let interval=setInterval(() => {
        for (let i = desde; i < hasta; i++) {
            alert(i)
            
        }
        clearInterval(interval) //usamos el clearinterval para que finalize el nuestro proceso de setinterval para evitar que se reincie y siga procesando
    }, 1000);

}






