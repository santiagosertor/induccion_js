function every (array,callback){
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return true;
        }
        
    }
    return false;
}

let array=[22,1,2,4,5,6,,8,9,10,12];
let menor=every(array,function(n){
    if (n>0) {
        return true;
    }
})

alert(menor)