let i=0; //de claramos la variable i para iniciar de 0

setTimeout(()=> alert(i) , 100)//ponemos un tiempo en el que se demora en responder el programa al dar su resultado

for (let j = 0; j < 100000000; j++) { //con el ciclo for repetiremos el proceso con el valor de de i que lo va a incrementar
    i++; //imcrementa el valor hasta llegar al numero del ciclo for 
    
}

//en resumen lo que va a recorres es el tiempo en el que va mostrar el resultado ya que tenemos la variablei
//si vemos el siclo for repetira el numero hasta que sea menor que el numero de su condicion ,
//como a i le damos al final incremento incrementara hasta llegar las 10000000 en 100 ms.