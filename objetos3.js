//Creamos un objetoç
//"use strict"; =correr js en modo estricto

const computadora = {
    teclado:"razer",
    monitor:"philips",
    mouse:"noga"
}

//computadora.parlantes="genius";


//como congelar un objeto para no permitir que se la agregen nuevas propiedades ni Elmminar ni modificarlos
Object.freeze(computadora)

Object.seal(computadora) //.seal no te permite agregar ni elminira PERO SI MODIFICAR LOS ELEMENTOS

console.log(computadora)
console.log(Object.isFrozen(computadora))


//COMO UNIR DOS OBJETOS sin modificar ninguno de los dos 

//Ejemplo
const caja = {
    carton:"1k",
    cinta:"1m"
} 
                    //Como unir estos dos objetos
const envoltorio={
    papel:"liso",

    moño:"verde"
}
const cajaCompleta={...caja, ...envoltorio} //Rest operator para unir objetos tiene la extructura de un objeto donde dentro de ponen los objetos que quieres unir con anteriormente 3 puntos y separado por COMA

console.log(caja)
console.log(cajaCompleta)





