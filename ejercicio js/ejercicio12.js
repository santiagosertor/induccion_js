async function asil() {
    let promise = new Promise((resolve,reject)=>{
        setTimeout(() => resolve("operacion completa"), 1000)
    });

    let result = await promise;
    alert(result)
}

asil();