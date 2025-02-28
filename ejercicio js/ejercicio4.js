
function filter (array,callback){
    arraynew=[];
    for (let i = 0; i < array.length; i++) {
        arraynew.push(callback(array[i]))
        
    }
    return arraynew;
}

let array=[13,54,32,12,10,23,42,2];
let mayor= filter(array,function(n){

    if (n>30) {
        return n;
    }else console.log("los numeros no corresponde ");
})

console.log(mayor);
