function filter (array,callback){
    arraynew=[];
    for (let i = 0; i < array.length; i++) {
        arraynew.push(callback(array[i]))
        
    }
    return arraynew;
}

let array=[12,24,17,23,12,54,21,6,38];
let mayor= filter(array,function(n){

    if (n<30) {
        return true;
    } else return undefined;
})

console.log(mayor);