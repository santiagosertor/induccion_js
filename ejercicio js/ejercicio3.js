function map (array, callback){
    arraynuevo=[];
    for (let i = 0; i < array.length; i++) {
        arraynuevo.push(callback(array[i]))
    }
    return arraynuevo;
}

