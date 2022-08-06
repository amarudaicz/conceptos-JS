//Promises
//un promises refleja un valor que podra estar disponible en un futuro, ahora o nunca

//Estructura de un Promise
//cuando se ejecuta un Promise se pasan 2 valores automaticamente uno es resolve y el otro reject
//resolve y reject son funciones tambien
//resolve se va a ejecutar cuando el promise se cumpla y reject cuando no se cumpla 
const usuarioAutenticado = new Promise(function(resolve, reject){
    const auth = true;
    if (auth){ //Se ejecuta si auth=true
        resolve("usuario autenticado");//EL PROMISE SE CUMPLE
    }else{
        reject("No se pudo iniciar secion");//EL PROMISE NO SE CUMPLE
    }
});


console.log(usuarioAutenticado)


//en los promises existen 3 valores
//Pending: No se ha cumplido pero tampoco se ha rechazado
//Fulfilled: Ya se cumplio
//Rejected : se ha rechazado o no se pudo cumplir


//COMO ACCEDER A LOS VALORES DEL PROMISE
//ACCEDEMOS CON .then 
usuarioAutenticado.then(function(resultado){//Esta funcion seria el resolve del promise, es decir si se cumple el promise entonces haz esto
    console.log(resultado)
    })
    .catch(function(error){//Y esta funcion seria el reject del promise
        console.log(error)
    });

