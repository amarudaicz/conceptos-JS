// Try Cacth
//Sirve para correr codigo aunque tengas un error en el medio, es decir FUERZA EL CODIGO a correr y te marca los errores

//EJEMPLO
//tenemos 2 variables
const numero1=20;
const numero3=30;

//console.log(numero1)
//console.log(numero2)//El flujo de programa se ejecuta hasta aca porque la variable numero2 no esta definida
//console.log(numero3)

//SI APLICAMOS LA ESTRUCTURA tryCacth el codigo se ejecuta de todas maneras y muestra el error
console.log(numero1)

try {//lo que le decimos aca es intenta hacer esto aunque haya un error y continua el flujo
    console.log(numero2)
} catch (error) {
    console.log(error)
    
}
console.log(numero3)