new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); 
  
  }).then(function(result) { 
  
    alert(result); // 1
    return result + 2;
  
  }).then(function(result) { 
  
    alert(result); // 3
    return result + 2;
  
  }).then(function(result) {
    alert(result); // 5
    return result + 2;
  
}).then(function(result) {
    alert(result); // 7
    alert("el resultado final es: " + result)
    return result + 2;
    
  
  });

