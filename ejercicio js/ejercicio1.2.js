let desde=0;
let hasta =parseInt(prompt("ingresar el nuemro de hasta"))
const ImprimirNumeros=(desde,hasta)=>{
    for (let i=desde;i<=hasta;i++) {
         setTimeout(function(){console.log(hasta);}, 1000 + (3000 * hasta));
         alert(i);
        };
        
     }

console.log(ImprimirNumeros(desde,hasta));