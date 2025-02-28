function every (array,callback){
    arraynew=[];
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
        
    }
    return true;
}

let array=[22,1,2,4,5,6,,8,9,10,12];
let menor=filter(array,function(n){
    if (n<0) {
        console.log("es verdadero se agrega al array");
        
    } else console.log("no se agregaron al array");
    
})