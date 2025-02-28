function some (array,callback){
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
        
    }
    return true;
}

let array=[13,54,32,12,10,23,42,2];
let mayor= some(array,function(n){

    if (n>30) {
        return n;
    }
})

console.log(mayor);