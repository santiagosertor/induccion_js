let i=0; // declaramos la bariable i 

setTimeout(() => alert(i), 100); //poenmos el tiempo de la alerta en la varible i para cuando llegue a 100ms muestre resultado


for (let j = 0; j < 100000000; j++) { // el for hara el bucle repetidivo en el cual si j es mayor a 100000000 pues incremente la variable i
                                    //como se cumplio la condiocn el resultado sera el 1000000000
    i++
    
}

// ¿Cuándo se ejecutará la función programada y por qué se ejecutará?
// a) Después del bucle.
// b) Antes del bucle.
// c) Al comienzo del bucle.
// ¿Qué va a mostrar alert()?

//se ejecuta despues del bucle  se ejecuta cuando emepzia a leer el inicializador si la condcion se cumple
//poene el incremento del incializador y despues pone la operacion en marchar completando el cilo y volvera al mismo proceso

//la alerta da 10000000 por cumplir su condicon